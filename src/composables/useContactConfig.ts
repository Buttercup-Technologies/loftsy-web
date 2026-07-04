import { computed } from 'vue'
import { siteConfig } from '@/config/site.config'

export function useContactConfig() {
  const contact = computed(() => siteConfig.contact)

  const hasEmail = computed(() => contact.value.email.trim().length > 0)
  const hasWhatsApp = computed(() => contact.value.whatsapp.trim().length > 0)
  const hasForm = computed(() => contact.value.form.enabled)

  const hasAnyChannel = computed(
    () => hasEmail.value || hasWhatsApp.value || hasForm.value,
  )

  const whatsappUrl = computed(() => {
    const number = contact.value.whatsapp.replace(/\D/g, '')
    return number ? `https://wa.me/${number}` : ''
  })

  const mailtoUrl = computed(() =>
    hasEmail.value ? `mailto:${contact.value.email}` : '',
  )

  return {
    contact,
    hasEmail,
    hasWhatsApp,
    hasForm,
    hasAnyChannel,
    whatsappUrl,
    mailtoUrl,
  }
}
