import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Miniverse Arts',
  description: 'Criamos o seu funko pop!',
  generator: 'FJ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
