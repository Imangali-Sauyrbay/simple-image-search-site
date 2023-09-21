import { ref } from 'vue'
import { downloadFile } from '@utils/file'

export const useFileDownloader = () => {
    const isLoadingFile = ref(false)

    const handleDownload = (src: string) => {
        if(src.trim()) {
            isLoadingFile.value = true
            downloadFile(src)
            .finally(() => {
                isLoadingFile.value = false
            })
        }
    }

    return {
        isLoadingFile,
        handleDownload
    }
}