import { validTranslationKeys, LangKeys } from '@/locales/translationKeys'

enum Language {
    es = 'es',
    en = 'en',
    ko = 'ko',
}

export type magicObj = {
    [key: string | number]: string | number
}

export const getActiveLanguage = () => {
    return Language.en
}

export const useTranslation = () => {
    const lang: LangKeys = getActiveLanguage()
    const selectedLanguage = validTranslationKeys[lang]

    return (key: keyof typeof selectedLanguage, binds?: magicObj) => {
        let value = selectedLanguage[key] ? selectedLanguage[key] : key

        if (selectedLanguage[key] && binds) {
            const words = Object.keys(binds)

            for (const item of words) {
                const curStr = binds[item].toString()
                value = value.replace(`{{${item}}}`, curStr)
            }
        }
        return value
    }
}
