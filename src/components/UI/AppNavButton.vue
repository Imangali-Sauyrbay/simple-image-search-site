<script lang="ts" setup>
defineProps<{
  text: string
}>()
</script>

<template>
  <button class="group flex cursor-pointer items-center justify-center gap-3">
    <div class="h-6 w-6 text-white transition group-hover:scale-110 group-active:scale-95">
      <slot></slot>
    </div>
    <span class="hidden text-lg text-white lg:inline-block">
      {{ text }}
    </span>
  </button>
</template>
