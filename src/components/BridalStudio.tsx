import React from 'react';
import { 
  CalendarIcon, 
  WhatsAppIcon, 
  CheckIcon, 
  StarIcon,
  HeartIcon
} from './Icons';
import { SALON_INFO } from '../data/salonData';

interface BridalStudioProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const BridalStudio: React.FC<BridalStudioProps> = ({ onOpenBooking }) => {
  const bridalHighlights = [
    "High-Definition (HD) & Airbrush sweat-proof makeup calibrated for Kerala weather",
    "Specialized Kerala Kasavu & Kanchipuram precision saree pleating & draping",
    "Authentic fresh jasmine (mulla poo) veni floral hair braiding & modern updos",
    "Complete temple & diamond bridal jewellery fixation & bindi setting",
    "Pre-bridal skin detox: 24K gold facials, body polishing & hair restoration spa",
    "Private air-conditioned bridal dressing suite in Kumarapuram"
  ];

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#240E1B] text-[#FDF4F7] relative overflow-hidden border-b border-[#3D1426] scroll-mt-20">
      <div id="bridal" className="absolute -top-24 pointer-events-none" />
      {/* Warm atmospheric glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#881337]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#321422]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E6C280] mb-3 block">
            ✦ Haute Bridal Atelier
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
            The Royal <span className="font-script text-[#E6C280] font-normal lowercase text-5xl sm:text-7xl px-2">Bridal</span> Lounge
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D4BCC7] leading-relaxed font-light">
            From auspicious Kerala Muhurthams to glamorous reception galas, step into your wedding day with poise, radiance, and timeless grace.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Arched Bridal Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-t-full rounded-b-[40px] overflow-hidden border-2 border-[#E6C280]/40 shadow-2xl shadow-black/80 aspect-[3/4] bg-[#321422] group">
              <img
                src="/images/bridal_glow.jpg"
                alt="Kerala Bridal Makeover at Spalon Trivandrum"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#240E1B]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#240E1B] bg-[#E6C280] px-3 py-1 rounded-full shadow-sm">
                  Kerala Muhurtham
                </span>
                <p className="font-serif text-xl font-normal text-white mt-2">
                  Traditional Elegance &amp; HD Artistry
                </p>
                <div className="flex items-center justify-center gap-1 text-[#E6C280] mt-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-3.5 h-3.5 fill-[#E6C280] text-[#E6C280]" />
                  ))}
                  <span className="text-xs text-[#D4BCC7] font-light ml-2">150+ Happy Kerala Brides</span>
                </div>
              </div>
            </div>

            {/* Floating Humidity Proof Tag */}
            <div className="absolute -bottom-6 -left-6 bg-[#321422] border border-[#5A243D] p-4 rounded-2xl shadow-2xl max-w-[200px] hidden sm:block">
              <div className="flex items-center gap-2 text-[#E6C280] mb-1">
                <HeartIcon className="w-3.5 h-3.5 text-[#E6C280]" />
                <span className="text-[10px] font-bold uppercase tracking-wider">16-Hour Hold</span>
              </div>
              <p className="text-[11px] text-[#D4BCC7] leading-snug font-light">
                Proof against coastal humidity and heavy stage lights.
              </p>
            </div>
          </div>

          {/* Right Column: Highlights & Packages */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {bridalHighlights.map((text, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-4 rounded-2xl bg-[#321422]/70 border border-[#5A243D] hover:border-[#E6C280]/40 transition-colors"
                >
                  <div className="w-4 h-4 rounded-full bg-[#E6C280]/20 text-[#E6C280] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-xs text-[#FDF4F7] leading-snug font-light">{text}</span>
                </div>
              ))}
            </div>

            {/* Featured Packages Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              
              <div className="p-6 rounded-3xl bg-[#321422] border border-[#5A243D] flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#E6C280] uppercase tracking-wider mb-2">
                    <span>Auspicious Muhurtham</span>
                    <span className="bg-[#E6C280]/20 px-2 py-0.5 rounded text-[10px] text-[#E6C280]">Popular</span>
                  </div>
                  <h4 className="font-serif text-xl font-normal text-white">Royal Kasavu HD Package</h4>
                  <p className="text-xs text-[#D4BCC7] mt-1 leading-relaxed font-light">
                    Sweat-proof HD makeup, crisp saree pleating, jasmine hair weaving, lash extensions.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#4A1A30] flex items-center justify-between">
                  <span className="text-[#E6C280] text-xs font-semibold uppercase tracking-wider">✦ Signature Muhurtham</span>
                  <button
                    onClick={() => onOpenBooking('bridal-muhurtham-hd')}
                    className="text-xs uppercase tracking-wider font-bold text-[#240E1B] bg-[#E6C280] hover:bg-white px-4 py-2 rounded-full transition-colors cursor-pointer"
                  >
                    Select
                  </button>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#321422] border border-[#5A243D] flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#E6C280] uppercase tracking-wider mb-2">
                    <span>Evening Reception</span>
                    <span className="bg-[#881337]/40 px-2 py-0.5 rounded text-[10px] text-[#F4CCD8]">Glam</span>
                  </div>
                  <h4 className="font-serif text-xl font-normal text-white">Airbrush Celebrity Glam</h4>
                  <p className="text-xs text-[#D4BCC7] mt-1 leading-relaxed font-light">
                    Featherlight silicone airbrush finish, Hollywood waves or updo, gown styling.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#4A1A30] flex items-center justify-between">
                  <span className="text-[#E6C280] text-xs font-semibold uppercase tracking-wider">✦ Celebrity HD Glam</span>
                  <button
                    onClick={() => onOpenBooking('bridal-reception-glam')}
                    className="text-xs uppercase tracking-wider font-bold text-[#240E1B] bg-[#E6C280] hover:bg-white px-4 py-2 rounded-full transition-colors cursor-pointer"
                  >
                    Select
                  </button>
                </div>
              </div>

            </div>

            {/* Bridal Trial Callout */}
            <div className="p-5 rounded-2xl bg-[#1B0A13] border border-[#5A243D] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="font-serif text-base font-bold text-white">Need a Bridal Consultation or Trial?</h5>
                <p className="text-xs text-[#D4BCC7] font-light mt-0.5">
                  Meet our master bridal artists in Kumarapuram for an attire &amp; skin tone review.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${SALON_INFO.phoneClean.replace('+', '')}?text=Hi%20Spalon%2C%20I%20would%20like%20to%20consult%20for%20my%20wedding%20bridal%20makeup.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#881337] to-[#BE185D] shadow transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Bridal Chat</span>
                </a>

                <button
                  onClick={() => onOpenBooking('bridal-muhurtham-hd')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold text-[#E6C280] bg-[#321422] hover:bg-[#3D192B] border border-[#5A243D] transition-all cursor-pointer"
                >
                  <CalendarIcon className="w-4 h-4 text-[#E6C280]" />
                  <span>Book Trial</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
