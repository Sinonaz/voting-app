<script setup lang="ts"></script>

<template>
  <div class="app">
    <SidePanel />

    <main class="app__main">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="less">
  .app {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 100px;
    height: 100%;
  }

  .app__main {
    padding: 35px;
    overflow: hidden;
  }
</style>
