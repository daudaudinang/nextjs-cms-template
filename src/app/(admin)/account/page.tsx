import PlaceholderContent from '@/components/demo/placeholder-content'
import { ContentLayout } from '@/components/admin-panel/content-layout'
import Breadcrumb from '@/components/admin-panel/Breadcrumb'

export default function AccountPage() {
    const breadcrumbItems = [
        { href: '/', label: 'Home' },
        { href: '/dashboard', label: 'Dashboard' },
        { label: 'Account', isCurrentPage: true },
    ]

    return (
        <ContentLayout title="Account">
            <Breadcrumb items={breadcrumbItems} />
            <PlaceholderContent />
        </ContentLayout>
    )
}
