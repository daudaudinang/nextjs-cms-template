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

export function getMenuList(pathname: string): Group[] {
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
                    label: 'Dashboard',
                    active: pathnameWithoutLocale.startsWith('/dashboard'),
                    icon: LayoutGrid,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: 'Contents',
            menus: [
                {
                    href: '',
                    label: 'Posts',
                    active: pathnameWithoutLocale.startsWith('/posts'),
                    icon: SquarePen,
                    submenus: [
                        {
                            href: '/posts',
                            label: 'All Posts',
                            active: pathnameWithoutLocale === '/posts',
                        },
                        {
                            href: '/posts/new',
                            label: 'New Post',
                            active: pathnameWithoutLocale === '/posts/new',
                        },
                    ],
                },
                {
                    href: '/categories',
                    label: 'Categories',
                    active: pathnameWithoutLocale.startsWith('/categories'),
                    icon: Bookmark,
                    submenus: [],
                },
                {
                    href: '/tags',
                    label: 'Tags',
                    active: pathnameWithoutLocale.startsWith('/tags'),
                    icon: Tag,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: 'Settings',
            menus: [
                {
                    href: '/users',
                    label: 'Users',
                    active: pathnameWithoutLocale.startsWith('/users'),
                    icon: Users,
                    submenus: [],
                },
                {
                    href: '/account',
                    label: 'Account',
                    active: pathnameWithoutLocale.startsWith('/account'),
                    icon: Settings,
                    submenus: [],
                },
            ],
        },
    ]
}
