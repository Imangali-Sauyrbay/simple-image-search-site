<script setup lang="ts">

import Avatar from './ShowImageParts/Avatar.vue'
import UsernameInfo from './ShowImageParts/UsernameInfo.vue'
import BGImage from './ShowImageParts/BGImage.vue'
import CenteredImage from './ShowImageParts/CenteredImage.vue'

import HeartButton from './ShowImageParts/HeartButton.vue'
import DownloadButton from './ShowImageParts/DownloadButton.vue'
import { useFileDownloader } from '@/composables/useFileDownloader'

defineProps<{
  background: string
  src: string
  srcFull: string
  portfolioSrc: string
  portfolioSrcPlaceholder: string
  name: string
  username: string
  portfolioUrl: string
  alt?: string
}>()

const { handleDownload, isLoadingFile } = useFileDownloader()
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
        <HeartButton />
        <DownloadButton @click="handleDownload(srcFull)" :isLoading="isLoadingFile"/>
      </div>
    </div>

    <CenteredImage :src="src" :alt="alt"/>
  </div>
</template>
