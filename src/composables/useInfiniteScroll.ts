type InfiniteScrollOptions = {
    distance: number,
    toNextPage: () => void
}

export const useInfiniteScroll = ({ distance, toNextPage }: InfiniteScrollOptions) => {
    const scrollHandler = (e: Event) => {
        const target: HTMLElement = e.target as HTMLElement

        const scrollHeight = target.scrollHeight
        const scrollTop = target.scrollTop
        const innerHeight = window.innerHeight

        if (
            scrollHeight - (scrollTop + innerHeight) < distance
        ) {
            toNextPage()
        }
    }

    return {
        scrollHandler
    }
}