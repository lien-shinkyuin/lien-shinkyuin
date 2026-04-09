import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* ナビゲーションメニュー */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white shadow-sm sticky top-0 z-50">
        <div className="text-2xl font-bold text-emerald-700">リアン鍼灸院</div>
        <ul className="flex gap-8 font-medium">
          <li className="hover:text-emerald-600 cursor-pointer">ホーム</li>
          <li className="hover:text-emerald-600 cursor-pointer">メニュー・料金</li>
          <li className="hover:text-emerald-600 cursor-pointer">院内紹介</li>
          <li className="hover:text-emerald-600 cursor-pointer">アクセス</li>
        </ul>
        <button className="bg-emerald-700 text-white px-5 py-2 rounded-full hover:bg-emerald-800 transition">
          ご予約はこちら
        </button>
      </nav>

      {/* メインコンテンツ */}
      <main className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6">
          心と体を整える、<br />
          あなたのための癒やし空間。
        </h1>
        <p className="max-w-2xl text-lg text-stone-600 mb-10">
          岡山県で鍼灸院をお探しなら、リアン鍼灸院へ。一人ひとりに寄り添った丁寧な施術で、日常の疲れを解きほぐします。
        </p>
        <div className="w-full max-w-4xl aspect-video bg-stone-200 rounded-2xl flex items-center justify-center text-stone-400">
          ここに院内の写真などが入ります
        </div>
      </main>
    </div>
  );
}