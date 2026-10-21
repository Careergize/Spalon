import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { PhoneIcon, WhatsAppIcon, MapPinIcon, CalendarIcon } from './Icons';

interface FloatingActionBarProps {
  onOpenBooking: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#240E1B]/95 backdrop-blur-md border-t border-[#4A1A30] px-3 pt-2 pb-safe shadow-2xl">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Call Now */}
        <a
          href={`tel:${SALON_INFO.phoneClean}`}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#321422] border border-[#5A243D] text-[#E0CCD5] text-[10px] font-semibold uppercase tracking-wider transition-colors active:scale-95"
          title="Call Spalon"
        >
          <PhoneIcon className="w-4 h-4 text-[#E6C280] mb-0.5" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${SALON_INFO.phoneClean.replace('+', '')}?text=Hi%20Spalon%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#321422] border border-[#5A243D] text-[#E0CCD5] text-[10px] font-semibold uppercase tracking-wider transition-colors active:scale-95"
          title="WhatsApp Chat"
        >
          <WhatsAppIcon className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span>Chat</span>
        </a>

        {/* Directions */}
        <a
          href={SALON_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#321422] border border-[#5A243D] text-[#E0CCD5] text-[10px] font-semibold uppercase tracking-wider transition-colors active:scale-95"
          title="Directions to Spalon"
        >
          <MapPinIcon className="w-4 h-4 text-[#E6C280] mb-0.5" />
          <span>Map</span>
        </a>

        {/* Primary Book CTA */}
        <button
          onClick={onOpenBooking}
          className="flex-2 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#881337] to-[#BE185D] text-white text-[11px] font-semibold uppercase tracking-wider shadow-md shadow-[#1B0A13] active:scale-95 transition-transform cursor-pointer"
        >
          <CalendarIcon className="w-3.5 h-3.5 text-[#F3E5AB]" />
          <span>Book Slot</span>
        </button>

      </div>
    </div>
  );
};
