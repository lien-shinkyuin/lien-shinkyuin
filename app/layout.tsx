import './globals.css'
import React from 'react'

export const metadata = {
  title: '倉敷の鍼灸なら「りあん鍼灸院」| 女性に優しい完全個室のプライベートサロン',
  description: '岡山県倉敷市日ノ出町の鍼灸院です。肩こり・腰痛・自律神経の乱れなど、一人ひとりに合わせたオーダーメイドの施術を提供。LINEで24時間予約受付中。',
  // ↓ここにコピーした「content」の中の英数字だけを貼り付けます
  verification: {
    google: '<meta name="google-site-verification" content="ysi9xXGz8PkLOoOqBim83nRukChNe1IyWnYcstk_L4E" />',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 先ほどのtolの予約リンクをここにまとめました
  const reservationUrl = "https://lin.ee/oNgp7Y2R";

  return (
    <html lang="ja">
      <body className="bg-stone-50 text-stone-800 flex flex-col min-h-screen">
        {/* ナビゲーション */}
        <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <a href="/" className="text-xl md:text-2xl font-bold text-emerald-800 tracking-tight">りあん鍼灸院</a>
          <ul className="hidden md:flex gap-8 font-medium text-stone-600">
            <li><a href="/" className="hover:text-emerald-700 transition">ホーム</a></li>
            <li><a href="/menu" className="hover:text-emerald-700 transition">メニュー</a></li>
            <li><a href="/access" className="hover:text-emerald-700 transition">アクセス</a></li>
          </ul>
          <a href={reservationUrl} target="_blank" rel="noopener noreferrer" className="bg-emerald-700 text-white px-5 py-2 rounded-full hover:bg-emerald-800 transition shadow-md text-sm font-medium">
            ご予約はこちら
          </a>
        </nav>

        {/* メインコンテンツ */}
        <div className="flex-grow">
          {children}
        </div>

        {/* プロ仕様の黒系フッター */}
        <footer className="bg-stone-800 text-stone-200 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">りあん鍼灸院</h2>
              <p className="text-sm leading-relaxed text-stone-400">
                一人ひとりの「絆」を大切に。<br />
                心と体の調和をお手伝いする、<br />
                倉敷のプライベートサロンです。
              </p>
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
              <h3 className="font-bold text-white mb-4">所在地・連絡先</h3>
              <p className="text-sm text-stone-400">
                〒710-0063<br />
                岡山県倉敷市日ノ出町1丁目5-15<br />
                TEL: 090-7122-7638<br /><br />
                <span className="text-xs text-stone-500">※施術中はお電話に出られない場合がございます。</span>
              </p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto border-t border-stone-700 mt-12 pt-8 text-center text-xs text-stone-500">
            © 2026 りあん鍼灸院. All rights reserved.
          </div>
        </footer>

        {/* スマホ固定バー（予約システムに直結） */}
        <div className="md:hidden sticky bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-stone-100 z-50">
          {/* スマホ固定バーのテキスト修正例 */}
          <a href={reservationUrl} target="_blank" rel="noopener noreferrer" className="...">
           LINEで予約・相談する
          </a>
        </div>
      </body>
    </html>
  )
}