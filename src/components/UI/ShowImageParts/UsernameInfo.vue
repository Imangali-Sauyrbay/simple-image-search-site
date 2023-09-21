<script setup lang="ts">
defineProps<{
  name: string
  username: string
  portfolioUrl: string
}>()
</script>

<template>
  <div class="ml-3 flex flex-col text-black sm:text-white">
    <span class="text-shadow-md text-xl">{{ name }}</span>
    <a
      :href="portfolioUrl"
      class="cursor-pointer underline-offset-4 transition hover:underline"
      target="_blank"
    >
      <span class="text-sm text-gray-500 sm:text-white">@{{ username }}</span>
    </a>
  </div>
</template>
