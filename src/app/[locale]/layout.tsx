import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { NextIntlClientProvider } from 'next-intl'
import React from 'react'
import { getMessages } from 'next-intl/server'
import { TopLoader } from '@/components/atoms/TopLoader'

export const metadata: Metadata = {
    metadataBase: new URL(
        process.env.APP_URL
            ? `${process.env.APP_URL}`
            : process.env.VERCEL_URL
              ? `https://${process.env.VERCEL_URL}`
              : `http://localhost:${process.env.PORT ?? 3000}`
    ),
    title: 'shadcn/ui sidebar',
    description:
        'A stunning and functional retractable sidebar for Next.js built on top of shadcn/ui complete with desktop and mobile responsiveness.',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        url: '/',
        title: 'shadcn/ui sidebar',
        description:
            'A stunning and functional retractable sidebar for Next.js built on top of shadcn/ui complete with desktop and mobile responsiveness.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'shadcn/ui sidebar',
        description:
            'A stunning and functional retractable sidebar for Next.js built on top of shadcn/ui complete with desktop and mobile responsiveness.',
    },
}

async function RootLayout({
    children,
    params: { locale },
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
    const messages = await getMessages()

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={GeistSans.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        <TopLoader />
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}

export default RootLayout
