<script setup lang="ts">

import Avatar from './ShowImageParts/Avatar.vue'
import UsernameInfo from './ShowImageParts/UsernameInfo.vue'
import BGImage from './ShowImageParts/BGImage.vue'
import CenteredImage from './ShowImageParts/CenteredImage.vue'

import HeartButton from './ShowImageParts/HeartButton.vue'
import DownloadButton from './ShowImageParts/DownloadButton.vue'
import { useFileDownloader } from '@/composables/useFileDownloader'
import { useFavouritesStore } from '@/stores/favourites'
import { computed } from 'vue'

const props = defineProps<{
  id: string
  background: string
  src: string
  srcFull: string
  placeholderSrc: string
  portfolioSrc: string
  portfolioSrcPlaceholder: string
  name: string
  username: string
  portfolioUrl: string
  alt?: string
}>()

const { handleDownload, isLoadingFile } = useFileDownloader()
const favouritesStore = useFavouritesStore()

const isFavourite = computed(() => favouritesStore.hasFavourite(props.id))

const handleTogleFav = () => {
  favouritesStore.toggleFav({
    id: props.id,
    alt: props.alt,
    urls: {
      regular: props.src,
      thumb: props.portfolioSrc
    }
  })
}
</script>

<template>
  <div class="relative h-[450px] w-full">

    <BGImage
        class="hidden sm:block"
        :background="background"
    />

    <div
      class="absolute left-1/2 top-10 flex w-full max-w-6xl -translate-x-1/2 items-center justify-between px-5"
    >
      <div class="flex">
        <Avatar
            :portfolio-src="portfolioSrc"
            :portfolio-src-placeholder="portfolioSrcPlaceholder"
        />

        <UsernameInfo
            :portfolio-url="portfolioUrl"
            :name="name"
            :username="username"
        />
      </div>

      <div class="flex gap-4">
        <HeartButton :filled="isFavourite" @click="handleTogleFav"/>
        <DownloadButton @click="handleDownload(srcFull)" :isLoading="isLoadingFile"/>
      </div>
    </div>

    <CenteredImage :src="src" :alt="alt"/>
  </div>
</template>
