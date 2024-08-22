import React, { forwardRef } from 'react'
import Link, { LinkProps } from 'next/link'
import { useLocale } from 'next-intl'
import i18nConfig from '#/configs/i18n-config'

interface CustomLinkProps extends Omit<LinkProps, 'href'> {
    href: string
    children?: React.ReactNode | React.ReactNode[]
    className?: string
    target?: string
    rel?: string
}

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
    ({ children, href, ...props }, ref) => {
        const locale = useLocale()

        // Kiểm tra xem href có bắt đầu bằng '/' hay không
        const isInternalLink = href.startsWith('/')

        const modifiedHref = (() => {
            if (isInternalLink && !href.match(new RegExp(`^/(${i18nConfig.locales.join('|')})`))) {
                return `/${locale}${href}`
            } else return href
        })()

        return (
            <Link href={modifiedHref} {...props} ref={ref}>
                {children}
            </Link>
        )
    }
)

CustomLink.displayName = 'CustomLink'

export { CustomLink as Link }
