<script setup lang="ts"></script>

<template>
  <div class="vote-list">
    <VoteCard
      title="Добавить функцию голосования"
      text="Попробовать добавить в приложение функцию голосования, которая позволит определить, какая фича более полезна, а какая нет. После добавления поста появляется"
      :day-past="4"
      :likes="10"
      :dis-likes="1"
    />
  </div>
</template>

<style scoped></style>
