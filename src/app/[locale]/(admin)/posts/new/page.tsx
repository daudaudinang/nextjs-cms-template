import PlaceholderContent from '@/components/demo/placeholder-content'
import { ContentLayout } from '@/components/molecules/ContentLayout'
import Breadcrumb from '@/components/atoms/Breadcrumb'
import { useTranslations } from 'next-intl'

export default function NewPostPage() {
    const tMenu = useTranslations('menu')

    const breadcrumbItems = [
        { href: '/', label: tMenu('home') },
        { href: '/posts', label: tMenu('posts') },
        { label: tMenu('posts-new'), isCurrentPage: true },
    ]

    return (
        <ContentLayout title={tMenu('posts-new')}>
            <Breadcrumb items={breadcrumbItems} />
            <PlaceholderContent />
        </ContentLayout>
    )
}
