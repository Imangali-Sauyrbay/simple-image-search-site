<script lang="ts" setup>
import AppSquareImage from '@ui/AppSquareImage.vue'
import AppImageTileWrapper from '@ui/AppImageTileWrapper.vue'

type Urls = {
  thumb: string
  regular: string
}

type Images = {
  id: string
  urls: Urls
}

defineProps<{
  images: Images[]
}>()
</script>

<template>
  <AppImageTileWrapper class="mx-auto mb-10 mt-11 lg:mt-24">
    <AppSquareImage
      v-for="image in images"
      :key="image.id"
      :placeholderSrc="image.urls.thumb"
      :src="image.urls.regular"
    />
  </AppImageTileWrapper>
</template>
