<script lang="ts" setup>
  const { isReverse } = defineProps<{ isReverse?: boolean }>()
</script>

<template>
  <button
    class="btn"
    :style="{ flexDirection: isReverse ? 'row-reverse' : 'row' }"
  >
    <slot name="text" />
    <span class="btn__icon">
      <slot name="icon" />
    </span>
  </button>
</template>

<style scoped lang="less">
  .btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0;
    background: none;
    border: none;
    font-family: inherit;
    font-size: 14px;
    color: black;
    cursor: pointer;

    &:is(:hover, :focus) {
      & .btn__icon {
        color: black;
      }
    }
  }

  .btn__icon {
    width: 17px;
    height: 17px;
    flex-wrap: nowrap;
    color: rgba(128, 128, 128, 1);
  }
</style>
