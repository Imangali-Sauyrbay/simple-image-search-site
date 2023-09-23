<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppHeader from '@headers/AppHeaderThin.vue'
import AppLoader from '@ui/AppLoader.vue'
import AppError from '@ui/AppError.vue'
import AppShowImage from '@ui/AppShowImage.vue'
import DefaultLayout from '@layouts/DefaultLayout.vue'
import { useImageById } from '@/composables/useImageById'

const route = useRoute()
const router = useRouter()

const id = computed(() =>
  Array.isArray(route.params.id) ? route.params.id.join('') : route.params.id
)

const { data, isLoading, isSuccess, isFetching, isError } = useImageById(id)

onMounted(() => {
  if (!id.value) return router.push({ name: 'home' })
})
</script>

<template>
  <DefaultLayout>
    <AppHeader remove-divider />
    <AppShowImage
      v-if="isSuccess && !isFetching && data?.type === 'success'"
      :data="data.response"
    />
    <AppLoader v-if="isLoading || isFetching" />
    <AppError v-if="(!isSuccess && !isLoading) || (!isLoading && data?.type === 'error') || isError" />
  </DefaultLayout>
</template>
