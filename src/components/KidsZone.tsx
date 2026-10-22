import React from 'react';
import { 
  CalendarIcon, 

  CheckIcon 
} from './Icons';

interface KidsZoneProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const KidsZone: React.FC<KidsZoneProps> = ({ onOpenBooking }) => {
  const kidBenefits = [
    {
      title: "Patient & Caring Stylists",
      desc: "Our stylists take their time, allowing little ones to settle in comfortably before beginning."
    },
    {
      title: "Rounded Safety Scissors",
      desc: "Silent clippers and rounded scissors to eliminate noise anxiety and sensory overload."
    },
    {
      title: "Playful Comforts",
      desc: "Vibrant cartoon capes, fun distractions, and celebratory sweet treats for brave smiles."
    },
    {
      title: "Painless Ear Piercing",
      desc: "100% sterile medical gun piercing with hypoallergenic studs for infants and young girls."
    }
  ];

  return (
    <section id="kids" className="py-20 sm:py-28 bg-[#28101E] relative overflow-hidden border-b border-[#3D1426]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E6C280] mb-3 block">
              ✦ The Little Ones Lounge
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight">
              Tear-free haircuts for <br />
              <span className="font-script text-[#E6C280] font-normal lowercase text-5xl sm:text-7xl block sm:inline pr-2">cheerful little smiles</span>.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#D4BCC7] leading-relaxed font-light max-w-xl">
              Haircut day shouldn&apos;t be a battle. At <strong className="text-white">Spalon Kumarapuram</strong>, we&apos;ve 
              crafted a patient, gentle grooming ritual where toddlers and children feel happy, 
              safe, and cherished.
            </p>

            {/* Benefits 2x2 grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
              {kidBenefits.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-3xl bg-[#321422] border border-[#5A243D] shadow-md hover:border-[#E6C280] transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-5 h-5 rounded-full bg-[#881337] text-[#E6C280] flex items-center justify-center shrink-0 border border-[#E6C280]/30">
                      <CheckIcon className="w-3 h-3 stroke-[3]" />
                    </div>
                    <h4 className="font-serif text-base font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-xs text-[#D4BCC7] leading-relaxed font-light pl-7">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenBooking('advance-hair-cut')}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#881337] to-[#BE185D] hover:from-[#9F1239] hover:to-[#E11D48] shadow-md transition-all cursor-pointer active:scale-95"
              >
                <CalendarIcon className="w-4 h-4 text-[#F3E5AB]" />
                <span>Book Kids Haircut</span>
              </button>

              <button
                onClick={() => onOpenBooking('ear-piercing')}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#E6C280] bg-[#321422] hover:bg-[#3D192B] border border-[#5A243D] transition-all cursor-pointer active:scale-95"
              >
                <span>Medical Ear Piercing</span>
              </button>
            </div>

          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative rounded-t-full rounded-b-[40px] overflow-hidden border-2 sm:border-4 border-[#5A243D]/50 shadow-2xl shadow-black/80 aspect-[4/5] sm:aspect-[3/4] max-w-xs sm:max-w-md mx-auto group bg-[#321422]">
              <img
                src="/images/kids_cut.jpg"
                alt="Happy toddler getting haircut at Spalon Trivandrum"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#240E1B]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white text-center">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#240E1B] bg-[#E6C280] px-3 py-1 rounded-full shadow-sm">
                  Spalon Little Ones
                </span>
                <p className="font-serif text-lg sm:text-xl font-normal mt-1.5 sm:mt-2 text-white">Zero Tears. All Smiles.</p>
                <p className="text-[11px] sm:text-xs text-[#E6C280] font-light">Gentle styling for toddlers &amp; juniors</p>
              </div>
            </div>


          </div>

        </div>

      </div>
    </section>
  );
};

