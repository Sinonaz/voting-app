<script setup lang="ts">
  const { type = 'text', placeholder = undefined } = defineProps<{
    type?: string
    placeholder?: string
  }>()

  const value = defineModel<string>()
</script>

<template>
  <div
    class="flex gap-10px flex-items-center py-9px px-14px b-rd-20px border border-[rgba(230,_230,_230,_0.8)] focus-within:border-black"
  >
    <slot name="icon" />
    <input
      v-model="value"
      :type
      :placeholder
      class="placeholder:text-black text-16px font-inherit outline-none"
    />
  </div>
</template>
