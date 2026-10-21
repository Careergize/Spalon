import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    "HAIR COUTURE & KERATIN",
    "KERALA BRIDAL MAKEOVER",
    "HYDRA GLOW FACIAL",
    "TEAR-FREE KIDS HAIRCUTS",
    "PAINLESS EAR PIERCING",
    "AROMA CRYSTAL PEDICURE",
    "CAPITAL TOWER • KUMARAPURAM",
    "OPEN ALL 7 DAYS"
  ];

  return (
    <div className="w-full bg-[#1B0A13] text-[#FDF4F7] py-3.5 border-y border-[#4A1A30] overflow-hidden select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-semibold tracking-[0.25em] uppercase">
        {/* Repeat list for seamless infinite marquee loop */}
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="hover:text-[#E6C280] transition-colors">{text}</span>
            <span className="text-[#E6C280] text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
