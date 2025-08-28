<script setup lang="ts">
  import SortBtn from '~/components/SortBtn.vue'

  const API_URL = useAPI()
  const route = useRoute()
  const router = useRouter()

  const sort = ref<string>(route.query.sort?.toString() ?? 'rating')
  const pageNumber = ref<number>(1)
  const query = computed(() => {
    return {
      page: route.query.page ?? 1,
      page_size: 2,
      sort: route.query.sort || 'rating'
    }
  })

  const { data: postsData, refresh } = await useFetch<{
    posts: PostInterface[]
    page: number
    total_pages: number
  }>(API_URL + '/posts', {
    key: 'posts',
    query
  })

  watch([sort, pageNumber], ([sortValue, pageNumberValue]) =>
    router.replace({
      query: { page: pageNumberValue, sort: sortValue }
    })
  )
</script>

<template>
  <div class="main">
    <div class="main__sort">
      <SortBtn
        label="По дате"
        :checked="sort === 'date'"
        @click="sort = 'date'"
      />
      <SortBtn
        label="По рейтингу"
        :checked="sort === 'rating'"
        @click="sort = 'rating'"
      />
    </div>
    <div class="vote-list">
      <VoteCard
        v-for="post in postsData?.posts"
        :key="post.id"
        :post
        @voted="refresh"
      />
    </div>

    <div class="main__pagination pagination">
      <button
        v-for="page in postsData?.total_pages"
        :key="page"
        class="link"
        :class="{ active: query.page == page }"
        @click="pageNumber = page"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .main__sort {
    display: flex;
    align-items: center;
    gap: 40px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(230, 230, 230, 1);
  }

  .main__pagination {
    margin-top: auto;
  }

  .pagination {
    display: flex;
    align-items: center;
  }

  .link {
    padding: 10px;
    font-size: 14px;

    &.active {
      border: 1px solid;
    }
  }
</style>
