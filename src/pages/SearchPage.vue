<script lang="ts" setup>
import AppHeader from '@headers/AppPrimaryHeader.vue'
import AppRenderImageList from '@ui/AppRenderImageList.vue'
import AppError from '@ui/AppError.vue'
import AppLoader from '@ui/AppLoader.vue'
import DefaultLayout from '@layouts/DefaultLayout.vue'
import { useSearchRouter } from '@composables/useSearchRouter'
import { useInfiniteSearch } from '@composables/useInfiniteSearch'
import { useInfiniteScroll } from '@composables/useInfiniteScroll'
import { useRoute } from 'vue-router'
import { computed, watch } from 'vue'

const route = useRoute()
const query = computed<string>(() =>
  Array.isArray(route.query.q) ? route.query.q.join(' ') : route.query.q || ''
)

const {
  images,
  invalidate,
  query: { hasNextPage, fetchNextPage, isFetching, isSuccess, isLoading, isError }
} = useInfiniteSearch(query)

watch(
  () => query.value,
  () => {
    invalidate()
  }
)

const { handleSearch } = useSearchRouter()

const { scrollHandler } = useInfiniteScroll({
  distance: 200,
  toNextPage: () => {
    if (!isFetching.value && !!hasNextPage?.value && images.value.length > 0) {
      fetchNextPage()
    }
  }
})
</script>

<template>
  <DefaultLayout @scroll="scrollHandler">
    <AppHeader @search="handleSearch" :default-value="query" />
    <AppRenderImageList
      v-if="isSuccess && images.length > 0"
      :images="images"
      class="mt-11 lg:mt-24"
    />
    <h3 v-else-if="!isFetching" class="my-5 text-center text-lg font-bold text-gray-600">
      Sorry, But there is no Photo!
    </h3>
    <AppError v-if="(!isSuccess && !isLoading) || (!isLoading && images.length <= 0) || isError" />
    <AppLoader v-if="isFetching || isLoading" />
  </DefaultLayout>
</template>
