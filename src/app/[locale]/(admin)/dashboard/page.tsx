import PlaceholderContent from '@/components/demo/placeholder-content'
import { ContentLayout } from '@/components/admin-panel/content-layout'
import Breadcrumb from '@/components/admin-panel/Breadcrumb'

export default function DashboardPage() {
    const breadcrumbItems = [
        { href: '/', label: 'Home' },
        { href: '/dashboard', label: 'Dashboard' },
        { label: 'Posts', isCurrentPage: true },
    ]
    return (
        <ContentLayout title="Dashboard">
            <Breadcrumb items={breadcrumbItems} />
            <PlaceholderContent />
        </ContentLayout>
    )
}
