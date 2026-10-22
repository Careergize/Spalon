import { ShieldCheckIcon } from './Icons';

export const Philosophy: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "Artisanal Hair & Skin Alchemy",
      desc: "Every strand and skin type is distinct. We craft custom formulations using L'Oréal Professionnel, Cheryl's, and medical-grade hydra dermabrasion calibrated for Kerala's tropical climate."
    },
    {
      num: "02",
      title: "Sanctuary of Tranquil Privacy",
      desc: "Designed exclusively for ladies and children, our Kumarapuram lounge provides an intimate, sterile haven where you can unwind without rush or pretense."
    },
    {
      num: "03",
      title: "Gentle Care for Little Hearts",
      desc: "We transform haircut day into moments of pure joy. Patient stylists, rounded tools, animated capes, and sweet treats ensure tears are replaced with proud smiles."
    }
  ];

  return (
    <section id="philosophy" className="py-20 sm:py-28 bg-[#28101E] relative overflow-hidden border-b border-[#3D1426]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Statement Quote */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E6C280] mb-4 block">
            ✦ The Spalon Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.18] tracking-tight">
            &ldquo;We believe self-care is a ritual of reverence. Every touch is <span className="font-script text-[#E6C280] font-normal lowercase text-4xl sm:text-6xl px-1">tailored</span>, every detail <span className="italic text-[#F4CCD8]">deliberate</span>.&rdquo;
          </h2>
        </div>

        {/* 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Arched Model Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-t-full rounded-b-[40px] overflow-hidden border-4 border-[#5A243D]/50 shadow-2xl shadow-[#1B0A13] aspect-[3/4] bg-[#321422]">
              <img
                src="/images/ladiva_portrait.jpg"
                alt="Spalon Beauty Philosophy & Craftsmanship"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#240E1B]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-center text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#F3E5AB] bg-[#321422]/90 px-3 py-1 rounded-full backdrop-blur-sm border border-[#5A243D]">
                  Master Artistry
                </span>
                <p className="font-serif text-lg mt-2">Bespoke Elegance</p>
              </div>
            </div>

            {/* Corner Decorative Accent Pill */}
            <div className="absolute -bottom-6 -right-6 bg-[#321422] p-5 rounded-3xl border border-[#5A243D] shadow-xl max-w-[200px] hidden sm:block">
              <span className="font-serif text-3xl font-bold text-[#E6C280] block">
                8.5k+
              </span>
              <p className="text-xs text-[#D4BCC7] mt-1 font-medium leading-snug">
                Happy ladies and kids pampered in Trivandrum.
              </p>
            </div>
          </div>

          {/* Right Column: Numbered Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {pillars.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-[#321422] border border-[#5A243D] hover:border-[#E6C280] transition-all duration-300 shadow-md group"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#E6C280] shrink-0 mt-0.5">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#F4CCD8] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#D4BCC7] leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Hygiene & Product Pledge */}
            <div className="p-5 rounded-2xl bg-[#1F0B17] border border-[#4A1A30] flex items-center gap-4 text-xs text-[#D4BCC7]">
              <div className="w-8 h-8 rounded-full bg-[#881337] text-[#E6C280] flex items-center justify-center shrink-0 border border-[#E6C280]/30">
                <ShieldCheckIcon className="w-4 h-4" />
              </div>
              <p className="leading-relaxed">
                <strong className="text-white">Certified Brands Only:</strong> We strictly use authentic L&apos;Oréal Professionnel, O3+, Cheryl&apos;s Cosmeceuticals, and hypoallergenic kid-safe formulations.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
