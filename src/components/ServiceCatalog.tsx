import React, { useEffect, useRef } from 'react';
import { SALON_INFO } from '../data/salonData';

interface ServiceCatalogProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

interface LaDivaServiceItem {
  id: string;
  title: string;
  tag?: string;
  description: string;
  image: string;
}

export const ServiceCatalog: React.FC<ServiceCatalogProps> = ({ 
  onSelectServiceForBooking 
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const timer = window.setInterval(() => {
      const track = carouselRef.current;
      if (!track || document.hidden) return;
      const bounds = track.getBoundingClientRect();
      if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;
      const first = track.children[0] as HTMLElement | undefined;
      const second = track.children[1] as HTMLElement | undefined;
      if (!first || !second) return;
      const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
      track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + second.offsetLeft - first.offsetLeft, behavior: 'smooth' });
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  // Services matching official salon service categories
  const services: LaDivaServiceItem[] = [
    {
      id: 'hair-smoothening',
      title: 'Hair Smoothening',
      tag: 'HAIR CARE',
      description: 'L\'Oréal Professionnel silk-infusion smoothening and rebonding for sleek, frizz-free hair.',
      image: '/images/service_hair_smoothening.jpg',
    },
    {
      id: 'hair-styling',
      title: 'Hair Styling',
      tag: 'HAIR STUDIO',
      description: 'Get a fresh look for your hair with our talented hairstylists and advance cuts.',
      image: '/images/service_hair_styling.jpg',
    },
    {
      id: 'threading-eyebrows',
      title: 'Brows & Threading',
      tag: 'GROOMING',
      description: 'Highlight your eyes and shape your brows with gentle, hygienic precision threading.',
      image: '/images/service_brows_lashes.jpg',
    },
    {
      id: 'skin-treatment',
      title: 'Skin Care & Facial',
      tag: 'SKIN CARE',
      description: 'Targeted skin treatments and anti-acne facials for healthy, luminous, blemish-free skin.',
      image: '/images/facial_spa.jpg',
    },
    {
      id: 'foot-massage',
      title: 'Foot Massage',
      tag: 'MASSAGE',
      description: 'Relaxing reflexology foot and calf massage with aromatic oils to melt away daily fatigue.',
      image: '/images/service_foot_massage.jpg',
    },
    {
      id: 'premium-manicure',
      title: 'Premium Manicure',
      tag: 'NAIL SPA',
      description: 'Luxurious nail shaping, warm soak, gentle cuticle care, and high-gloss polish finish.',
      image: '/images/service_manicure.jpg',
    },
    {
      id: 'bridal-basic-hair-styling',
      title: 'Bridal Hair Styling',
      tag: 'BRIDAL STUDIO',
      description: 'Exquisite traditional South Indian braids, jasmine floral setting, and festive updos.',
      image: '/images/bridal_glow.jpg',
    },
    {
      id: 'ear-piercing',
      title: 'Ear Piercing',
      tag: 'PIERCING',
      description: 'Sterile, quick, and painless medical-grade ear piercing for ladies and children.',
      image: '/images/service_ear_piercing.jpg',
    },
    {
      id: 'advance-hair-cut',
      title: 'Advance Hair Cut',
      tag: 'HAIR CARE',
      description: 'Face-framing layers, feather cuts, and curtain bangs sculpted by certified senior stylists.',
      image: '/images/spalon_hair_layers.jpg',
    },
    {
      id: 'waxing',
      title: 'Waxing Services',
      tag: 'GROOMING',
      description: 'Gentle full-body, arms, and legs waxing leaving skin flawlessly soft and smooth.',
      image: '/images/service_waxing.jpg',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#321422] relative overflow-hidden border-b border-[#4A1A30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Column Heading + Right Column Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading and Label (Exact match to second picture) */}
          <div className="lg:col-span-4 flex flex-col justify-center pr-0 lg:pr-6">
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#E6C280] mb-3 sm:mb-5 block">
              OUR SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[56px] text-white font-normal leading-[1.12] tracking-tight">
              BEAUTY CARE,<br />MADE PERSONAL.
            </h2>
            <p className="mt-4 sm:mt-6 text-sm text-[#D4BCC7] font-light leading-relaxed max-w-sm">
              Discover our bespoke hair, skin, and nail treatments meticulously performed by certified stylists at Capital Tower, Kumarapuram.
            </p>

            {/* Mobile Carousel Controls & Swipe Hint (Mobile / Tablet) */}
            <div className="flex lg:hidden items-center gap-3 mt-6">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full bg-[#C08A99] hover:bg-[#A8707F] text-white flex items-center justify-center shadow-lg transition-all active:scale-90 cursor-pointer"
                aria-label="Previous service"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>

              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full bg-[#C08A99] hover:bg-[#A8707F] text-white flex items-center justify-center shadow-lg transition-all active:scale-90 cursor-pointer"
                aria-label="Next service"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>

              <span className="text-[11px] uppercase tracking-wider text-[#D4BCC7] font-medium pl-1">
                Swipe or tap to explore
              </span>
            </div>

            {/* Quick WhatsApp Inquiry Link */}
            <div className="mt-6 sm:mt-8 pt-6 border-t border-[#5A243D] flex items-center gap-4">
              <a
                href={`https://wa.me/${SALON_INFO.phoneClean.replace('+', '')}?text=Hi%20Spalon%2C%20I%20would%20like%20to%20view%20your%20full%20services%20menu.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.18em] font-semibold text-[#E6C280] hover:text-white transition-colors flex items-center gap-2"
              >
                <span>Full Menu via WhatsApp</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Carousel Track with Circular Navigation Arrows */}
          <div className="lg:col-span-8 relative">
            
            {/* Desktop Left Circular Arrow (Pink/Mauve #C08A99) */}
            <button
              onClick={() => scroll('left')}
              className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#C08A99] hover:bg-[#A8707F] text-white items-center justify-center shadow-2xl transition-all active:scale-90 cursor-pointer"
              aria-label="Previous service"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>

            {/* Desktop Right Circular Arrow (Pink/Mauve #C08A99) */}
            <button
              onClick={() => scroll('right')}
              className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#C08A99] hover:bg-[#A8707F] text-white items-center justify-center shadow-2xl transition-all active:scale-90 cursor-pointer"
              aria-label="Next service"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>

            {/* Horizontal Scroll Track */}
            <div
              ref={carouselRef}
              className="flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-none py-4 px-1 sm:px-2 snap-x snap-mandatory touch-pan-x"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {services.map((item) => (
                <div
                  key={item.id}
                  className="w-[270px] xs:w-[300px] sm:w-[330px] md:w-[360px] h-[460px] sm:h-[540px] shrink-0 relative overflow-hidden group select-none snap-start bg-[#1B0A13] shadow-2xl border border-[#4A1A30]"
                >
                  {/* Photo Background */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B0A13]/95 via-[#1B0A13]/30 to-transparent pointer-events-none" />

                  {/* Top-Left Sage Green Category Pill */}
                  {item.tag && (
                    <div className="absolute top-5 left-5 z-10">
                      <span className="bg-[#321422]/90 text-white text-[11px] font-medium tracking-wider uppercase px-3.5 py-1.5 rounded-full inline-block shadow-md">
                        {item.tag}
                      </span>
                    </div>
                  )}

                  {/* Bottom Content & View Details Button */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col items-start">
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-200/90 font-light leading-relaxed mb-5 line-clamp-2">
                      {item.description}
                    </p>

                    <button
                      onClick={() => onSelectServiceForBooking(item.id)}
                      className="inline-block border border-white/80 hover:border-white hover:bg-white hover:text-[#321422] text-white text-xs font-semibold uppercase tracking-[0.2em] py-3 px-6 transition-all duration-300 cursor-pointer"
                    >
                      BOOK THIS SERVICE
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


