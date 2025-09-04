<script setup lang="ts">
  definePageMeta({
    middleware: 'auth'
  })

  const API_URL = useAPI()
  const authStore = useAuthStore()

  const title = ref<string | undefined>()
  const content = ref<string | undefined>()

  async function createPost(): Promise<void> {
    if (!title.value || !content.value) return

    await $fetch<PostInterface>(`${API_URL}/posts/create`, {
      method: 'POST',
      body: { title: title.value, content: content.value },
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })

    navigateTo({ name: 'index' })
  }
</script>

<template>
  <div class="flex gap-10px w-full h-full">
    <div class="flex flex-col flex-items-center shrink-0">
      <span
        class="w-34px h-34px rounded-full flex flex-items-center justify-center bg-[#F2F2F2] text-black"
        >+</span
      >
      <span class="w-1px h-full bg-[#E6E6E6]"></span>
    </div>
    <form
      class="flex flex-col gap-20px w-full h-full flex-items-center"
      @submit.prevent="createPost"
    >
      <div class="flex flex-col gap-20px w-full">
        <input
          v-model="title"
          type="text"
          placeholder="Тема"
          class="w-full outline-none"
          required
        />
        <textarea
          v-model="content"
          placeholder="Текст..."
          class="w-full h-full resize-none outline-none"
          required
        ></textarea>
      </div>

      <AppButton fit class="mt-a">Сохранить</AppButton>
    </form>
  </div>
</template>
