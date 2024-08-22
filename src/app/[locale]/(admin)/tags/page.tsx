import PlaceholderContent from '@/components/demo/placeholder-content'
import { ContentLayout } from '@/components/molecules/ContentLayout'
import Breadcrumb from '@/components/atoms/Breadcrumb'

export default function TagsPage() {
    const breadcrumbItems = [
        { href: '/', label: 'Home' },
        { label: 'Tags', isCurrentPage: true },
    ]

    return (
        <ContentLayout title="Tags">
            <Breadcrumb items={breadcrumbItems} />
            <PlaceholderContent />
        </ContentLayout>
    )
}
