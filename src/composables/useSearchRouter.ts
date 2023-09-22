import { useRouter } from 'vue-router'

export const useSearchRouter = () => {
    const router = useRouter()

    const handleSearch = (query: string) => {
        if(!query.trim()) return
        
        return router.push({name: 'search', query: {
            q: query,
        }})
    }

    return {
        handleSearch
    }
}