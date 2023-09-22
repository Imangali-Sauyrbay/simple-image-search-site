<script setup lang="ts">
defineEmits<{
  (e: 'scroll', event: UIEvent): void
}>()
</script>

<template>
  <div @scroll="$emit('scroll', $event)" class="h-full w-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded-lg">
    <slot></slot>
  </div>
</template>
