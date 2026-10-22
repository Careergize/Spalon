import { SALON_INFO } from '../data/salonData';

export const Hero = ({ onOpenBooking }: { onOpenBooking: () => void }) => (
  <section className="beauty-hero" aria-label="Welcome to Spalon">
    <div className="beauty-hero-image is-active">
      <img src="/images/bridal_glow.jpg" alt="Traditional bridal beauty and styling" loading="eager" />
    </div>
    <div className="beauty-hero-shade" />
    <div className="beauty-hero-content">
      <span className="beauty-script">Your moment to shine</span>
      <h1>YOUR DAY.<br />YOUR KIND OF BEAUTIFUL.</h1>
      <p>Bridal artistry and occasion styling, thoughtfully made for you.</p>
      <div className="beauty-hero-actions">
        <a className="beauty-button" href="#services">Explore our services <span aria-hidden="true">⟶</span></a>
        <button className="beauty-text-link" onClick={onOpenBooking}>Book your visit ↗</button>
      </div>
    </div>
    <div className="beauty-hero-footer">
      <a href={SALON_INFO.mapsUrl} target="_blank" rel="noopener noreferrer">Kumarapuram, Trivandrum <span>—</span> Ladies &amp; kids salon</a>
    </div>
  </section>
);
