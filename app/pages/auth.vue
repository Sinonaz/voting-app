<script setup lang="ts">
  const authStore = useAuthStore()

  const email = ref<string | undefined>()
  const password = ref<string | undefined>()

  function login(): void {
    if (!email.value || !password.value) return

    authStore.login(email.value, password.value)

    if (authStore.token) {
      navigateTo({ name: 'index' })
    }
  }
</script>

<template>
  <div class="grid place-items-center h-full">
    <form class="flex flex-col gap-18px max-w-300px">
      <h1 class="fw-500 text-16px text-center m-0">Вход на платформу</h1>
      <AppInput v-model="email" placeholder="Email" type="email"></AppInput>
      <AppInput
        v-model="password"
        placeholder="Пароль"
        type="password"
      ></AppInput>
      <AppButton class="mt-10px" @click.stop.prevent="login"
        >Войти в аккаунт</AppButton
      >
    </form>
  </div>
</template>
