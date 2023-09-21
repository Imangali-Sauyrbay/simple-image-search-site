<script lang="ts" setup>
import IconSearch from '@icons/IconSearch.vue'
import AppNavButton from '@ui/AppNavButton.vue'
</script>

<template>
  <router-link :to="{name: 'home'}">
    <AppNavButton text="Search">
        <IconSearch />
    </AppNavButton>
  </router-link>
</template>
