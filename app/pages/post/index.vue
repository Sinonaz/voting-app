<script setup lang="ts">
  useSeoMeta({
    title: 'Create post',
    description: ''
  })

  definePageMeta({
    middleware: 'auth'
  })
</script>

<template>
  <h1>Create post</h1>
</template>

<style scoped></style>
