<script lang="ts" setup>
import AppHeader from '@headers/AppPrimaryHeader.vue'
import AppRenderImageList from '@ui/AppRenderImageList.vue'
import AppLoader from '@ui/AppLoader.vue'
import DefaultLayout from '@layouts/DefaultLayout.vue'
import { useDummyRandomImages } from '@/composables/useRandomImages'

const {
  images,
  query: { data, isLoading, isSuccess }
} = useDummyRandomImages()
</script>

<template>
    <DefaultLayout>
        <AppHeader />
        <AppRenderImageList v-if="isSuccess && data?.type === 'success'" :images="images" />
        <AppLoader v-if="isLoading" />
    </DefaultLayout>
</template>
