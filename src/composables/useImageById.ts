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

type Response = {
    type: 'success'
    response: Exclude<Awaited<ReturnType<typeof getDummyImage>>, undefined>
} | {
    type: 'error'
    response: null
}

export const useDummyImageById = (id: Ref<string>) => {
    return useQuery({
        queryKey: KEY_DUMMY,
        queryFn: async (): Promise<Response> => {
            const data = await getDummyImage(id.value)

            if(data) {
                return {
                    type: 'success',
                    response: data
                }
            }

            return {
                type: 'error',
                response: null
            }
        }
    })
}