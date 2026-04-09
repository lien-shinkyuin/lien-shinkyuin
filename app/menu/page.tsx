import React from 'react';

export default function MenuPage() {
  const prices = [
    { name: '人気No.1 全身リセットコース', time: '約60分', price: '¥5,500' },
    { name: 'スキマ時間ケアコース', time: '約30分', price: '¥3,500' },
    { name: '美肌・小顔特化　美容鍼コース', time: '約50分', price: '¥5,500' },
    { name: '初めての方限定（平日限定）全身リセットコース', time: '約60分', price: '¥3,500' },
  ];

  return (
    // py-10(スマホ) / py-20(PC) に変更
    <main className="max-w-4xl mx-auto py-10 md:py-20 px-4 md:px-6">
      <div className="text-center mb-10 md:mb-16">
        {/* text-2xl(スマホ) / text-3xl(PC) */}
        <h1 className="text-2xl md:text-3xl font-bold text-stone-800 mb-3">メニュー・料金</h1>
        <p className="text-sm md:text-base text-stone-500">お一人おひとりに合わせた施術をご提案します。</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-stone-50 text-stone-600 uppercase text-xs md:text-sm">
              <th className="px-4 py-3 md:px-6 md:py-4 font-semibold">コース名</th>
              <th className="px-4 py-3 md:px-6 md:py-4 font-semibold">目安</th>
              <th className="px-4 py-3 md:px-6 md:py-4 font-semibold text-right">料金</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {prices.map((item, index) => (
              <tr key={index} className="hover:bg-stone-50 transition text-sm md:text-base">
                <td className="px-4 py-4 md:px-6 md:py-5 font-medium text-stone-800">{item.name}</td>
                <td className="px-4 py-4 md:px-6 md:py-5 text-stone-500 text-xs md:text-sm">{item.time}</td>
                <td className="px-4 py-4 md:px-6 md:py-5 text-right font-bold text-emerald-700 whitespace-nowrap">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 注意書きもスマホで少し小さく */}
      <div className="mt-8 p-5 bg-emerald-50 rounded-xl border border-emerald-100 text-stone-700 text-xs md:text-sm">
        <p className="leading-relaxed">
          ※症状によって時間が前後する場合がございます。<br />
          ※健康保険の適用については、ご来院時にご相談ください。
        </p>
      </div>
    </main>
  );
}