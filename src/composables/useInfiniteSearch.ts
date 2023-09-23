import unsplashService from "@/services/unsplashService";
import { useInfiniteQuery, useQueryClient } from "@tanstack/vue-query";
import { type Image } from '@/stores/favourites'
import { ref, type Ref } from "vue";

export const KEY = ['infinite_search_key']

export const useInfiniteSearch = (q: Ref<string>) => {

    const images = ref<Image[]>([])

    const query = useInfiniteQuery({
        queryKey: KEY,
        queryFn: ({ pageParam = 1 }) => unsplashService.search.getPhotos({
            query: q.value,
            page: pageParam,
            orderBy: 'relevant',
            orientation: 'landscape',
            perPage: 9,
        }),

        getNextPageParam: (last, pages) => {
            if (last.type === 'success') {
                return last.response.total_pages >= (pages.length + 1) ? pages.length + 1 : undefined
            }
        },

        onSuccess: ({ pages }) => {
            images.value = pages.reduce<Image[]>((acc, page) => {
                page.response?.results.forEach(res => {
                    const image: Image = {
                        id: res.id,
                        urls: res.urls,
                        alt_description: res.alt_description || ''
                    }

                    acc.push(image)
                })

                return acc
            }, []);
        },
    })

    const client = useQueryClient()
    
    const invalidate = () => {
        client.invalidateQueries({
            queryKey: KEY
        })

        images.value = []
    }

    return { images, query, invalidate }
}