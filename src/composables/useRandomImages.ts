import unsplashService from "@/services/unsplashService"
import { useQuery } from "@tanstack/vue-query"
import { getRandomImages } from '@dummyServices/randomImages'

export const KEY = ['random_images']
export const useRandomImages = () => {
    return useQuery({
        queryKey: KEY,
        queryFn: () => unsplashService.photos.getRandom({
            count: 9,
        })
    })
}

export const KEY_DUMMY = ['random_images']
export const useDummyRandomImages = () => {
    return useQuery({
        queryKey: KEY_DUMMY,
        queryFn: () => getRandomImages()
    })
}