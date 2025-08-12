<script setup lang="ts"></script>

<template>
  <aside class="aside">
    <NuxtLink class="aside__home" to="/">
      <Icon name="mdi:home-variant" size="24px" />
    </NuxtLink>

    <img v-if="false" width="24px" height="24px" src="" alt="" />

    <NuxtLink to="/auth">
      <Icon name="mdi:login-variant" size="24px" />
    </NuxtLink>
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
