import { defineStore } from 'pinia'

export const useVotingStore = defineStore(
  'voting',
  () => {
    const {
      public: { apiUrl: API_URL }
    } = useRuntimeConfig()

    const votedList = ref<{ id: number; action: 'like' | 'dislike' }[]>([])

    async function like(id: number): Promise<void> {
      await $fetch(API_URL + `/posts/${id}/like`, { method: 'POST' })

      const votedItem = votedList.value.find((item) => item.id === id)

      if (votedItem) {
        votedItem.action = 'like'
      } else {
        votedList.value.push({ id, action: 'like' })
      }
    }

    async function dislike(id: number): Promise<void> {
      await $fetch(API_URL + `/posts/${id}/dislike`, { method: 'POST' })

      const votedItem = votedList.value.find((item) => item.id === id)

      if (votedItem) {
        votedItem.action = 'dislike'
      } else {
        votedList.value.push({ id, action: 'dislike' })
      }
    }

    function isVoted(id: number): 'like' | 'dislike' | undefined {
      const votedItem = votedList.value.find((item) => item.id === id)

      if (!votedItem) return

      return votedItem.action
    }

    return { like, dislike, isVoted, votedList }
  },
  { persist: true }
)
