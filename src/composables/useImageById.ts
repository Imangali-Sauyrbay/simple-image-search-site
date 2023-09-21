import { type Ref } from 'vue'
import unsplashService from '@/services/unsplashService'
import { useQuery } from "@tanstack/vue-query"
import { getDummyImage } from '@dummyServices/getDummyImage'

export const KEY = ['image_by_id']
export const useImageById = (id: Ref<string>) => {
    return useQuery({
        queryKey: KEY,
        queryFn: () => unsplashService.photos.get({photoId: id.value})
    })
}

export const KEY_DUMMY = ['dummy_image_by_id']
export const useDummyImageById = (id: Ref<string>) => {
    return useQuery({
        queryKey: KEY_DUMMY,
        queryFn: () => getDummyImage(id.value)
    })
}