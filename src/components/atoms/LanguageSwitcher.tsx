'use client'
import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useCallback, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import i18nConfig from '#/configs/i18n-config'

export function LanguageSwitcher() {
    const pathname = usePathname()

    const generateLink = useCallback(
        (locale: string) => {
            return pathname.replace(`/${pathname.split('/')[1]}`, `/${locale}`)
        },
        [pathname]
    )

    const languageItems = useMemo(
        () =>
            i18nConfig.languages.map(({ locale, name }) => (
                <DropdownMenuItem key={locale} asChild>
                    <Link href={generateLink(locale)} locale={locale}>
                        {name}
                    </Link>
                </DropdownMenuItem>
            )),
        [generateLink]
    )

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 rounded-full bg-background"
                >
                    <GlobeIcon className="w-4 h-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" side="bottom" className="w-36">
                {languageItems}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function GlobeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    )
}
