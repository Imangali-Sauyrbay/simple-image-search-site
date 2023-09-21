<script lang="ts" setup>
import AppHeader from '@headers/AppHeaderBase.vue';
import AppDivider from '@ui/AppDivider.vue';

import SearchPageLink from '@components/Links/SearchPageLink.vue'
import FavouritePageLink from '@components/Links/FavouritePageLink.vue'

defineProps<{
    removeDivider?: boolean
}>()
</script>

<template>
    <AppHeader>
        <template #nav>
            <SearchPageLink />
            <FavouritePageLink />
        </template>
    </AppHeader>

    <AppDivider v-if="!removeDivider"/>
</template>