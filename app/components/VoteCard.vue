<script lang="ts" setup>
  const { post } = defineProps<{ post: PostInterface }>()

  const emit = defineEmits<{ (e: 'voted'): void }>()

  const votingStore = useVotingStore()
  const route = useRoute()

  const dayPastText = computed<string>(() => {
    const publishedDate = new Date(post.published_at)
    const today = new Date()
    const diffTime = Math.abs(publishedDate.getTime() - today.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    return diffDays
      ? `${diffDays} ${useDeclansion(diffDays, ['день', 'дня', 'дней'])} назад`
      : 'сегодня'
  })
  const isCompact = computed<boolean>(() => {
    return route.name === 'index'
  })
</script>

<template>
  <div class="card">
    <div class="card__head">
      <div class="card__author">
        <img src="https://placehold.co/24" width="24" height="24" alt="" />
        PurpleSchool
      </div>
      <p class="card__date">{{ dayPastText }}</p>
    </div>
    <NuxtLink
      class="card__title"
      :to="{ name: 'post-id', params: { id: post.id } }"
      >{{ post.title }}</NuxtLink
    >
    <p class="card__text" :class="{ 'card__text--truncate': isCompact }">
      {{ post.content }}
    </p>
    <div class="card__footer">
      <div class="card__actions">
        <ActionBtn
          @click="
            () => {
              votingStore.like(post.id)
              emit('voted')
            }
          "
        >
          <template v-if="post.likes" #text>{{ post.likes }}</template>
          <template #icon>
            <Icon
              :name="
                votingStore.isVoted(post.id) === 'like'
                  ? 'mdi:thumb-up'
                  : 'mdi:thumb-up-outline'
              "
              size="18px"
            />
          </template>
        </ActionBtn>
        <ActionBtn
          @click="
            () => {
              votingStore.dislike(post.id)
              emit('voted')
            }
          "
        >
          <template v-if="post.dislikes" #text>{{ post.dislikes }}</template>
          <template #icon>
            <Icon
              :name="
                votingStore.isVoted(post.id) === 'dislike'
                  ? 'mdi:thumb-down'
                  : 'mdi:thumb-down-outline'
              "
              size="18px"
            />
          </template>
        </ActionBtn>
      </div>
      <div class="card__actions">
        <ActionBtn>
          <template #icon>
            <Icon name="mdi:archive-outline" size="18px" />
          </template>
        </ActionBtn>
        <ActionBtn
          is-reverse
          @click="navigateTo({ name: 'post-edit-id', params: { id: post.id } })"
        >
          <template #text>Изменить</template>
          <template #icon>
            <Icon name="mdi:pencil-outline" size="18px" />
          </template>
        </ActionBtn>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 690px;
    padding: 35px 150px 35px 0;
  }

  .card__head {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .card__author {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 300;
    font-size: 14px;

    & img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      flex-shrink: 0;
    }
  }

  .card__date {
    margin: 0;
    font-size: 14px;
    color: rgba(117, 117, 117, 1);
  }

  .card__title {
    margin: 0;
    font-weight: 400;
    font-size: 22px;

    &:is(:hover, :focus) {
      color: green;
    }
  }

  .card__text {
    margin: 0;
    font-size: 16px;
  }

  .card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 13px;
  }

  .card__actions {
    display: flex;
    align-items: center;
    gap: 13px;
  }
</style>
