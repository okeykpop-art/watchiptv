export interface PricingPlan {
  id: string;
  duration: string;
  subtitle: string;
  price: string;
  monthlyPrice: string;
  savings?: string;
  badge?: string;
  features: string[];
}

export interface PricingScreen {
  screens: number;
  label: string;
  plans: PricingPlan[];
}

export const PRICING_DATA: PricingScreen[] = [
  {
    screens: 1,
    label: "1 Screen",
    plans: [
      {
        id: "3m-1",
        duration: "3 Months",
        subtitle: "Try our service",
        price: "€23.99",
        monthlyPrice: "€8.00",
        features: [
          "1 screen at a time",
          "24,000+ live channels",
          "125,000 movies & series",
          "4K/FHD/HD quality",
          "EPG & VOD included",
          "Anti-freeze technology",
          "VPN Protection",
          "24/7 English Support",
        ],
      },
      {
        id: "6m-1",
        duration: "6 Months",
        subtitle: "Best balance",
        price: "€34.99",
        monthlyPrice: "€5.83",
        savings: "Save 27%",
        badge: "Popular",
        features: [
          "1 screen at a time",
          "24,000+ live channels",
          "125,000 movies & series",
          "4K/FHD/HD quality",
          "EPG & VOD included",
          "Anti-freeze technology",
          "VPN Protection",
          "24/7 English Support",
        ],
      },
      {
        id: "12m-1",
        duration: "12 Months",
        subtitle: "Maximum savings",
        price: "€49.99",
        monthlyPrice: "€4.17",
        savings: "Save 48%",
        badge: "Best Value",
        features: [
          "1 screen at a time",
          "24,000+ live channels",
          "125,000 movies & series",
          "4K/FHD/HD quality",
          "EPG & VOD included",
          "Anti-freeze technology",
          "VPN Protection",
          "24/7 English Support",
        ],
      },
    ],
  },
  {
    screens: 2,
    label: "2 Screens",
    plans: [
      {
        id: "3m-2",
        duration: "3 Months",
        subtitle: "Try our service",
        price: "€33.99",
        monthlyPrice: "€11.33",
        features: [
          "2 screens at once",
          "24,000+ live channels",
          "125,000 movies & series",
          "4K/FHD/HD quality",
          "EPG & VOD included",
          "Anti-freeze technology",
          "VPN Protection",
          "24/7 English Support",
        ],
      },
      {
        id: "6m-2",
        duration: "6 Months",
        subtitle: "Best balance",
        price: "€49.99",
        monthlyPrice: "€8.33",
        savings: "Save 27%",
        badge: "Popular",
        features: [
          "2 screens at once",
          "24,000+ live channels",
          "125,000 movies & series",
          "4K/FHD/HD quality",
          "EPG & VOD included",
          "Anti-freeze technology",
          "VPN Protection",
          "24/7 English Support",
        ],
      },
      {
        id: "12m-2",
        duration: "12 Months",
        subtitle: "Maximum savings",
        price: "€79.99",
        monthlyPrice: "€6.67",
        savings: "Save 40%",
        badge: "Best Value",
        features: [
          "2 screens at once",
          "24,000+ live channels",
          "125,000 movies & series",
          "4K/FHD/HD quality",
          "EPG & VOD included",
          "Anti-freeze technology",
          "VPN Protection",
          "24/7 English Support",
        ],
      },
    ],
  },
  {
    screens: 3,
    label: "3 Screens",
    plans: [
      {
        id: "3m-3",
        duration: "3 Months",
        subtitle: "Try our service",
        price: "€43.99",
        monthlyPrice: "€14.67",
        features: [
          "3 screens at once",
          "24,000+ live channels",
          "125,000 movies & series",
          "4K/FHD/HD quality",
          "EPG & VOD included",
          "Anti-freeze technology",
          "VPN Protection",
          "24/7 English Support",
        ],
      },
      {
        id: "6m-3",
        duration: "6 Months",
        subtitle: "Best balance",
        price: "€69.99",
        monthlyPrice: "€11.67",
        savings: "Save 20%",
        badge: "Popular",
        features: [
          "3 screens at once",
          "24,000+ live channels",
          "125,000 movies & series",
          "4K/FHD/HD quality",
          "EPG & VOD included",
          "Anti-freeze technology",
          "VPN Protection",
          "24/7 English Support",
        ],
      },
      {
        id: "12m-3",
        duration: "12 Months",
        subtitle: "Maximum savings",
        price: "€99.99",
        monthlyPrice: "€8.33",
        savings: "Save 43%",
        badge: "Best Value",
        features: [
          "3 screens at once",
          "24,000+ live channels",
          "125,000 movies & series",
          "4K/FHD/HD quality",
          "EPG & VOD included",
          "Anti-freeze technology",
          "VPN Protection",
          "24/7 English Support",
        ],
      },
    ],
  },
];

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sander de V.",
    location: "Amsterdam",
    rating: 5,
    text: "Super happy! I was watching TV within 10 minutes. Picture quality is crystal clear, no buffering.",
  },
  {
    name: "Mohammed E.",
    location: "Rotterdam",
    rating: 5,
    text: "I've tried multiple providers, but this is by far the best. 4K works perfectly during football matches.",
  },
  {
    name: "Laura v. D.",
    location: "Utrecht",
    rating: 5,
    text: "Great customer service, subscription was active within 5 minutes. Very happy with this choice.",
  },
  {
    name: "Jeroen B.",
    location: "The Hague",
    rating: 5,
    text: "Works great on my Samsung Smart TV. No technical knowledge needed, just install and watch.",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "What is IPTV and how does it work?",
    answer:
      "IPTV (Internet Protocol Television) is a technology that lets you watch television via the internet. Instead of traditional cable or satellite connections, IPTV uses your internet connection to stream live TV, movies and series to your Smart TV, smartphone, tablet or computer.",
  },
  {
    question: "Which devices can I use IPTV on?",
    answer:
      "You can use our IPTV service on Smart TVs (Samsung, LG, Android TV), smartphones and tablets (iOS and Android), computers (Windows, Mac, Linux), streaming devices (Fire TV Stick, Apple TV, Chromecast) and IPTV boxes.",
  },
  {
    question: "How quickly is my subscription activated?",
    answer:
      "After completing your order, we activate your IPTV subscription usually within 5-15 minutes. You'll receive all necessary details by email as soon as your subscription is active.",
  },
  {
    question: "What channels are available?",
    answer:
      "Our IPTV service provides access to over 24,000 live channels: local channels, international channels, sports channels (Premier League, Champions League, Formula 1), premium entertainment and kids' channels. We also have a library of over 125,000 movies and series.",
  },
  {
    question: "Does IPTV have good picture quality?",
    answer:
      "Yes! We offer 4K Ultra HD, Full HD (1080p) and HD (720p). We recommend at least 10 Mbps for HD and 25 Mbps for 4K streaming.",
  },
  {
    question: "Can I watch on multiple devices at once?",
    answer:
      "This depends on your chosen subscription: 1 Screen (one device at a time), 2 Screens (two devices) or 3 Screens (three devices). You can install your account on multiple devices, but you can only watch on the number of screens included in your plan.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription at any time. It expires at the end of the paid period and is not automatically renewed. Contact us via email or WhatsApp.",
  },
  {
    question: "Do you offer technical support?",
    answer:
      "Yes, our support team is available 24/7 via email and WhatsApp. We help you with installation, technical issues and questions about your subscription.",
  },
];

export interface KnowledgeArticle {
  title: string;
  href: string;
  icon: string;
}

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  { title: "What is IPTV?", href: "#", icon: "📖" },
  { title: "Buying IPTV", href: "#", icon: "🛒" },
  { title: "IPTV Devices", href: "#", icon: "📺" },
  { title: "IPTV Apps", href: "#", icon: "📲" },
  { title: "IPTV Legal & VPN", href: "#", icon: "🔒" },
  { title: "IPTV Troubleshooting", href: "#", icon: "🔧" },
];
