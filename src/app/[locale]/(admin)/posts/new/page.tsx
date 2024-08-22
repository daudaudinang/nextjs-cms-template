import PlaceholderContent from '@/components/demo/placeholder-content'
import { ContentLayout } from '@/components/molecules/ContentLayout'
import Breadcrumb from '@/components/atoms/Breadcrumb'

export default function NewPostPage() {
    const breadcrumbItems = [
        { href: '/', label: 'Home' },
        { href: '/posts', label: 'Posts' },
        { label: 'New', isCurrentPage: true },
    ]

    return (
        <ContentLayout title="New Post">
            <Breadcrumb items={breadcrumbItems} />
            <PlaceholderContent />
        </ContentLayout>
    )
}
