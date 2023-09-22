import unsplashService from "@/services/unsplashService";
import { useInfiniteQuery } from "@tanstack/vue-query";
import { type Ref } from "vue";

export const KEY = ['infinite_search_key']
export const useInfiniteSearch = (q: Ref<string>) => {
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
        }
    })

    return query
}