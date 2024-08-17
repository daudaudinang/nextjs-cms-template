import PlaceholderContent from '@/components/demo/placeholder-content'
import { ContentLayout } from '@/components/admin-panel/content-layout'
import Breadcrumb from '@/components/admin-panel/Breadcrumb'

export default function PostsPage() {
    const breadcrumbItems = [
        { href: '/', label: 'Home' },
        { href: '/dashboard', label: 'Dashboard' },
        { label: 'Posts', isCurrentPage: true },
    ]

    return (
        <ContentLayout title="All Posts">
            <Breadcrumb items={breadcrumbItems} />
            <PlaceholderContent />
        </ContentLayout>
    )
}
