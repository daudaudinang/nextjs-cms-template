import PlaceholderContent from '@/components/demo/placeholder-content'
import { ContentLayout } from '@/components/molecules/ContentLayout'
import Breadcrumb from '@/components/atoms/Breadcrumb'
import { useTranslations } from 'next-intl'

export default function CategoriesPage() {
    const tMenu = useTranslations('menu')

    const breadcrumbItems = [
        { href: '/', label: tMenu('home') },
        { label: tMenu('categories'), isCurrentPage: true },
    ]

    return (
        <ContentLayout title={tMenu('categories')}>
            <Breadcrumb items={breadcrumbItems} />
            <PlaceholderContent />
        </ContentLayout>
    )
}
