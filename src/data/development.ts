import { Monitor, PenTool, Box, Video, Camera } from "lucide-react";
import { motion } from "framer-motion";
export interface DevelopmentData {
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
    image?: string;
  };
  keyFeatures?: { title: string; desc: string }[];
  faq?: { question: string; answer: string }[];
  process: { title: string; desc: string }[];
  portfolio: { title: string; category: string; image: string }[];
}

export const developmentData: DevelopmentData[] = [
  {
    id: "website",
    title: "WEBSITE DEVELOPMENT",
    heroTitle: "WEBSITE DEVELOPMENT",
    icon: Monitor,
    shortDesc:
      "We create high-performance, visually striking websites that blend aesthetics, usability, and powerful technology.",
    fullDesc:
      "Our website development services are built to elevate your online presence, drive engagement, and deliver real business results through clean code, smart systems, and user-focused design.",
    heroImage: "/devlopment/Webiste/banner.png",
    galleryHeading: "Some of Our Website Work",
    galleryDesc: "",
    galleryImages: [
      "/devlopment/Webiste/wacia/02.png",
      "/devlopment/Webiste/wacia/01.png",
      "/devlopment/Webiste/The White Stripes/08.png",
      "/devlopment/Webiste/The White Stripes/09.png",
      "/devlopment/Webiste/Sol Dunes/01.png",
      "/devlopment/Webiste/Sol Dunes/03.png",
      "/devlopment/Webiste/Petro Solutions/07.png",
      "/devlopment/Webiste/Oilbasis/05.png",
      "/devlopment/Webiste/najahqatari/01.png",
      "/devlopment/Webiste/najahqatari/02.png",
      "/devlopment/Webiste/najahqatari/03.png",
      "/devlopment/Webiste/Huckster Media/08.png",
      "/devlopment/Webiste/Huckster Media/09.png",
      "/devlopment/Webiste/Estheradorned/01.png",
      "/devlopment/Webiste/Estheradorned/02.png",
      "/devlopment/Webiste/Carat years/02.png",
      "/devlopment/Webiste/Amrut/01.png",
      "/devlopment/Webiste/Amrut/02.png",
      "/devlopment/Webiste/arabicompany/01.png",
      "/devlopment/Webiste/Estheradorned/01.png",
      "/devlopment/Webiste/Estheradorned/02.png",
      "/devlopment/Webiste/gopc/01.png",
      "/devlopment/Webiste/hunkalstays/01.png",
      "/devlopment/Webiste/ilg/01.png",
      "/devlopment/Webiste/kuwaitnfp/01.png",
      "/devlopment/Webiste/mosanada/01.png",
      "/devlopment/Webiste/najahqatari/01.png",
      "/devlopment/Webiste/najahqatari/02.png",
      "/devlopment/Webiste/najahqatari/03.png",
      "/devlopment/Webiste/Oilbasis/05.png",
      "/devlopment/Webiste/Petro Solutions/07.png",
      "/devlopment/Webiste/The White Stripes/08.png",
      "/devlopment/Webiste/The White Stripes/09.png",
      "/devlopment/Webiste/tlc.edu/01.png",
    ],
    features: [
      "Custom Frontend Architecture",
      "Headless CMS Integration",
      "E-commerce Solutions",
      "WebGL & 3D Interactions",
      "Progressive Web Apps",
    ],
    subheadSection: {
      // Add this new property
      title: "Your Digital Presence, Perfected",
      description:
        "Your website is more than a digital address, it’s your brand’s first impression, your sales engine, and your most valuable online asset. We design and build websites that not only look exceptional but also function seamlessly across all devices.From corporate websites to e-commerce stores and custom web platforms, our team develops modern, responsive, and intuitive experiences built to impress and perform.",
    },
    detailedFeatures: [
      {
        title: "Custom Design Solutions",
        desc: "Tailored layouts designed exclusively for your brand—no templates, no shortcuts. Just clean, modern, fully custom UI.",
      },
      {
        title: "Responsive & Mobile-Ready",
        desc: "Our websites are optimized for every device, providing users with a seamless and consistent experience everywhere.",
      },
      {
        title: "Robust Functionality",
        desc: "Built using advanced frameworks and secure technologies, delivering speed, performance, and reliability.",
      },
      {
        title: "Your Website, Built for Performance",
        desc: "We combine technical precision with creative design to build websites that load fast, look stunning, and deliver a smooth user journey.",
      },
    ],
    faq: [
      {
        question: "What types of websites do you build?",
        answer:
          "We develop corporate sites, landing pages, e-commerce stores, custom platforms, and high-performance business websites.",
      },
      {
        question: "What platforms do you use?",
        answer:
          "We work with WordPress, Shopify, Webflow, custom frameworks (React, Next.js, Laravel), and more, depending on your needs.",
      },
      {
        question: "Do you handle both design and development?",
        answer:
          "Yes. Our team manages the complete UI/UX design, development, testing, and launch.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "Most websites take 2–6 weeks, depending on complexity and features.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Absolutely, your website will be fully responsive across all screen sizes.",
      },
      {
        question: "Do you provide SEO optimization?",
        answer:
          "Yes, we build with SEO-ready foundations and can provide full SEO services if needed.",
      },
      {
        question: "Can I manage the website myself?",
        answer:
          "Yes, you will receive a user-friendly CMS with full editing control.",
      },
      {
        question: "Do you offer e-commerce functionality?",
        answer:
          "Yes. We integrate secure payment gateways, checkout systems, and inventory management.",
      },
      {
        question: "Do you provide hosting or domain services?",
        answer:
          "We guide you on the best options and can manage it for you if required.",
      },
      {
        question: "What happens after the website is launched?",
        answer:
          "We offer support, maintenance, analytics integration, and performance monitoring.",
      },
    ],
    process: [
      {
        title: "Discovery",
        desc: "Analyzing requirements and defining the technical roadmap.",
      },
      {
        title: "UX/UI Design",
        desc: "Creating intuitive and engaging user interfaces.",
      },
      {
        title: "Development",
        desc: "Writing clean, efficient, and scalable code.",
      },
      {
        title: "Launch",
        desc: "Testing, optimizing, and deploying to production.",
      },
    ],
    portfolio: [
      {
        title: "Fintech Dashboard",
        category: "Web App",
        image: "https://picsum.photos/id/119/800/600",
      },
      {
        title: "Luxury Fashion",
        category: "E-commerce",
        image: "https://picsum.photos/id/160/800/600",
      },
      {
        title: "Architectural Firm",
        category: "Portfolio",
        image: "https://picsum.photos/id/201/800/600",
      },
    ],
  },
  {
    id: "app",
    title: "MOBILE APP DEVELOPMENT",
    heroTitle: "MOBILE APP DEVELOPMENT",
    icon: Monitor,
    shortDesc:
      "We build high-performance mobile applications that deliver seamless user experiences, robust functionality, and intuitive design.",
    fullDesc:
      "Our app development services bring your ideas to life, crafted with precision, built with modern technology, and optimized for long-term scalability.",
    subheadSection: {
      title: "Apps That Transform Experiences",
      description:
        "Great apps don't just look good, they solve problems, simplify life, and create meaningful engagement. We design and develop mobile apps that are fast, secure, user-friendly, and built to scale with your business. From startup MVPs to enterprise-grade applications, our team creates mobile solutions that exceed expectations and deliver measurable results across both iOS and Android.",
    },
    heroImage: "/devlopment/mobile/Banner.png",
    galleryHeading: "Apps That Transform Experiences",
    galleryDesc:
      "Great apps don't just look good — they solve problems, simplify life, and create meaningful engagement. We design and develop mobile apps that are fast, secure, user-friendly, and built to scale with your business. From startup MVPs to enterprise-grade applications, our team creates mobile solutions that exceed expectations and deliver measurable results across both iOS and Android.",
    galleryImages: [
      "/devlopment/mobile/App 1/01.png",
      "/devlopment/mobile/App 1/02.png",
      "/devlopment/mobile/One Fitness/04.png",
      "/devlopment/mobile/Entry 360/02.png",
      "/devlopment/mobile/Entry 360/01.png",

      // "/devlopment/mobile/Sid farms/01.png",
      // "/devlopment/mobile/Sid farms/02.png",

      "/devlopment/mobile/App 1/03.png",
    ],
    features: [
      "User-Centered Design",
      "Performance-Driven Development",
      "Cross-Platform Excellence",
    ],
    headlineSection: {
      title: " Apps Built for Growth, Stability & Performance.",
      description:
        "We develop applications that function flawlessly even under heavy load, deliver engaging user experiences, and adapt to the evolving needs of your business. With robust backend systems, seamless integrations, and modern features, our apps are crafted not just for today but for the future.",
    },
    detailedFeatures: [
      {
        title: "End-to-End App Development",
        desc: "From research and wireframing to design, development, testing, and launch.",
      },
      {
        title: "Secure & Scalable Architecture",
        desc: "Optimized code structure, strong security layers, and future-ready builds.",
      },
      {
        title: "Smooth Integrations",
        desc: "Payment gateways, CRM, analytics tools, third-party APIs, cloud services, and more.",
      },
    ],
    faq: [
      {
        question: "What types of mobile apps do you build?",
        answer:
          "We develop native iOS apps, Android apps, hybrid apps, enterprise applications, and custom business apps.",
      },
      {
        question: "Do you help with UI/UX design?",
        answer:
          "Yes, our design team creates complete UI/UX layouts, user flows, wireframes, and prototypes.",
      },
      {
        question: "Which technologies do you use?",
        answer:
          "We work with Swift, Kotlin, Flutter, React Native, Node.js, Laravel, Firebase, and scalable cloud environments.",
      },
      {
        question: "How long does it take to build an app?",
        answer:
          "Simple apps take 4–8 weeks. Complex apps require 2–6 months, depending on features.",
      },
      {
        question: "Can you maintain and update the app after launch?",
        answer:
          "Yes. We provide continuous support, bug fixes, and version upgrades.",
      },
      {
        question: "Will my app support all devices?",
        answer:
          "Absolutely, our apps are optimized for different screen sizes and operating systems.",
      },
      {
        question: "Do you offer backend development?",
        answer:
          "Yes, including admin dashboards, APIs, databases, and cloud infrastructure.",
      },
      {
        question: "Can you add payment, chat, or tracking features?",
        answer:
          "Yes, we integrate payment gateways, live chat, push notifications, analytics, and more.",
      },
    ],
    process: [
      {
        title: "Discovery",
        desc: "Analyzing requirements and defining the technical roadmap.",
      },
      {
        title: "UX/UI Design",
        desc: "Creating intuitive and engaging user interfaces.",
      },
      {
        title: "Development",
        desc: "Writing clean, efficient, and scalable code.",
      },
      {
        title: "Launch",
        desc: "Testing, optimizing, and deploying to production.",
      },
    ],
    portfolio: [
      {
        title: "Fintech Dashboard",
        category: "Mobile App",
        image:
          "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "E-Commerce Platform",
        category: "Mobile App",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Fitness Tracker",
        category: "Mobile App",
        image:
          "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "ECOMMERCE",
    heroTitle: "E-COMMERCE DEVELOPMENT",
    icon: Monitor,
    shortDesc:
      "We build high-performance e-commerce platforms designed to convert visitors into customers.",
    fullDesc:
      "Our stores combine elegant design, smooth user journeys, fast checkout flows, and enterprise-grade functionality, delivering an online shopping experience your customers will love.",
    heroImage: "/devlopment/ecomm/Banner.png",
    galleryHeading: "Some of Our E-Commerce Work",
    galleryDesc: "",
    galleryImages: [
      "/devlopment/ecomm/01.png",
      "/devlopment/ecomm/02.png",
      "/devlopment/ecomm/03.png",
      "/devlopment/ecomm/04.png",
      "/devlopment/ecomm/05.png",
      "/devlopment/ecomm/06.png",
    ],
    features: [
      "Custom Frontend Architecture",
      "Headless CMS Integration",
      "E-commerce Solutions",
      "WebGL & 3D Interactions",
      "Progressive Web Apps",
    ],
    headlineSection: {
      title: "E-Commerce That Works as Hard as You Do.",
      description:
        "We don't just build online stores, we build growth engines. Every store we develop is designed for speed, optimized for conversions, and structured for scalability. From product management to checkout optimization, we ensure your shoppers enjoy a smooth and secure experience from start to finish.",
    },
    subheadSection: {
      title: "Your Store, Built to Sell.",
      description:
        "An e-commerce website is more than a catalog; it's a complete ecosystem of design, usability, marketing tools, and backend operations. We develop e-commerce platforms that look premium, load instantly, and operate smoothly, no matter how large your inventory or how high your traffic spikes. From startup stores to multi-brand marketplaces, our e-commerce development solutions empower businesses to scale online, boost conversions, and streamline operations.",
    },
    detailedFeatures: [
      {
        title: "Custom Storefront Design",
        desc: "Unique, conversion-ready designs tailored to your brand, products, and audience.",
      },
      {
        title: "Optimized Shopping Experience",
        desc: "Fast loading, intuitive navigation, clean product layouts, and a seamless mobile experience.",
      },
      {
        title: "Secure & Scalable Backend",
        desc: "Built on robust technology with secure payment gateways, automated systems, and future-ready architecture.",
      },
    ],
    faq: [
      {
        question: "Which platforms do you build e-commerce stores on?",
        answer:
          "We work with Shopify, WooCommerce, Magento, Webflow, and fully custom frameworks depending on your requirements.",
      },
      {
        question: "Can you design the entire store layout?",
        answer:
          "Yes, we create complete UI/UX designs, including homepage, product pages, category pages, and checkout screens.",
      },
      {
        question: "Do you integrate payment gateways?",
        answer:
          "Absolutely. We integrate credit/debit cards, wallets, UPI, PayPal, Apple Pay, Google Pay, and more.",
      },
      {
        question: "Can I manage products myself?",
        answer:
          "Yes, you will receive a simple, intuitive dashboard to manage inventory, pricing, orders, and promotions.",
      },
      {
        question: "Do you provide mobile optimization?",
        answer:
          "Yes, your store will be fully responsive and optimized for mobile shoppers.",
      },
      {
        question: "Can you build a marketplace with multiple vendors?",
        answer:
          "Yes, we develop both single-vendor and multi-vendor e-commerce systems.",
      },
      {
        question: "Do you offer marketing integrations?",
        answer:
          "Yes, CRM, email automation, WhatsApp, Facebook Pixel, Google Analytics, SEO tools, and remarketing systems.",
      },
      {
        question: "What about abandoned cart recovery?",
        answer:
          "We set up automated tools to help recover lost sales and increase conversions.",
      },
    ],
    process: [
      {
        title: "Discovery",
        desc: "Analyzing requirements and defining the technical roadmap.",
      },
      {
        title: "UX/UI Design",
        desc: "Creating intuitive and engaging user interfaces.",
      },
      {
        title: "Development",
        desc: "Writing clean, efficient, and scalable code.",
      },
      {
        title: "Launch",
        desc: "Testing, optimizing, and deploying to production.",
      },
    ],
    portfolio: [
      {
        title: "Fintech Dashboard",
        category: "Web App",
        image: "https://picsum.photos/id/119/800/600",
      },
      {
        title: "Luxury Fashion",
        category: "E-commerce",
        image: "https://picsum.photos/id/160/800/600",
      },
      {
        title: "Architectural Firm",
        category: "Portfolio",
        image: "https://picsum.photos/id/201/800/600",
      },
    ],
  },
  {
    id: "crm",
    title: "CRM",
    heroTitle: "CRM DEVELOPMENT",
    icon: Monitor,
    shortDesc:
      "We build powerful CRM systems that help businesses organize their data, automate workflows, and manage customers more efficiently.",
    fullDesc:
      "Our CRM solutions streamline your entire customer lifecycle, from lead generation to after-sales support, giving you complete control, real-time insights, and a scalable foundation for growth.",
    heroImage: "/devlopment/crm/Banner.png",
    galleryHeading: "Some of Our CRM Interface Designs",
    galleryDesc: "",
    galleryImages: ["/devlopment/crm/01.png", "/devlopment/crm/02.png"],
    features: [
      "Custom Frontend Architecture",
      "Headless CMS Integration",
      "E-commerce Solutions",
      "WebGL & 3D Interactions",
      "Progressive Web Apps",
    ],
    subheadSection: {
      title: "Your Customer Journey, Optimized.",
      description:
        "A CRM isn't just software, it's the core engine behind how your business communicates, sells, and grows. We design and develop CRM platforms tailored to your operations, industry, and long-term goals, ensuring your team works smarter rather than harder. From pipelines and automations to reporting dashboards and integrations, our CRM systems are built to improve workflows, enhance productivity, and increase revenue.",
      image: "/devlopment/crm/01.png",
    },
    detailedFeatures: [
      {
        title: "Custom CRM Architecture",
        desc: "We design workflows, pipelines, and modules tailored specifically to your business needs.",
      },
      {
        title: "Automations & Smart Workflows",
        desc: "Automatic lead assignment, follow-ups, reminders, invoicing, task triggers, and more.",
      },
      {
        title: "Analytics & Reporting Dashboards",
        desc: "Real-time insights into lead flow, team performance, revenue, and customer behavior.",
      },
    ],
    faq: [
      {
        question: "What type of CRM systems do you build?",
        answer:
          "We develop sales CRMs, service CRMs, support CRMs, pipeline management systems, and fully customized business CRMs.",
      },
      {
        question: "Can you automate follow-up processes?",
        answer:
          "Yes, automated emails, WhatsApp messages, reminders, and task assignments.",
      },
      {
        question: "Do you integrate CRM with websites and landing pages?",
        answer:
          "Absolutely. Leads flow automatically into your CRM with source tracking.",
      },
      {
        question: "Can CRM support multi-team operations?",
        answer:
          "Yes, multiple departments, roles, permissions, and workflows can be added.",
      },
      {
        question: "Do you offer mobile access?",
        answer:
          "Yes, your CRM can be accessed via mobile-friendly dashboards or custom apps.",
      },
      {
        question: "Can you migrate our old data?",
        answer:
          "Yes, we handle database migration, cleanup, and system re-structuring.",
      },
      {
        question: "How long does it take to build a CRM?",
        answer:
          "On average, 3–10 weeks, depending on complexity and number of modules.",
      },
      {
        question: "Do you provide training?",
        answer:
          "Yes, we train your team and provide documentation for smooth onboarding.",
      },
    ],
    process: [
      {
        title: "Discovery",
        desc: "Analyzing requirements and defining the technical roadmap.",
      },
      {
        title: "UX/UI Design",
        desc: "Creating intuitive and engaging user interfaces.",
      },
      {
        title: "Development",
        desc: "Writing clean, efficient, and scalable code.",
      },
      {
        title: "Launch",
        desc: "Testing, optimizing, and deploying to production.",
      },
    ],
    portfolio: [
      {
        title: "Fintech Dashboard",
        category: "Web App",
        image: "https://picsum.photos/id/119/800/600",
      },
      {
        title: "Luxury Fashion",
        category: "E-commerce",
        image: "https://picsum.photos/id/160/800/600",
      },
      {
        title: "Architectural Firm",
        category: "Portfolio",
        image: "https://picsum.photos/id/201/800/600",
      },
    ],
  },
  {
    id: "erp",
    title: "ERP",
    heroTitle: "ERP DEVELOPMENT",
    icon: Monitor,
    shortDesc: "One System. Complete Control. Smarter Operations.",
    fullDesc:
      "We build powerful ERP systems that unify your business processes, automate daily tasks, and give you complete visibility across every department. Our ERP solutions are custom-built to match your workflows, helping you improve efficiency, reduce manual effort, and scale with confidence.",
    heroImage: "/devlopment/erp/Banner.png",

    galleryHeading: "Some of Our ERP Interface Designs",
    galleryDesc: "",
    galleryImages: [
      "/devlopment/erp/01.png",
      "/devlopment/erp/02.png",
      "/devlopment/erp/03.png",
    ],
    features: [
      "Custom Frontend Architecture",
      "Headless CMS Integration",
      "E-commerce Solutions",
      "WebGL & 3D Interactions",
      "Progressive Web Apps",
    ],
    subheadSection: {
      title: "Your Entire Business, Managed in One Place.",
      description:
        "Running a business with scattered tools leads to delays, errors, and inefficiency. Our ERP systems consolidate your operations, finance, inventory, HR, sales, procurement, projects, and more into one integrated platform. Whether you're streamlining your internal processes or upgrading from outdated software, we build ERP systems that adapt to your business, not the other way around.",
    },
    detailedFeatures: [
      {
        title: "Customised ERP Modules",
        desc: "Tailored workflows for sales, HR, inventory, finance, CRM, manufacturing, projects, and more.",
      },
      {
        title: "Process Automation",
        desc: "Automated approvals, reminders, invoicing, procurement flows, and task triggers.",
      },
      {
        title: "Real-Time Reporting",
        desc: "Smart dashboards that give you instant insights into performance, productivity, and profitability.",
      },
    ],

    faq: [
      {
        question: "What types of ERP systems do you build?",
        answer:
          "We build ERPs for finance, HR, inventory, procurement, sales, projects, operations, and industry-specific workflows.",
      },
      {
        question: "Can ERP be customized for my business?",
        answer:
          "Yes, every module, workflow, and feature is designed around your exact requirements.",
      },
      {
        question: "Do you integrate third-party tools?",
        answer:
          "Absolutely. We integrate accounting tools, CRM, e-commerce platforms, WhatsApp, payment gateways, and automation tools.",
      },
      {
        question: "How long does ERP development take?",
        answer:
          "Typically 4–12 weeks, depending on module complexity and business size.",
      },
      {
        question: "Do you offer cloud-based ERP systems?",
        answer: "Yes, your ERP can be cloud-based, on-premise, or hybrid.",
      },
      {
        question: "Can I migrate data from old systems?",
        answer: "Yes, we handle data migration, cleanup, and system mapping.",
      },
      {
        question: "Will my team get training?",
        answer:
          "Yes, we provide onboarding training, documentation, and ongoing support.",
      },
      {
        question: "Is ERP secure?",
        answer:
          "We use role-based permissions, encryption, secure databases, and activity logs to keep your system safe.",
      },
    ],
    process: [
      {
        title: "Discovery",
        desc: "Analyzing requirements and defining the technical roadmap.",
      },
      {
        title: "UX/UI Design",
        desc: "Creating intuitive and engaging user interfaces.",
      },
      {
        title: "Development",
        desc: "Writing clean, efficient, and scalable code.",
      },
      {
        title: "Launch",
        desc: "Testing, optimizing, and deploying to production.",
      },
    ],
    portfolio: [
      {
        title: "Fintech Dashboard",
        category: "Web App",
        image: "https://picsum.photos/id/119/800/600",
      },
      {
        title: "Luxury Fashion",
        category: "E-commerce",
        image: "https://picsum.photos/id/160/800/600",
      },
      {
        title: "Architectural Firm",
        category: "Portfolio",
        image: "https://picsum.photos/id/201/800/600",
      },
    ],
  },
  {
    id: "pos",
    title: "POS",
    heroTitle: "POINT OF SALE (POS) SOLUTIONS",
    icon: Monitor,
    shortDesc:
      "Our POS solutions are designed to simplify transactions, streamline operations, and deliver a seamless checkout experience.",
    fullDesc:
      "We build smart, scalable POS systems that integrate sales, inventory, billing, and reporting, helping businesses operate faster and smarter.",
    heroImage: "/devlopment/pos/Banner.png",
    galleryHeading: "Some of Our POS Interface Designs",
    galleryDesc: "",
    galleryImages: [
      "/devlopment/pos/01.png",
      "/devlopment/pos/02.png",
      "/devlopment/pos/03.png",
    ],
    features: [
      "Custom Frontend Architecture",
      "Headless CMS Integration",
      "E-commerce Solutions",
      "WebGL & 3D Interactions",
      "Progressive Web Apps",
    ],
    subheadSection: {
      title: "Smarter Sales. Seamless Operations.",
      description:
        "A modern POS system is more than just billing software, it's the backbone of your daily operations. We develop POS solutions that are intuitive, reliable, and built to handle high-volume transactions while giving you complete control and visibility over your business.",
    },
    detailedFeatures: [
      {
        title: "Custom POS Development",
        desc: "POS systems tailored to your business model, retail, restaurant, hospitality, or service-based, designed for speed, accuracy, and ease of use.",
      },
      {
        title: "Inventory & Sales Integration",
        desc: "Real-time inventory tracking, automated stock updates, sales analytics, and reporting, all connected in one unified system.",
      },
      {
        title: "Secure & Scalable Architecture",
        desc: "Built with secure payment processing, role-based access, and scalable infrastructure to support business growth without disruption.",
      },
    ],
    faq: [
      {
        question: "What types of businesses can use your POS solutions?",
        answer:
          "Our POS systems are suitable for retail stores, restaurants, cafes, salons, supermarkets, and multi-location businesses.",
      },
      {
        question:
          "Can the POS system integrate with inventory and accounting software?",
        answer:
          "Yes, our POS solutions integrate seamlessly with inventory management, CRM, ERP, and accounting platforms.",
      },
      {
        question: "Do you support multiple payment methods?",
        answer:
          "Absolutely, cash, card, digital wallets, QR payments, and online integrations are supported.",
      },
      {
        question: "Is the POS system cloud-based or offline?",
        answer:
          "We offer both cloud-based and hybrid POS systems with offline functionality to ensure uninterrupted operations.",
      },
      {
        question: "Can the POS system be customized?",
        answer:
          "Yes, features, dashboards, user roles, and reports can be customized to match your business workflow.",
      },
      {
        question: "Do you provide training and support?",
        answer:
          "Yes, we offer onboarding, staff training, and ongoing technical support.",
      },
    ],
    process: [
      {
        title: "Discovery",
        desc: "Analyzing requirements and defining the technical roadmap.",
      },
      {
        title: "UX/UI Design",
        desc: "Creating intuitive and engaging user interfaces.",
      },
      {
        title: "Development",
        desc: "Writing clean, efficient, and scalable code.",
      },
      {
        title: "Launch",
        desc: "Testing, optimizing, and deploying to production.",
      },
    ],
    portfolio: [
      {
        title: "Fintech Dashboard",
        category: "Web App",
        image: "https://picsum.photos/id/119/800/600",
      },
      {
        title: "Luxury Fashion",
        category: "E-commerce",
        image: "https://picsum.photos/id/160/800/600",
      },
      {
        title: "Architectural Firm",
        category: "Portfolio",
        image: "https://picsum.photos/id/201/800/600",
      },
    ],
  },
  {
    id: "enterprise-application",
    title: "ENTERPRISE APPLICATION",
    heroTitle: "ENTERPRISE APPLICATION DEVELOPMENT",
    icon: Monitor,
    shortDesc: "Building Intelligent Systems for Ambitious Organizations",
    fullDesc:
      "We develop enterprise-grade applications engineered to streamline operations, modernize legacy processes, and give companies the digital infrastructure they need to operate at scale. Our enterprise apps are built with robust architecture, seamless integrations, and real-time data visibility, empowering businesses to move faster and perform smarter.",
    heroImage: "/devlopment/enterprise/Banner.png",
    galleryHeading: "Enterprise Solutions We've Delivered",
    galleryDesc: "",
    galleryImages: [
      "/devlopment/enterprise/image1.png",
      "/devlopment/enterprise/image2.png",
      "/devlopment/enterprise/image3.png",
    ],
    features: [
      "Custom Frontend Architecture",
      "Headless CMS Integration",
      "E-commerce Solutions",
      "WebGL & 3D Interactions",
      "Progressive Web Apps",
    ],
    subheadSection: {
      title: "Complex Workflows Made Simple",
      description:
        "Enterprises operate with multiple departments, layered approvals, long workflows, and large volumes of data. We build applications that simplify all of this. By aligning your technology with your operational goals, we help eliminate bottlenecks and ensure every part of your business works together seamlessly. Our enterprise solutions focus on automation, security, scalability, and user experience, giving organisations the digital backbone required to innovate and grow.",
    },
    detailedFeatures: [
      {
        title: "Custom Enterprise Architecture",
        desc: "Designed from scratch to match your internal processes, teams, and operational structure.",
      },
      {
        title: "Workflow Automation Systems",
        desc: "Intelligent workflows that reduce manual work, automate approvals, and improve efficiency.",
      },
      {
        title: "Real-Time Data & BI Dashboards",
        desc: "Performance metrics, forecasting tools, and analytics that drive smarter decisions.",
      },
    ],
    faq: [
      {
        question: "What types of enterprise applications do you develop?",
        answer:
          "We build applications for operations, HR, finance, procurement, logistics, sales, production, projects, CRM, and custom enterprise use cases.",
      },
      {
        question: "Can you integrate with our existing tools?",
        answer:
          "Yes. We integrate CRM, ERP, accounting software, POS, HRMS, and APIs that your organization already uses.",
      },
      {
        question: "Is the system cloud-based?",
        answer:
          "It can be cloud-based, on-premise, or hybrid, depending on your organization's needs.",
      },
      {
        question: "How secure are your enterprise solutions?",
        answer:
          "We follow enterprise-grade security standards, including encryption, multi-level access control, secure APIs, backups, and server hardening.",
      },
      {
        question: "Do you support large databases and high user volume?",
        answer:
          "Yes, our architecture is built to handle high traffic, large datasets, and thousands of concurrent users.",
      },
      {
        question: "How long does development take?",
        answer:
          "Typical timelines range from 6–20 weeks, depending on the complexity and number of modules.",
      },
      {
        question: "Do you provide training and documentation?",
        answer:
          "Yes, your team receives complete training, user manuals, and onboarding support.",
      },
      {
        question: "What industries do you work with?",
        answer:
          "Retail, hospitality, logistics, manufacturing, finance, healthcare, real estate, education, SaaS, and more.",
      },
    ],
    process: [
      {
        title: "Discovery",
        desc: "Analyzing requirements and defining the technical roadmap.",
      },
      {
        title: "UX/UI Design",
        desc: "Creating intuitive and engaging user interfaces.",
      },
      {
        title: "Development",
        desc: "Writing clean, efficient, and scalable code.",
      },
      {
        title: "Launch",
        desc: "Testing, optimizing, and deploying to production.",
      },
    ],
    portfolio: [
      {
        title: "Fintech Dashboard",
        category: "Web App",
        image: "https://picsum.photos/id/119/800/600",
      },
      {
        title: "Luxury Fashion",
        category: "E-commerce",
        image: "https://picsum.photos/id/160/800/600",
      },
      {
        title: "Architectural Firm",
        category: "Portfolio",
        image: "https://picsum.photos/id/201/800/600",
      },
    ],
  },
  {
    id: "ai-chatbot",
    title: "AI CHATBOT",
    heroTitle: "AI CHATBOT DEVELOPMENT",
    icon: Monitor,
    shortDesc: "Smarter Conversations. Faster Support. Powerful Automation.",
    fullDesc:
      "We build intelligent AI chatbots that automate customer interactions, enhance user experience, and improve operational efficiency. From lead generation and customer support to e-commerce assistance and workflow automation, our chatbots deliver instant, accurate, and human-like responses 24/7.",
    heroImage: "/devlopment/ai-chat/banner.png",
    galleryHeading: "Some of Our AI Chatbot Interfaces",
    galleryDesc: "",
    galleryImages: [
      "/devlopment/ai-chat/01.png",
      "/devlopment/ai-chat/02.png",
      "/devlopment/ai-chat/03.png",
    ],
    features: [
      "Custom Frontend Architecture",
      "Headless CMS Integration",
      "E-commerce Solutions",
      "WebGL & 3D Interactions",
      "Progressive Web Apps",
    ],
    subheadSection: {
      title: "Your Business, Available 24/7.",
      description:
        "Every customer expects quick answers, instant support, and a seamless experience. Our AI chatbot solutions transform the way your business communicates—helping you respond instantly, qualify leads, resolve queries, and personalize user interactions across websites, apps, WhatsApp, and social platforms. Built using advanced AI models, NLP (Natural Language Processing), and smart automation, our chatbots understand intent, learn continuously, and deliver meaningful conversations that drive results.",
    },
    detailedFeatures: [
      {
        title: "Custom AI Chatbot Development",
        desc: "Chatbots designed around your business goals, support, sales, lead gen, onboarding, or automation.",
      },
      {
        title: "Omnichannel Chatbot Integration",
        desc: "Deploy your chatbot on websites, mobile apps, WhatsApp, Instagram, Facebook, and internal systems.",
      },
      {
        title: "Smart Automation Workflows",
        desc: "Automate FAQs, lead qualification, order tracking, appointment booking, and personalized recommendations.",
      },
    ],
    faq: [
      {
        question: "What can an AI chatbot do for my business?",
        answer:
          "It can answer FAQs, generate leads, book appointments, track orders, assist with sales, collect data, and automate customer support.",
      },
      {
        question: "Can you integrate the chatbot on my website or app?",
        answer:
          "Yes, our chatbots work on websites, apps, WhatsApp, Instagram, Facebook, and internal systems.",
      },
      {
        question: "Do your chatbots use AI or just predefined scripts?",
        answer:
          "We develop both AI-driven chatbots (NLP-based) and hybrid chatbots depending on your requirements.",
      },
      {
        question: "Can the chatbot integrate with my CRM or ERP?",
        answer:
          "Absolutely. We support API integrations for seamless data flow and automation.",
      },
      {
        question: "Will the chatbot understand multiple languages?",
        answer: "Yes, we can train the chatbot to support multiple languages.",
      },
      {
        question: "How long does development take?",
        answer:
          "Typically 1–4 weeks, depending on complexity and integrations.",
      },
      {
        question: "Can the chatbot handle payments or bookings?",
        answer:
          "Yes, booking engines, payment gateways, order tracking, and appointment systems can be integrated.",
      },
      {
        question: "Does the chatbot improve over time?",
        answer:
          "Yes, AI chatbots learn from interactions and become smarter with usage.",
      },
    ],
    process: [
      {
        title: "Discovery",
        desc: "Analyzing requirements and defining the technical roadmap.",
      },
      {
        title: "UX/UI Design",
        desc: "Creating intuitive and engaging user interfaces.",
      },
      {
        title: "Development",
        desc: "Writing clean, efficient, and scalable code.",
      },
      {
        title: "Launch",
        desc: "Testing, optimizing, and deploying to production.",
      },
    ],
    portfolio: [
      {
        title: "Fintech Dashboard",
        category: "Web App",
        image: "https://picsum.photos/id/119/800/600",
      },
      {
        title: "Luxury Fashion",
        category: "E-commerce",
        image: "https://picsum.photos/id/160/800/600",
      },
      {
        title: "Architectural Firm",
        category: "Portfolio",
        image: "https://picsum.photos/id/201/800/600",
      },
    ],
  },
  {
    id: "whatsapp-apis",
    title: "WHATSAPP APIs",
    heroTitle: "WHATSAPP APIs",
    icon: Monitor,
    shortDesc:
      "Automated Conversations. Instant Engagement. Smarter Customer Experiences.",
    fullDesc:
      "From automated replies to advanced workflows and chatbot intelligence, our WhatsApp API solutions enable businesses to deliver fast, personalized, and scalable communication.",
    heroImage: "/devlopment/whatsapp/Banner.png",
    galleryImages: ["/devlopment/whatsapp/01.png"],

    detailedFeatures: [
      {
        title: "WhatsApp API Integration",
        desc: "Fully verified WhatsApp Business API setup with secure number registration and green tick support.",
      },
      {
        title: "Automated Messaging Workflows",
        desc: "Order confirmations, payment updates, reminders, abandoned cart recovery, onboarding flows, and more.",
      },
      {
        title: "WhatsApp Chatbot Development",
        desc: "AI-driven chatbot integration for instant responses, lead qualification, and real-time assistance.",
      },
    ],
    features: [
      "Custom Frontend Architecture",
      "Headless CMS Integration",
      "E-commerce Solutions",
      "WebGL & 3D Interactions",
      "Progressive Web Apps",
    ],
    faq: [
      {
        question: "What is the WhatsApp Business API?",
        answer:
          "It enables businesses to automate messaging, run chatbots, send notifications, and manage high-volume communication professionally.",
      },
      {
        question: "Do you help with the green tick verification?",
        answer:
          "Yes, we guide you through the verification and approval process.",
      },
      {
        question: "Can WhatsApp API integrate with my CRM or ERP?",
        answer:
          "Absolutely. We support complete system integration for seamless automation.",
      },
      {
        question: "Do you build WhatsApp chatbots?",
        answer:
          "Yes, AI-powered chatbots, rule-based bots, hybrid bots, and industry-specific conversational flows.",
      },
      {
        question: "Can I send bulk promotional messages?",
        answer:
          "Yes, using WhatsApp-approved message templates and broadcast campaigns.",
      },
      {
        question: "Can WhatsApp API help reduce abandoned carts?",
        answer:
          "Yes, automated cart reminders significantly improve conversion rates.",
      },
      {
        question: "What about analytics?",
        answer:
          "We provide dashboards that track message delivery, response rates, user interactions, and performance insights.",
      },
      {
        question: "Does WhatsApp API support payments?",
        answer:
          "Yes, we can integrate payment links, checkout flows, and order confirmations.",
      },
    ],
    process: [
      {
        title: "Discovery",
        desc: "Analyzing requirements and defining the technical roadmap.",
      },
      {
        title: "UX/UI Design",
        desc: "Creating intuitive and engaging user interfaces.",
      },
      {
        title: "Development",
        desc: "Writing clean, efficient, and scalable code.",
      },
      {
        title: "Launch",
        desc: "Testing, optimizing, and deploying to production.",
      },
    ],
    portfolio: [
      {
        title: "Fintech Dashboard",
        category: "Web App",
        image: "https://picsum.photos/id/119/800/600",
      },
      {
        title: "Luxury Fashion",
        category: "E-commerce",
        image: "https://picsum.photos/id/160/800/600",
      },
      {
        title: "Architectural Firm",
        category: "Portfolio",
        image: "https://picsum.photos/id/201/800/600",
      },
    ],
  },
];
