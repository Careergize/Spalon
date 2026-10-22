import React, { useState } from 'react';
import { SALON_INFO } from '../data/salonData';
import { 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon, 
  WhatsAppIcon, 
  InstagramIcon, 
  FacebookIcon,

  CheckIcon,
  StarIcon,
  XIcon
} from './Icons';

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; alt: string } | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const photoStrip = [
    { 
      src: '/images/service_manicure.jpg', 
      title: 'Luxury Nail Spa',
      alt: 'Spalon Luxury Manicure & Nail Spa' 
    },
    { 
      src: '/images/spalon_hair_layers.jpg', 
      title: 'Layered Blowout & Cut',
      alt: 'Spalon Feathered Layered Haircut & Blowout' 
    },
    { 
      src: '/images/spalon_hair_before_after.jpg', 
      title: 'Hair Transformation',
      alt: 'Spalon Hair Smoothening & Styling Transformation' 
    },
    { 
      src: '/images/spalon_hair_balayage.jpg', 
      title: 'Balayage & Ombre Color',
      alt: 'Spalon Vibrant Balayage & Ombre Hair Highlights' 
    },
    { 
      src: '/images/bridal_glow.jpg', 
      title: 'Kerala Bridal Lounge',
      alt: 'Spalon Kerala Muhurtham Bridal Makeover' 
    },
    { 
      src: '/images/facial_spa.jpg', 
      title: 'Hydra Glow Facial',
      alt: 'Spalon Hydra Dermabrasion Skincare' 
    },
  ];

  return (
    <footer className="bg-[#1B0A13] text-[#FDF4F7] relative border-t border-[#3D1426]">
      
      {/* Top 6-Image Studio & Review Mosaic Strip (La Diva Template Style) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 p-2 sm:p-4 bg-[#16070F] border-b border-[#3D1426]">
        {photoStrip.map((photo, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedPhoto(photo)}
            className="aspect-square overflow-hidden rounded-xl sm:rounded-2xl relative group bg-[#2A0E1F] border border-[#4A1A30] cursor-pointer"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#240E1B]/20 group-hover:bg-[#881337]/50 transition-colors duration-300 flex items-center justify-center p-2 text-center">
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-white font-serif text-[11px] sm:text-xs uppercase tracking-wider bg-black/75 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
                {photo.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Footer Split Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-28 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Columns: Brand, Pages, Contacts & Newsletter */}
          <div className="lg:col-span-12 flex flex-col justify-between">
            
            {/* Top Row: Brand Logo + Pages Links + Contacts Info */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-6 pb-12 border-b border-[#3D1426]">
              
              {/* Brand Logo & Tagline */}
              <div className="sm:col-span-4 flex flex-col items-start">
                <a href="/#" className="select-none group" aria-label="Spalon Home">
                  <img
                    src="/images/spalon_logo_retina.png"
                    alt="Spalon"
                    className="h-10 sm:h-11 w-auto object-contain rounded-md border border-white/20 group-hover:scale-105 transition-transform shadow-md"
                  />
                </a>
                <p className="mt-4 text-xs text-[#D4BCC7] leading-relaxed font-light">
                  Professional Ladies &amp; Kids Beauty Parlour &amp; Bridal Lounge in Trivandrum.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-[#E6C280] font-semibold">
                  <StarIcon className="w-3.5 h-3.5 fill-[#E6C280]" />
                  <span>4.4 ★ Google Verified</span>
                </div>
              </div>

              {/* Pages Column */}
              <div className="sm:col-span-3 flex flex-col">
                <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#E6C280] mb-4">
                  PAGES
                </h4>
                <ul className="flex flex-col gap-2.5 text-xs text-[#D4BCC7]">
                  <li><a href="/#services" className="hover:text-white transition-colors">Our Services</a></li>
                  <li><a href="/#portfolio" className="hover:text-white transition-colors">Bridal Studio</a></li>
                  <li><a href="/#kids" className="hover:text-white transition-colors">Kids Zone</a></li>
                  <li><a href="/#reviews" className="hover:text-white transition-colors">Client Reviews</a></li>
                  <li><a href="/contact#location" className="hover:text-white transition-colors">Location &amp; Map</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li><li><a href="/#faq" className="hover:text-white transition-colors">Salon FAQ</a></li>
                </ul>
              </div>

              {/* Contacts Column */}
              <div className="sm:col-span-5 flex flex-col">
                <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#E6C280] mb-4">
                  CONTACTS
                </h4>
                <div className="flex flex-col gap-3 text-xs text-[#D4BCC7]">
                  <p className="leading-relaxed flex items-start gap-2">
                    <MapPinIcon className="w-3.5 h-3.5 text-[#E6C280] shrink-0 mt-0.5" />
                    <span>First Floor, TC - 14/1222 (2, Capital Tower, Medical College Kumarapuram Rd, Trivandrum 695011</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <ClockIcon className="w-3.5 h-3.5 text-[#E6C280] shrink-0" />
                    <span>Mon – Sun: 10:00 AM – 8:00 PM</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <PhoneIcon className="w-3.5 h-3.5 text-[#E6C280] shrink-0" />
                    <a href={`tel:${SALON_INFO.phoneClean}`} className="hover:text-white font-medium">
                      {SALON_INFO.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                    <a 
                      href={`https://wa.me/${SALON_INFO.phoneClean.replace('+', '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white font-medium text-[#25D366]"
                    >
                      WhatsApp Direct Desk
                    </a>
                  </p>
                </div>
              </div>

            </div>

            {/* Newsletter "Stay Updated" Row (Exact match to La Diva Template) */}
            <div className="pt-10 pb-8 border-b border-[#3D1426]">
              <h4 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-4">
                Stay Updated
              </h4>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address..."
                  required
                  className="flex-1 bg-[#250E1C] border border-[#5A243D] rounded-xl px-4 py-3 text-xs text-white placeholder-[#8E7281] focus:outline-none focus:border-[#E6C280] transition-colors"
                />
                <button
                  type="submit"
                  className="border border-white/80 hover:border-white hover:bg-white hover:text-[#240E1B] text-white text-[11px] font-semibold uppercase tracking-[0.2em] px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer shrink-0"
                >
                  SUBSCRIBE
                </button>
              </form>
              {subscribed && (
                <p className="mt-2 text-xs text-emerald-400 flex items-center gap-1.5 animate-fadeIn">
                  <CheckIcon className="w-3.5 h-3.5" />
                  <span>Thank you for subscribing to Spalon beauty updates!</span>
                </p>
              )}
            </div>

            {/* Bottom Copyright & Social Icons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E7281]">
              <p>
                &copy; {new Date().getFullYear()} Spalon Professional Beauty Parlour. All Rights Reserved.
              </p>

              <div className="flex items-center gap-4 text-white/80">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors p-1"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors p-1"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${SALON_INFO.phoneClean.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors p-1"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Lightbox Modal for Photo Strip Preview */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all duration-300"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-[#1F0A16] border border-[#5A243D] rounded-3xl overflow-hidden shadow-2xl p-2 sm:p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black flex items-center justify-center">
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.alt} 
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>
            
            <div className="p-4 flex items-center justify-between text-white">
              <div>
                <h4 className="font-serif text-base sm:text-lg text-white font-medium">
                  {selectedPhoto.title}
                </h4>
                <p className="text-xs text-[#D4BCC7] mt-0.5">
                  {selectedPhoto.alt}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="w-9 h-9 rounded-full bg-[#3D1426] hover:bg-[#881337] text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
                aria-label="Close preview"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};



