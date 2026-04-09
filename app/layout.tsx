import './globals.css'
import React from 'react'

export const metadata = {
  title: 'リアン鍼灸院',
  description: '心と体を整える、あなたのための癒やし空間。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-stone-50 text-stone-800">
        {/* 全ページ共通のナビゲーションメニュー */}
        <nav className="flex items-center justify-between px-8 py-6 bg-white shadow-sm sticky top-0 z-50">
          <a href="/" className="text-2xl font-bold text-emerald-700">リアン鍼灸院</a>
          <ul className="flex gap-8 font-medium">
            <li className="hover:text-emerald-600 cursor-pointer"><a href="/">ホーム</a></li>
            <li className="hover:text-emerald-600 cursor-pointer">
            <a href="/menu" className="block w-full h-full">メニュー・料金</a></li>
            <li className="hover:text-emerald-600 cursor-pointer">院内紹介</li>
            <li className="hover:text-emerald-600 cursor-pointer"><a href="/access">アクセス</a></li>
          </ul>
          <button className="bg-emerald-700 text-white px-5 py-2 rounded-full hover:bg-emerald-800 transition">
            ご予約はこちら
          </button>
        </nav>

        {/* 各ページの中身がここに入ります */}
        {children}

        {/* 共通のフッター（足跡） */}
        <footer className="bg-stone-100 py-10 text-center text-stone-500 text-sm">
          © 2026 リアン鍼灸院. All rights reserved.
        </footer>
      </body>
    </html>
  )
}