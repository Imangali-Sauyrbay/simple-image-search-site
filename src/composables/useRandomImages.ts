import { computed } from 'vue'
import unsplashService from '@/services/unsplashService'
import { useQuery } from '@tanstack/vue-query'
import { getRandomImages } from '@dummyServices/randomImages'

export const KEY = ['random_images']
export const useRandomImages = () => {

    const query = useQuery({
        queryKey: KEY,
        queryFn: () => unsplashService.photos.getRandom({
            count: 9,
            orientation: 'portrait'
        })
    })

    const images = computed(() => {
        if(!query.data.value?.response) return []
    
        if(query.data.value.type !== 'success') return []
    
        if(!Array.isArray(query.data.value.response)) return[query.data.value.response]
    
        return query.data.value.response
    })

    return {
        images, query
    }
}

export const KEY_DUMMY = ['random_images']
export const useDummyRandomImages = () => {
    const query = useQuery({
        queryKey: KEY_DUMMY,
        queryFn: () => getRandomImages()
    })

    const images = computed(() => query.data.value?.response || [])

    return {
        query,
        images
    }
}