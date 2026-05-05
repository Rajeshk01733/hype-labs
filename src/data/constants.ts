import {
  Project,
  NavLink,
  FAQItem,
  ServiceItem,
  BlogPost,
  JobPosition,
  StatItem,
  PortfolioItem,
  PortfolioSection,
  PortfolioSector,
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Careers", href: "#careers" },
  { label: "FAQ", href: "#faq" },
];

export const STATS: StatItem[] = [
  { value: "10+", label: "Years Experience" },
  { value: "250+", label: "Projects Delivered" },
  { value: "35", label: "Global Awards" },
  { value: "15M", label: "Audience Reached" },
];

export const CLIENT_LOGOS = [
  "Google",
  "Spotify",
  "Nike",
  "Coca-Cola",
  "Samsung",
  "Tesla",
  "Adobe",
  "Microsoft",
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Branding",
    description:
      "We craft distinct visual identities that resonate with your audience and stand the test of time.",
    icon: "Palette",
    link: "/services/branding",
  },
  {
    title: "CGI & 3D",
    description:
      "Hyper-realistic product visualizations and immersive 3D environments that elevate your presentation.",
    icon: "Box",
    link: "/services/cgi-3d",
  },
  {
    title: "Content Creation",
    description:
      "Engaging, social-first content strategies designed to capture attention and drive engagement.",
    icon: "Video",
    link: "/services/content-creation",
  },
  {
    title: "Commercial Production",
    description:
      "High-end video production for TV and digital platforms, handling everything from concept to post-production.",
    icon: "Clapperboard",
    link: "/services/commercial-production",
  },
  {
    title: "Website Development",
    description:
      "Performance-driven, responsive websites built with cutting-edge technology for maximum conversion.",
    icon: "Code",
    link: "/services/website-development",
  },
];

// export const BLOG_POSTS: BlogPost[] = [
//   {
//     id: 1,
//     title: "The Future of Digital Identity in Web3",
//     excerpt: "Exploring how decentralized technologies are reshaping how brands interact with consumers.",
//     date: "Mar 15, 2024",
//     category: "Insights",
//     imageUrl: "https://picsum.photos/seed/blog1/800/600"
//   },
//   {
//     id: 2,
//     title: "Maximizing ROI with CGI Marketing",
//     excerpt: "Why top brands are switching from traditional photography to 3D rendering for product launches.",
//     date: "Mar 10, 2024",
//     category: "Technology",
//     imageUrl: "https://picsum.photos/seed/blog2/800/600"
//   },
//   {
//     id: 3,
//     title: "Design Trends Defining 2024",
//     excerpt: "A deep dive into the aesthetic shifts dominating the creative landscape this year.",
//     date: "Feb 28, 2024",
//     category: "Design",
//     imageUrl: "https://picsum.photos/seed/blog3/800/600"
//   }
// ];

// export const CASE_STUDIES: BlogPost[] = [
//   {
//     id: 1,
//     title: "E-Commerce Growth Using CGI",
//     excerpt:
//       "How we boosted conversions by 42% using 3D product visualization.",
//     date: "Jan 20, 2024",
//     category: "E-Commerce",
//     imageUrl: "https://picsum.photos/seed/case1/800/600",
//   },
//   {
//     id: 2,
//     title: "Luxury Brand Product Launch",
//     excerpt:
//       "A premium CGI campaign that reduced production costs by 60%.",
//     date: "Dec 12, 2023",
//     category: "Branding",
//     imageUrl: "https://picsum.photos/seed/case2/800/600",
//   },
// ];

export const JOBS: JobPosition[] = [];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Fintech Revolution App",
    category: "Web Design",
    imageUrl: "https://picsum.photos/seed/fintech/800/600",
    description: "A comprehensive banking dashboard with real-time analytics.",
    client: "NovaBank",
  },
  {
    id: 2,
    title: "EcoBrand Identity",
    category: "Branding",
    imageUrl: "https://picsum.photos/seed/eco/800/800",
    description: "Sustainable visual identity for a green energy startup.",
    client: "GreenLeaf",
  },
  {
    id: 3,
    title: "Urban Fashion Campaign",
    category: "Marketing",
    imageUrl: "https://picsum.photos/seed/fashion/800/1000",
    description: "Social media takeover for the launch of street wear line.",
    client: "Strut",
  },
  {
    id: 4,
    title: "Crypto Wallet UI",
    category: "Web Design",
    imageUrl: "https://picsum.photos/seed/crypto/800/600",
    description: "Secure and intuitive interface for managing digital assets.",
    client: "BitVault",
  },
  {
    id: 5,
    title: "Neon Nights Social",
    category: "Social Media",
    imageUrl: "https://picsum.photos/seed/neon/800/800",
    description: "Instagram growth strategy and content creation.",
    client: "Club Vivid",
  },
  {
    id: 6,
    title: "Luxury Estate Brochure",
    category: "Branding",
    imageUrl: "https://picsum.photos/seed/estate/800/600",
    description: "Premium print and digital assets for high-end real estate.",
    client: "Opulence Living",
  },
  {
    id: 7,
    title: "Tech Summit 2024",
    category: "Marketing",
    imageUrl: "https://picsum.photos/seed/tech/800/600",
    description: "Full event marketing suite including landing pages and ads.",
    client: "InnovateConf",
  },
  {
    id: 8,
    title: "HealthTrack Mobile",
    category: "Web Design",
    imageUrl: "https://picsum.photos/seed/health/800/1000",
    description: "Cross-platform mobile application for fitness tracking.",
    client: "Vitality",
  },
  {
    id: 9,
    title: "Aurora Speaker Render",
    category: "CGI",
    imageUrl: "https://picsum.photos/seed/cgiproject/800/600",
    description: "Photoreal speaker render for ecommerce launch.",
    client: "SoundLab",
  },
];

export const CATEGORIES: string[] = [
  "All",
  "Web Design",
  "Branding",
  "Marketing",
  "Social Media",
  "CGI",
];

export const FAQS: FAQItem[] = [
  {
    question: "What services does Innovex offer?",
    answer:
      "We offer a comprehensive suite of digital services including Web Design & Development, Branding & Identity, Digital Marketing, SEO Optimization, and Social Media Management. Our goal is to provide end-to-end solutions for your digital presence.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on the scope and complexity. A standard branding project might take 2-4 weeks, while a custom website design and development project typically ranges from 4-8 weeks. We provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Absolutely! We love working with ambitious startups and small businesses. We have tailored packages designed to help new businesses establish a strong professional presence without breaking the bank.",
  },
  {
    question: "How does your pricing structure work?",
    answer:
      "We believe in transparency. Most of our projects are priced on a fixed-fee basis based on the specific deliverables. For ongoing services like marketing or maintenance, we offer monthly retainer packages. Contact us for a custom quote.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we don't just launch and leave. We offer 30 days of complimentary support after launch to ensure everything runs smoothly. Beyond that, we offer maintenance packages to keep your website secure, updated, and performing optimally.",
  },
];

//portfolio
export const INDUSTRIES = [
  "Design",
  "Development",
   "Marketing",
  "Infrastructure",
 
];

export const SERVICES_BY_INDUSTRY: Record<string, string[]> = {
  Design: ["Photography"],  // Formerly Jewelery
  Development: ["Photography", "Commercial Production"],  // Formerly Finance
  Infrastructure: [
    "Photography",
    "Graphics",
    "Content Creation",
    "3D Images",
    "3D Videos",
  ],  // Formerly Fashion
  Marketing: ["Photography", "Graphics", "Content Creation"],  // Formerly Automobile
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Jewelery
  {
    id: 1,
    industry: "Design",
    service: "Photography",
    media: [
      { id: 1, type: "image", url: "/portfolio/Design/pomelli-image (2).png" },
      { id: 2, type: "image", url: "/portfolio/Design/pomelli-image (6).png" },
      { id: 3, type: "image", url: "/portfolio/Design/pomelli-image (9).png" },
      { id: 4, type: "image", url: "/portfolio/Design/pomelli-image (10).png" },
      { id: 5, type: "image", url: "/portfolio/Design/pomelli-image (12).png" },
    ],
  },

  // Finance
  {
    id: 2,
    industry: "Development",
    service: "Photography",
    media: [
      {
        id: 1,
        type: "image",
        url: "/portfolio/Development/pomelli-image (15).png",
      },
      {
        id: 2,
        type: "image",
        url: "/portfolio/Development/pomelli-image (17).png",
      },
      {
        id: 3,
        type: "image",
        url: "/portfolio/Development/pomelli-image (23).png",
      },
      {
        id: 4,
        type: "image",
        url: "/portfolio/Development/pomelli-image (35).png",
      },
      {
        id: 5,
        type: "image",
        url: "/portfolio/Development/pomelli-image (39).png",
      },
      { id: 6, type: "image", url: "/portfolio/Development/01.png" },
    ],
  },
  {
    id: 3,
    industry: "Infrastructure",
    service: "Commercial Production",
    media: [
      { id: 1, type: "image", url: "/portfolio/Infrastructure/01.png" },
      { id: 2, type: "image", url: "/portfolio/Infrastructure/02.png" },
      { id: 3, type: "image", url: "/portfolio/Infrastructure/03.png" },
    ],
  },

  // Marketing (formerly Fashion)
  {
    id: 4,
    industry: "Marketing",
    service: "Photography",
    media: [
      { id: 1, type: "image", url: "/portfolio/Marketing/01.png" },
      { id: 2, type: "image", url: "/portfolio/Marketing/02.png" },
      { id: 3, type: "image", url: "/portfolio/Marketing/03.png" },
      { id: 4, type: "image", url: "/portfolio/Marketing/04.png" },
    ],
  },
  
];

// Portfolio Sectors Data
export const PORTFOLIO_SECTORS: PortfolioSector[] = [
  {
    id: 1,
    name: "Marketing",
    folderPath: "Marketing",
    sections: [
      {
        id: 1,
        name: "Energy & Sustainability Services",
        sector: "Marketing",
        folderPath: "Marketing/Energy & Sustainability Services",
        images: [
          "/portfolio/Marketing/Energy & Sustainability Services/01.png",
          "/portfolio/Marketing/Energy & Sustainability Services/02.png",
          "/portfolio/Marketing/Energy & Sustainability Services/03.png",
          "/portfolio/Marketing/Energy & Sustainability Services/04.png",
        ],
      },
      {
        id: 2,
        name: "RealEstate",
        sector: "Marketing",
        folderPath: "Marketing/RealEstate",
        images: [
          "/portfolio/Marketing/RealEstate/01.png",
          "/portfolio/Marketing/RealEstate/02.png",
          "/portfolio/Marketing/RealEstate/03.png",
          "/portfolio/Marketing/RealEstate/04.png",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Design",
    folderPath: "Design",
    sections: [
      {
        id: 1,
        name: "Visa and Immigration Services",
        sector: "Design",
        folderPath: "Design/Visa and Immigration Services",
        images: [
          "/portfolio/Design/Visa and Immigration Services/01.png",
          "/portfolio/Design/Visa and Immigration Services/02.png",
        ],
      },
      {
        id: 2,
        name: "Travel & Leisure / Adventure Tourism",
        sector: "Design",
        folderPath: "Design/Travel & Leisure Adventure Tourism",
        images: [
          "/portfolio/Design/Travel & Leisure Adventure Tourism/01.png",
          "/portfolio/Design/Travel & Leisure Adventure Tourism/02.png",
        ],
      },
      {
        id: 3,
        name: "Textiles & Manufacturing",
        sector: "Design",
        folderPath: "Design/Textiles & Manufacturing",
        images: [
          "/portfolio/Design/Textiles & Manufacturing/01.png",
          "/portfolio/Design/Textiles & Manufacturing/02.png",
        ],
      },
      {
        id: 4,
        name: "Education / Academic Institution",
        sector: "Design",
        folderPath: "Design/Education / Academic Institution",
        images: [
          "/portfolio/Design/Education / Academic Institution/01.png",
          "/portfolio/Design/Education / Academic Institution/02.png",
        ],
      },
      {
        id: 5,
        name: "Construction & Building Materials",
        sector: "Design",
        folderPath: "Design/Construction & Building Materials",
        images: [
          "/portfolio/Design/Construction & Building Materials/01.png",
          "/portfolio/Design/Construction & Building Materials/02.png",
        ],
      },
      {
        id: 6,
        name: "Banking & Financial Services",
        sector: "Design",
        folderPath: "Design/Banking & Financial Services",
        images: [
          "/portfolio/Design/Banking & Financial Services/01.png",
          "/portfolio/Design/Banking & Financial Services/02.png",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Development",
    folderPath: "Development",
    sections: [
      {
        id: 1,
        name: "Property Management",
        sector: "Development",
        folderPath: "Development/Property Management",
        images: [
          "/portfolio/Development/Property Management/01.png",
          "/portfolio/Development/Property Management/02.png",
        ],
      },
      {
        id: 2,
        name: "Oil & Gas / Industrial Services",
        sector: "Development",
        folderPath: "Development/Oil & Gas / Industrial Services",
        images: [
          "/portfolio/Development/Oil & Gas / Industrial Services/01.png",
          "/portfolio/Development/Oil & Gas / Industrial Services/02.png",
        ],
      },
      {
        id: 3,
        name: "Media & Entertainment",
        sector: "Development",
        folderPath: "Development/Media & Entertainment",
        images: [
          "/portfolio/Development/Media & Entertainment/01.png",
          "/portfolio/Development/Media & Entertainment/02.png",
        ],
      },
      {
        id: 4,
        name: "Hospitality / Travel Accommodation",
        sector: "Development",
        folderPath: "Development/Hospitality / Travel Accommodation",
        images: [
          "/portfolio/Development/Hospitality / Travel Accommodation/01.png",
          "/portfolio/Development/Hospitality / Travel Accommodation/02.png",
        ],
      },
      {
        id: 5,
        name: "FoodTech / Cloud Kitchen / Food Delivery",
        sector: "Development",
        folderPath: "Development/FoodTech / Cloud Kitchen / Food Delivery",
        images: [
          "/portfolio/Development/FoodTech / Cloud Kitchen / Food Delivery/01.png",
          "/portfolio/Development/FoodTech / Cloud Kitchen / Food Delivery/02.png",
        ],
      },
      {
        id: 6,
        name: "Fitness",
        sector: "Development",
        folderPath: "Development/Fitness",
        images: [
          "/portfolio/Development/Fitness/01.png",
          "/portfolio/Development/Fitness/02.png",
        ],
      },
      {
        id: 7,
        name: "Fashion & Lifestyle Service",
        sector: "Development",
        folderPath: "Development/Fashion & Lifestyle Service",
        images: [
          "/portfolio/Development/Fashion & Lifestyle Service/01.png",
          "/portfolio/Development/Fashion & Lifestyle Service/02.png",
        ],
      },
      {
        id: 8,
        name: "D2C / FMCG (Dairy Brand)",
        sector: "Development",
        folderPath: "Development/D2C / FMCG (Dairy Brand)",
        images: [
          "/portfolio/Development/D2C / FMCG (Dairy Brand)/01.png",
          "/portfolio/Development/D2C / FMCG (Dairy Brand)/02.png",
        ],
      },
      {
        id: 9,
        name: "Creative Agency / Design Studio",
        sector: "Development",
        folderPath: "Development/Creative Agency / Design Studio",
        images: [
          "/portfolio/Development/Creative Agency / Design Studio/01.png",
          "/portfolio/Development/Creative Agency / Design Studio/02.png",
        ],
      },
      {
        id: 10,
        name: "Consulting / Business Advisory Firm",
        sector: "Development",
        folderPath: "Development/Consulting / Business Advisory Firm",
        images: [
          "/portfolio/Development/Consulting / Business Advisory Firm/01.png",
          "/portfolio/Development/Consulting / Business Advisory Firm/02.png",
        ],
      },
      {
        id: 11,
        name: "Business SaaS / SME Management Tool",
        sector: "Development",
        folderPath: "Development/Business SaaS / SME Management Tool",
        images: [
          "/portfolio/Development/Business SaaS / SME Management Tool/01.png",
          "/portfolio/Development/Business SaaS / SME Management Tool/02.png",
        ],
      },
      {
        id: 12,
        name: "Architecture",
        sector: "Development",
        folderPath: "Development/Architecture",
        images: [
          "/portfolio/Development/Architecture/01.png",
          "/portfolio/Development/Architecture/02.png",
        ],
      },
      {
        id: 13,
        name: "Smart Community & Security Platform",
        sector: "Development",
        folderPath: "Development/Smart Community & Security Platform",
        images: [
          "/portfolio/Development/Smart Community & Security Platform/01.png",
          "/portfolio/Development/Smart Community & Security Platform/02.png",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Infrastructure",
    folderPath: "Infrastructure",
    sections: [
      {
        id: 1,
        name: "Cloud & Hosting",
        sector: "Infrastructure",
        folderPath: "Infrastructure/Cloud & Hosting",
        images: [
          "/portfolio/Infrastructure/01.png",
          "/portfolio/Infrastructure/02.png",
          "/portfolio/Infrastructure/03.png",
        ],
      },
    ],
  },
];