<script setup lang="ts">
defineProps<{
  background: string
}>()
</script>

<template>
  <div
    class="absolute -inset-1 box-content bg-cover bg-center bg-no-repeat blur-sm grayscale"
    :style="{
      backgroundImage: `url(${background})`
    }"
  ></div>
</template>
