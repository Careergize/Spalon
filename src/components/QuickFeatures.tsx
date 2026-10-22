import React from 'react';
import { UserIcon, HeartIcon, ShieldCheckIcon, AwardIcon } from './Icons';

export const QuickFeatures: React.FC = () => {
  const features = [
    {
      icon: <UserIcon className="w-6 h-6 text-rose-700" />,
      title: "Ladies Sanctuary",
      description: "A private, serene parlour designed for your ultimate comfort, relaxation, and bespoke pampering.",
      badge: "Exclusive & Safe",
      bgClass: "from-rose-50 to-pink-50/50"
    },
    {
      icon: <HeartIcon className="w-6 h-6 text-amber-700" />,
      title: "Tear-Free Kids Grooming",
      description: "Specialized, patient stylists trained to keep toddlers & kids relaxed with gentle cuts and cheerful fun.",
      badge: "Kids Loved",
      bgClass: "from-amber-50 to-orange-50/50"
    },
    {
      icon: <AwardIcon className="w-6 h-6 text-rose-700" />,
      title: "Signature Bridal Studio",
      description: "Flawless HD & Airbrush makeover, expert saree draping, and customized pre-bridal glow packages.",
      badge: "Kerala Weddings",
      bgClass: "from-rose-50 to-red-50/50"
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-emerald-700" />,
      title: "Medical-Grade Hygiene",
      description: "Strict sterilization of tools, disposable linens, and top international salon-grade formulations.",
      badge: "Zero Compromise",
      bgClass: "from-emerald-50 to-teal-50/50"
    }
  ];

  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 bg-gradient-to-br ${item.bgClass} border border-stone-200/60 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/80 text-stone-700 border border-stone-200/60">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
