const languages = [
    {
        locale: 'en',
        name: 'English',
    },
    {
        locale: 'vi',
        name: 'Vietnamese',
    },
]
const locales = languages.map(language => language.locale)
const matcher = locales.map(locale => `/${locale}/:path*`)

const i18nConfig = {
    languages,
    locales,
    defaultLocale: 'vi',
    matcher,
}

export default i18nConfig
