import { ContactPage } from './components/ContactPage';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

import { Philosophy } from './components/Philosophy';
import { ServiceCatalog } from './components/ServiceCatalog';
import { BridalStudio } from './components/BridalStudio';
import { KidsZone } from './components/KidsZone';
import { ReviewsSection } from './components/ReviewsSection';

import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingActionBar } from './components/FloatingActionBar';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceId(undefined);
  };

  const isContactPage = window.location.pathname.replace(/\/$/, '') === '/contact';

  return (
    <div className="min-h-screen flex flex-col bg-[#240E1B] text-[#FDF4F7] selection:bg-[#881337] selection:text-white">
      {/* Editorial Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">{isContactPage ? <ContactPage /> : <>
        {/* La Diva Inspired Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />




        {/* Philosophy & Craftsmanship Pillars */}
        <Philosophy />

        {/* Treatment Menu & Service Catalog */}
        <ServiceCatalog onSelectServiceForBooking={(id) => handleOpenBooking(id)} />

        {/* Signature Bridal Makeover Studio */}
        <BridalStudio onOpenBooking={(id) => handleOpenBooking(id)} />

        {/* Dedicated Kids Zone */}
        <KidsZone onOpenBooking={(id) => handleOpenBooking(id)} />

        {/* Verified 4.4★ Google Client Reviews */}
        <ReviewsSection />




        {/* Questions & Inquiries */}
        <FaqSection />
      </>}</main>

      {/* Editorial Footer */}
      <Footer />

      {/* Sticky Mobile Floating Action Bar (Call, WhatsApp, Maps, Book) */}
      <FloatingActionBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preSelectedServiceId={selectedServiceId}
      />
    </div>
  );
}

export default App;



