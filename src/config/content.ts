import {
  LatinCross,
  PrayingHands,
  Wine,
  type IconComponent,
} from "@/components/icons";

export type SectionKey = "home" | "story" | "events" | "venue" | "gallery" | "contact";

const venue = {
  place: "Sri Lakshmi Narayanan Mahal",
  address: [
    "No. 93, C.T.H Road, Sevvapet",
    "Next to Sevvapet Police Station",
    "Thiruvallur",
  ],
  mapLink: "https://maps.app.goo.gl/67m1XDrmg4t6py9T8",
  mapEmbed:
    "https://www.google.com/maps?q=Sri+Lakshmi+Narayan+Mahal+Sevvapet&z=18&t=k&output=embed",
};

export const content = {
  nav: [
    { title: "Home", key: "home" },
    { title: "Story", key: "story" },
    { title: "Gallery", key: "gallery" },
  ] satisfies { title: string; key: SectionKey }[],

  experienceGate: {
    title: "Welcome to Our Wedding",
    music: "Play Background Music",
    description:
      "For the best experience, please allow gentle motion effects and background music to make your visit more immersive and memorable.",
    enter: "Enter Experience",
    entering: "Entering...",
    loading: "Loading",
    footer: "You can disable music anytime",
  },

  landing: {
    title: "Wedding invitation of Anbu Chezhiyan and Varshini",
    imageAlt: "Wedding invitation of Anbu Chezhiyan and Varshini, 5 March 2026",
  },

  story: {
    eyebrow: "How It All Began",
    title: "Our Story",
    timeline: [
      {
        title: "First Meet",
        desc: "A simple introduction that quietly marked the beginning of something meaningful, guided by God’s plan.",
        date: "2 Feb 2025",
      },
      {
        title: "First Talk",
        desc: "An honest and comfortable conversation that brought clarity, peace, and mutual respect.",
        date: "15 Feb 2025",
      },
      {
        title: "Families Connected",
        desc: "Two families met in faith and understanding, laying the foundation for a shared future.",
        date: "10 Mar 2025",
      },
      {
        title: "Warmth",
        desc: "Time spent in conversations and prayer strengthened trust, values, and companionship.",
        date: "18 Apr 2025",
      },
      {
        title: "Engagement",
        desc: "A promise made with blessings, faith, and the joy of togetherness.",
        date: "7 July 2025",
      },
      {
        title: "Preparing Together",
        desc: "Planning life ahead with patience, support, and gratitude for every shared moment.",
        date: "22 Nov 2025",
      },
      {
        title: "Journey to Forever",
        desc: "Stepping into marriage with love, faith, and a shared commitment to walk together always.",
        date: "5 March 2026",
      },
    ],
  },

  events: {
    eyebrow: "Save the Date",
    title: "Events",
    items: [
      {
        id: "opening-prayer",
        title: "Starting Prayer",
        date: "March 5, 2026",
        time: "6:00 PM onwards",
        place: venue.place,
        icon: PrayingHands,
      },
      {
        id: "ceremony",
        title: "Wedding Ceremony",
        date: "March 5, 2026",
        time: "7:00 PM onwards",
        place: venue.place,
        highlight: true,
        badge: "Holy Matrimony",
        icon: LatinCross,
      },
      {
        id: "reception",
        title: "Reception",
        date: "March 5, 2026",
        time: "8:00 PM onwards",
        place: venue.place,
        icon: Wine,
      },
    ] as {
      id: string;
      title: string;
      date: string;
      time: string;
      place: string;
      highlight?: boolean;
      badge?: string;
      icon: IconComponent;
    }[],
  },

  venue: {
    eyebrow: "Join Us At",
    title: "Wedding Venue",
    ...venue,
    directions: "Get Directions",
    directionsHint: "(opens Google Maps)",
  },

  gallery: {
    eyebrow: "Captured Moments",
    title: "Our Gallery",
    items: [
      { src: "/video/Diwali.webm", alt: "Anbu and Varshini celebrating Diwali" },
      { src: "/images/Together.webp", alt: "Anbu and Varshini together" },
      { src: "/images/Eng.webp", alt: "Anbu and Varshini at their engagement" },
      { src: "/images/Bike.webp", alt: "Our blue motorcycle on a rainy street" },
      { src: "/video/BikeRide.webm", alt: "Anbu and Varshini on a bike ride" },
      { src: "/images/LilHer.webp", alt: "Varshini as a child" },
      { src: "/images/LilHim.webp", alt: "Anbu as a child" },
      { src: "/images/Heart.webp", alt: "Anbu and Varshini making a heart" },
    ],
  },

  countdown: {
    eyebrow: "Together Begins",
    title: "Our Big Day",
    timerLabel: "days until the wedding",
    marriedEyebrow: "Married on 5 March 2026",
    marriedTitle: "Together For",
    marriedTimerLabel: "days since our wedding",
    units: [
      { title: "days", key: "days" },
      { title: "hours", key: "hours" },
      { title: "minutes", key: "minutes" },
      { title: "seconds", key: "seconds" },
    ] as const,
  },

  footer: {
    eyebrow: "For Being a Part of Our Love Story",
    title: "Thank You",
    paragraphs: [
      "Thank you for being part of our special day. Your presence, prayers, blessings, and love are a precious gift to us.",
      "With grateful hearts, we thank God for the joy, memories, and faithful people He has placed in our lives as we begin this journey together.",
    ],
    withLove: "With love",
    madeWith: "Made with love for Anbu & Varshini",
  },

  blessings: {
    title: "Blessings & Wishes",
    items: [
      {
        name: "Pastor Samuel",
        message:
          "May the Lord bless your union and guide you in love and faith all your days.",
      },
      {
        name: "Uncle Joseph",
        message: "Wishing you a lifetime of happiness, unity, and God’s grace.",
      },
      {
        name: "Aunt Mary",
        message: "May your home be filled with peace, joy, and endless love.",
      },
      {
        name: "Grandma Esther",
        message:
          "May your love grow stronger each day and bring light to all around you.",
      },
      {
        name: "Cousin Daniel",
        message:
          "Wishing you laughter, love, and a lifetime of cherished memories.",
      },
      {
        name: "Friend Clara",
        message:
          "May your journey together be filled with endless joy and warmth.",
      },
    ],
  },

  invitation: {
    title: "You're Warmly Invited",
    body: "With hearts full of joy and gratitude, we invite you to witness and bless our union. Your presence would make our special day even more meaningful. Together with our beloved families, we look forward to celebrating this beautiful journey with you.",
    verse: "May the Lord make your love increase and overflow for each other.",
    chapter: "1 Thessalonians 3:12",
    invite: "We warmly invite you to celebrate",
  },

  family: {
    title: "Our Family",
    groom: {
      title: "Groom’s Family",
      members: [
        {
          name: "Mr. Malar Chezhiyan",
          role: "Father of Groom",
          description:
            "A humble and respected gentleman, admired for his wisdom, integrity, and lifelong commitment to family values.",
        },
        {
          name: "Mrs. Kalpana",
          role: "Mother of Groom",
          description:
            "A graceful and caring soul whose warmth, patience, and devotion create a loving foundation for the family.",
        },
        {
          name: "Mr. Kalai Chezhiyan",
          role: "Younger Brother of the Groom",
          description:
            "A thoughtful and dependable brother whose easygoing nature, encouragement, and quiet strength add warmth to the family.",
        },
      ],
    },
    bride: {
      title: "Bride’s Family",
      members: [
        {
          name: "Mr. Ranganathan",
          role: "Father of Bride",
          description:
            "A dignified personality known for his discipline, guidance, and deep sense of responsibility.",
        },
        {
          name: "Mrs. Durgavathi",
          role: "Mother of Bride",
          description:
            "A compassionate and nurturing presence, admired for her strength, kindness, and unconditional love.",
        },
        {
          name: "Mr. Suriya",
          role: "Elder Brother of the Bride",
          description:
            "A guiding presence and constant support, known for his protectiveness, wisdom, and heartfelt care for his sister and family.",
        },
      ],
    },
  },
};
