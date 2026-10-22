import React from 'react';
import { REVIEWS, SALON_INFO } from '../data/salonData';
import { StarIcon, ShieldCheckIcon, MapPinIcon } from './Icons';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#28101E] relative border-b border-[#3D1426]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E6C280] mb-3 block">
            ✦ Client Love Notes
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
            Cherished by Trivandrum&apos;s <br />
            <span className="font-script text-[#E6C280] font-normal lowercase text-5xl sm:text-7xl block sm:inline pr-2">Ladies &amp; Families</span>
          </h2>

          <p className="mt-4 text-base text-[#D4BCC7] leading-relaxed font-light">
            Read heartfelt experiences from guests who visit our parlour at Capital Tower, Kumarapuram.
          </p>

          {/* Aggregate Rating Pill */}
          <div className="mt-6 sm:mt-8 inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 p-4 sm:p-4 rounded-3xl bg-[#321422] border border-[#5A243D] shadow-md max-w-full">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-white">4.4</span>
              <div className="flex flex-col text-left">
                <div className="flex text-[#E6C280]">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-3.5 h-3.5 fill-[#E6C280] text-[#E6C280]" />
                  ))}
                </div>
                <span className="text-[10px] sm:text-[11px] text-[#D4BCC7] uppercase tracking-wider font-medium">Google Maps Rating (4.4 ★)</span>
              </div>
            </div>

            <div className="h-4 sm:h-6 w-full sm:w-px bg-[#5A243D]/60 sm:bg-[#5A243D] my-1 sm:my-0" />

            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-1.5 text-[#E0CCD5] text-xs font-semibold uppercase tracking-wider">
                <ShieldCheckIcon className="w-4 h-4 text-[#E6C280]" />
                <span>Certified Stylists</span>
              </div>

              <div className="h-3 w-px bg-[#5A243D] sm:hidden" />

              <a
                href={SALON_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider font-bold text-[#E6C280] hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Google Maps</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-5 sm:p-8 rounded-[24px] sm:rounded-[36px] bg-[#321422] border border-[#5A243D] shadow-lg hover:border-[#E6C280] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                {/* Quotation mark & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#E6C280]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-3.5 h-3.5 fill-[#E6C280] text-[#E6C280]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#A88E9B] uppercase tracking-wider">{rev.date}</span>
                </div>

                {/* Comment quote */}
                <p className="font-serif text-lg sm:text-xl text-[#FDF4F7] leading-relaxed italic font-normal">
                  &ldquo;{rev.comment}&rdquo;
                </p>

                {/* Attached Real Photo (Google Maps review pictures) */}
                {rev.image && (
                  <div className="mt-5 mb-2 overflow-hidden rounded-2xl border border-[#5A243D] relative bg-[#240E1B] group/img shadow-md">
                    <img
                      src={rev.image}
                      alt={rev.imageCaption || rev.service}
                      className="w-full h-52 sm:h-64 object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#240E1B] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-[#FDF4F7]">
                      <span className="truncate font-medium drop-shadow-md">
                        {rev.imageCaption}
                      </span>
                      {rev.isGoogleReviewPhoto && (
                        <span className="shrink-0 ml-2 px-2.5 py-0.5 rounded-full bg-[#881337] text-[9px] uppercase tracking-wider font-bold border border-[#BE185D] text-white shadow-sm">
                          ✦ Google Maps Photo
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Author & Service Meta */}
              <div className="mt-6 pt-5 border-t border-[#4A1A30] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-white group-hover:text-[#F4CCD8] transition-colors">
                    {rev.author}
                  </h4>
                  <div className="flex items-center gap-1 text-[#A88E9B] text-xs mt-0.5">
                    <MapPinIcon className="w-3 h-3 text-[#E6C280]" />
                    <span>{rev.location}</span>
                  </div>
                </div>

                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#F4CCD8] bg-[#881337]/50 px-3 py-1 rounded-full border border-[#5A243D]">
                  {rev.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
