'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useMemo } from 'react'
import Link from 'next-intl/link'

export function LanguageSwitcher() {
    const LanguageItem = useMemo(
        () =>
            [
                {
                    key: 'en',
                    value: 'English',
                },
                {
                    key: 'vi',
                    value: 'Tiếng Việt',
                },
            ].map(({ key, value }) => (
                <DropdownMenuItem key={key}>
                    <Link href="/" locale={key}>
                        {value}
                    </Link>
                </DropdownMenuItem>
            )),
        []
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
                {LanguageItem}
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
