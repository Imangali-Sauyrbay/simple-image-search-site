<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="h-20 bg-black 2xl:h-36">
        <div class="mx-auto flex h-full max-w-6xl items-center justify-between px-5">
            
            <RouterLink :to="{name: 'home'}">
                <img
                    alt="Logo"
                    class="w-20 lg:w-28 2xl:w-44"
                    src="@assets/logo.svg"
                />
            </RouterLink>

            <nav class="flex items-center justify-center gap-5 lg:gap-9">
                <slot name="nav"></slot>
            </nav>
        </div>
    </header>
</template>