<script setup lang="ts">
import { computed } from 'vue'
import Avatar from './ShowImageParts/Avatar.vue'
import UsernameInfo from './ShowImageParts/UsernameInfo.vue'
import BGImage from './ShowImageParts/BGImage.vue'
import CenteredImage from './ShowImageParts/CenteredImage.vue'

import HeartButton from './ShowImageParts/HeartButton.vue'
import DownloadButton from './ShowImageParts/DownloadButton.vue'
import { useFileDownloader } from '@/composables/useFileDownloader'
import { useFavouritesStore } from '@/stores/favourites'
import type { ImageDataResponse } from '@services/unsplashService'

const props = defineProps<{
  data: ImageDataResponse
}>()

const { handleDownload, isLoadingFile } = useFileDownloader()
const favouritesStore = useFavouritesStore()

const isFavourite = computed(() => favouritesStore.hasFavourite(props.data.id))

const handleTogleFav = () => {
  favouritesStore.toggleFav({
    id: props.data.id,
    alt_description: props.data.alt_description,
    urls: {
      regular: props.data.urls.regular,
      thumb: props.data.urls.thumb
    }
  })
}
</script>

<template>
  <div class="relative h-[450px] w-full">

    <BGImage
        class="hidden sm:block"
        :background="data.urls.small"
    />

    <div
      class="absolute left-1/2 top-10 flex w-full max-w-6xl -translate-x-1/2 items-center justify-between px-5"
    >
      <div class="flex">
        <Avatar
            :portfolio-src="data.user.profile_image.large"
            :portfolio-src-placeholder="data.user.profile_image.small"
        />

        <UsernameInfo
            :portfolio-url="data.user.portfolio_url || '#'"
            :name="data.user.name"
            :username="data.user.username"
        />
      </div>

      <div class="flex gap-4">
        <HeartButton :filled="isFavourite" @click="handleTogleFav"/>
        <DownloadButton @click="handleDownload(data.urls.full)" :isLoading="isLoadingFile"/>
      </div>
    </div>

    <CenteredImage :src="data.urls.regular" :alt="data.alt_description"/>
  </div>
</template>
