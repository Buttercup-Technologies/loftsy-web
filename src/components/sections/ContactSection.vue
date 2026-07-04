<script setup lang="ts">
import { reactive, ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import { useContactConfig } from '@/composables/useContactConfig'

const { hasEmail, hasWhatsApp, hasForm, hasAnyChannel, whatsappUrl, mailtoUrl, contact } =
  useContactConfig()

const formState = reactive({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

async function handleSubmit() {
  if (!hasForm.value) return

  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    const response = await fetch(contact.value.form.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    })

    if (!response.ok) {
      throw new Error('Request failed')
    }

    submitStatus.value = 'success'
    formState.name = ''
    formState.email = ''
    formState.message = ''
  } catch {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="border-t border-border py-24 md:py-32">
    <div class="mx-auto max-w-6xl px-6 md:px-8">
      <ScrollReveal>
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="font-serif text-3xl font-medium tracking-tight text-fg md:text-4xl">
            İletişim
          </h2>
          <p class="mt-4 text-base text-muted">
            Markan veya creator ağın için bizimle iletişime geç.
          </p>
        </div>

        <div v-if="hasAnyChannel" class="mx-auto mt-12 max-w-xl space-y-6">
          <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button v-if="hasEmail" :href="mailtoUrl" variant="primary">
              E-posta gönder
            </Button>
            <Button v-if="hasWhatsApp" :href="whatsappUrl" variant="secondary">
              WhatsApp
            </Button>
          </div>

          <form
            v-if="hasForm"
            class="mt-8 space-y-4 border border-border p-6 md:p-8"
            @submit.prevent="handleSubmit"
          >
            <div>
              <label for="name" class="mb-2 block text-sm text-muted">Ad Soyad</label>
              <input
                id="name"
                v-model="formState.name"
                type="text"
                required
                class="w-full border border-border bg-transparent px-4 py-3 text-fg outline-none transition-colors focus:border-fg"
              />
            </div>
            <div>
              <label for="email" class="mb-2 block text-sm text-muted">E-posta</label>
              <input
                id="email"
                v-model="formState.email"
                type="email"
                required
                class="w-full border border-border bg-transparent px-4 py-3 text-fg outline-none transition-colors focus:border-fg"
              />
            </div>
            <div>
              <label for="message" class="mb-2 block text-sm text-muted">Mesaj</label>
              <textarea
                id="message"
                v-model="formState.message"
                required
                rows="4"
                class="w-full resize-none border border-border bg-transparent px-4 py-3 text-fg outline-none transition-colors focus:border-fg"
              />
            </div>
            <Button type="submit" variant="primary" :disabled="isSubmitting">
              {{ isSubmitting ? 'Gönderiliyor...' : 'Mesaj gönder' }}
            </Button>
            <p v-if="submitStatus === 'success'" class="text-sm text-fg">
              Mesajınız alındı. En kısa sürede dönüş yapacağız.
            </p>
            <p v-if="submitStatus === 'error'" class="text-sm text-muted">
              Bir hata oluştu. Lütfen tekrar deneyin.
            </p>
          </form>
        </div>

        <p v-else class="mx-auto mt-12 max-w-md text-center text-sm text-muted">
          {{ contact.placeholderMessage }}
        </p>
      </ScrollReveal>
    </div>
  </section>
</template>
