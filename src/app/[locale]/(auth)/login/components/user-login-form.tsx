'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'

import { cn } from '@/utils/cn-merge'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { PasswordInput } from '@/components/ui/password-input'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ILoginForm, login } from '@/actions/auth'
import { useTranslations } from 'next-intl'

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>

type EventSubmit = {
    preventDefault: () => void
    target: {
        email: { value: string }
        password: { value: string }
    }
}

export function UserLoginForm({ className, ...props }: Readonly<UserAuthFormProps>) {
    const tLogin = useTranslations('page.login')
    const tCommon = useTranslations('common')

    const router = useRouter()
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function onSubmit(event: EventSubmit) {
        event.preventDefault()

        const formData: ILoginForm = {
            email: event.target?.email?.value,
            password: event.target?.password?.value,
        }

        const result = await login(formData)

        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)

        if (result.success) {
            router.replace('/')
        }
    }

    return (
        <div className={cn('grid gap-6', className)} {...props}>
            <form onSubmit={(e: any) => onSubmit(e)}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            {tLogin('email')}
                        </Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            {tLogin('password')}
                        </Label>
                        <PasswordInput
                            id="password"
                            placeholder="password"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                        {tLogin('confirm-btn')}
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        {tCommon('or')}
                    </span>
                </div>
            </div>
            <Button variant="outline" type="button" disabled={isLoading}>
                {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Icons.gitHub className="mr-2 h-4 w-4" />
                )}{' '}
                GitHub
            </Button>
        </div>
    )
}
