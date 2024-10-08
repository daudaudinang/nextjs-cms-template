import { Navbar } from '@/components/molecules/Navbar'
import React from 'react'

interface ContentLayoutProps {
    title: string
    children: React.ReactNode
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
    return (
        <div>
            <Navbar title={title} />
            <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
        </div>
    )
}
