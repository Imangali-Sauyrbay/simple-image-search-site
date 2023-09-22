<script lang="ts" setup>
import { ref } from 'vue'
import IconSearch from '@icons/IconSearch.vue'
import AppHeader from '@headers/AppHeaderBase.vue'
import AppDivider from '@ui/AppDivider.vue'

import AppSearchBar from '@ui/AppSearchBar.vue'

import FavouritePageLink from '@components/Links/FavouritePageLink.vue'

const props = defineProps<{
  defaultValue?: string
}>()

const emit = defineEmits<{
  (e: 'search', query: string): void
}>()

const query = ref<string>(props.defaultValue || '')

const handleSearch = () => {
  emit('search', query.value)
}
</script>

<template>
  <AppHeader>
    <template #nav>
      <FavouritePageLink />
    </template>
  </AppHeader>

  <div
    @keypress.enter="handleSearch"
    class="relative flex h-60 w-full items-center justify-center bg-[url('/images/starry-night.jpg')] bg-cover bg-[center_top_80%] bg-no-repeat lg:h-64"
  >
    <AppSearchBar placeholder="Search" v-model="query">
      <template #icon>
        <div class="flex h-full w-full items-center justify-center">
          <button class="transition-all hover:scale-110 active:scale-95" @click="handleSearch">
            <IconSearch class="h-6 w-6 text-black" />
          </button>
        </div>
      </template>
    </AppSearchBar>
    <div class="absolute inset-0 bg-black/50"></div>
  </div>

  <AppDivider />
</template>
