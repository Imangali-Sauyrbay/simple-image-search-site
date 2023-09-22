<script setup lang="ts">
import ButtonBase from './ButtonBase.vue'
import IconHeart from '@icons/IconHeart.vue'
import IconHeartFilled from '@icons/IconHeartFilled.vue'

defineProps<{
  filled?: boolean
}>()
</script>

<template>
  <ButtonBase>
    <IconHeart class="h-6 w-6 text-black" v-if="!filled"/>
    <IconHeartFilled class="h-6 w-6 text-rose-600" v-else/>
  </ButtonBase>
</template>
