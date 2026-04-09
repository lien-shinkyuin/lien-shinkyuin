import React from 'react';

export default function Home() {
  return (
    <div>
      {/* メインコンテンツのみ残す */}
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