<script lang="ts" setup>
defineProps<{
  modelValue?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement | null
  emit('update:modelValue', target?.value || '')
}
</script>

<template>
  <div
    class="z-10 mx-6 box-content flex w-full max-w-4xl border-blue-600 bg-white px-8 shadow-md shadow-black/70 transition-all duration-300 focus-within:border"
  >
    <input
      class="h-16 w-full outline-none"
      type="text"
      :value="modelValue"
      @input="handleInput"
      v-bind="$attrs"
    />

    <div class="h-16 w-fit">
      <slot name="icon"></slot>
    </div>
  </div>
</template>
