import React from 'react';
import { Home, ClipboardList, MapPin, MessageCircle } from 'lucide-react';

const MobileNavbar = () => {
  const reservationUrl = "https://lin.ee/oNgp7Y2R";

  const menuItems = [
    { label: 'ホーム', icon: <Home size={20} />, href: '/' },
    { label: 'メニュー', icon: <ClipboardList size={20} />, href: '/menu' },
    { label: 'アクセス', icon: <MapPin size={20} />, href: '/access' },
    { label: 'LINE予約', icon: <MessageCircle size={20} />, href: reservationUrl, isExternal: true },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md border-t border-stone-200 dark:border-stone-800">
      <div className="grid h-full grid-cols-4 mx-auto font-medium">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.isExternal ? "_blank" : "_self"}
            rel={item.isExternal ? "noopener noreferrer" : ""}
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-stone-50 dark:hover:bg-stone-800 group transition-colors"
          >
            <div className="text-stone-500 dark:text-stone-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
              {item.icon}
            </div>
            <span className="text-[10px] mt-1 text-stone-500 dark:text-stone-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;