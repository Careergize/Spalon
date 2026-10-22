export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'bridal' | 'kids' | 'spa' | 'massage' | 'piercing';
  duration: string;
  price?: string;
  description: string;
  popular?: boolean;
  tag?: string;
  highlights: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
  image?: string;
  imageCaption?: string;
  isGoogleReviewPhoto?: boolean;
}

export const SALON_INFO = {
  name: "Spalon",
  fullName: "Spalon - Professional Beauty Parlour",
  subTitle: "Exclusive Ladies & Kids Salon & Bridal Lounge",
  phone: "083049 84911",
  phoneClean: "+918304984911",
  address: "First Floor, TC - 14/1222 (2, Capital Tower, Medical College Kumarapuram Rd, P.O, Kumarapuram",
  city: "Thiruvananthapuram, Kerala 695011",
  mapsUrl: "https://maps.app.goo.gl/pMgETUZZd7wiLxV38",
  mapsEmbedQuery: "Spalon+Professional+Beauty+Parlour+Kumarapuram+Thiruvananthapuram",
  timingWeekdays: "10:00 AM – 8:00 PM",
  timingSunday: "10:00 AM – 8:00 PM (All 7 Days Open)",
  rating: 4.4,
  reviewsCount: "Google 4.4 ★ (Verified)",
  experienceYears: "8+",
  happyClients: "8,500+"
};

export const SERVICES: ServiceItem[] = [
  // Hair Care (6)
  {
    id: "hair-smoothening",
    name: "Hair Smoothening",
    category: "hair",
    duration: "180-240 mins",
    popular: true,
    tag: "Best Seller",
    description: "L'Oréal Professionnel silk-infusion smoothening customized to your hair texture for frizz-free, sleek, and natural bounce.",
    highlights: ["Formaldehyde-free formula", "Deep hydration & softness", "Long-lasting mirror shine"]
  },
  {
    id: "hair-styling",
    name: "Hair Styling",
    category: "hair",
    duration: "45-60 mins",
    popular: true,
    description: "Expert blow-dry, curling, crimping, sleek press, or festive styling crafted by certified senior hairstylists.",
    highlights: ["Heat protectant prep", "Custom styling to suit face shape", "Long-lasting hold"]
  },
  {
    id: "hair-rebonding",
    name: "Hair Rebonding",
    category: "hair",
    duration: "210-270 mins",
    description: "Permanent thermal reconditioning for poker-straight, ultra-sleek, and impeccably smooth hair.",
    highlights: ["Advanced bond-rebuilding technology", "Intense gloss treatment", "Silky pin-straight finish"]
  },
  {
    id: "bridal-basic-hair-styling",
    name: "Bridal Basic Hair Styling",
    category: "bridal",
    duration: "90-120 mins",
    popular: true,
    tag: "Bridal Special",
    description: "Traditional South Indian bridal braids, elegant jasmine floral settings, romantic textured buns, and tiara/accessory placement.",
    highlights: ["Secure all-day floral attachment", "Muhurtham & reception updos", "Jewellery & accessory setting"]
  },
  {
    id: "advance-hair-cut",
    name: "Advance Hair Cut",
    category: "hair",
    duration: "45-60 mins",
    popular: true,
    description: "Precision face-framing layers, butterfly cut, feather cut, graduated bob, or curtain bangs with relaxing wash and styling.",
    highlights: ["In-depth consultation", "Includes wash & blow-dry", "Texturizing for natural volume"]
  },
  {
    id: "hair-straightening",
    name: "Hair Straightening",
    category: "hair",
    duration: "180-240 mins",
    description: "Salon-grade chemical straightening treatment tailored to tame stubborn curls, excessive wave, and unwanted volume.",
    highlights: ["Nourishing neutralizer included", "Smooth & manageable hair", "Anti-frizz humidity shield"]
  },

  // Hair Removal (2)
  {
    id: "threading-eyebrows",
    name: "Threading - Eyebrows",
    category: "spa",
    duration: "15 mins",
    popular: true,
    description: "Clean, hygienic, and precise brow contouring, forehead, and upper lip threading using sanitized antibacterial thread.",
    highlights: ["Gentle precision shaping", "Calming aloe vera finish", "100% hygienic sanitized thread"]
  },
  {
    id: "waxing",
    name: "Waxing",
    category: "spa",
    duration: "30-60 mins",
    description: "Gentle full-body, arms, and legs waxing using soothing liposoluble wax formulated to minimize irritation and redness.",
    highlights: ["Minimal pain formula", "Removes fine & coarse hair", "Leaves skin soft & silky"]
  },

  // Skin Care (2)
  {
    id: "skin-treatment",
    name: "Skin Treatment",
    category: "skin",
    duration: "60-75 mins",
    popular: true,
    tag: "Radiance",
    description: "Targeted dermatological skin ritual: deep pore cleansing, exfoliation, intensive serum infusion, and therapeutic recovery mask.",
    highlights: ["Custom skin analysis", "Hydration replenishment", "Visible natural glow"]
  },
  {
    id: "anti-acne-facial",
    name: "Anti Acne Facial",
    category: "skin",
    duration: "60 mins",
    description: "Clarifying facial targeting active breakouts, excess sebum, and clogged pores with antibacterial steam, extractions, and soothing mask.",
    highlights: ["Pore decongestion & extractions", "Soothes inflammation & redness", "Sebum-balancing botanical mask"]
  },

  // Massage (1)
  {
    id: "foot-massage",
    name: "Foot Massage",
    category: "massage",
    duration: "30-45 mins",
    popular: true,
    tag: "Relaxation",
    description: "Relaxing reflexology foot and calf massage with aromatic essential oils to ease fatigue, improve circulation, and melt stress.",
    highlights: ["Pressure point stimulation", "Warm herbal oil therapy", "Relieves foot ache & heaviness"]
  },

  // Nails (1)
  {
    id: "premium-manicure",
    name: "Premium Manicure",
    category: "spa",
    duration: "45 mins",
    description: "Luxurious nail grooming including warm hand soak, gentle cuticle care, scrub exfoliation, relaxing hand massage, and high-gloss polish.",
    highlights: ["Nail shaping & buffing", "Nourishing cuticle oil massage", "Long-lasting gel or shine polish"]
  },

  // Piercing (1)
  {
    id: "ear-piercing",
    name: "Ear Piercing",
    category: "piercing",
    duration: "20 mins",
    popular: true,
    description: "Quick, hygienic, and virtually painless ear piercing using sterilized medical-grade hypoallergenic studs for women and children.",
    highlights: ["100% sterile & hypoallergenic", "Quick & gentle technique", "Antiseptic aftercare guidance"]
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Divya George",
    location: "Ulloor, Trivandrum",
    rating: 5,
    date: "1 month ago",
    comment: "Got the vibrant hair color and smoothening treatment done at Spalon. The result is pure magic—look at the before and after! Soft, shiny, and the highlights are so beautifully blended. Absolutely the best hair salon in Kumarapuram.",
    service: "Hair Smoothening & Styling",
    image: "/images/spalon_transformation_review.jpg",
    imageCaption: "Verified Google Maps Review: Before & After Hair Transformation",
    isGoogleReviewPhoto: true
  },
  {
    id: "rev-2",
    author: "Dr. Anupama Nair",
    location: "Kumarapuram, Trivandrum",
    rating: 5,
    date: "2 weeks ago",
    comment: "Spalon is my absolute go-to beauty parlour in Kumarapuram. The staff is so gentle, professional, and courteous. Got my Skin Treatment done here and the glow lasted through an entire wedding week! Their hygiene standards are top-notch.",
    service: "Skin Treatment & Anti Acne Facial",
    image: "/images/facial_spa.jpg",
    imageCaption: "Client Post-Facial Radiant Glow"
  },
  {
    id: "rev-3",
    author: "Lakshmi V. Menon",
    location: "Medical College area, Trivandrum",
    rating: 5,
    date: "1 month ago",
    comment: "Took my 4-year-old daughter here for her ear piercing and haircut. The stylist handled her with so much warmth and patience! She walked out smiling with her cute hair clips. Truly the best salon for ladies & kids in the city.",
    service: "Ear Piercing & Hair Cut",
    image: "/images/kids_cut.jpg",
    imageCaption: "Gentle Kids Haircut Experience"
  },
  {
    id: "rev-4",
    author: "Sreelakshmi Ramesh",
    location: "Pattom, Trivandrum",
    rating: 5,
    date: "3 weeks ago",
    comment: "Booked Spalon for my wedding muhurtham and reception. The bridal hair styling and saree pleating stayed intact for 8+ hours under heavy lights without a single pin shifting. Highly recommended!",
    service: "Bridal Basic Hair Styling",
    image: "/images/bridal_glow.jpg",
    imageCaption: "Muhurtham Bridal Saree Draping & Makeover"
  }
];

export const FAQS = [
  {
    question: "Where is Spalon located in Trivandrum?",
    answer: "We are conveniently located at Capital Tower, Opposite SFS, Pothujanam Lane, Kumarapuram, Thiruvananthapuram (Kerala 695011)—easily accessible from Medical College, Pattom, Murinjapalam, and Ulloor."
  },
  {
    question: "Are appointments required, or can I walk in?",
    answer: "Both are welcome! While we accommodate walk-ins based on slot availability, we strongly recommend booking an advance appointment through our WhatsApp or phone call (+91 83049 84911) so you don't have to wait."
  },
  {
    question: "Do you have special stylists for kids?",
    answer: "Yes! Our team includes stylists experienced with toddlers and kids. We use safe, gentle tools, tear-free styling sprays, and provide a fun, friendly environment to make every kid feel comfortable."
  },
  {
    question: "What brands of products do you use for skin & hair?",
    answer: "We only use premium, dermatologist-tested, and salon-certified professional brands including L'Oréal Professionnel, Cheryl's Cosmeceuticals, O3+, Lotus Herbals Professional, and Italian Rica Wax."
  },
  {
    question: "Do you offer custom bridal trial sessions?",
    answer: "Yes, we offer personalized bridal consultations and trial makeovers where we assess your skin tone, wedding attire, jewelry, and personal preferences to finalize your signature bridal look."
  }
];
