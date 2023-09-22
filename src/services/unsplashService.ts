import { fetch as fetchPolyfill } from 'whatwg-fetch'
import { createApi } from 'unsplash-js';
import type { Nullable } from 'unsplash-js/dist/helpers/typescript';

if (! import.meta.env.VITE_UNSPLASH_API_KEY) {
    throw new Error('Please, set environment variable VITE_UNSPLASH_API_KEY')
}

export default createApi({
    accessKey: import.meta.env.VITE_UNSPLASH_API_KEY,
    fetch: ('fetch' in window) ? fetch : fetchPolyfill
})

type ImageUrls = {
    thumb: string
    regular: string
    full: string
    small: string
}

type ProfileImages = {
    large: string
    small: string
}

type User = {
    name: string
    username: string
    portfolio_url: string | null
    profile_image: ProfileImages
}

type ImageDataResponse = {
    id: string
    urls: ImageUrls
    user: User
    alt_description: Nullable<string>
}

export {
    type ImageDataResponse
}