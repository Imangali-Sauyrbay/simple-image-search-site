<script setup lang="ts">
import type { Nullable } from 'unsplash-js/dist/helpers/typescript';

defineProps<{
  src: string
  alt?: Nullable<string>
}>()
</script>

<template>
  <div
    class="absolute left-1/2 top-32 flex h-fit max-h-[60vh] w-[90vw] max-w-6xl -translate-x-1/2 items-center justify-center sm:top-36"
  >
    <img :src="src" class="max-h-[60vh] rounded-lg shadow-2xl shadow-black/90" :alt="alt || ''"/>
  </div>
</template>
