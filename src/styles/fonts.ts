import { Nunito, Inter, Oswald } from 'next/font/google'

export const nunito = Nunito({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '600'],
})

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: '600',
})

export const oswald = Oswald({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600'],
})
