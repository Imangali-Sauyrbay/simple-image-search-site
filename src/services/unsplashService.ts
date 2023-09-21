import {fetch as fetchPolyfill} from 'whatwg-fetch'
import { createApi } from 'unsplash-js';

if(! import.meta.env.VITE_UNSPLASH_API_KEY) {
    throw new Error('Please, set environment variable VITE_UNSPLASH_API_KEY')
}

export default createApi({
    accessKey: import.meta.env.VITE_UNSPLASH_API_KEY,
    fetch: ('fetch' in window) ? fetch : fetchPolyfill   
})