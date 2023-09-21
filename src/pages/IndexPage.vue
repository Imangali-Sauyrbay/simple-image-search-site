<script lang="ts" setup>
import AppHeader from '@headers/AppPrimaryHeader.vue'
import AppRenderImageList from '@ui/AppRenderImageList.vue'
import { useRandomImages } from '@/composables/useRandomImages'

const {
    images,
    query: {
        data
    }
} = useRandomImages()
</script>

<template>
  <AppHeader />
  <AppRenderImageList v-if="data?.type === 'success'" :images="images"/>
</template>
