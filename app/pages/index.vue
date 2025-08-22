<script setup lang="ts">
  const config = useRuntimeConfig()
  const API_URL = config.public.apiUrl

  const { data: postsData } = await useFetch<{ posts: PostInterface[] }>(
    API_URL + '/posts',
    {
      query: {
        page: 1,
        page_size: 10
      }
    }
  )
</script>

<template>
  <div class="vote-list">
    <VoteCard v-for="post in postsData?.posts" :key="post.id" :post />
  </div>
</template>

<style scoped></style>
