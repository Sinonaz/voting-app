<script setup lang="ts">
  const { label, checked = false } = defineProps<{
    label: string
    checked?: boolean
  }>()
</script>

<template>
  <button :style="{ color: checked ? 'black' : '' }">{{ label }}</button>
</template>

<style scoped lang="less">
  button {
    color: rgba(117, 117, 117, 1);
    font-weight: 300;
    font-family: inherit;
    font-size: 16px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }
</style>
