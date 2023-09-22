import { defineStore } from 'pinia'

type Urls = {
    thumb: string
    regular: string
  }
  
export type Image = {
    id: string
    urls: Urls
    alt?: string
}

type FavouritesState = {
    favourites: Image[]
}

export const useFavouritesStore = defineStore('favourite_images', {
    state: (): FavouritesState => ({favourites: []}),

    actions: {
        addFavourite(favourite: Image) {
            this.favourites.push(favourite)
        },

        removeFavourite(id: string) {
            this.favourites = this.favourites.filter(fav => fav.id !== id)
        },

        hasFavourite(id: string) {
            return this.favourites.findIndex(fav => fav.id === id) >= 0
        },

        toggleFav(favourite: Image) {
            if(this.hasFavourite(favourite.id))
                return this.removeFavourite(favourite.id)

            this.addFavourite(favourite)
        }
    },

    persist: true
})
