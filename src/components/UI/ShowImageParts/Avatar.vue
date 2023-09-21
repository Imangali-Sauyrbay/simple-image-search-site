<script setup lang="ts">
import { ProgressiveImage } from 'vue-progressive-image'

defineProps<{
  portfolioSrc: string
  portfolioSrcPlaceholder: string
}>()
</script>


<template>
  <div class="h-14 w-14 overflow-hidden rounded-lg border border-white">
    <ProgressiveImage :src="portfolioSrc" :placeholder-src="portfolioSrcPlaceholder" />
  </div>
</template>
