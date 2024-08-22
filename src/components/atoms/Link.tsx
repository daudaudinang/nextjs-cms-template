import React from 'react'
import Link, { LinkProps } from 'next/link'
import { useLocale } from 'next-intl'

interface LinkProps extends Omit<LinkProps, 'href'> {
    href: string
}

const CustomLink: React.FC<LinkProps> = ({ href, ...props }) => {
    const locale = useLocale()

    // Kiểm tra xem href có bắt đầu bằng '/' hay không
    const isInternalLink = href.startsWith('/')

    // Nếu là internal link, thêm locale vào đầu
    const modifiedHref = isInternalLink ? `/${locale}${href}` : href

    return <Link href={modifiedHref} {...props} />
}

export default CustomLink
