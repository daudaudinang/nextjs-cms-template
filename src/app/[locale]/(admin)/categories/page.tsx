import PlaceholderContent from '@/components/demo/placeholder-content'
import { ContentLayout } from '@/components/admin-panel/content-layout'
import Breadcrumb from '@/components/admin-panel/Breadcrumb'

export default function CategoriesPage() {
    const breadcrumbItems = [
        { href: '/', label: 'Home' },
        { href: '/dashboard', label: 'Dashboard' },
        { label: 'Categories', isCurrentPage: true },
    ]

    return (
        <ContentLayout title="Categories">
            <Breadcrumb items={breadcrumbItems} />
            <PlaceholderContent />
        </ContentLayout>
    )
}
