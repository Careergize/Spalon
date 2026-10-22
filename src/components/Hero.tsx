import React from 'react';
import { 
  StarIcon, 
  CalendarIcon, 
  WhatsAppIcon, 
  PhoneIcon, 
  MapPinIcon 
} from './Icons';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-[#240E1B] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#3D1426]">
      {/* Decorative ambient velvet glow matching logo */}
      <div className="absolute top-10 right-1/4 w-[450px] h-[450px] rounded-full bg-[#881337]/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#321422]/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Minimal Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#321422] border border-[#5A243D] text-[#E6C280] text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold mb-6 shadow-sm max-w-full truncate">
              <span className="w-2 h-2 rounded-full bg-[#E6C280] shrink-0 animate-pulse" />
              <span className="truncate">Capital Tower, Kumarapuram, Trivandrum</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.14] sm:leading-[1.08] tracking-tight">
              Reveal your <span className="font-script text-[#E6C280] font-normal lowercase text-4xl xs:text-5xl sm:text-6xl lg:text-7xl px-1">true radiance</span> through timeless craft.
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#D4BCC7] max-w-xl leading-relaxed font-light">
              Welcome to <strong className="text-white">Spalon</strong>, an exclusive ladies &amp; kids sanctuary in Trivandrum. 
              From precision hair keratin &amp; hydra facials to royal Kerala bridal couture and 
              stress-free haircuts for your little ones.
            </p>

            {/* CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#881337] via-[#9F1239] to-[#BE185D] hover:from-[#9F1239] hover:to-[#E11D48] shadow-lg shadow-[#1B0A13] transition-all cursor-pointer active:scale-95 border border-[#E6C280]/20"
              >
                <CalendarIcon className="w-4 h-4 text-[#F3E5AB]" />
                <span>Book Appointment</span>
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.phoneClean.replace('+', '')}?text=Hello%20Spalon%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-bold text-[#FDF4F7] bg-[#321422] hover:bg-[#3D192B] border border-[#5A243D] transition-all shadow-xs active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${SALON_INFO.phoneClean}`}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#D4BCC7] hover:text-white transition-all"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-[#E6C280]" />
                <span>{SALON_INFO.phone}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-2 sm:gap-6 pt-6 border-t border-[#3D1426] w-full max-w-lg">
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#E6C280]">4.9 ★</span>
                <p className="text-[10px] sm:text-[11px] text-[#A88E9B] uppercase tracking-wider mt-0.5">250+ Reviews</p>
              </div>

              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#E6C280]">08+</span>
                <p className="text-[10px] sm:text-[11px] text-[#A88E9B] uppercase tracking-wider mt-0.5">Years Craft</p>
              </div>

              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#E6C280]">100%</span>
                <p className="text-[10px] sm:text-[11px] text-[#A88E9B] uppercase tracking-wider mt-0.5">Sanitized</p>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Arched Portrait & Floating Badge */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-xs sm:max-w-md lg:max-w-none">
              
              {/* Arched Photo Frame (La Diva signature) */}
              <div className="relative rounded-t-full rounded-b-[40px] overflow-hidden border-2 sm:border-4 border-[#5A243D]/50 shadow-2xl shadow-[#1B0A13] aspect-[4/5] sm:aspect-[3/4] group bg-[#321422]">
                <img
                  src="/images/ladiva_hero.jpg"
                  alt="Spalon Luxury Parlour Interior Kumarapuram Trivandrum"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#240E1B]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 text-white text-center">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold text-[#E6C280]">
                    Kumarapuram Atelier
                  </p>
                  <p className="font-serif text-lg sm:text-xl font-normal tracking-wide mt-1 text-white">
                    Ladies &amp; Kids Lounge
                  </p>
                </div>
              </div>

              {/* Floating Rotating Stamp/Badge (Visible on Mobile & Desktop) */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-8 w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center z-20">
                <svg className="w-full h-full animate-spin-slow text-[#E6C280]" viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text fontSize="6.3" fontWeight="bold" fill="#E6C280">
                    <textPath href="#circlePath" xlinkHref="#circlePath" textLength="225" lengthAdjust="spacing">
                      ✦ SPALON BEAUTY SALON ✦ TRIVANDRUM
                    </textPath>
                  </text>
                </svg>
                <div className="absolute w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#881337] border border-[#E6C280]/40 text-white flex items-center justify-center shadow-lg">
                  <span className="text-[10px] sm:text-xs font-serif font-bold italic text-[#F3E5AB]">S</span>
                </div>
              </div>

              {/* Floating Testimonial Tag (Visible on Mobile & Desktop) */}
              <div className="absolute -bottom-4 right-1 sm:-bottom-6 sm:-right-6 bg-[#321422]/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-[#5A243D] max-w-[170px] sm:max-w-[210px] z-20 block">
                <div className="flex text-[#E6C280] mb-0.5 sm:mb-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#E6C280] text-[#E6C280]" />
                  ))}
                </div>
                <p className="text-[10px] sm:text-xs text-white font-medium leading-snug">
                  &ldquo;A serene luxury experience in Kumarapuram.&rdquo;
                </p>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#E6C280] font-bold block mt-1">
                  Google Maps Verified
                </span>
              </div>

              {/* Map Direction Card Badge */}
              <a
                href={SALON_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-6 right-6 bg-[#321422]/90 hover:bg-[#881337] text-white border border-[#5A243D] backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 shadow-lg transition-transform hover:scale-105"
              >
                <MapPinIcon className="w-3.5 h-3.5 text-[#E6C280]" />
                <span>Opp. SFS</span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
