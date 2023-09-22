<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  text: string
  iconSize?: 'lg' | 'sm'
}>()

const iconSizeClasses = computed(() => {
  if(props?.iconSize === 'lg') return 'h-7 w-7'
  return 'h-6 w-6'
})
</script>

<template>
  <button class="group flex cursor-pointer items-center justify-center gap-3">
    <div class="text-white transition group-hover:scale-110 group-active:scale-95" :class="iconSizeClasses">
      <slot></slot>
    </div>
    <span class="hidden text-lg text-white md:inline-block">
      {{ text }}
    </span>
  </button>
</template>
