import './globals.css'
import React from 'react'
import MobileNavbar from '../components/MobileNavbar';

export const metadata = {
  title: '倉敷の鍼灸なら「りあん鍼灸院」| 女性に優しい完全個室のプライベートサロン',
  description: '岡山県倉敷市日ノ出町の鍼灸院です。肩こり・腰痛・自律神経の乱れなど、一人ひとりに合わせたオーダーメイドの施術を提供。LINEで24時間予約受付中。',
  verification: {
    google: 'uYYHjlgI6RPasoLO51Wg9fV-KKByJDwxd3arxv_2_aY',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const reservationUrl = "https://lin.ee/oNgp7Y2R";
  const instagramUrl = "https://www.instagram.com/lien_shinkyuin?igsh=MTI3M2llMHZkZ2czMw==";

  return (
    <html lang="ja">
      <body className="bg-stone-50 text-stone-800 dark:bg-stone-900 dark:text-stone-100 flex flex-col min-h-screen pb-20 md:pb-0">
        <nav className="flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-transparent dark:border-stone-800">
          <a href="/" className="text-xl md:text-2xl font-bold text-emerald-800 dark:text-emerald-500 tracking-tight">りあん鍼灸院</a>
          
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex gap-8 font-medium text-stone-600 dark:text-stone-300">
              <li><a href="/" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition">ホーム</a></li>
              <li><a href="/menu" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition">メニュー</a></li>
              <li><a href="/access" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition">アクセス</a></li>
            </ul>

            <div className="flex items-center gap-4">
              {/* Instagramロゴ：色をピンクに固定し、ホバーで少し大きく */}
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:scale-110 transition-transform duration-300 flex items-center"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E1306C" 
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a href={reservationUrl} target="_blank" rel="noopener noreferrer" className="bg-emerald-700 text-white px-5 py-2 rounded-full hover:bg-emerald-800 transition shadow-md text-sm font-medium">
                ご予約
              </a>
            </div>
          </div>
        </nav>

        <main className="flex-grow">{children}</main>

        <footer className="bg-stone-800 dark:bg-black text-stone-200 py-16 px-6 border-t border-stone-700">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">りあん鍼灸院</h2>
              <p className="text-sm text-stone-400">一人ひとりの「絆」を大切に。倉敷のプライベートサロンです。</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">コンテンツ</h3>
              <ul className="space-y-2 text-sm text-stone-400">
                <li><a href="/" className="hover:text-emerald-400">ホーム</a></li>
                <li><a href="/menu" className="hover:text-emerald-400">メニュー・料金</a></li>
                <li><a href="/access" className="hover:text-emerald-400">アクセス・地図</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">所在地</h3>
              <p className="text-sm text-stone-400">岡山県倉敷市日ノ出町1丁目5-15<br />TEL: 090-7122-7638</p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto border-t border-stone-700 mt-12 pt-8 text-center text-xs text-stone-500">
            © 2026 りあん鍼灸院. All rights reserved.
          </div>
        </footer>
        <MobileNavbar />
      </body>
    </html>
  )
}