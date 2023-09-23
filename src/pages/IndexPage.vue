<script lang="ts" setup>
import AppHeader from '@headers/AppPrimaryHeader.vue'
import AppRenderImageList from '@ui/AppRenderImageList.vue'
import AppLoader from '@ui/AppLoader.vue'
import AppError from '@ui/AppError.vue'
import DefaultLayout from '@layouts/DefaultLayout.vue'
import { useRandomImages } from '@composables/useRandomImages'
import { useSearchRouter } from '@composables/useSearchRouter'
const {
  images,
  query: { data, isLoading, isSuccess, isError }
} = useRandomImages()

const { handleSearch } = useSearchRouter()
</script>

<template>
  <DefaultLayout>
    <AppHeader @search="handleSearch" />
    <AppRenderImageList
      v-if="isSuccess && data?.type === 'success'"
      :images="images"
      class="mb-12 mt-11 lg:mt-24"
    />
    <AppLoader v-if="isLoading" />
    <AppError v-if="(!isSuccess && !isLoading) || (!isLoading && images.length <= 0) || isError" />
  </DefaultLayout>
</template>
