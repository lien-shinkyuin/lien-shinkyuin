import React from 'react';

export default function MenuPage() {
  const prices = [
    { name: '一般鍼灸施術', time: '約60分', price: '¥6,600' },
    { name: '美容鍼コース', time: '約50分', price: '¥7,700' },
    { name: '集中ケア（全身）', time: '約90分', price: '¥9,900' },
    { name: '初診料', time: '初回のみ', price: '¥2,200' },
  ];

  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-stone-800 mb-4">メニュー・料金</h1>
        <p className="text-stone-500">お一人おひとりの症状に合わせた最適な施術をご提案します。</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-stone-50 text-stone-600 uppercase text-sm">
              <th className="px-6 py-4 font-semibold">コース名</th>
              <th className="px-6 py-4 font-semibold">目安時間</th>
              <th className="px-6 py-4 font-semibold text-right">料金（税込）</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {prices.map((item, index) => (
              <tr key={index} className="hover:bg-stone-50 transition">
                <td className="px-6 py-5 font-medium text-stone-800">{item.name}</td>
                <td className="px-6 py-5 text-stone-500">{item.time}</td>
                <td className="px-6 py-5 text-right font-bold text-emerald-700">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 p-6 bg-emerald-50 rounded-xl border border-emerald-100 text-stone-700">
        <p className="text-sm leading-relaxed">
          ※症状や施術内容によって時間が前後する場合がございます。<br />
          ※健康保険の適用については、ご来院時にお気軽にご相談ください。
        </p>
      </div>
    </main>
  );
}