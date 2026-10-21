import React, { useState } from 'react';
import { CalendarIcon, StarIcon, MapPinIcon } from './Icons';

interface GalleryProps {
  onOpenBooking: (serviceId?: string) => void;
}

interface BlogPostReview {
  id: string;
  title: string;
  category: 'all' | 'hair' | 'bridal' | 'skin' | 'kids';
  serviceId: string;
  serviceName: string;
  image: string;
  tag: string;
  isGooglePhoto?: boolean;
  author: string;
  location: string;
  rating: number;
  date: string;
  reviewQuote: string;
  excerpt: string;
}

export const TransformationGallery: React.FC<GalleryProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'hair' | 'bridal' | 'skin' | 'kids'>('all');

  const blogReviews: BlogPostReview[] = [
    {
      id: 'blog-1',
      title: 'Before & After: Vibrant Hair Highlights & Keratin Glow',
      category: 'hair',
      serviceId: 'hair-color-balayage',
      serviceName: 'Vibrant Hair Color & Keratin',
      image: '/images/spalon_transformation_review.jpg',
      tag: '✦ Google Maps Review Story',
      isGooglePhoto: true,
      author: 'Divya George',
      location: 'Ulloor, Trivandrum',
      rating: 5,
      date: 'Google Review • 1 month ago',
      reviewQuote: 'The result is pure magic—look at the before and after! Soft, shiny, and the magenta highlights are so beautifully blended. Absolutely the best hair salon in Kumarapuram.',
      excerpt: 'Formulated with ammonia-free colors and a humidity-defense keratin seal, turning frizzy strands into radiant, silky locks with natural movement.'
    },
    {
      id: 'blog-2',
      title: 'Featured On Google: Bold. Vibrant. Beautifully You.',
      category: 'hair',
      serviceId: 'hair-color-balayage',
      serviceName: 'Precision Hair Transformation',
      image: '/images/spalon_transformation_poster.jpg',
      tag: '✦ Official Google Maps Poster',
      isGooglePhoto: true,
      author: 'Spalon Studio Portfolio',
      location: 'Capital Tower, Kumarapuram',
      rating: 5,
      date: 'Official Studio Feature',
      reviewQuote: 'Confidence in every strand. Our official Google Maps feature displays the authentic transformations crafted right here on Kumarapuram Road.',
      excerpt: 'Every guest receives a personal hair texture consultation before hand-painted balayage and deep nourishing protein treatments.'
    },
    {
      id: 'blog-3',
      title: 'In The Chair: Glossy Magenta Highlights & Zero Frizz',
      category: 'hair',
      serviceId: 'hair-keratin',
      serviceName: 'Nano-Keratin Smoothing',
      image: '/images/spalon_hair_color_review.jpg',
      tag: '✦ Google Maps Review Photo',
      isGooglePhoto: true,
      author: 'Verified Client Experience',
      location: 'Kumarapuram, Trivandrum',
      rating: 5,
      date: 'Client Showcase',
      reviewQuote: 'The hair texture after styling is unbelievably smooth. Even in Trivandrum’s tropical humidity, the highlights remain vivid, soft, and sleek.',
      excerpt: 'Infused with Moroccan argan oils and silk protein complexes for long-lasting color retention and heat defense.'
    },
    {
      id: 'blog-4',
      title: 'Royal Kerala Muhurtham: 16-Hour Sweat-Proof Bridal Glow',
      category: 'bridal',
      serviceId: 'bridal-muhurtham-hd',
      serviceName: 'Kerala Muhurtham Bridal Package',
      image: '/images/bridal_glow.jpg',
      tag: '✦ Bridal Client Story',
      author: 'Sreelakshmi Ramesh',
      location: 'Pattom, Trivandrum',
      rating: 5,
      date: 'Wedding Review • 3 weeks ago',
      reviewQuote: 'The makeup was so natural yet radiant, and the saree pleating stayed intact for 8+ hours under heavy lights without a single pin shifting. Highly recommended!',
      excerpt: 'Customized for traditional Kasavu sarees with high-definition waterproof coverage, floral jasmine hair setting, and perfect jewelry pin-work.'
    },
    {
      id: 'blog-5',
      title: 'Hydra Dermabrasion Facial: That 7-Day Wedding Week Radiance',
      category: 'skin',
      serviceId: 'skin-hydra-facial',
      serviceName: 'Hydra Dermabrasion Facial',
      image: '/images/facial_spa.jpg',
      tag: '✦ Skincare Client Story',
      author: 'Dr. Anupama Nair',
      location: 'Medical College, Trivandrum',
      rating: 5,
      date: 'Verified Review • 2 weeks ago',
      reviewQuote: 'Spalon is my absolute go-to beauty parlour in Kumarapuram. The staff is so gentle, professional, and courteous. Got my Hydra Facial done here and the glow lasted through an entire wedding week!',
      excerpt: 'Multi-step vortex suction deep pore extraction, hyaluronic acid peptide infusion, and cold hammer oxygen therapy for an instant glass-skin finish.'
    },
    {
      id: 'blog-6',
      title: 'Tear-Free First Haircut: A Mother’s Heartwarming Review',
      category: 'kids',
      serviceId: 'kids-haircut-boy',
      serviceName: 'Gentle Kids Haircut',
      image: '/images/kids_cut.jpg',
      tag: '✦ Parent Review Story',
      author: 'Lakshmi V. Menon',
      location: 'Medical College Area, Trivandrum',
      rating: 5,
      date: 'Family Review • 1 month ago',
      reviewQuote: 'Took my 4-year-old daughter here for her first haircut and was so worried she would cry. The stylist handled her with so much warmth and patience! She walked out smiling with her cute hair clips.',
      excerpt: 'Sanitized child-safe scissors, animated capes, gentle detangling sprays, and patient stylists who make haircuts a playful experience.'
    }
  ];

  const filtered = activeTab === 'all' 
    ? blogReviews 
    : blogReviews.filter(item => item.category === activeTab);

  return (
    <section id="blog" className="py-20 sm:py-28 bg-[#240E1B] relative border-b border-[#3D1426] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E6C280] mb-3 block">
            ✦ Spalon Transformation Blog &amp; Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
            Client Stories &amp; <span className="font-script text-[#E6C280] font-normal lowercase text-5xl sm:text-7xl px-2">Beauty Journal</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D4BCC7] leading-relaxed font-light">
            Verified review stories and transformation photography from our guests at Capital Tower, Kumarapuram.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 sm:mt-8 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto scrollbar-none pb-2 sm:pb-0 px-1 -mx-1 sm:mx-0 sm:flex-wrap touch-pan-x">
            {[
              { id: 'all', label: 'All Review Stories' },
              { id: 'hair', label: 'Hair & Highlights (Google Feature)' },
              { id: 'bridal', label: 'Bridal Reviews' },
              { id: 'skin', label: 'Skin & Facials' },
              { id: 'kids', label: 'Kids Lounge' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#881337] to-[#BE185D] text-white shadow-md'
                    : 'bg-[#321422] text-[#D4BCC7] hover:bg-[#3D192B] hover:text-white border border-[#5A243D]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog & Review Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map(item => (
            <article
              key={item.id}
              className="group rounded-[32px] overflow-hidden bg-[#321422] border border-[#5A243D] shadow-xl hover:border-[#E6C280] transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Review Image with Badge */}
                <div className="relative aspect-[4/3] sm:aspect-[4/4] overflow-hidden bg-[#1B0A13]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#321422] via-transparent to-transparent opacity-80" />
                  
                  {/* Category / Source Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-[#881337]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#BE185D] shadow-md truncate">
                      {item.tag}
                    </span>
                    {item.isGooglePhoto && (
                      <span className="shrink-0 text-[9px] uppercase tracking-wider font-semibold text-[#E6C280] bg-[#240E1B]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#E6C280]/40">
                        Google Maps
                      </span>
                    )}
                  </div>
                </div>

                {/* Article & Review Body */}
                <div className="p-6">
                  {/* Author meta & Star Rating */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex text-[#E6C280]">
                      {[...Array(item.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-3.5 h-3.5 fill-[#E6C280] text-[#E6C280]" />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#A88E9B] uppercase tracking-wider font-medium truncate">
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover:text-[#F4CCD8] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Review Quote Callout */}
                  <blockquote className="mt-3 p-3.5 rounded-2xl bg-[#240E1B]/80 border-l-2 border-[#E6C280] text-xs sm:text-[13px] text-[#FDF4F7] italic font-serif leading-relaxed">
                    &ldquo;{item.reviewQuote}&rdquo;
                  </blockquote>

                  {/* Excerpt */}
                  <p className="mt-3 text-xs text-[#D4BCC7] leading-relaxed font-light">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0 mt-4 border-t border-[#4A1A30]/60 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white group-hover:text-[#E6C280] transition-colors">
                    {item.author}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-[#A88E9B] mt-0.5">
                    <MapPinIcon className="w-3 h-3 text-[#E6C280]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(item.serviceId)}
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold text-[#240E1B] bg-[#E6C280] hover:bg-white px-3.5 py-1.5 rounded-full transition-all duration-300 shadow-md cursor-pointer hover:scale-105 shrink-0"
                >
                  <CalendarIcon className="w-3 h-3 text-[#240E1B]" />
                  <span>Book Look</span>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
