export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'bridal' | 'kids' | 'spa';
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
  // Hair
  {
    id: "hair-keratin",
    name: "Nano-Keratin Protein Treatment",
    category: "hair",
    duration: "120-180 mins",
    popular: true,
    tag: "Best Seller",
    description: "Deep nourishing protein infusion that eliminates frizz, restores silkiness, and provides lasting mirror-like shine for up to 6 months.",
    highlights: ["Formaldehyde-free formula", "Intense humidity protection", "Silky soft finish"]
  },
  {
    id: "hair-smoothening",
    name: "Permanent Hair Smoothening / Straightening",
    category: "hair",
    duration: "180-240 mins",
    description: "L'Oréal Professionnel precision straightening customized to your hair texture for poker-straight elegance with natural bounce.",
    highlights: ["L'Oréal X-Tenso certified", "Includes post-care mask", "Zero hair breakage"]
  },
  {
    id: "hair-cut-style",
    name: "Precision Layered Haircut & Blow-dry",
    category: "hair",
    duration: "45 mins",
    popular: true,
    description: "Face-framing layers, butterfly cut, or curtain bangs sculpted by senior stylists, finished with an anti-humidity blow dry.",
    highlights: ["Face-shape consultation", "Relaxing scalp wash", "Heat styling included"]
  },
  {
    id: "hair-spa-botox",
    name: "Hair Botox & Moroccan Argan Spa",
    category: "hair",
    duration: "75 mins",
    description: "Rejuvenates chemically treated or heat-damaged hair with essential fatty acids, keratin peptides, and therapeutic scalp massage.",
    highlights: ["Intense split-end repair", "Stimulating massage", "Gloss boost"]
  },
  {
    id: "hair-color-balayage",
    name: "Balayage Highlights & Global Hair Color",
    category: "hair",
    duration: "120 mins",
    description: "Seamless hand-painted highlights, rich mocha, caramel, or burgundy tones using ammonia-free salon formulations.",
    highlights: ["Ammonia-free gentle color", "Zero brassiness finish", "Includes color-lock treatment"]
  },

  // Skin & Facials
  {
    id: "skin-hydra-facial",
    name: "Medical-Grade Hydra Dermabrasion Facial",
    category: "skin",
    duration: "75 mins",
    popular: true,
    tag: "Celebrity Glow",
    description: "Multi-step vortex suction deep pore extraction, hyaluronic acid peptide infusion, and cold hammer oxygen therapy for an instant glass-skin finish.",
    highlights: ["Zero downtime", "Deep blackhead removal", "Instant bridal radiance"]
  },
  {
    id: "skin-o3-whitening",
    name: "O3+ Radiant Glow & De-Pigmentation",
    category: "skin",
    duration: "60 mins",
    description: "Formulated for sun-exposed Kerala climate: removes stubborn tan, lightens blemishes, and restores an even, radiant complexion.",
    highlights: ["Melanin suppression", "Pure oxygen booster", "Soothing algae mask"]
  },
  {
    id: "skin-gold-facial",
    name: "24K Gold Luxury Illuminating Facial",
    category: "skin",
    duration: "75 mins",
    description: "Enriched with 24K gold dust and botanical collagen to enhance cellular renewal and give a warm festive luminescence.",
    highlights: ["Fine line smoothing", "Collagen renewal", "Luminous festive glow"]
  },
  {
    id: "skin-detan-cleanup",
    name: "Herbal Fruit De-Tan Clean Up",
    category: "skin",
    duration: "45 mins",
    description: "Quick refreshing cleanse with steam, blackhead extractions, mild exfoliation, and a cooling aloe pack.",
    highlights: ["Tired skin reviver", "Non-comedogenic", "Fresh herbal botanicals"]
  },

  // Bridal
  {
    id: "bridal-muhurtham-hd",
    name: "Royal Kerala Muhurtham HD Bridal Package",
    category: "bridal",
    duration: "180 mins",
    popular: true,
    tag: "Signature Look",
    description: "Complete signature bridal look for traditional Kasavu/Kanchipuram sarees: high-definition waterproof sweat-proof makeup, jasmine floral hair setting, and perfect jewellery placement.",
    highlights: ["16-hour sweat-proof HD makeup", "Traditional & modern hair updos", "Precision pleat saree draping", "Lashes & lenses assistance"]
  },
  {
    id: "bridal-reception-glam",
    name: "Cocktail & Reception Airbrush Glam",
    category: "bridal",
    duration: "150 mins",
    description: "Featherlight airbrush makeup delivering a seamless celebrity finish under flash photography and stage lights with glamorous waves or chic updo.",
    highlights: ["Airbrush silicon technology", "Custom smokey/shimmer eyes", "Gown & veil styling"]
  },
  {
    id: "bridal-pre-radiance",
    name: "3-Week Pre-Bridal Glow Transformation",
    category: "bridal",
    duration: "3 Sessions",
    description: "Full body polishing, gold facial, hair restoration spa, deluxe manicure-pedicure, threading, waxing, and herbal back treatment.",
    highlights: ["Head-to-toe pampering", "Custom bridal consultation", "Detox body scrub"]
  },

  // Kids
  {
    id: "kids-haircut-boy",
    name: "Gentle & Fun Kids Haircut (Boys)",
    category: "kids",
    duration: "25 mins",
    popular: true,
    tag: "Tear-Free",
    description: "Patient, friendly stylists trained to keep toddlers and young boys happy and calm with fun animated capes and gentle scissors.",
    highlights: ["Super patient stylists", "Kid-safe sanitized tools", "Lollipop & sticker treat"]
  },
  {
    id: "kids-haircut-girl",
    name: "Pretty Princess Bob / Layer Cut (Girls)",
    category: "kids",
    duration: "30 mins",
    description: "Cute bobs, bangs, or trim tailored for kids with soft detangling spray and complimentary cute hair clips.",
    highlights: ["Tangle-free combing", "Soft baby-friendly scissors", "Complimentary hair clips"]
  },
  {
    id: "kids-ear-piercing",
    name: "Painless Gun Ear Piercing",
    category: "kids",
    duration: "20 mins",
    description: "100% sterile, hypoallergenic medical-grade studs with quick and virtually painless touch for toddlers and girls.",
    highlights: ["Hypoallergenic studs", "Antiseptic aftercare gel", "Zero infection guarantee"]
  },

  // Hands, Feet & Spa
  {
    id: "spa-icecream-pedicure",
    name: "Aroma Luxury Crystal Pedicure & Foot Spa",
    category: "spa",
    duration: "60 mins",
    popular: true,
    description: "Soothing foot bath with Epsom bath salts, deep callus buffing, organic sugar scrub, relaxing reflexology foot massage, and nail shaping.",
    highlights: ["Relieves heel cracks & fatigue", "Deep calf massage", "Gel polish finish option"]
  },
  {
    id: "spa-french-manicure",
    name: "Classic Spa Manicure with Cuticle Care",
    category: "spa",
    duration: "45 mins",
    description: "Hydrating soak, almond oil cuticle nourishing, gentle arm massage, and streak-free buffing or polish.",
    highlights: ["Dead skin exfoliation", "Nail strengthening treatment", "High-gloss top coat"]
  },
  {
    id: "spa-body-waxing",
    name: "Rica Liposoluble Painless Waxing",
    category: "spa",
    duration: "30-60 mins",
    description: "Italian Rica wax that adheres to hair rather than skin, minimizing redness and preventing ingrown hair on sensitive skin.",
    highlights: ["Colophony-free & gentle", "No redness or rashes", "Long-lasting smoothness"]
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Divya George",
    location: "Ulloor, Trivandrum",
    rating: 5,
    date: "1 month ago",
    comment: "Got the vibrant hair color and keratin treatment done at Spalon. The result is pure magic—look at the before and after! Soft, shiny, and the highlights are so beautifully blended. Absolutely the best hair salon in Kumarapuram.",
    service: "Vibrant Color & Highlights",
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
    comment: "Spalon is my absolute go-to beauty parlour in Kumarapuram. The staff is so gentle, professional, and courteous. Got my Hydra Facial done here and the glow lasted through an entire wedding week! Their hygiene standards are top-notch.",
    service: "Hydra Dermabrasion Facial",
    image: "/images/facial_spa.jpg",
    imageCaption: "Client Post-Facial Radiant Glow"
  },
  {
    id: "rev-3",
    author: "Lakshmi V. Menon",
    location: "Medical College area, Trivandrum",
    rating: 5,
    date: "1 month ago",
    comment: "Took my 4-year-old daughter here for her first haircut and was so worried she'd cry. The stylist handled her with so much warmth and patience! She walked out smiling with her cute hair clips. Truly the best salon for ladies & kids in the city.",
    service: "Tear-Free Kids Haircut",
    image: "/images/kids_cut.jpg",
    imageCaption: "Gentle Kids Haircut Experience"
  },
  {
    id: "rev-4",
    author: "Sreelakshmi Ramesh",
    location: "Pattom, Trivandrum",
    rating: 5,
    date: "3 weeks ago",
    comment: "Booked Spalon for my wedding muhurtham and reception. The makeup was so natural yet radiant, and the saree pleating stayed intact for 8+ hours under heavy lights without a single pin shifting. Highly recommended!",
    service: "Kerala Muhurtham Bridal",
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
