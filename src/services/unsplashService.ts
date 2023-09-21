import {fetch as fetchPolyfill} from 'whatwg-fetch'
import { createApi } from 'unsplash-js';

export default createApi({
    accessKey: '',
    fetch: ('fetch' in window) ? fetch : fetchPolyfill   
})