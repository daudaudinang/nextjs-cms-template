'use server'

import { cookies } from 'next/headers'

export interface ILoginForm {
    email: string
    password: string
}

export async function login(formData: ILoginForm) {
    const email = formData['email']
    // const password = formData['password']

    try {
        // Thực hiện xác thực (ví dụ: gọi API hoặc kiểm tra database)
        // const user = await authenticateUser(email, password)
        const user = { id: 1, name: 'John Doe', email }

        // Nếu xác thực thành công, set cookie
        cookies().set('currentUser', JSON.stringify(user), {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })

        return { success: true, user: { id: user.id, name: user.name, email: user.email } }
    } catch (error: any) {
        return { success: false, error: error?.message }
    }
}

export async function logout() {
    cookies().delete('currentUser')
}
