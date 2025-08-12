<script setup lang="ts">
  const { fit = false } = defineProps<{ fit?: boolean }>()
</script>

<template>
  <button class="button" :class="{ 'button--fit': fit }">
    <slot />
  </button>
</template>

<style scoped lang="less">
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 11px;
    width: 100%;
    font-family: var(--font);
    font-weight: 500;
    font-size: 16px;
    line-height: 1;
    border-radius: 20px;
    background: #000;
    color: #fff;
    border: none;
    cursor: pointer;

    &--fit {
      width: fit-content;
    }

    &:is(:hover, :focus) {
      background: #fff;
      color: #000;
      box-shadow: inset 0 0 0 1px #000;
    }
  }
</style>
