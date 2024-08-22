import PlaceholderContent from '@/components/demo/placeholder-content'
import { ContentLayout } from '@/components/molecules/ContentLayout'
import Breadcrumb from '@/components/atoms/Breadcrumb'

export default function PostsPage() {
    const breadcrumbItems = [
        { href: '/', label: 'Home' },
        { label: 'Posts', isCurrentPage: true },
    ]

    return (
        <ContentLayout title="All Posts">
            <Breadcrumb items={breadcrumbItems} />
            <PlaceholderContent />
        </ContentLayout>
    )
}
