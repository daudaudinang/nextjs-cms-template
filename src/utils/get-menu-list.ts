import { useTranslations } from 'next-intl'
import { Tag, Users, Settings, Bookmark, SquarePen, LayoutGrid, LucideIcon } from 'lucide-react'
import i18nConfig from '../../configs/i18n-config'

type Submenu = {
    href: string
    label: string
    active: boolean
}

type Menu = {
    href: string
    label: string
    active: boolean
    icon: LucideIcon
    submenus: Submenu[]
}

type Group = {
    groupLabel: string
    menus: Menu[]
}

type TranslationFunction = (key: string, values?: Record<string, any>) => string

export function getMenuList(pathname: string): Group[] {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const t = useTranslations('menu') as TranslationFunction

    const pathnameWithoutLocale = pathname.replace(
        new RegExp(`^/(${i18nConfig.locales.join('|')})`),
        ''
    )

    return [
        {
            groupLabel: '',
            menus: [
                {
                    href: '/dashboard',
                    label: t('dashboard'),
                    active: pathnameWithoutLocale.startsWith('/dashboard'),
                    icon: LayoutGrid,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: t('contents'),
            menus: [
                {
                    href: '',
                    label: t('posts'),
                    active: pathnameWithoutLocale.startsWith('/posts'),
                    icon: SquarePen,
                    submenus: [
                        {
                            href: '/posts',
                            label: t('posts-list'),
                            active: pathnameWithoutLocale === '/posts',
                        },
                        {
                            href: '/posts/new',
                            label: t('posts-new'),
                            active: pathnameWithoutLocale === '/posts/new',
                        },
                    ],
                },
                {
                    href: '/categories',
                    label: t('categories'),
                    active: pathnameWithoutLocale.startsWith('/categories'),
                    icon: Bookmark,
                    submenus: [],
                },
                {
                    href: '/tags',
                    label: t('tags'),
                    active: pathnameWithoutLocale.startsWith('/tags'),
                    icon: Tag,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: t('settings'),
            menus: [
                {
                    href: '/users',
                    label: t('users'),
                    active: pathnameWithoutLocale.startsWith('/users'),
                    icon: Users,
                    submenus: [],
                },
                {
                    href: '/account',
                    label: t('account'),
                    active: pathnameWithoutLocale.startsWith('/account'),
                    icon: Settings,
                    submenus: [],
                },
            ],
        },
    ]
}
