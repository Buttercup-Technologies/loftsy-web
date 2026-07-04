<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'ghost'

withDefaults(
  defineProps<{
    href?: string
    variant?: Variant
    type?: 'button' | 'submit'
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    type: 'button',
    disabled: false,
  },
)

const variantClasses: Record<Variant, string> = {
  primary:
    'border border-fg bg-fg text-bg hover:bg-transparent hover:text-fg',
  secondary:
    'border border-border bg-transparent text-fg hover:border-fg',
  ghost:
    'border border-transparent bg-transparent text-fg hover:border-border',
}
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : type"
    :disabled="href ? undefined : disabled"
    class="inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
    :class="variantClasses[variant]"
  >
    <slot />
  </component>
</template>
