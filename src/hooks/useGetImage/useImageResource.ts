import { imageRepository, iKeyNames } from '@/resources/imageRepository'

export const useImage = () => {
    return {
        gi: (key: iKeyNames) => {
            return imageRepository[key]
        },
    }
}
