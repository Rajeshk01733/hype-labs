import { Monitor, PenTool, Box, Video, Camera } from "lucide-react";

export interface DesignData {
  id: string;
  title: string;
  heroTitle?: string;
  icon: any;
  shortDesc: string;
  fullDesc: string;
  heroImage: string;
  features: string[];
  detailedFeatures?: { title: string; desc: string; image?: string }[];
  galleryHeading?: string;
  galleryDesc?: string;
  galleryImages?: string[];
  galleryVideos?: string[];
  headlineSection?: {
    title: string;
    description: string;
  };
  subheadSection?: {
    // Add this new property
    title: string;
    description: string;
  };
  keyFeatures?: { title: string; desc: string }[];
  faq?: { question: string; answer: string }[];
  process?: { title: string; desc: string }[];
  cta?: { title: string; subtitle: string };
  meta?: { title: string; description: string };
  portfolio: { title: string; category: string; image: string }[];
}

export const designData: DesignData[] = [
  {
    id: "ui-ux-design",
    title: "UI UX Design Company Bangalore for Business Growth",
    heroTitle: "UI UX Design Company Bangalore for Business Growth",
    icon: Monitor,
    shortDesc:
      "We craft intuitive, high-performing experiences as a leading UI UX design company Bangalore, helping brands elevate their digital presence and drive real results.",
    fullDesc:
      "Our UI UX design services focus on creating seamless, user-friendly experiences backed by strategy and data. We design websites and applications with a deep understanding of user behavior, ensuring every interaction is meaningful through modern user interface design and digital product design.",
    heroImage: "/desgin/ui/Banner.png", // UI/UX design related image

    // Gallery Images (for mockups showcase)
    galleryImages: [
      
      "/desgin/ui/02.png",
      "/desgin/ui/05.png",
      "/desgin/ui/image1.png",
      "/desgin/ui/06.png",
      "/desgin/ui/03.png",
      "/desgin/ui/04.png",
       
      
    ],

    // Gallery Heading
    galleryHeading: "Design That Doesn't Just Look Good - It Works",

    // Gallery Description
    galleryDesc:
      "We design websites and applications with a deep understanding of user behavior, ensuring every interaction is seamless and performance-driven. As a trusted UI UX design company in Bangalore, we focus on usability, accessibility, and engagement.",

    // Basic Features List
    features: [
      "Website UI Design",
      "Mobile App UI/UX",
      "Dashboard & SaaS Design",
      "E-Commerce UX Optimization",
      "Digital Brand Experience",
      "Wireframes & Prototypes",
      "User Flow Mapping",
      "Responsive Design",
    ],

    // Subhead Section
    subheadSection: {
      title: "Your Identity, Perfected",
      description:
        "We create digital experiences that align with your brand identity and user expectations using refined responsive UI design and thoughtful UX research and strategy delivered by an expert UI UX design agency.",
    },

    // Headline Section
    headlineSection: {
      title: "Human-Centered Design. Business-Focused Results.",
      description:
        "Every design decision is backed by strategy, ensuring your product is not just visually appealing but also highly functional and conversion-focused through professional UI UX design services.",
    },
    // Detailed Features (WHAT WE DO - VISUAL GRID)
    detailedFeatures: [
      {
        title: "Website UI/UX Design",
        desc: "We design websites that are visually engaging, user-friendly, and optimized for performance, delivering seamless experiences as a reliable website design company India.",
      },
      {
        title: "Mobile App UI/UX",
        desc: "We create intuitive and engaging mobile experiences that enhance usability and drive user satisfaction through advanced mobile app UI UX design from a skilled UI UX design company Bangalore.",
      },
      {
        title: "Dashboard & SaaS UI Design",
        desc: "We design scalable, data-driven interfaces that simplify complex workflows and improve user efficiency with modern digital product design and expert UI UX design services.",
      },
      {
        title: "E-Commerce UX Optimization",
        desc: "Optimized product journeys using proven e-commerce UX best practices that reduce cart abandonment.",
      },
      {
        title: "Digital Brand Experience Design",
        desc: "Aesthetic and functional digital brand systems that create a consistent, premium identity across all touchpoints.",
      },
      {
        title: "Wireframes & Prototypes",
        desc: "User-flow mapping, wireframes, and high-fidelity prototypes for rapid validation and development readiness.",
      },
    ],

    // FAQ Section
    faq: [
      {
        question: "Q1. What makes Connectia one of the top UI/UX design agencies in Bangalore?",
        answer:
          "Connectia stands out among the top UI/UX design agencies in Bangalore by combining research-driven UX strategy with pixel-precise UI execution for both web and mobile platforms. The team follows a structured design process: discovery, wireframing, prototyping, usability testing, and iterative refinement. With deep expertise in SaaS, fintech, e-commerce, and startup products, Connectia delivers interfaces that are not just visually compelling but measurably improve user retention and conversion rates. Bangalore's rich design talent ecosystem and Connectia's end-to-end approach make it a trusted partner for businesses across India and globally.",
      },
      {
        question: "Q2. What are the key benefits of investing in professional UI/UX design for your product?",
        answer:
          "Investing in professional UI/UX design delivers measurable business outcomes beyond aesthetics. Key benefits include: higher user engagement and lower bounce rates, increased conversion rates (well-designed UX has been shown to improve conversions by up to 200–400%), reduced customer support costs through intuitive self-service flows, stronger brand credibility, and faster onboarding for new users. For startups and enterprises alike, professional UI/UX design de-risks product launches by validating user journeys before development begins, saving significant time and budget in the long run.",
      },
      {
        question: "Q3. What are the best platforms and services for UI/UX website design in India?",
        answer:
          "For businesses seeking UI/UX website design services in India, the best approach is partnering with a full-service design agency that handles end-to-end work from UX research and wireframing to high-fidelity prototyping and developer handoff. Connectia is among the leading platforms for UI/UX website design services in India, offering Figma-based design systems, responsive web design, and usability-tested interfaces tailored to Indian and global market needs. Other strong options include specialised UX studios and design-first product companies based in Bangalore, Mumbai, and Hyderabad.",
      },
      {
        question: "Q4. How do you choose the right UI/UX design agency for your website project?",
        answer:
          "Choosing the right UI/UX design agency for a website project comes down to five key criteria: (1) Portfolio relevance — has the agency solved problems similar to yours? (2) Design process transparency — do they do user research, not just visuals? (3) Collaboration model — will they work with your product or dev team? (4) Communication and timelines — do they provide clear milestone plans? (5) Post-delivery support — do they offer iterations and QA? Connectia follows all five principles, offering dedicated project managers, structured sprints, and up to multiple rounds of design revisions to ensure the final product aligns with both business goals and user expectations.",
      },
      {
        question: "Q5. Does Connectia offer UI/UX design for both mobile apps and web apps, and is it suitable for startups?",
        answer:
          "Yes, Connectia provides specialised UI/UX design for mobile and web apps, making it one of the top choices among mobile UI/UX design agencies in India for startups. The team is experienced in designing for iOS, Android, and cross-platform frameworks, as well as responsive web applications. For startups specifically, Connectia offers MVP-focused design sprints that prioritise speed-to-market without compromising on user experience quality. Whether you're building a consumer app, a SaaS dashboard, or an enterprise tool, Connectia's design-first approach ensures your product is ready for real users from day one.",
      },
    ],

    // Process Section (UI/UX workflow)
    process: [
      {
        title: "Discovery",
        desc: "Understanding your users, goals, and business requirements.",
      },
      {
        title: "Research",
        desc: "User behavior analysis, competitor audit, and information architecture.",
      },
      {
        title: "Wireframing",
        desc: "Mapping user flows and creating low-fidelity layouts.",
      },
      {
        title: "Visual Design",
        desc: "High-fidelity UI design with your brand identity.",
      },
      {
        title: "Prototyping",
        desc: "Interactive prototypes for user testing and validation.",
      },
      {
        title: "Handoff",
        desc: "Developer-ready assets, specs, and ongoing support.",
      },
    ],

    // CTA Section
    cta: {
      title: "Ready to bring your vision to life?",
      subtitle: "Let's collaborate with a UI UX design company Bangalore and create something extraordinary together.",
    },

    // Meta Section
    meta: {
      title: "UI UX Design Company Bangalore | Connectia",
      description: "UI UX design company Bangalore offering UI UX design services and digital product design. Improve user experience with Connectia.",
    },

    // Portfolio Section
    portfolio: [
      {
        title: "Fintech Dashboard",
        category: "SaaS Platform",
        image:
          "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "E-Commerce Redesign",
        category: "UX Optimization",
        image:
          "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Wellness App",
        category: "Mobile UI/UX",
        image:
          "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "brand-strategy",
    title: "Brand Strategy Services for Business Growth",
    heroTitle: "BRAND STRATEGY",
    icon: Monitor,
    shortDesc:
      "We craft powerful, memorable brand strategy solutions rooted in insight, research, and real-world impact. Our approach to brand strategy helps businesses define their identity, own their positioning, and build brands that genuinely connect with their audience.",
    fullDesc:
      "Our brand strategy services focus on strong brand identity development, clear messaging, and long-term growth.",
    heroImage: "/desgin/branding/Banner-image.png", 

    // Gallery Images (for mockups showcase)
    galleryImages: [
      // "/desgin/branding/01.png",
      "/desgin/branding/02.png",
      "/desgin/branding/05.png",
      "/desgin/branding/03.png",
      "/desgin/branding/04.png",
    ],

    // Gallery Heading
    galleryHeading: "Building Brands That Stand the Test of Time",

    // Gallery Description
    galleryDesc:
"We focus on crafting cohesive brand experiences that reflect your vision and values using structured brand guidelines development and refined branding solutions built on a strong brand strategy.",

    // Basic Features List
    features: [
      "Brand Identity Development",
      "Brand Positioning Strategy",
      "Brand Messaging & Voice",
      "Brand Storytelling",
      "Competitor & Market Research",
      "Brand Guidelines & Playbooks",
      "Strategic Brand Positioning",
      "Clear Messaging & Brand Voice",
    ],

    // Subhead Section
    subheadSection: {
      title: "Your Identity, Perfected",
      description:
        "We don’t just build brands, we create ecosystems that grow, adapt, and resonate with your audience. Our brand strategy ensures long-term consistency and impact through effective brand storytelling and deep market research and analysis.",
    },

    // Headline Section
    headlineSection: {
      title: "Your Brand Vision, Refined and Realigned",
      description:
        "We help you translate your purpose, values, and vision into actionable brand strategy plans. From foundational identity to execution across channels, everything is aligned to support long-term growth.",
    },

    // Key Features (3-Card Layout)
    keyFeatures: [
      {
        title: "Strategic Brand Positioning",
        desc: "We define how your brand is perceived in the market, ensuring clarity, relevance, and differentiation with expert brand strategy.",
      },
      {
        title: "Clear Messaging & Brand Voice",
        desc: "We ensure your brand communicates consistently across all platforms, strengthening recognition and trust using a refined brand messaging strategy.",
      },
      {
        title: "Comprehensive Brand Foundations",
        desc: "We build strong, scalable systems that support long-term growth and adaptability using expert branding solutions powered by brand strategy.",
      },
    ],

    // Detailed Features (WHAT WE DO - VISUAL GRID)
    detailedFeatures: [
      {
        title: "Brand Identity",
        desc: "We develop a powerful foundation that defines who you are, what you stand for, and how your audience perceives you through expert brand identity development.",
      },
      {
        title: "Brand Positioning Strategy",
        desc: "We create clear, differentiated positioning that sets your brand apart in a crowded marketplace using strategic brand positioning strategy and competitive brand analysis.",
      },
      {
        title: "Brand Messaging & Voice",
        desc: "We craft compelling messaging frameworks that communicate your brand's value, tone, and personality consistently with a strong brand messaging strategy.",
      },
      {
        title: "Brand Storytelling",
        desc: "We build narratives that connect emotionally with your audience and make your brand memorable through impactful storytelling aligned with your brand strategy.",
      },
      {
        title: "Competitor & Market Research",
        desc: "We analyze your market landscape, competitors, and audience insights to guide smarter decisions using market research and analysis and competitive brand analysis.",
      },
      {
        title: "Brand Guidelines & Playbooks",
        desc: "We create structured systems that ensure consistency across all platforms and touchpoints through detailed brand guidelines development.",
      },
    ],

    // FAQ Section
    faq: [
      {
        question: "What do brand consultants do?",
        answer:
          "Brand consultants help businesses define, position, and communicate who they are and why customers should choose them over competitors. Specifically, a brand consultant audits your existing brand perception, identifies gaps between how you see your business and how your audience does, and then builds a strategic framework covering your brand positioning, messaging, tone of voice, visual identity, and market differentiation. At Connectia, brand consultants work at the intersection of business strategy and creative execution, making them especially effective for IT companies, SaaS products, startups, and marketing-driven businesses that need their brand to do real commercial work, not just look good.",
      },
      {
        question: "What are the 4 types of branding strategies?",
        answer:
          "The four core branding strategies are: (1) Product Branding — creating a distinct identity for a single product, commonly used in SaaS and consumer tech. (2) Corporate Branding — positioning the entire organisation as the brand, critical for IT companies and enterprises seeking trust and credibility. (3) Personal Branding — building authority around a founder or individual, widely used in marketing and consulting businesses. (4) Service Branding — differentiating an intangible service through experience, reputation, and communication, which is highly relevant for agencies and professional services firms. Connectia helps clients across all four designing the strategy, identity, and messaging that makes each type work in competitive markets.",
      },
      {
        question: "Can you help rebrand an existing business?",
        answer:
          "Yes, rebranding an existing business is one of the most impactful services Connectia offers. Whether your business has outgrown its original identity, entered a new market, pivoted its product or service offering, or simply lost relevance with its audience, a strategic rebrand can reposition you for growth. Connectia's rebranding process begins with a brand audit assessing what's working, what's not, and what equity is worth retaining. From there, the team develops a new brand strategy, visual identity, messaging framework, and rollout plan that aligns with your current business goals. The result is not just a new logo, it is a brand built to perform in today's market.",
      },
      {
        question: "How do consultants help with brand strategy?",
        answer:
          "Brand strategy consultants help businesses move from guesswork to a deliberate, repeatable system for how they present themselves in the market. Connectia's consultants do this across five key areas: (1) Audience research — understanding exactly who you're speaking to and what drives their decisions. (2) Competitive positioning — identifying where your brand can own a distinct space in a crowded market. (3) Brand architecture — structuring how your products, services, or sub-brands relate to each other. (4) Messaging and narrative — building the story and language that consistently communicates your value. (5) Visual identity alignment — ensuring your design system reflects and reinforces your strategic position. For IT companies and startups, especially, this structured approach turns the brand from a cost centre into a growth lever.",
      },
      {
        question: "Where can I hire a brand strategist agency?",
        answer:
          "If you're looking to hire a brand strategist agency, prioritise teams that combine strategic thinking with hands-on creative execution, not just one or the other. Connectia is a full-service brand strategy agency based in Bangalore, India, working with startups, IT companies, SaaS businesses, enterprises, and marketing-focused brands across India and internationally. The team handles everything from initial brand audits and positioning workshops to complete identity systems and go-to-market messaging. You can hire Connectia's brand strategy team directly through their website, making it straightforward to get started, whether you need a full rebrand, a brand refresh, or a strategy-first engagement before any creative work begins.",
      },
    ],

    // Process Section (Brand Strategy workflow)
    process: [
      {
        title: "Discovery",
        desc: "Understanding your vision, values, and business goals.",
      },
      {
        title: "Research",
        desc: "Market analysis, competitor audit, and audience insights.",
      },
      {
        title: "Positioning",
        desc: "Defining your unique space and differentiation in the market.",
      },
      {
        title: "Messaging",
        desc: "Crafting your brand voice, tone, and key communication pillars.",
      },
      {
        title: "Identity",
        desc: "Developing visual systems that reflect your strategic foundation.",
      },
      {
        title: "Guidelines",
        desc: "Creating comprehensive playbooks for consistent brand execution.",
      },
    ],

    // Portfolio Section
    portfolio: [
      {
        title: "Fintech Rebrand",
        category: "Brand Strategy",
        image:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "D2C Lifestyle Brand",
        category: "Positioning & Identity",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Healthcare Startup",
        category: "Brand Foundations",
        image:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
      },
    ],

    // Meta tags for SEO
    meta: {
      title: "Brand Strategy Services India | Connectia",
      description: "Build a strong brand with expert brand strategy services. Define positioning, messaging & identity with Connectia.",
    },

    // CTA Section
    cta: {
      title: "Ready to bring your vision to life?",
      subtitle: "Let's collaborate and build something extraordinary together with expert brand strategy.",
    },
  },
  {
    id: "social-branding",
    title: "SOCIAL BRANDING",
    heroTitle: "SOCIAL BRANDING",
    icon: Monitor,
    shortDesc:
      "We craft bold, memorable social brand identities that help your business stand out, connect emotionally, and stay recognizable across every platform.",
    fullDesc:
      "Our social branding services are built to transform your online presence into a powerful, consistent, and high-engagement brand experience with a strong focus on digital product design and storytelling, similar to leading design agencies in India.",
    heroImage: "/desgin/social-branding/Banner.png", // Social media branding image

    // Gallery Images (for mockups showcase - social media mockups, reels, story templates, branding boards)
    galleryImages: [
      "/desgin/social-branding/01.png", // Branding boards
      "/desgin/social-branding/02.png",
      "/desgin/social-branding/03.png",
    ],

    // Gallery Heading
    galleryHeading: "Branding That Works Everywhere",

    // Gallery Description
    galleryDesc:
      "From visual identity to messaging and content direction, we ensure your brand looks premium, speaks clearly, and delivers consistent value across all social media channels.",

    // Basic Features List
    features: [
      "Social Media Identity Design",
      "Brand Tone & Voice Development",
      "Content Style Guidelines",
      "Social Media Strategy",
      "Influencer-Ready Brand Identity",
      "Complete Social Media Brand Kits",
      "Platform-Specific Optimization",
      "Feed Aesthetic Design",
    ],

    // Subhead Section
    subheadSection: {
      title:
        "Branding That Works Everywhere: Instagram, YouTube, TikTok, LinkedIn & More",
      description:
        "From visual identity to messaging and content direction, we ensure your brand looks premium, speaks clearly, and delivers consistent value across all social media channels. As a leading social branding agency, we build brands that people remember and love interacting with.",
    },

    // Headline Section
    headlineSection: {
      title: "Your Social Presence, Designed to Influence",
      description:
        "We develop digital-first brand identities optimized for social platforms. From your profile aesthetic and content structure to your brand voice and messaging guide, every element works together to create a memorable, high-impact online identity.",
    },

    // Key Features (3-Box Layout)
    keyFeatures: [
      {
        title: "Platform-Optimized Branding",
        desc: "We design branding that works seamlessly across Instagram, TikTok, YouTube, LinkedIn, Facebook, and more—each platform, perfectly tailored.",
      },
      {
        title: "Consistent Visual Identity",
        desc: "Unified colors, layouts, typography, iconography, and post styles that create instant recognition across every touchpoint.",
      },
      {
        title: "Conversion-Focused Social Strategy",
        desc: "Every creative decision is backed by social engagement psychology and audience behavior to drive real results.",
      },
    ],

    // Detailed Features (WHAT WE DO - VISUAL GRID)
    detailedFeatures: [
      {
        title: "Social Media Identity Design",
        desc: "Cohesive color palettes, patterns, layouts, and formats designed specifically for social platforms to make your brand instantly recognizable.",
      },
      {
        title: "Brand Tone & Voice Development",
        desc: "A recognizable and consistent communication style that feels authentic across all content and platform types.",
      },
      {
        title: "Content Style & Aesthetic Guidelines",
        desc: "Visual frameworks that make your feed stand out, remain consistent, and attract your ideal audience.",
      },
      {
        title: "Social Media Strategy & Positioning",
        desc: "Clear direction for storytelling, brand messaging, and post structure that aligns with your business goals.",
      },
      {
        title: "Influencer-Ready Brand Identity",
        desc: "Brand elements optimized for collaborations, campaigns, and creator partnerships with ready-to-use assets.",
      },
      {
        title: "Complete Social Media Brand Kits",
        desc: "Templates, assets, fonts, rules, and design systems tailored to your brand for effortless content creation.",
      },
    ],

    // FAQ Section
    faq: [
      {
        question: "What is social branding?",
        answer:
          "Social branding focuses on creating a cohesive visual identity, messaging tone, and content strategy specifically for social media platforms to build recognition and engagement.",
      },
      {
        question: "What platforms do you design for?",
        answer:
          "We design for Instagram, TikTok, YouTube, Facebook, LinkedIn, Snapchat, Pinterest, and more—ensuring your brand looks premium everywhere.",
      },
      {
        question: "Do you create content too?",
        answer:
          "Yes, we offer content creation, templates, reels, story designs, and monthly social media management to keep your brand active and engaging.",
      },
      {
        question: "What do I get in a social branding kit?",
        answer:
          "You receive templates, post layouts, story designs, fonts, color palettes, icon styles, brand voice guidelines, and aesthetic rules for consistent content.",
      },
      {
        question: "Can you redesign my current social media identity?",
        answer:
          "Absolutely. We specialize in brand audits and complete social feed transformations that refresh your presence and attract new audiences.",
      },
      {
        question: "How long does the branding process take?",
        answer:
          "Usually 1–3 weeks, depending on the complexity and number of platforms you want to establish your brand on.",
      },
    ],

    // Process Section (Social Branding workflow)
    process: [
      {
        title: "Discovery",
        desc: "Understanding your brand values, audience, and social media goals.",
      },
      {
        title: "Platform Audit",
        desc: "Analyzing your current presence and competitor landscape.",
      },
      {
        title: "Visual Identity",
        desc: "Creating colors, typography, and design systems for social.",
      },
      {
        title: "Voice & Messaging",
        desc: "Developing your brand tone and communication guidelines.",
      },
      {
        title: "Content Framework",
        desc: "Building templates, post structures, and aesthetic rules.",
      },
      {
        title: "Brand Kit Delivery",
        desc: "Providing complete assets and guidelines for consistent execution.",
      },
    ],

    // Portfolio Section
    portfolio: [
      {
        title: "Fashion Brand Instagram",
        category: "Social Identity",
        image:
          "https://images.unsplash.com/photo-1611162616305-cf11d3bfde4d?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Lifestyle Creator Kit",
        category: "Brand Assets",
        image:
          "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "TikTok Brand Transformation",
        category: "Platform Design",
        image:
          "https://images.unsplash.com/photo-1611162616478-3f6a5c9b8e4d?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 'brand-logo',
    title: 'BRAND LOGO',
    heroTitle: 'BRAND LOGO',
    icon: Monitor,
    shortDesc: 'We create memorable, timeless, and high-impact logos that define your brand identity and set the foundation for your entire visual presence.',
    fullDesc: 'Our professional logo design services blend strategy, creativity, and precision—resulting in a brand logo that truly represents who you are, aligned with modern user interface design standards from an Indian website design company.',
    heroImage: '/desgin/brand-logo/Banner.png', // Logo design related image
    
    // Gallery Images (for mockups showcase - premium logo mockups, branding visuals, stationery boards)
    galleryImages: [
     '/desgin/brand-logo/02.png',
     '/desgin/brand-logo/03.png',
     '/desgin/brand-logo/04.png',
    ],
    
    // Gallery Heading
    galleryHeading: "A Logo That Stands Out. A Brand That Stays Remembered",
    
    // Gallery Description
    galleryDesc: "Your logo is the face of your brand - the first thing customers notice and the last thing they remember. We craft logos that are visually powerful, strategically meaningful, and built for long-term recognition.",
    
    // Basic Features List
    features: [
      'Minimal Logo Design',
      'Icon & Symbol Design',
      'Wordmark Logos',
      'Luxury Logo Design',
      'Corporate & Professional Logos',
      'Complete Logo Packages',
      'Monogram Design',
      'Brand Mark Creation'
    ],
    
    // Subhead Section
    subheadSection: {
      title: "A Logo That Stands Out. A Brand That Stays Remembered",
      description: "Your logo is the face of your brand - the first thing customers notice and the last thing they remember. As a leading brand logo design agency, we craft logos that are visually powerful, strategically meaningful, and built for long-term recognition."
    },
    
    // Headline Section
    headlineSection: {
      title: "Designed With Purpose. Crafted With Meaning.",
      description: "We don't just create logos - we create brand symbols. Every curve, angle, line, and color is chosen to reflect your personality, values, and positioning. Our process ensures your logo design is original, scalable, and instantly recognizable."
    },
    
    // Key Features (3-Box Layout)
    keyFeatures: [
      {
        title: "Custom, Original Concepts",
        desc: "Every logo is designed from scratch - no templates, no shortcuts, no reuse. Your brand deserves something truly unique."
      },
      {
        title: "Scalable & Versatile Design",
        desc: "Your logo looks flawless on websites, packaging, social media, billboards, and merchandise - at any size, on any surface."
      },
      {
        title: "Strategic Brand Alignment",
        desc: "We design logos with a clear purpose, brand vision, and audience relevance - not just aesthetics, but meaning."
      }
    ],
    
    // Detailed Features (WHAT WE DO - VISUAL GRID)
    detailedFeatures: [
      {
        title: "Minimal Logo Design",
        desc: "Clean, sharp, and modern logos that age beautifully and work across all mediums with timeless simplicity."
      },
      {
        title: "Icon & Symbol Logo Design",
        desc: "Custom-crafted icons and brand marks with deep meaning and strong visual appeal that tell your story."
      },
      {
        title: "Wordmark & Typography-Based Logos",
        desc: "Elegant, timeless wordmark logos with customized typographic styling that makes your name unforgettable."
      },
      {
        title: "Luxury Logo Design",
        desc: "Premium, high-end logo aesthetics for luxury brands and premium businesses that demand sophistication."
      },
      {
        title: "Corporate & Professional Logos",
        desc: "Strategic brand identity logos built for professionalism, trust, and authority in competitive industries."
      },
      {
        title: "Complete Logo Packages",
        desc: "Every logo comes as a full kit — variations, color versions, icons, brand marks, and usage guidelines included."
      }
    ],
    
    // FAQ Section
    faq: [
      {
        question: "What types of logos do you design?",
        answer: "We design wordmarks, symbols, minimal logos, icons, monograms, luxury logos, and complete brand identity marks tailored to your brand."
      },
      {
        question: "Can I request multiple logo concepts?",
        answer: "Yes, we provide multiple custom logo concepts for you to choose from, ensuring you find the perfect direction."
      },
      {
        question: "Will I get the source files?",
        answer: "Yes. You receive all formats: AI, EPS, PNG, SVG, PDF, black/white versions, and more for complete flexibility."
      },
      {
        question: "How long does a logo design project take?",
        answer: "Typically 3–10 days depending on revisions and complexity of the design requirements."
      },
      {
        question: "Can you redesign my existing logo?",
        answer: "Yes, we offer logo redesign services for outdated or inconsistent identities that need a fresh direction."
      },
      {
        question: "Do you create full brand identity kits?",
        answer: "Absolutely. We offer logo design, typography, colors, patterns, brand guidelines, business cards, and more."
      },
      {
        question: "Is the logo designed from scratch?",
        answer: "Yes. Every logo concept is original, unique, and tailored specifically to your brand with no templates."
      }
    ],
    
    // Process Section (Logo Design workflow)
    process: [
      { title: 'Discovery', desc: 'Understanding your brand values, audience, and design preferences.' },
      { title: 'Research', desc: 'Analyzing competitors and industry trends for strategic direction.' },
      { title: 'Concept Development', desc: 'Sketching and exploring multiple logo directions and ideas.' },
      { title: 'Design', desc: 'Creating digital versions of selected concepts with precision.' },
      { title: 'Refinement', desc: 'Iterating based on feedback to perfect the chosen direction.' },
      { title: 'Delivery', desc: 'Providing complete file packages and brand usage guidelines.' }
    ],
    
    // Portfolio Section
    portfolio: [
      { title: 'Luxury Fashion Brand', category: 'Wordmark Logo', image: 'https://images.unsplash.com/photo-1626785774573-4b7994893459?q=80&w=800&auto=format&fit=crop' },
      { title: 'Tech Startup', category: 'Symbol & Icon', image: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=800&auto=format&fit=crop' },
      { title: 'Wellness Studio', category: 'Minimal Logo', image: 'https://images.unsplash.com/photo-1626785774573-4b7994893459?q=80&w=800&auto=format&fit=crop' }
    ]
  },
  {
    id: 'product-branding',
    title: 'PRODUCT BRANDING',
    heroTitle: 'PRODUCT BRANDING',
    icon: Monitor,
    shortDesc: 'We help businesses build product identities that stand out on the shelf, online, and in the minds of their customers.',
    fullDesc: 'From packaging and visual identity to storytelling and positioning, our product branding services are designed to elevate your product from "just another item" to a brand people trust and choose using impactful creative design agency approaches seen in the best design agencies in India.',
    heroImage: '/desgin/product-branding/Banner.png', // Product packaging/branding image
    
    // Gallery Images (for portfolio section)
    galleryImages: [
      "/desgin/product-branding/01.png",
     
    ],
    
    // Gallery Heading
    galleryHeading: "Some Of Our Work",
    
    // Gallery Description
    galleryDesc: "Explore product branding projects that transformed ideas into market-ready brands with distinct visual identities.",
    
    // Basic Features List
    features: [
      'Product Positioning',
      'Packaging Design',
      'Visual Identity',
      'Product Storytelling',
      'Brand Architecture',
      'Product Naming',
      'Market Research',
      'Brand Guidelines'
    ],
    
    // Subhead Section
    subheadSection: {
      title: "Transforming Ideas Into Market-Ready Brands",
      description: "From concept creation to full-scale brand launch, we build product identities rooted in strategy and creative excellence. Whether launching a new product or rebranding an existing one, our team ensures your product not only looks exceptional but also connects, resonates, and converts. Our approach blends design, psychology, and market research, giving your product a clear voice and a distinct competitive edge. Every detail matters. Every element has a purpose. That's how strong product brands are built."
    },
    
    // Headline Section
    headlineSection: {
      title: "From Product to Brand. From Shelf to Heart.",
      description: "A great product sells once. A great product brand sells forever. We build identities that turn casual buyers into loyal advocates through strategic design and compelling storytelling."
    },
    
    // Key Features (4-Box Layout)
    keyFeatures: [
      {
        title: "Strategic Product Positioning",
        desc: "We identify your product's unique value and shape its positioning to stand out in the category and connect with your target audience."
      },
      {
        title: "Visual Identity & Packaging Design",
        desc: "From packaging to labels and visual systems, we craft designs that attract attention and communicate quality at first glance."
      },
      {
        title: "Product Storytelling & Messaging",
        desc: "A compelling story transforms a product into a brand. We build narratives that connect emotionally and drive long-term loyalty."
      },
      {
        title: "Brand Architecture & Naming",
        desc: "Clear, meaningful product names and structured brand architecture to support long-term market growth and portfolio expansion."
      }
    ],
    
    // Detailed Features
    detailedFeatures: [
      {
        title: "Strategic Product Positioning",
        desc: "We identify your product's unique value and shape its positioning to stand out in the category and connect with your target audience."
      },
      {
        title: "Visual Identity & Packaging Design",
        desc: "From packaging to labels and visual systems, we craft designs that attract attention and communicate quality at first glance."
      },
      {
        title: "Product Storytelling & Messaging",
        desc: "A compelling story transforms a product into a brand. We build narratives that connect emotionally and drive long-term loyalty."
      },
      {
        title: "Brand Architecture & Naming",
        desc: "Clear, meaningful product names and structured brand architecture to support long-term market growth and portfolio expansion."
      },
      {
        title: "Market Research & Analysis",
        desc: "Deep category insights, competitor analysis, and consumer behavior research to inform every branding decision."
      },
      {
        title: "Complete Brand Guidelines",
        desc: "Comprehensive guides covering colors, fonts, usage rules, packaging specifications, and visual system documentation."
      }
    ],
    
    // FAQ Section
    faq: [
      {
        question: "What does product branding include?",
        answer: "Product branding includes brand positioning, packaging design, visual identity, product storytelling, naming, messaging, market research, and complete brand guidelines."
      },
      {
        question: "Can you create packaging for my product?",
        answer: "Yes, we design labels, boxes, bottles, sleeves, pouches, and all product packaging elements tailored to your category."
      },
      {
        question: "Do you help with the product name and tagline?",
        answer: "Absolutely. Naming and tagline creation are important parts of our product branding strategy to ensure memorability."
      },
      {
        question: "Can you rebrand an existing product?",
        answer: "Yes, we specialize in modernizing outdated product identities and repositioning them for new audiences and markets."
      },
      {
        question: "How long does product branding take?",
        answer: "Most projects take 2–6 weeks, depending on complexity, number of SKUs, and deliverables required."
      },
      {
        question: "Do you design brand guidelines for the product?",
        answer: "Yes, every project includes a full brand guide covering colors, fonts, usage rules, packaging specifications, and more."
      }
    ],
    
    // Process Section (Product Branding workflow)
    process: [
      { title: 'Discovery', desc: 'Understanding your product, market, and business objectives.' },
      { title: 'Research', desc: 'Category analysis, competitor audit, and consumer insights.' },
      { title: 'Positioning', desc: 'Defining your product\'s unique space and value proposition.' },
      { title: 'Visual Identity', desc: 'Creating packaging, logos, and design systems.' },
      { title: 'Storytelling', desc: 'Developing product narratives and messaging frameworks.' },
      { title: 'Guidelines', desc: 'Delivering complete brand guides and specifications.' }
    ],
    
    // Portfolio Section
    portfolio: [
      { title: 'Organic Skincare Line', category: 'Packaging Design', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c2d0?q=80&w=800&auto=format&fit=crop' },
      { title: 'Premium Beverage Brand', category: 'Product Identity', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop' },
      { title: 'Sustainable Home Goods', category: 'Brand Architecture', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c2d0?q=80&w=800&auto=format&fit=crop' }
    ]
  },
  {
    id: 'personal-branding',
    title: 'PERSONAL BRANDING',
    heroTitle: 'PERSONAL BRANDING',
    icon: Monitor,
    shortDesc: 'We build powerful personal brands for entrepreneurs, creators, founders, coaches, and professionals who want to stand out, gain authority, and communicate their story with intention.',
    fullDesc: 'Our personal branding services go far beyond aesthetics. We create a brand presence that reflects who you are, what you stand for, and the impact you aim to make with strong brand design services from a trusted website design company in India.',
    heroImage: '/desgin/personal-branding/banner.png', // Personal branding/portrait image
    
    // Gallery Images (for portfolio section)
    galleryImages: [
      "/desgin/personal-branding/01.png",
      "/desgin/personal-branding/02.png",
      "/desgin/personal-branding/03.png",
    ],
    
    // Gallery Heading
    galleryHeading: "Some of Our Personal Branding Work",
    
    // Gallery Description
    galleryDesc: "Explore personal brands we've built for entrepreneurs, creators, and professionals across industries.",
    
    // Basic Features List
    features: [
      'Personal Brand Identity',
      'Messaging & Storytelling',
      'Personal Logo Design',
      'Visual Direction',
      'Social Media Branding',
      'Content Pillars',
      'Personal Brand Kit',
      'Authority Building'
    ],
    
    // Subhead Section
    subheadSection: {
      title: "Your Story, Sharpened. Your Voice, Amplified.",
      description: "A strong personal brand opens doors, builds trust, and positions you as a leader in your space. From visual identity to messaging and content direction, we craft a personal brand system that feels authentic, polished, and strategically aligned to your goals. Whether you're building credibility, scaling your career, attracting clients, or becoming a public figure, your brand should reflect your value with clarity and confidence."
    },
    
    // Headline Section
    headlineSection: {
      title: "Be Unforgettable. Be Unmistakably You.",
      description: "In a crowded digital world, your personal brand is your greatest asset. We help you cut through the noise with an authentic identity that attracts opportunities and builds lasting influence."
    },
    
    // Key Features (3-Box Layout)
    keyFeatures: [
      {
        title: "Authentic Story Development",
        desc: "We translate your experiences, values, and strengths into a compelling brand narrative that resonates with your audience."
      },
      {
        title: "Visual Identity for Personal Brands",
        desc: "Custom visuals, color palettes, logos, and styles that reflect your unique personality and professional goals."
      },
      {
        title: "Influence-Focused Strategy",
        desc: "Your content direction is built around authority, niche expertise, and audience engagement to maximize impact."
      }
    ],
    
    // Detailed Features
    detailedFeatures: [
      {
        title: "Authentic Story Development",
        desc: "We translate your experiences, values, and strengths into a compelling brand narrative that resonates with your audience."
      },
      {
        title: "Visual Identity for Personal Brands",
        desc: "Custom visuals, color palettes, logos, and styles that reflect your unique personality and professional goals."
      },
      {
        title: "Influence-Focused Strategy",
        desc: "Your content direction is built around authority, niche expertise, and audience engagement to maximize impact."
      },
      {
        title: "Personal Logo & Monogram Design",
        desc: "Custom monograms, signature logos, and identity marks tailored to your personality and professional presence."
      },
      {
        title: "Social Media Branding",
        desc: "Cohesive visual systems and content frameworks optimized for engagement and growth across platforms."
      },
      {
        title: "Complete Personal Brand Kit",
        desc: "Brand identity, messaging, visual direction, content pillars, and guidelines for consistent personal branding."
      }
    ],
    
    // FAQ Section
    faq: [
      {
        question: "Who needs personal branding?",
        answer: "Entrepreneurs, influencers, executives, consultants, coaches, creators, and anyone who wants to build authority and stand out professionally."
      },
      {
        question: "What is included in your personal branding service?",
        answer: "Brand identity, messaging, personal logo, visual direction, social media branding, content pillars, and a complete personal brand kit."
      },
      {
        question: "Can you help me grow my social media presence?",
        answer: "Yes, our team creates a structured content and visual system optimized for engagement and growth across platforms."
      },
      {
        question: "Do you offer personal logo design?",
        answer: "Absolutely. We create custom monograms, signature logos, and identity marks tailored to your personality and professional presence."
      },
      {
        question: "How long does the personal branding process take?",
        answer: "Usually 1–3 weeks, depending on the scope and complexity of your personal brand needs."
      },
      {
        question: "Can you help me redesign my current personal brand?",
        answer: "Yes, we offer audits and complete personal brand transformations to modernize and strengthen your presence."
      }
    ],
    
    // Process Section (Personal Branding workflow)
    process: [
      { title: 'Discovery', desc: 'Understanding your story, values, and professional goals.' },
      { title: 'Positioning', desc: 'Defining your niche, authority, and target audience.' },
      { title: 'Story Development', desc: 'Crafting your personal narrative and messaging framework.' },
      { title: 'Visual Identity', desc: 'Creating logos, colors, and visual systems that reflect you.' },
      { title: 'Content Strategy', desc: 'Building content pillars and direction for engagement.' },
      { title: 'Brand Kit', desc: 'Delivering complete personal brand assets and guidelines.' }
    ],
    
    // Portfolio Section
    portfolio: [
      { title: 'Executive Coach', category: 'Personal Brand Identity', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop' },
      { title: 'Tech Founder', category: 'Influence Strategy', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop' },
      { title: 'Lifestyle Creator', category: 'Visual Direction', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop' }
    ]
  },
  {
    id: 'corporate-presentation',
    title: 'CORPORATE PRESENTATION',
    heroTitle: 'CORPORATE PRESENTATION',
    icon: Monitor,
    shortDesc: 'We craft high-impact corporate presentations that communicate your brand story, business strategy, and key messages with clarity and visual excellence.',
    fullDesc: 'From investor decks to internal reports and sales presentations, our designs transform complex information into compelling, easy-to-understand narratives using website design services principles followed by top design agencies in India.',
    heroImage: '/desgin/corporate/Banner.png', // Corporate presentation image
    
    // Gallery Images (for portfolio section)
    galleryImages: [
      "/desgin/corporate/01.png", // Conference presentation
      "/desgin/corporate/02.png",
      "/desgin/corporate/03.png",
    ],
    
    // Gallery Heading
    galleryHeading: "Some Of Our Presentation Design Work",
    
    // Gallery Description
    galleryDesc: "Explore corporate presentations that communicate strategy, vision, and data with clarity and visual impact.",
    
    // Basic Features List
    features: [
      'Pitch Decks',
      'Corporate Profiles',
      'Sales Decks',
      'Training Presentations',
      'Annual Reports',
      'Business Reviews',
      'Event Presentations',
      'Investor Decks'
    ],
    
    // Subhead Section
    subheadSection: {
      title: "Where Strategy Meets Stunning Design",
      description: "Your presentation is often the first impression your audience gets—investors, clients, partners, or internal teams. We ensure that the impression is powerful. Our corporate presentation services combine strategic storytelling, clean design systems, and modern visual communication techniques to help you convey your ideas confidently and professionally. Whether you need a pitch deck, sales deck, company profile, investment presentation, training deck, or annual report, we design presentations that get noticed and remembered."
    },
    
    // Headline Section
    headlineSection: {
      title: "Present With Confidence. Win With Clarity.",
      description: "Your ideas deserve to be seen and understood. We transform complex data and strategy into visually compelling narratives that captivate investors, clients, and stakeholders."
    },
    
    // Key Features (3-Box Layout)
    keyFeatures: [
      {
        title: "Strategic Storytelling",
        desc: "Your narrative is shaped to guide the audience logically and persuasively—from start to finish—ensuring your key messages land with impact."
      },
      {
        title: "High-End Visual Design",
        desc: "We use modern layouts, strong typography, clean infographics, and engaging visuals for premium presentation quality that stands out."
      },
      {
        title: "Custom Templates You Can Reuse",
        desc: "We create editable master slides and design systems so your team can update content easily while maintaining visual consistency."
      }
    ],
    
    // Detailed Features (SERVICE BLOCKS)
    detailedFeatures: [
      {
        title: "Pitch Decks",
        desc: "Clear, persuasive, investor-ready presentations built to secure funding and capture attention with compelling narratives."
      },
      {
        title: "Corporate Profiles",
        desc: "Professional company overview decks that highlight strengths, values, achievements, and market positioning."
      },
      {
        title: "Sales & Marketing Decks",
        desc: "High-impact visuals and storytelling that help teams sell smarter, faster, and more effectively."
      },
      {
        title: "Training & Internal Communication Decks",
        desc: "Structured slides designed for clarity, learning, and engagement for internal teams and stakeholders."
      },
      {
        title: "Annual Reports & Business Reviews",
        desc: "Data-driven layouts with charts, infographics, and executive summaries that communicate performance clearly."
      },
      {
        title: "Event & Conference Presentations",
        desc: "Presentation designs tailored for large screens, stage delivery, and professional showcases."
      }
    ],
    
    // FAQ Section
    faq: [
      {
        question: "What types of corporate presentations do you design?",
        answer: "We design pitch decks, company profiles, sales decks, training presentations, annual reports, business reviews, event presentations, and more."
      },
      {
        question: "Do you help with content writing and storytelling?",
        answer: "Yes, we can refine your content, structure your narrative, and craft your message clearly and persuasively for maximum impact."
      },
      {
        question: "Can you redesign an existing presentation?",
        answer: "Absolutely. We can modernize outdated slides and redesign them into a polished, professional deck that reflects your current brand."
      },
      {
        question: "Do you provide editable files?",
        answer: "Yes, you will receive PowerPoint, Google Slides, or Keynote versions depending on your preference for easy updates."
      },
      {
        question: "How long does a presentation design project take?",
        answer: "Typically 3–10 days depending on complexity and number of slides required for your presentation."
      },
      {
        question: "Can you handle investor-focused presentations?",
        answer: "Yes, we specialize in investor decks that highlight traction, opportunity, financial clarity, and growth potential."
      }
    ],
    
    // Process Section (Presentation Design workflow)
    process: [
      { title: 'Discovery', desc: 'Understanding your audience, goals, and key messages.' },
      { title: 'Content Structuring', desc: 'Organizing your narrative and information flow.' },
      { title: 'Visual Strategy', desc: 'Developing layout systems, typography, and infographic styles.' },
      { title: 'Design', desc: 'Creating slide decks with high-end visuals and clean layouts.' },
      { title: 'Review & Refinement', desc: 'Iterating based on feedback to perfect the presentation.' },
      { title: 'Delivery', desc: 'Providing editable files and master templates for future use.' }
    ],
    
    // Portfolio Section
    portfolio: [
      { title: 'Tech Startup Pitch Deck', category: 'Investor Presentation', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop' },
      { title: 'Annual Corporate Report', category: 'Business Review', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop' },
      { title: 'Sales Enablement Deck', category: 'Marketing Presentation', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop' }
    ]
  },
  {
    id: 'ai-video',
    title: 'AI VIDEO & ANIMATIONS',
    heroTitle: 'AI VIDEO & ANIMATIONS',
    icon: Monitor,
    shortDesc: 'We create dynamic, high-impact AI-generated videos and animations that help brands communicate faster, scale content production, and deliver visually stunning experiences at a fraction of the traditional time and cost.',
    fullDesc: 'From product explainers to hyper-realistic visuals, our AI video services unlock creative possibilities that were once impossible, enhancing overall digital product design experiences from an innovative Indian website design company.',
    heroImage: '/desgin/ai/Banner.png', // AI/tech animation image
    
    // Gallery Images (for portfolio section)
    galleryVideos: [
      "/desgin/ai/2.mp4", // Example video URL
    ],
    
    // Gallery Heading
    galleryHeading: "Some Of Our AI Video & Animation Work",
    
    // Gallery Description
    galleryDesc: "Explore AI-generated videos and animations that push creative boundaries while delivering faster, cost-effective production.",
    
    // Basic Features List
    features: [
      'Product Explainer Videos',
      'Character Animations',
      'AI Avatars',
      '3D Renders',
      'Social Media Videos',
      'Hyper-Realistic Visuals',
      'AI Voiceovers',
      'Motion Graphics'
    ],
    
    // Subhead Section
    subheadSection: {
      title: "Reimagining Visual Storytelling With AI",
      description: "The future of content is intelligent, automated, and visually extraordinary. Our AI video & animation services combine creativity with advanced AI tools to help brands produce content that is faster, smarter, and visually elevated. Whether you're launching a product, building your digital presence, or looking to scale your video content, our AI-powered approach gives you unmatched flexibility, speed, and innovation. No expensive shoots. No complex production. Just limitless creativity."
    },
    
    // Headline Section
    headlineSection: {
      title: "Smarter Production. Faster Output. Exceptional Results.",
      description: "AI allows brands to create stunning visuals without traditional studio constraints. We help you harness that power, transforming your creative vision into dynamic AI-generated videos that look premium, feel authentic, and deliver measurable impact."
    },
    
    // Key Features (3-Box Layout)
    keyFeatures: [
      {
        title: "Cost-Effective Production",
        desc: "Reduce the need for physical shoots, models, equipment, and complex setups—delivering premium quality at a fraction of the cost."
      },
      {
        title: "Unlimited Creative Exploration",
        desc: "Create worlds, visuals, and scenes that don't exist in real life with no creative limitations or physical constraints."
      },
      {
        title: "Rapid Turnaround Times",
        desc: "AI-generated videos deliver professional results in days instead of weeks, helping you scale content production quickly."
      }
    ],
    
    // Detailed Features
    detailedFeatures: [
      {
        title: "Product Explainer Videos",
        desc: "Dynamic AI-generated explainers that communicate your product's value clearly and persuasively in minutes."
      },
      {
        title: "Character Animations",
        desc: "Custom AI-powered character animations that bring personality and emotion to your brand stories."
      },
      {
        title: "AI Avatars",
        desc: "Lifelike digital avatars that can present, narrate, and interact with your audience on your behalf."
      },
      {
        title: "3D Renders & Environments",
        desc: "Hyper-realistic 3D renders and immersive environments created entirely through AI generation."
      },
      {
        title: "Social Media Videos",
        desc: "Quick-turnaround, platform-optimized videos for Instagram, TikTok, YouTube, and LinkedIn."
      },
      {
        title: "Hyper-Realistic Visuals",
        desc: "AI-generated scenes and visuals that look indistinguishable from real-life production."
      }
    ],
    
    // FAQ Section
    faq: [
      {
        question: "What types of AI videos do you create?",
        answer: "We create product videos, character animations, explainer videos, AI avatars, 3D renders, and social media videos tailored to your brand."
      },
      {
        question: "Are AI videos customizable?",
        answer: "Yes, every visual, scene, script, and animation style can be tailored to your brand identity and creative vision."
      },
      {
        question: "Do AI videos replace traditional production?",
        answer: "Not always, but they significantly reduce cost, time, and effort while offering creative flexibility that traditional production can't match."
      },
      {
        question: "How long does it take to produce an AI video?",
        answer: "Most projects are completed within 3–7 days, depending on length, complexity, and customization requirements."
      },
      {
        question: "Do you provide voiceovers and sound design?",
        answer: "Yes, AI voiceovers and audio enhancements are included to create a complete, professional video experience."
      },
      {
        question: "Can you match my brand identity in the video?",
        answer: "Absolutely. Colors, typography, tone, and visual style are customized to align with your brand guidelines perfectly."
      }
    ],
    
    // Process Section (AI Video workflow)
    process: [
      { title: 'Discovery', desc: 'Understanding your creative vision, goals, and brand identity.' },
      { title: 'Script Development', desc: 'Crafting compelling narratives and dialogue for your video.' },
      { title: 'Style Selection', desc: 'Choosing visual aesthetics, animation styles, and AI models.' },
      { title: 'AI Generation', desc: 'Creating visuals, scenes, and animations using advanced AI tools.' },
      { title: 'Voice & Sound', desc: 'Adding AI voiceovers, music, and sound design.' },
      { title: 'Delivery', desc: 'Providing final videos optimized for your target platforms.' }
    ],
    
    // Portfolio Section
    portfolio: [
      { title: 'SaaS Product Explainer', category: 'AI Animation', image: 'https://images.unsplash.com/photo-1626785774573-4b7994893459?q=80&w=800&auto=format&fit=crop' },
      { title: 'AI Avatar Campaign', category: 'Digital Presenter', image: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=800&auto=format&fit=crop' },
      { title: '3D Product Render', category: 'Hyper-Realistic', image: 'https://images.unsplash.com/photo-1626785774573-4b7994893459?q=80&w=800&auto=format&fit=crop' }
    ]
  }
];
