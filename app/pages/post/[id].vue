<script setup lang="ts">
  const route = useRoute()
  const config = useRuntimeConfig()
  const API_URL = config.public.apiUrl

  const { data: post } = await useFetch<PostInterface>(
    API_URL + '/posts/' + route.params.id
  )
</script>

<template>
  <div>
    <VoteCard v-if="post" :post />
  </div>
</template>

<style scoped></style>
