import React from 'react'
import MobileNavbar from '../components/MobileNavbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <html lang="ja">
      <body>
        {children}
        {/* 2. ここにメニューバーを追加！ */}
        <export default MobileNavbar />
      </body>
    </html>
  )
}