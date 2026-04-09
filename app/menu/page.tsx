"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

export default function MenuPage() {
  const prices = [
    { 
      name: '人気No.1 全身リセットコース', 
      time: '約60分', 
      price: '¥5,500', 
      desc: '肩こり・腰痛・疲労感など、お体全体を丁寧に整えます。',
      img: '/hero1.jpg' // 画像パスを差し替えてください
    },
    { 
      name: 'スキマ時間ケアコース', 
      time: '約30分', 
      price: '¥3,500', 
      desc: 'お忙しい方に。気になる部分を集中してケアします。',
      img: '/hero2.jpg'
    },
    { 
      name: '美肌・小顔特化 美容鍼コース', 
      time: '約50分', 
      price: '¥5,500', 
      desc: 'お顔の血行を促進し、内側から輝くハリのある肌へ。',
      img: '/hero3.png'
    },
    { 
      name: '初めての方限定（平日限定）全身リセットコース', 
      time: '約60分', 
      price: '¥3,500', 
      desc: 'まずは当院の施術を体験してみたい方に。',
      img: '/hero4.jpg'
    },
  ];

  return (
    <main className="max-w-5xl mx-auto py-10 md:py-20 px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 md:mb-20"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-stone-800 mb-3 text-serif">メニュー・料金</h1>
        <p className="text-sm md:text-base text-stone-500">お一人おひとりに合わせた施術をご提案します。</p>
      </motion.div>

      <div className="space-y-6">
        {prices.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition duration-300"
          >
            {/* 左側：写真 */}
            <div className="relative w-full md:w-48 h-40 md:h-auto overflow-hidden">
              <Image 
                src={item.img} 
                alt={item.name} 
                fill 
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* 右側：説明と料金 */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-lg md:text-xl font-bold text-stone-800">{item.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-700 font-bold text-xl">{item.price}</span>
                  <span className="text-stone-400 text-xs">({item.time})</span>
                </div>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-12 p-6 bg-stone-50 rounded-xl text-stone-600 text-xs md:text-sm border-l-4 border-emerald-600"
      >
        <p>※症状によって時間が前後する場合がございます。</p>
        <p>※健康保険の適用については、ご来院時にご相談ください。</p>
      </motion.div>
    </main>
  );
}