<script lang="ts" setup>
import AppHeader from '@headers/AppPrimaryHeader.vue'
import AppRenderImageList from '@ui/AppRenderImageList.vue'
import AppError from '@ui/AppError.vue'
import AppLoader from '@ui/AppLoader.vue'
import DefaultLayout from '@layouts/DefaultLayout.vue'
import { useSearchRouter } from '@composables/useSearchRouter'
import { useInfiniteSearch, KEY } from '@composables/useInfiniteSearch'
import { useRoute } from 'vue-router'
import { computed, watch } from 'vue'
import { type Image } from '@/stores/favourites'
import { useQueryClient } from '@tanstack/vue-query'

const route = useRoute()
const query = computed<string>(() =>
  Array.isArray(route.query.q) ? route.query.q.join(' ') : route.query.q || ''
)

const { data, hasNextPage, fetchNextPage, isFetching, isSuccess, isLoading, isError } =
  useInfiniteSearch(query)

const client = useQueryClient()
watch(
  () => query.value,
  () => {
    client.invalidateQueries({
      queryKey: KEY
    })
  }
)

const images = computed<Image[]>(() => {
  return (
    data.value?.pages.reduce<Image[]>((acc, item) => {
      if (item.type === 'success') {
        item.response.results.forEach((res) => {
          acc.push({
            id: res.id,
            urls: res.urls,
            alt_description: res.alt_description || ''
          })
        })
      }
      return acc
    }, []) || []
  )
})
const { handleSearch } = useSearchRouter()

const scrollHandler = (e: UIEvent) => {
  const target: HTMLDivElement = e.target as HTMLDivElement

  const scrollHeight = target.scrollHeight
  const scrollTop = target.scrollTop
  const innerHeight = window.innerHeight

  if (
    scrollHeight - (scrollTop + innerHeight) < 200 &&
    !isFetching.value &&
    !!hasNextPage?.value &&
    images.value.length > 0
  ) {
    fetchNextPage()
  }
}
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
