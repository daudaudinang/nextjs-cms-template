import PlaceholderContent from '@/components/demo/placeholder-content'
import { ContentLayout } from '@/components/molecules/ContentLayout'
import Breadcrumb from '@/components/atoms/Breadcrumb'

export default function UsersPage() {
    const breadcrumbItems = [
        { href: '/', label: 'Home' },
        { label: 'Users', isCurrentPage: true },
    ]

    return (
        <ContentLayout title="Users">
            <Breadcrumb items={breadcrumbItems} />
            <PlaceholderContent />
        </ContentLayout>
    )
}
