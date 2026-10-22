import { useState, type FormEvent } from 'react';
import { SALON_INFO, SERVICES } from '../data/salonData';
import { LocationMap } from './LocationMap';

export const ContactPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(SERVICES[0].id);
  const [message, setMessage] = useState('');
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const text = `Hello Spalon! I would like to enquire about an appointment.\nName: ${name}\nPhone: ${phone}\nService: ${SERVICES.find(item => item.id === service)?.name}\nMessage: ${message}`;
    window.open(`https://wa.me/${SALON_INFO.phoneClean.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };
  const field = 'w-full bg-[#240E1B] border border-[#5A243D] rounded-lg px-4 py-3 text-sm text-[#FDF4F7] mt-2';
  return <>
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
      <a href="/" className="beauty-text-link">← Back to home</a>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mt-8 items-start">
        <div>
          <span className="beauty-script">We would love to hear from you</span>
          <h1 className="text-5xl sm:text-6xl mt-5">LET’S GET IN TOUCH.</h1>
          <p className="text-[#D4BCC7] leading-relaxed mt-6">Ask about a treatment, plan your bridal consultation, or arrange your next visit. Our Kumarapuram team is here to help.</p>
          <dl className="mt-10 space-y-7 text-[#D4BCC7]">
            <div><dt className="text-[#E6C280] text-xs uppercase tracking-widest mb-2">Call us</dt><dd><a href={`tel:${SALON_INFO.phoneClean}`}>{SALON_INFO.phone}</a></dd></div>
            <div><dt className="text-[#E6C280] text-xs uppercase tracking-widest mb-2">Visit the salon</dt><dd>{SALON_INFO.address}<br />{SALON_INFO.city}</dd></div>
            <div><dt className="text-[#E6C280] text-xs uppercase tracking-widest mb-2">Opening hours</dt><dd>Monday – Sunday: {SALON_INFO.timingWeekdays}</dd></div>
          </dl>
          <a className="beauty-button mt-9" href={SALON_INFO.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions ↗</a>
        </div>
        <form onSubmit={submit} className="bg-[#321422] border border-[#5A243D] p-6 sm:p-9 rounded-xl space-y-5">
          <h2 className="text-3xl">Send an enquiry</h2>
          <p className="text-sm text-[#D4BCC7]">Complete the form to start a conversation on WhatsApp. Our team will confirm availability.</p>
          <label className="block text-sm">Your name<input className={field} autoComplete="name" value={name} onChange={event => setName(event.target.value)} required /></label>
          <label className="block text-sm">Phone number<input className={field} type="tel" autoComplete="tel" value={phone} onChange={event => setPhone(event.target.value)} required /></label>
          <label className="block text-sm">Service<select className={field} value={service} onChange={event => setService(event.target.value)}>{SERVICES.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
          <label className="block text-sm">Message or preferred date<textarea className={field} rows={4} value={message} onChange={event => setMessage(event.target.value)} /></label>
          <button type="submit" className="beauty-button w-full justify-center cursor-pointer">Send via WhatsApp ↗</button>
        </form>
      </div>
    </section>
    <LocationMap />
  </>;
};
