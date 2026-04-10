import React from 'react';

export default function AccessPage() {
  return (
    <main className="max-w-4xl mx-auto py-10 md:py-20 px-4 md:px-6">
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-stone-800 dark:text-stone-100 mb-3">アクセス</h1>
        <p className="text-sm md:text-base text-stone-500 dark:text-stone-400">りあん鍼灸院への行き方をご案内します。</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* 左側：住所情報 */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-bold text-emerald-700 dark:text-emerald-400 mb-2 border-b border-emerald-100 dark:border-emerald-900/30 pb-2">所在地</h2>
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
              〒710-0063<br />
              岡山県倉敷市日ノ出町1丁目5-15<br />
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-emerald-700 dark:text-emerald-400 mb-2 border-b border-emerald-100 dark:border-emerald-900/30 pb-2">電話番号</h2>
            <p className="text-xl font-bold text-stone-800 dark:text-stone-100">090-7122-7638</p>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">※施術中はお電話に出られない場合がございます。</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-emerald-700 dark:text-emerald-400 mb-2 border-b border-emerald-100 dark:border-emerald-900/30 pb-2">診療時間</h2>
            <div className="text-sm text-stone-700 dark:text-stone-300 space-y-1">
              <p className="flex justify-between text-base"><span>平日：</span><span>9:00 〜 19:00</span></p>
              <p className="flex justify-between text-base border-b border-stone-100 dark:border-stone-800 pb-1"><span>土日：</span><span>9:00 〜 19:00</span></p>
              <p className="text-stone-500 dark:text-stone-400 pt-1 text-sm">休診日：第3・日曜日　月曜日</p>
            </div>
          </div>
        </div>

        {/* 右側：Googleマップ */}
        <div className="w-full aspect-square bg-stone-100 dark:bg-stone-800 rounded-2xl overflow-hidden shadow-inner border border-stone-200 dark:border-stone-700">
         <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.454269165682!2d133.76709477647244!3d34.60545547295416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35515771d6ba44c7%3A0x4c099b9b8d38f30b!2z44OC44GC44KT6Y2854G46Zmi!5e0!3m2!1sja!2sjp!4v1712731200000!5m2!1sja!2sjp"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="りあん鍼灸院の地図"
></iframe>
        </div>
      </div>
    </main>
  );
}