import React, { useState, useEffect } from 'react';
import { SERVICES, SALON_INFO } from '../data/salonData';
import { 
  XIcon, 
  WhatsAppIcon, 
  PhoneIcon, 
  CheckIcon, 
  MapPinIcon 
} from './Icons';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  preSelectedServiceId 
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preSelectedServiceId || SERVICES[0].id
  );
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientDate, setClientDate] = useState<string>('');
  const [clientSlot, setClientSlot] = useState<string>('Morning (10:00 AM - 1:00 PM)');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (preSelectedServiceId) {
      setSelectedServiceId(preSelectedServiceId);
    }
  }, [preSelectedServiceId]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setClientDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  if (!isOpen) return null;

  const currentService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*Appointment Reservation - Spalon Kumarapuram*\n\n` +
      `👤 *Guest Name:* ${clientName || 'Valued Guest'}\n` +
      `📞 *Mobile:* ${clientPhone || 'Not provided'}\n` +
      `🏷️ *Treatment:* ${currentService.name}\n` +
      `📅 *Date:* ${clientDate}\n` +
      `⏰ *Preferred Time:* ${clientSlot}\n` +
      (clientNotes ? `📝 *Notes:* ${clientNotes}\n` : '') +
      `\n📍 *Studio:* Capital Tower, Kumarapuram, Trivandrum`;

    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/${SALON_INFO.phoneClean.replace('+', '')}?text=${encoded}`;
    
    window.open(waUrl, '_blank');
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-[#28101E] rounded-[24px] sm:rounded-[32px] shadow-2xl border border-[#5A243D] overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Plum & Gold */}
        <div className="bg-[#1B0A13] text-white p-5 sm:p-7 relative border-b border-[#4A1A30]">
          <button
            onClick={onClose}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#D4BCC7] hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <XIcon className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[#E6C280] text-xs font-semibold uppercase tracking-[0.25em] mb-1.5">
            <span>Spalon • Private Reservation</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white">
            Book Your <span className="font-script text-[#E6C280] font-normal lowercase text-4xl sm:text-5xl px-1">Studio Ritual</span>
          </h3>
          <p className="text-xs text-[#D4BCC7] mt-1.5 font-light">
            Kumarapuram, Trivandrum • Prompt Confirmation via WhatsApp &amp; Phone
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto">
          {isSuccess ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#321422] text-[#E6C280] border border-[#5A243D] flex items-center justify-center mb-4 shadow-sm">
                <CheckIcon className="w-7 h-7 stroke-[2.5]" />
              </div>
              <h4 className="font-serif text-2xl font-normal text-white">
                Reservation Request Dispatched
              </h4>
              <p className="mt-2 text-sm text-[#D4BCC7] max-w-sm">
                Your WhatsApp request has been opened. Our senior stylist at <strong className="text-white">Spalon Kumarapuram</strong> will confirm your bespoke slot immediately.
              </p>

              <div className="mt-6 p-5 rounded-2xl bg-[#321422] border border-[#5A243D] text-left w-full text-xs text-[#D4BCC7] flex flex-col gap-2">
                <p><strong className="text-white">Selected Service:</strong> {currentService.name}</p>
                <p><strong className="text-white">Preferred Slot:</strong> {clientDate} ({clientSlot})</p>
                <p><strong className="text-white">Location:</strong> Capital Tower, Opp. SFS, Kumarapuram</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 w-full">
                <a
                  href={SALON_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#321422] hover:bg-[#3D192B] border border-[#5A243D] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <MapPinIcon className="w-4 h-4 text-[#E6C280]" />
                  <span>Google Maps</span>
                </a>
                <button
                  onClick={handleReset}
                  className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-[#881337] to-[#BE185D] hover:from-[#9F1239] hover:to-[#E11D48] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-4">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#E6C280] uppercase tracking-wider mb-2">
                  Select Treatment
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full bg-[#321422] border border-[#5A243D] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E6C280] transition-all"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#321422] text-white">
                      {s.name}
                    </option>
                  ))}
                </select>
                <div className="mt-2 flex items-center justify-between text-xs text-[#D4BCC7]">
                  <span>Estimated Time: ~{currentService.duration}</span>
                  <span className="text-[#E6C280] text-[11px] font-medium uppercase tracking-wider">✦ Certified Specialist</span>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#E6C280] uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anjali Nair"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-[#321422] border border-[#5A243D] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#E6C280] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E6C280] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98470 12345"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-[#321422] border border-[#5A243D] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#E6C280] transition-all"
                  />
                </div>
              </div>

              {/* Date & Preferred Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#E6C280] uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={clientDate}
                    onChange={(e) => setClientDate(e.target.value)}
                    className="w-full bg-[#321422] border border-[#5A243D] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E6C280] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E6C280] uppercase tracking-wider mb-1.5">
                    Time Window
                  </label>
                  <select
                    value={clientSlot}
                    onChange={(e) => setClientSlot(e.target.value)}
                    className="w-full bg-[#321422] border border-[#5A243D] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E6C280] transition-all"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)" className="bg-[#321422]">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)" className="bg-[#321422]">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 7:30 PM)" className="bg-[#321422]">Evening (4:00 PM - 7:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Special notes */}
              <div>
                <label className="block text-xs font-semibold text-[#E6C280] uppercase tracking-wider mb-1.5">
                  Stylist Notes or Requests (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Saree draping time, sensitive scalp, bride-to-be..."
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  className="w-full bg-[#321422] border border-[#5A243D] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#E6C280] transition-all"
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-4 border-t border-[#4A1A30] flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-white bg-gradient-to-r from-[#881337] via-[#9F1239] to-[#BE185D] hover:from-[#9F1239] hover:to-[#E11D48] shadow-lg shadow-[#1B0A13] flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#F3E5AB]" />
                  <span>Send WhatsApp Request</span>
                </button>

                <div className="flex items-center justify-between text-xs text-[#D4BCC7] px-1">
                  <span>Prefer to speak by phone?</span>
                  <a
                    href={`tel:${SALON_INFO.phoneClean}`}
                    className="font-medium text-[#E6C280] hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <PhoneIcon className="w-3.5 h-3.5 text-[#E6C280]" />
                    <span>{SALON_INFO.phone}</span>
                  </a>
                </div>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
