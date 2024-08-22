import { Link } from '@/components/atoms/Link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'

export default function PlaceholderContent() {
    const tDemo = useTranslations('demo')

    return (
        <Card className="rounded-lg border-none mt-6">
            <CardContent className="p-6">
                <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
                    <div className="flex flex-col relative">
                        <Image
                            src="/placeholder.png"
                            alt="Placeholder Image"
                            width={500}
                            height={500}
                            priority
                        />
                        <div className="absolute -bottom-8 right-0">
                            <Link
                                href="https://www.freepik.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-muted-foreground"
                            >
                                {tDemo('title')}
                            </Link>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
