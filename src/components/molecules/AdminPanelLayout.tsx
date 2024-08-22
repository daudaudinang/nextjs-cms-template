'use client'

import { cn } from '@/utils/cn-merge'
import { useStore } from '@/hooks/use-store'
import { Footer } from '@/components/molecules/Footer'
import { Sidebar } from '@/components/molecules/Sidebar'
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle'

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
    const sidebar = useStore(useSidebarToggle, state => state)

    if (!sidebar) return null

    return (
        <>
            <Sidebar />
            <main
                className={cn(
                    'min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300',
                    sidebar?.isOpen === false ? 'lg:ml-[90px]' : 'lg:ml-72'
                )}
            >
                {children}
            </main>
            <footer
                className={cn(
                    'transition-[margin-left] ease-in-out duration-300',
                    sidebar?.isOpen === false ? 'lg:ml-[90px]' : 'lg:ml-72'
                )}
            >
                <Footer />
            </footer>
        </>
    )
}
