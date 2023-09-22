<script lang="ts" setup>
import AppRenderImageList from '@/components/UI/AppRenderImageList.vue'
import { useFavouritesStore } from '@/stores/favourites'
import AppHeader from '@headers/AppHeaderThin.vue'
import DefaultLayout from '@layouts/DefaultLayout.vue'

const favouritesStore = useFavouritesStore()
</script>

<template>
  <DefaultLayout>
    <AppHeader />
    <h1 class="mt-8 text-center text-3xl font-bold lg:mt-10 lg:text-5xl">Favourites</h1>
    <AppRenderImageList :images="favouritesStore.favourites" class="mb-10 mt-8 lg:mt-14"/>
  </DefaultLayout>
</template>
