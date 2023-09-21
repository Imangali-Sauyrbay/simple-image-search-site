<script lang="ts" setup>
import AppHeader from '@headers/AppHeaderBase.vue';
import IconHeart from '@icons/IconHeart.vue';
import IconSearch from '@icons/IconSearch.vue';
import AppNavButton from '@ui/AppNavButton.vue';
import AppDivider from '@ui/AppDivider.vue';

defineProps<{
    removeDivider: boolean
}>()
</script>

<template>
    <AppHeader>
        <template #nav>
            <AppNavButton text="Search">
                <IconSearch />
            </AppNavButton>

            <AppNavButton text="Favourites">
                <IconHeart />
            </AppNavButton>
        </template>
    </AppHeader>

    <AppDivider v-if="!removeDivider"/>
</template>