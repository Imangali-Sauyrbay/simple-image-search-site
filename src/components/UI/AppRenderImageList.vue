<script lang="ts" setup>
import AppSquareImage from '@ui/AppSquareImage.vue'
import AppImageTileWrapper from '@ui/AppImageTileWrapper.vue'
import {type Image} from '@/stores/favourites'

defineProps<{
  images: Image[]
}>()
</script>

<template>
  <AppImageTileWrapper class="mx-auto">
    <router-link
      v-for="image in images"
      :key="image.id"
      :to="{name: 'photo', params: {id: image.id}}"
    >
      <AppSquareImage
        :placeholderSrc="image.urls.thumb"
        :src="image.urls.regular"
      />
    </router-link>
  </AppImageTileWrapper>
</template>
