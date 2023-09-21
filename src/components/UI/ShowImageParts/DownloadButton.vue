<script setup lang="ts">
import ButtonBase from './ButtonBase.vue'
import IconDownload from '@icons/IconDownload.vue'
import IconLoader from '@icons/IconLoader.vue'

defineProps<{
  isLoading?: boolean
}>()
</script>

<template>
  <ButtonBase class="flex bg-yellow-400 disabled:bg-yellow-200 sm:px-4" :disabled="isLoading">
    <IconDownload class="h-6 w-6 text-black" v-if="!isLoading" />
    <IconLoader class="h-6 w-6 animate-spin text-black" v-if="isLoading" />

    <span class="ml-3 hidden sm:inline-block">Download</span>
  </ButtonBase>
</template>
