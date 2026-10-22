import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { 
  MapPinIcon, 
  ClockIcon, 
  PhoneIcon, 
  CompassIcon 
} from './Icons';

export const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#240E1B] relative border-b border-[#3D1426]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E6C280] mb-3 block">
            ✦ Atelier &amp; Contact
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
            Visit Our <span className="font-script text-[#E6C280] font-normal lowercase text-5xl sm:text-7xl px-2">Kumarapuram</span> Sanctuary
          </h2>
          <p className="mt-4 text-base text-[#D4BCC7] leading-relaxed font-light">
            Conveniently located at Capital Tower, directly opposite SFS on Pothujanam Lane, Trivandrum. Dedicated customer parking available.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Address */}
            <div className="p-5 sm:p-7 rounded-[28px] sm:rounded-[32px] bg-[#321422] border border-[#5A243D] shadow-md">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#1B0A13] text-[#E6C280] flex items-center justify-center shrink-0 mt-0.5 border border-[#5A243D]">
                  <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-white">Salon Address</h4>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#E0CCD5] font-normal leading-relaxed">
                    {SALON_INFO.address}
                  </p>
                  <p className="text-xs text-[#A88E9B] mt-0.5">
                    {SALON_INFO.city}
                  </p>
                  <p className="text-xs text-[#E6C280] font-semibold mt-2">
                    Landmark: Opp. SFS, Pothujanam Lane, Medical College route
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-5 sm:p-7 rounded-[28px] sm:rounded-[32px] bg-[#321422] border border-[#5A243D] shadow-md">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#1B0A13] text-[#E6C280] flex items-center justify-center shrink-0 mt-0.5 border border-[#5A243D]">
                  <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-white">Hours of Service</h4>
                    <span className="text-[10px] uppercase tracking-wider font-bold bg-[#881337] text-white px-2.5 py-1 rounded-full border border-[#E6C280]/30">
                      Open 7 Days
                    </span>
                  </div>
                  <div className="mt-3 flex flex-col gap-2 text-xs sm:text-sm text-[#D4BCC7]">
                    <div className="flex justify-between items-center py-1.5 border-b border-[#4A1A30]">
                      <span className="font-light">Monday – Saturday</span>
                      <span className="font-semibold text-white">10:00 AM – 7:30 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5">
                      <span className="font-light">Sunday</span>
                      <span className="font-semibold text-white">10:00 AM – 7:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Navigation Callout */}
            <div className="p-5 sm:p-7 rounded-[24px] sm:rounded-[32px] bg-[#1B0A13] text-[#FDF4F7] shadow-xl border border-[#5A243D]">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#E6C280] block mb-1">
                ✦ Appointments &amp; Directions
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-normal text-white">
                Reserve Your Time Today
              </h4>
              <p className="text-xs text-[#D4BCC7] mt-1.5 font-light leading-relaxed">
                Connect with our Kumarapuram desk or launch instant GPS navigation.
              </p>

              <div className="mt-5 sm:mt-6 flex flex-col xs:flex-row gap-3">
                <a
                  href={SALON_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs uppercase tracking-wider font-bold text-[#240E1B] bg-[#E6C280] hover:bg-white transition-all cursor-pointer shadow"
                >
                  <CompassIcon className="w-4 h-4 text-[#240E1B]" />
                  <span>Open in Maps</span>
                </a>

                <a
                  href={`tel:${SALON_INFO.phoneClean}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs uppercase tracking-wider font-bold text-white bg-[#321422] hover:bg-[#3D192B] border border-[#5A243D] transition-all"
                >
                  <PhoneIcon className="w-4 h-4 text-[#E6C280]" />
                  <span>{SALON_INFO.phone}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps */}
          <div className="lg:col-span-7 rounded-[24px] sm:rounded-[36px] overflow-hidden border border-[#5A243D] shadow-2xl flex flex-col bg-[#321422] min-h-[280px] sm:min-h-[440px]">
            <iframe
              title="Spalon Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.8679462438895!2d76.9279608!3d8.5110622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbf0bfffffff%3A0xf7e900fcdb0ce72c!2sSpalon%20-%20Professional%20Beauty%20Parlour%20(ladies%20%26%20Kids%20)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '280px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full flex-1"
            />

            <div className="p-5 bg-[#321422] border-t border-[#5A243D] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-[#D4BCC7] font-light">
                📍 Capital Tower, Kumarapuram, Thiruvananthapuram, Kerala 695011
              </span>
              <a
                href={SALON_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold uppercase tracking-wider text-[#E6C280] hover:text-white flex items-center gap-1 shrink-0 transition-colors"
              >
                <span>Google Maps GPS</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
