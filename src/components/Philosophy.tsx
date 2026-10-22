import { SALON_INFO } from '../data/salonData';

export const Philosophy = () => (
  <section id="philosophy" className="beauty-about">
    <div className="beauty-about-photos">
      <img className="about-photo-main" src="/images/bridal_glow.jpg" alt="Bridal styling with traditional jewellery" loading="lazy" />
      <img className="about-photo-detail" src="/images/ladiva_portrait.jpg" alt="Beauty and personal style at Spalon" loading="lazy" />
      <span className="beauty-script about-photo-caption">Beauty begins with you</span>
    </div>
    <div className="beauty-about-copy">
      <span className="beauty-script">Welcome to Spalon</span>
      <h2>A LITTLE CARE.<br />A BEAUTIFUL YOU.</h2>
      <div className="beauty-rule" />
      <p>Good beauty care starts with feeling understood. At our ladies and kids salon in Kumarapuram, we take the time to listen, help you find your look, and make every visit feel like a moment for yourself.</p>
      <p>From everyday hair and skin care to the bridal look you have been dreaming of, discover thoughtful treatments and a warm, welcoming space.</p>
      <div className="beauty-about-facts">
        <div><strong>{SALON_INFO.experienceYears}</strong><span>Years of care</span></div>
        <div><strong>{SALON_INFO.rating} ★</strong><span>Google rating</span></div>
        <div><strong>Ladies &amp; kids</strong><span>A space for you</span></div>
      </div>
      <a href="#services" className="beauty-text-link">Find your beauty ritual <span aria-hidden="true">⟶</span></a>
    </div>
  </section>
);
