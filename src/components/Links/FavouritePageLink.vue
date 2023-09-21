<script lang="ts" setup>
import IconHeart from '@icons/IconHeart.vue'
import AppNavButton from '@ui/AppNavButton.vue'
</script>

<template>
  <router-link :to="{ name: 'favourites' }">
    <AppNavButton text="Favourites">
      <IconHeart />
    </AppNavButton>
  </router-link>
</template>
