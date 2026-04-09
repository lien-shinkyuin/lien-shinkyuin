import React from 'react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      {/* メインビジュアル（ヒーローセクション） */}
      <section className="relative h-[80vh] flex items-center justify-center bg-stone-100">
        <div className="absolute inset-0 bg-black/10 z-10"></div>
        {/* メイン写真 */}
        <Image
          src="/hero.jpg"  // 画像のファイル名に合わせてください (.pngなら.pngに)
          alt="りあん鍼灸院の院内風景"
          fill
          priority
          unoptimized //
          className="object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6 tracking-wider drop-shadow-[0_2px_2px_rgba(255,255,255,0.7)]">
            心と体を整える、<br />あなたのための癒やし空間。
          </h1>
          <p className="text-lg md:text-xl text-emerald-900 mb-10 drop-shadow-[0_2px_2px_rgba(255,255,255,0.7)]">
            倉敷市日ノ出町のプライベート鍼灸サロン「りあん鍼灸院」
          </p>
          <a 
            href="https://lin.ee/oNgp7Y2R" 
            className="inline-block bg-emerald-700 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-emerald-800 transition shadow-lg"
             >
            まずはご相談ください
          </a>
        </div>
      </section>

      {/* 当院の3つの特長 */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-stone-800 mb-16 underline decoration-emerald-200 underline-offset-8">
            当院が選ばれる理由
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "完全個室のプライベート空間", desc: "周りを気にせず、リラックスして施術を受けられます。" },
              { title: "一人ひとりに合わせたオーダーメイド", desc: "お悩みをお聞きし、最適な施術プランを提案します。" },
              { title: "国家資格保持者による安心の技術", desc: "確かな知識と経験で、あなたの健康をサポートします。" }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 text-stone-800">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* メッセージセクション */}
      <section className="py-20 px-6 bg-emerald-50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* 先生（プロフィール）写真 */}
          <div className="w-full md:w-1/2 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-stone-200">
            <Image
              src="/profile.jpg" // 画像のファイル名に合わせてください
              alt="院長の生駒先生"
              width={800}
              height={1000}
              unoptimized //
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-stone-800 mb-6">「つながり」を大切にする鍼灸院</h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              院名の「Lien（リアン）」はフランス語で「絆・つながり」を意味します。<br /><br />
              患者様との対話を大切にし、痛みや不調の改善だけでなく、毎日を笑顔で過ごせるようお手伝いをしたいと考えています。倉敷の皆様に愛される場所を目指して、心を込めて施術いたします。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}