import PlaceholderContent from '@/components/demo/placeholder-content'
import { ContentLayout } from '@/components/molecules/ContentLayout'
import Breadcrumb from '@/components/atoms/Breadcrumb'

export default function DashboardPage() {
    const breadcrumbItems = [
        { href: '/', label: 'Home' },
        { label: 'Dashboard', isCurrentPage: true },
    ]
    return (
        <ContentLayout title="Dashboard">
            <Breadcrumb items={breadcrumbItems} />
            <PlaceholderContent />
        </ContentLayout>
    )
}
