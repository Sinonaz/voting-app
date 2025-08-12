<script setup lang="ts">
  import type { NuxtError } from '#app'

  const { error } = defineProps<{ error: NuxtError }>()
  const errorMessages = new Map<number, string>([
    [404, 'Страница не найдена, попробуйте перейти на главную страницу']
  ])

  function goHome() {
    navigateTo('/')
  }
</script>

<template>
  <section class="error">
    <div class="error__wrapper">
      <h2 class="error__title">{{ error.statusCode }}</h2>
      <p class="error__text">
        {{
          errorMessages.has(error.statusCode)
            ? errorMessages.get(error.statusCode)
            : error.statusMessage
        }}
      </p>
      <AppButton class="error__button" @click="goHome"> На главную </AppButton>
    </div>
  </section>
</template>

<style scoped lang="less">
  .error {
    display: grid;
    place-items: center;
    height: 100%;
    padding: 40px;
  }

  .error__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    gap: 24px;
    text-align: center;
  }

  .error__title {
    margin: 0;
    font-weight: 500;
    font-size: 120px;
    line-height: 1;
  }

  .error__text {
    margin: 0;
    font-weight: 300;
  }

  .error__button {
    max-width: 300px;
  }
</style>
