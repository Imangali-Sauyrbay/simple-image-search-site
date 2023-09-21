/// <reference types="vite/client" />


interface ImportMetaEnv {
    VITE_UNSPLASH_API_KEY?: string
}

declare module 'whatwg-fetch' {
    export {
        fetch
    }
}

declare module "vue-progressive-image" {
    import { DefineComponent, defineComponent } from "vue"

    interface Props {
        src?: string
        placeholderSrc?: string
        fallbackSrc?: string
        alt?: string
        title?: string
        customClass?: string
        blur?: [number, string]

        lazyPlaceholder?: boolean

        delay?: [number, string]

        objectCover?: boolean
    }

    const ProgressiveImage: DefineComponent<Props> = defineComponent({
        props: {}
    })

    export {
        ProgressiveImage
    }
    export default ProgressiveImage;
}