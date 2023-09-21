<script setup lang="ts">
import { ProgressiveImage } from 'vue-progressive-image'

defineProps<{
  placeholderSrc: string
  src: string
}>()
</script>

<template>
  <div class="h-72 w-72 sm:h-80 sm:w-80">
    <ProgressiveImage lazy-placeholder object-cover :placeholder-src="placeholderSrc" :src="src" />
  </div>
</template>
