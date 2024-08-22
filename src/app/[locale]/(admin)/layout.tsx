import AdminPanelLayout from '@/components/molecules/AdminPanelLayout'

export default function DemoLayout({ children }: { children: React.ReactNode }) {
    return <AdminPanelLayout>{children}</AdminPanelLayout>
}
