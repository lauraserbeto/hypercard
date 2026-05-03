import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HyperCard — O Clube Financeiro da Elite',
  description: 'Serviços financeiros exclusivos para executivos, empresários e investidores de alta renda. Solicite seu convite.',
  keywords: ['banco premium', 'cartão black', 'banco executivos', 'alta renda', 'HyperCard'],
  authors: [{ name: 'HyperCard Team' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'HyperCard — O Clube Financeiro da Elite',
    description: 'Serviços financeiros exclusivos para os que definem o padrão.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://hypercard.com',
    siteName: 'HyperCard',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

import { ModalProvider } from '@/components/providers/modal-provider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} bg-black`}>
      <body className="font-sans antialiased bg-black text-white">
        <ModalProvider>
          {children}
        </ModalProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
