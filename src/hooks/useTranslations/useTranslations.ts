import { validTranslationKeys, iKeyTranslations, LangKeys } from '@/locales/translationKeys'

enum Language {
    es = 'es',
    en = 'en',
    ko = 'ko',
}

export const getActiveLanguage = () => {
    return Language.es
}

export const useTranslation = () => {
    const lang: LangKeys = getActiveLanguage()

    return {
        t: (key: iKeyTranslations) => {
            return validTranslationKeys[lang][key]
        },
    }
}
