<script lang="ts" setup>
import IconSearch from '@icons/IconSearch.vue'
import AppHeader from '@headers/AppHeaderBase.vue'
import AppDivider from '@ui/AppDivider.vue'

import AppSearchBar from '@ui/AppSearchBar.vue'

import FavouritePageLink from '@components/Links/FavouritePageLink.vue'
</script>

<template>
  <AppHeader>
    <template #nav>
      <FavouritePageLink />
    </template>
  </AppHeader>

  <div
    class="flex h-60 w-full items-center justify-center bg-[url('/images/starry-night.jpg')] bg-cover bg-[center_top_65%] bg-no-repeat lg:h-64"
  >
    <AppSearchBar placeholder="Search">
      <template #icon>
        <div class="flex h-full w-full items-center justify-center">
          <button class="transition-all hover:scale-110 active:scale-95">
            <IconSearch class="h-6 w-6 text-black" />
          </button>
        </div>
      </template>
    </AppSearchBar>
  </div>

  <AppDivider />
</template>
