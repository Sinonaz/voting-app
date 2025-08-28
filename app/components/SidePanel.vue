<script setup lang="ts">
  const authStore = useAuthStore()
</script>

<template>
  <aside class="aside">
    <NuxtLink class="aside__home" to="/">
      <Icon name="mdi:home-variant" size="24px" />
    </NuxtLink>

    <img v-if="authStore.token" width="24px" height="24px" src="" alt="" />

    <NuxtLink v-if="!authStore.token" to="/auth">
      <Icon name="mdi:login-variant" size="24px" />
    </NuxtLink>
    <button
      v-else
      type="button"
      class="p-0 bg-none border-none cursor-pointer hover:text-red"
      @click="authStore.clearToken"
    >
      <Icon name="mdi:exit-run" size="24px" />
    </button>
  </aside>
</template>

<style scoped lang="less">
  .aside {
    display: flex;
    flex-direction: column;
    gap: 21px;
    width: 100%;
    padding: 42px 27px;
    border-right: 1px solid rgba(230, 230, 230, 1);
  }

  .aside__home {
    flex-grow: 1;
  }
</style>
