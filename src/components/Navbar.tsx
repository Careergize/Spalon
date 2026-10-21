import React, { useState, useEffect, useRef } from 'react';
import { 
  InstagramIcon, 
  FacebookIcon, 
  SearchIcon, 
  MenuIcon, 
  XIcon, 
  PhoneIcon, 
  WhatsAppIcon,
  CalendarIcon,
  MapPinIcon
} from './Icons';
import { SALON_INFO, SERVICES } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  const filteredServices = searchQuery.trim()
    ? SERVICES.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : SERVICES.slice(0, 6);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Bridal', href: '#portfolio' },
    { label: 'Kids Zone', href: '#kids' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <>
      {/* Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#240E1B]/95 backdrop-blur-md shadow-2xl py-2.5 sm:py-3 border-b border-[#4A1A30]'
            : 'bg-[#240E1B]/90 backdrop-blur-sm py-3.5 sm:py-4 border-b border-[#3D1426]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Brand Logo (Spalon official logo) */}
          <div className="flex items-center gap-8">
            <a 
              href="#" 
              className="flex items-center select-none group" 
              aria-label="Spalon"
            >
              <img
                src="/images/spalon_logo_retina.png"
                alt="Spalon"
                className="h-10 sm:h-11 w-auto object-contain rounded-md border border-white/20 group-hover:scale-105 transition-transform shadow-md"
              />
            </a>
          </div>

          {/* Center: Clean & Practical Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E0CCD5] hover:text-white hover:bg-[#321422] border border-transparent hover:border-[#5A243D] transition-all duration-200"
              >
                {item.label}
              </a>
            ))}

            {/* Quick Treatment Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="ml-2 p-2 rounded-full text-[#E0CCD5] hover:text-white hover:bg-[#321422] border border-transparent hover:border-[#5A243D] transition-all cursor-pointer"
              aria-label="Search treatments"
              title="Search salon services &amp; pricing"
            >
              <SearchIcon className="w-4 h-4" />
            </button>
          </nav>

          {/* Right Action Area: WhatsApp Direct + Call + Book Appointment */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Click-to-WhatsApp (High conversion for Kerala clients) */}
            <a
              href={`https://wa.me/${SALON_INFO.phoneClean.replace('+', '')}?text=Hello%20Spalon%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#321422] hover:bg-[#3D192B] border border-[#5A243D] hover:border-[#25D366]/50 text-xs text-[#E0CCD5] hover:text-white transition-all shadow-sm"
              title="Chat with Spalon on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span className="hidden xl:inline font-medium text-[11px]">{SALON_INFO.phone}</span>
            </a>

            {/* Social Icons (Subtle & clean) */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#E0CCD5] hover:text-white transition-colors hidden sm:inline-flex"
              aria-label="Instagram"
              title="Follow Spalon on Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#E0CCD5] hover:text-white transition-colors hidden sm:inline-flex"
              aria-label="Facebook"
              title="Follow Spalon on Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>

            {/* High-Contrast Luxury "Book Appointment" CTA Button */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#881337] via-[#9F1239] to-[#BE185D] hover:from-[#9F1239] hover:to-[#E11D48] border border-[#BE185D]/60 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <CalendarIcon className="w-3.5 h-3.5 text-[#F3E5AB]" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Search Icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="lg:hidden p-2 text-[#E0CCD5] hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Search treatments"
            >
              <SearchIcon className="w-4 h-4" />
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#E0CCD5] hover:text-[#E6C280] hover:bg-[#321422] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6 text-white" />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#4A1A30] bg-[#240E1B] px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
            <div className="flex flex-col gap-2 py-2 text-sm font-medium text-[#FDF4F7]">
              
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-[#321422] hover:text-[#E6C280] transition-colors text-xs uppercase tracking-wider font-semibold flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-[#A88E9B] text-xs">&rarr;</span>
                </a>
              ))}

              {/* Direct Actions in Mobile Menu */}
              <div className="pt-4 mt-2 border-t border-[#4A1A30] flex flex-col gap-2.5">
                
                {/* Direct Phone Call */}
                <a
                  href={`tel:${SALON_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#321422] text-white font-semibold text-xs uppercase tracking-wider border border-[#5A243D] shadow-sm"
                >
                  <PhoneIcon className="w-4 h-4 text-[#E6C280]" />
                  <span>Call Studio: {SALON_INFO.phone}</span>
                </a>

                {/* Direct WhatsApp */}
                <a
                  href={`https://wa.me/${SALON_INFO.phoneClean.replace('+', '')}?text=Hi%20Spalon%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Booking</span>
                </a>

                {/* Google Maps Directions */}
                <a
                  href={SALON_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 text-xs text-[#D4BCC7] hover:text-white"
                >
                  <MapPinIcon className="w-3.5 h-3.5 text-[#E6C280]" />
                  <span>Capital Tower, Kumarapuram, Trivandrum</span>
                </a>

                {/* Socials */}
                <div className="flex items-center justify-around pt-3 border-t border-[#3D1426] text-xs text-[#D4BCC7]">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
                    <InstagramIcon className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
                    <FacebookIcon className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}
      </header>

      {/* Interactive Treatment Search Modal */}
      {searchOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSearchOpen(false)}
        >
          <div 
            className="w-full max-w-xl bg-[#28101E] border border-[#5A243D] rounded-3xl p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#4A1A30]">
              <div className="flex items-center gap-2.5 text-[#E6C280] text-xs uppercase tracking-widest font-semibold">
                <SearchIcon className="w-4 h-4" />
                <span>Search Spalon Treatments &amp; Pricing</span>
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 text-[#D4BCC7] hover:text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close search"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search haircuts, keratin, bridal makeover, facials, waxing..."
                className="w-full bg-[#1B0A13] border border-[#5A243D] text-white rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#E6C280] transition-colors"
              />
            </div>

            {/* Results */}
            <div className="mt-4 max-h-64 overflow-y-auto flex flex-col gap-2">
              {filteredServices.map(service => (
                <div
                  key={service.id}
                  onClick={() => {
                    setSearchOpen(false);
                    onOpenBooking(service.id);
                  }}
                  className="p-3.5 rounded-2xl bg-[#321422] hover:bg-[#3D192B] border border-[#4A1A30] hover:border-[#E6C280] transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div>
                    <h5 className="font-serif text-sm font-medium text-white group-hover:text-[#F4CCD8] transition-colors">
                      {service.name}
                    </h5>
                    <p className="text-[11px] text-[#D4BCC7] line-clamp-1 mt-0.5">{service.description}</p>
                  </div>
                  <span className="text-xs text-[#E6C280] font-sans font-medium shrink-0 ml-3 bg-[#240E1B] px-3 py-1 rounded-full border border-[#5A243D]">
                    {service.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
