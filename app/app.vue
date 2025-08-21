<script setup lang="ts">
  import '~/assets/styles/app.less'
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped lang="less">
  .page-enter-active,
  .page-leave-active {
    transition:
      opacity 0.2s,
      transform 0.2s;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
</style>
