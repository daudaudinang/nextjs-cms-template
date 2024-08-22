import PlaceholderContent from '@/components/demo/placeholder-content'
import { ContentLayout } from '@/components/molecules/ContentLayout'
import Breadcrumb from '@/components/atoms/Breadcrumb'

export default function AccountPage() {
    const breadcrumbItems = [
        { href: '/', label: 'Home' },
        { label: 'Account', isCurrentPage: true },
    ]

    return (
        <ContentLayout title="Account">
            <Breadcrumb items={breadcrumbItems} />
            <PlaceholderContent />
        </ContentLayout>
    )
}
