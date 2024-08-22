import PlaceholderContent from '@/components/demo/placeholder-content'
import { ContentLayout } from '@/components/molecules/ContentLayout'
import Breadcrumb from '@/components/atoms/Breadcrumb'

export default function CategoriesPage() {
    const breadcrumbItems = [
        { href: '/', label: 'Home' },
        { label: 'Categories', isCurrentPage: true },
    ]

    return (
        <ContentLayout title="Categories">
            <Breadcrumb items={breadcrumbItems} />
            <PlaceholderContent />
        </ContentLayout>
    )
}
