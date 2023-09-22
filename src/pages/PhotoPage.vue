<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppHeader from '@headers/AppHeaderThin.vue'
import AppLoader from '@ui/AppLoader.vue'
import AppShowImage from '@ui/AppShowImage.vue'
import DefaultLayout from '@layouts/DefaultLayout.vue'
import { useDummyImageById } from '@/composables/useImageById'

const route = useRoute()
const router = useRouter()

const id = computed(() =>
  Array.isArray(route.params.id) ? route.params.id.join('') : route.params.id
)

const {
    data,
    isLoading,
    isSuccess,
    isFetching
} = useDummyImageById(id)

onMounted(() => {
    if(!id.value)
        return router.push({name: 'home'})
})
</script>

<template>
  <DefaultLayout>
    <AppHeader remove-divider />
    <AppShowImage
        v-if="isSuccess && !isFetching && data?.type === 'success'"
        :id="id"
        :placeholder-src="data.response.urls.thumb || ''"
        :src="data.response.urls.regular || ''"
        :srcFull="data.response.urls.full || ''"
        :background="data.response.urls.small || ''"
        :name="data.response.user.name || ''"
        :username="data.response.user.username|| ''"
        :portfolioUrl="data.response.user.portfolio_url || ''"
        :portfolioSrc="data.response.user.profile_image.large || ''"
        :portfolioSrcPlaceholder="data.response.user.profile_image.small || ''"
        :alt="data.response.alt_description || ''"
    />
    <AppLoader v-if="isLoading || isFetching" />
  </DefaultLayout>
</template>
