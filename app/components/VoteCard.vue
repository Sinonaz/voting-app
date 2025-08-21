<script lang="ts" setup>
  const {
    isCompact = true,
    title,
    text,
    dayPast,
    likes,
    disLikes
  } = defineProps<{
    title: string
    text: string
    dayPast: number
    isCompact?: boolean
    likes: number
    disLikes: number
  }>()

  const dayPastText = computed<string>(() => {
    return dayPast
      ? `${dayPast} ${useDeclansion(dayPast, ['день', 'дня', 'дней'])} назад`
      : 'сегодня'
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
    <p class="card__title">{{ title }}</p>
    <p class="card__text" :class="{ 'card__text--truncate': isCompact }">
      {{ text }}
    </p>
    <div class="card__footer">
      <div class="card__actions">
        <ActionBtn>
          <template v-if="likes" #text>{{ likes }}</template>
          <template #icon>
            <Icon name="mdi:thumb-up-outline" size="18px" />
          </template>
        </ActionBtn>
        <ActionBtn>
          <template v-if="disLikes" #text>{{ disLikes }}</template>
          <template #icon>
            <Icon name="mdi:thumb-down-outline" size="18px" />
          </template>
        </ActionBtn>
      </div>
      <div class="card__actions">
        <ActionBtn>
          <template #icon>
            <Icon name="mdi:archive-outline" size="18px" />
          </template>
        </ActionBtn>
        <ActionBtn is-reverse>
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
