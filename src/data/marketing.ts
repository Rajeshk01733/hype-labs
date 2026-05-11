import { Monitor, PenTool, Box, Video, Camera } from "lucide-react";

export interface MarketingData {
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
  preProductionImages?: string[];
  productionImages?: string[];
  postProductionImages?: string[];
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
  additionalFeatures1?: { title: string; desc: string }[];
  additionalFeatures2?: { title: string; desc: string }[];
  faq?: { question: string; answer: string }[];
  process?: { title: string; desc: string }[];
  portfolio: { title: string; category: string; image: string }[];
}

export const marketingData: MarketingData[] = [
  {
    id: "seo",
    title: "SEO+",
    heroTitle: "SEARCH ENGINE OPTIMIZATION (SEO+)",
    icon: Monitor, // You may want to import a more appropriate icon like Search
    shortDesc:
      "We help businesses increase their visibility, attract high-quality traffic, and generate consistent leads through powerful, data-driven SEO strategies.",
    fullDesc:
      "From technical optimization to content strategy, backlinks, and ongoing performance monitoring, our SEO solutions ensure your website ranks where it deserves to be.",
    heroImage: "/marketing/seo/Banner.png", // SEO/analytics related image

    // Basic Features List
    features: [
      "Technical SEO",
      "On-Page Optimization",
      "Off-Page SEO",
      "Keyword Research",
      "Performance Monitoring",
    ],

    // Detailed Features (Service Blocks)
    detailedFeatures: [
      {
        title: "Technical SEO",
        desc: "Website speed, indexing, site structure, Core Web Vitals, schema markup, crawl optimization.",
      },
      {
        title: "On-Page Optimization",
        desc: "Keyword mapping, content optimization, internal linking, meta tags, URL enhancement.",
      },
      {
        title: "Off-Page SEO & Authority Building",
        desc: "High-quality backlinks, brand mentions, outreach campaigns, and domain authority improvements.",
      },
    ],

    // Gallery Heading (for PORTFOLIO section)
    galleryHeading: "Some of Our SEO Wins",

    // Gallery Description
    galleryDesc:
      "Real results for real businesses—see how we've helped clients climb the rankings.",

    // Gallery Images (SEO/results related)
    galleryImages: ["/marketing/seo/01.png", "/marketing/seo/02.png"],

    // Headline Section
    headlineSection: {
      title: "Data-Driven SEO That Delivers Measurable Growth.",
      description:
        "We don't believe in guesswork. Every optimization we make is backed by data, research, and proven SEO methodologies that drive real, sustainable results for your business.",
    },

    // Subhead Section
    subheadSection: {
      title: "Your Customers Are Searching. We Make Sure They Find You.",
      description:
        "SEO is more than keywords, it's trust, authority, and long-term growth. We optimize your website inside and out, making sure search engines understand your content and users enjoy their experience. Whether you want to dominate local markets or rank globally, our SEO process focuses on sustainable, ethical, and performance-driven practices that deliver real results.",
    },

    // Key Features (additional benefit highlights)
    keyFeatures: [
      {
        title: "Sustainable Growth",
        desc: "We build long-term authority with white-hat techniques that stand the test of algorithm updates.",
      },
      {
        title: "Comprehensive Audits",
        desc: "In-depth technical and content audits that identify every opportunity for improvement.",
      },
      {
        title: "Transparent Reporting",
        desc: "Monthly reports with clear metrics on rankings, traffic, and ROI.",
      },
    ],

    // FAQ Section
    faq: [
      {
        question: "Do you provide keyword research?",
        answer:
          "Yes. Keyword research and mapping are included in all our SEO packages.",
      },
      {
        question: "Will you optimize the content on our website?",
        answer:
          "Yes. We optimize existing content and create SEO-focused content where required.",
      },
      {
        question: "Do you handle technical SEO?",
        answer:
          "Yes. This includes speed optimization, sitemap management, crawlability improvements, and schema implementation.",
      },
      {
        question: "Is link-building included?",
        answer:
          "Yes. We follow ethical, white-hat link-building practices to improve domain authority.",
      },
      {
        question: "Do you offer monthly SEO plans?",
        answer:
          "Yes. Ongoing monthly SEO plans are available to maintain and improve search rankings.",
      },
      {
        question: "Can you help with local SEO?",
        answer:
          "Yes. We optimize Google Business Profiles, manage citations, and target local keywords.",
      },
      {
        question: "Do you share monthly reports?",
        answer:
          "Yes. Detailed monthly reports covering rankings, traffic, and optimization progress are provided.",
      },
    ],

    // Process Section (SEO-specific process)
    process: [
      {
        title: "Discovery & Audit",
        desc: "Comprehensive analysis of your current SEO performance and opportunities.",
      },
      {
        title: "Strategy Development",
        desc: "Data-driven roadmap with keyword targeting and optimization priorities.",
      },
      {
        title: "Implementation",
        desc: "Technical fixes, on-page optimization, and content enhancements.",
      },
      {
        title: "Authority Building",
        desc: "Ethical link-building and brand authority development.",
      },
      {
        title: "Monitoring & Refinement",
        desc: "Continuous performance tracking and strategy adjustments.",
      },
    ],

    // Portfolio Section
    portfolio: [
      {
        title: "E-commerce Traffic Growth",
        category: "Technical SEO",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Local Business Visibility",
        category: "Local SEO",
        image:
          "https://images.unsplash.com/photo-1571757767119-68b8db8d72fd?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Enterprise Content Strategy",
        category: "Content SEO",
        image:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "smm",
    title: "SOCIAL MEDIA MANAGEMENT",
    icon: Camera,
    shortDesc: "Cinematic commercials for global brands.",
    fullDesc:
      "We handle end-to-end commercial production, delivering broadcast-quality video content. Our team manages everything from pre-production logistics to on-set direction and post-production editing, ensuring your brand story is told with cinematic excellence.",
    heroImage: "/marketing/smm/Banner.png", // Social media related image
    galleryImages: [
      "/marketing/smm/01.png",
      "/marketing/smm/02.png",
      "/marketing/smm/03.png",
    ],
    features: [
      "TV Commercials",
      "Brand Films",
      "Documentaries",
      "Music Videos",
      "Color Grading",
    ],
    detailedFeatures: [
      {
        title: "Cinematic Storytelling",
        desc: "We combine visual artistry with narrative depth to create commercials that resonate emotionally.",
      },
      {
        title: "High-End Production",
        desc: "Utilizing industry-standard cinema cameras, lighting, and crews to deliver broadcast-quality visuals.",
      },
      {
        title: "Post-Production Excellence",
        desc: "Advanced editing, color grading, and sound design to polish your masterpiece.",
      },
    ],
    faq: [
      {
        question: "Do you handle casting and location scouting?",
        answer:
          "Yes, our pre-production services include full casting management and location scouting/permitting.",
      },
      {
        question: "What is the typical timeline for a commercial?",
        answer:
          "A standard commercial production takes 6-8 weeks from concept to final delivery, though timelines vary by scale.",
      },
      {
        question: "Do you have your own equipment?",
        answer:
          "We own a significant amount of cinema gear and have partnerships with rental houses for specialized requirements.",
      },
    ],
    process: [
      {
        title: "Pre-production",
        desc: "Scripting, casting, and location scouting.",
      },
      { title: "Production", desc: "On-set filming with professional crew." },
      { title: "Post-production", desc: "Editing, VFX, and sound design." },
      { title: "Delivery", desc: "Final mastering for broadcast and web." },
    ],
    portfolio: [
      {
        title: "Nike Run",
        category: "TVC",
        image: "https://picsum.photos/id/900/800/600",
      },
      {
        title: "Corporate Vision",
        category: "Brand Film",
        image: "https://picsum.photos/id/950/800/600",
      },
      {
        title: "Music Video",
        category: "Entertainment",
        image: "https://picsum.photos/id/980/800/600",
      },
    ],
  },
  {
    id: "content",
    title: "CONTENT MARKETING",
    heroTitle: "CONTENT MARKETING",
    icon: Monitor, // You may want to change this to a more appropriate icon
    shortDesc:
      "Content marketing isn't just about creating posts, it's about creating momentum. We build content systems that attract attention, nurture trust, and establish your brand as an authority in your space.",
    fullDesc:
      "From strategy to execution, we deliver content that is purposeful, persuasive, and built to perform.",
    heroImage: "/marketing/content-marketing/Banner1.png", // Content marketing related image

    // Gallery Images (for "SOME OF OUR WORK" section)
    galleryImages: [
      "/marketing/content-marketing/01.png",
      "/marketing/content-marketing/02.png",
    ],

    // Gallery Heading
    galleryHeading: "Some of Our Work",

    // Gallery Description
    galleryDesc:
      "Explore a selection of content campaigns and creative assets we've developed for brands across industries.",

    // Basic Features List
    features: [
      "Content Strategy",
      "Copywriting",
      "Visual Storytelling",
      "Platform Optimization",
      "Performance Tracking",
    ],

    // Subhead Section
    subheadSection: {
      title: "Elevate Your Brand with Strategic Content Marketing",
      description:
        "Content marketing is how brands stay relevant. We help you build a long-term strategy that strengthens your voice, fuels engagement, and attracts high-quality customers. Our approach blends storytelling, analytics, and platform expertise to create content that drives measurable business growth.",
    },

    // Headline Section
    headlineSection: {
      title: "Content That Connects, Converts, and Compounds.",
      description:
        "Every piece of content we create serves a purpose—whether it's building awareness, nurturing leads, or closing customers. We build content ecosystems that work together to grow your brand over time.",
    },

    // Key Features (Content Marketing Pillars)
    keyFeatures: [
      {
        title: "Compelling Copywriting",
        desc: "We write with purpose, each line crafted to engage, persuade, and move your audience to action. From landing pages to blogs, email sequences to captions, our copy is strategic and impactful.",
      },
      {
        title: "Visual Storytelling",
        desc: "Great content doesn't just speak, it connects. We create scroll-stopping visuals that carry your message with clarity and emotion while reinforcing your brand identity.",
      },
      {
        title: "Platform-Optimized Content",
        desc: "Your content should perform wherever it appears. We tailor formats, tone, and structure for Instagram, LinkedIn, YouTube, blogs, websites, and more to maximize reach and engagement.",
      },
    ],

    // Detailed Features (more detailed version of pillars)
    detailedFeatures: [
      {
        title: "Compelling Copywriting",
        desc: "We write with purpose, each line crafted to engage, persuade, and move your audience to action. From landing pages to blogs, email sequences to captions, our copy is strategic and impactful.",
      },
      {
        title: "Visual Storytelling",
        desc: "Great content doesn't just speak, it connects. We create scroll-stopping visuals that carry your message with clarity and emotion while reinforcing your brand identity.",
      },
      {
        title: "Platform-Optimized Content",
        desc: "Your content should perform wherever it appears. We tailor formats, tone, and structure for Instagram, LinkedIn, YouTube, blogs, websites, and more to maximize reach and engagement.",
      },
    ],

    // FAQ Section
    faq: [
      {
        question: "What types of content do you create for content marketing?",
        answer:
          "We create blogs, newsletters, website copy, social media content, video scripts, case studies, whitepapers, captions, and more fully aligned with your marketing goals.",
      },
      {
        question:
          "Can you create content that suits my brand's tone and style?",
        answer:
          "Yes, before starting, we define your brand voice, messaging guidelines, and audience profile to ensure every piece of content feels consistent and intentional.",
      },
      {
        question: "How do you plan the content you produce?",
        answer:
          "We begin with a monthly strategy, followed by a content calendar detailing topics, formats, keywords, and distribution channels.",
      },
      {
        question: "Do you offer SEO-optimized content writing?",
        answer:
          "Absolutely, our content includes strategic keywords, readability optimization, metadata suggestions, and internal linking recommendations.",
      },
      {
        question: "What kind of videos or visuals do you produce?",
        answer:
          "We create short-form content, storytelling videos, product highlights, reels, carousels, blog graphics, and brand-specific creatives.",
      },
      {
        question: "How often can you deliver content?",
        answer:
          "Depending on your package, you have weekly, bi-weekly, or monthly content cycles.",
      },
      {
        question: "Do you handle publishing and scheduling too?",
        answer:
          "Yes, we can fully manage your content calendar, posting schedule, and platform optimization.",
      },
      {
        question: "Do you create content for paid ads as well?",
        answer:
          "Yes, ad copy, creative direction, landing page content, and UGC-style scripts for performance campaigns.",
      },
      {
        question: "Can you help track content performance?",
        answer:
          "Yes, monthly reports include reach, engagement, CTR, SEO insights, and growth recommendations.",
      },
    ],

    // Process Section (content marketing workflow)
    process: [
      {
        title: "Discovery",
        desc: "Understanding your brand voice, audience, and content goals.",
      },
      {
        title: "Strategy",
        desc: "Developing content pillars, themes, and distribution plan.",
      },
      {
        title: "Creation",
        desc: "Crafting compelling copy and visuals aligned with your strategy.",
      },
      {
        title: "Optimization",
        desc: "Tailoring content for each platform and SEO requirements.",
      },
      {
        title: "Distribution",
        desc: "Scheduling, publishing, and promoting across channels.",
      },
      {
        title: "Analysis",
        desc: "Tracking performance and refining strategy based on insights.",
      },
    ],

    // Portfolio Section
    portfolio: [
      {
        title: "SaaS Blog Strategy",
        category: "Content Marketing",
        image:
          "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "E-commerce Newsletter",
        category: "Email Content",
        image:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Brand Storytelling Campaign",
        category: "Video Content",
        image:
          "https://images.unsplash.com/photo-1555421689-91613bc51e8c?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "performance",
    title: "PERFORMANCE MARKETING",
    heroTitle: "PERFORMANCE MARKETING",
    icon: Monitor, // You may want to change this to a more appropriate icon
    shortDesc:
      "Data-driven campaigns engineered to deliver measurable ROI, consistent growth, and real results.",
    fullDesc:
      "Our expertise lies in building high-performance digital advertising systems that convert across Google, Meta, TikTok, and every platform your audience lives on. We blend creative strategy with analytical precision to deliver campaigns that scale profitably, outperform competitors, and maximize your marketing budget.",
    heroImage: "/marketing/performance/banner.png", // Performance marketing/analytics related image

    // Gallery Images (for "SOME OF OUR WORK" section)
    galleryImages: [
      "/marketing/performance/performance1.png",
      "/marketing/performance/performance2.png",
    ],

    // Gallery Heading
    galleryHeading: "Some of Our Work",

    // Gallery Description
    galleryDesc:
      "Explore performance campaigns that delivered exceptional ROI and scalable growth for our clients.",

    // Basic Features List
    features: [
      "Google Ads",
      "Meta Ads (Facebook/Instagram)",
      "TikTok Ads",
      "LinkedIn Ads",
      "YouTube Campaigns",
      "Retargeting Funnels",
      "Media Buying",
      "Conversion Optimization",
    ],

    // Subhead Section
    subheadSection: {
      title: "Transforming Budgets Into Measurable Growth",
      description:
        "From awareness to acquisition, we design performance marketing frameworks that deliver exceptional results. Our approach is grounded in analytics, strategy, and continuous optimization, ensuring every rupee invested works harder for your business. Whether you're launching a product or scaling an established brand, our performance marketing systems turn attention into action and action into revenue.",
    },

    // Headline Section
    headlineSection: {
      title: "Data-Backed Creativity. Predictable Growth.",
      description:
        "We don't just run ads—we build revenue engines. Every campaign is rooted in data, optimized in real-time, and designed to deliver the highest possible return on your advertising spend.",
    },

    // Key Features (Performance Marketing Pillars)
    keyFeatures: [
      {
        title: "Full-Platform Coverage",
        desc: "We manage campaigns across Google, Meta, TikTok, LinkedIn, and YouTube—wherever your audience spends time.",
      },
      {
        title: "Creative That Converts",
        desc: "High-performing static ads, videos, motion graphics, and UGC-style creatives designed specifically for each platform.",
      },
      {
        title: "Data-Driven Optimization",
        desc: "Continuous A/B testing, audience refinement, budget reallocation, and creative refreshes to maximize ROAS.",
      },
    ],

    // Detailed Features (more detailed version)
    detailedFeatures: [
      {
        title: "Full-Platform Campaign Management",
        desc: "We manage Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads, YouTube campaigns, retargeting funnels, and complete media buying strategies designed to maximize ROI.",
      },
      {
        title: "High-Converting Creative Production",
        desc: "We create high-converting static ads, videos, motion graphics, and UGC-style creatives designed for maximum performance across every platform.",
      },
      {
        title: "Full-Funnel Setup & Optimization",
        desc: "Complete funnel architecture including landing pages, retargeting systems, automation flows, and conversion optimization to drive results at every stage.",
      },
    ],

    // FAQ Section
    faq: [
      {
        question: "What kind of performance marketing services do you offer?",
        answer:
          "We manage Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads, YouTube campaigns, retargeting funnels, and complete media buying strategies designed to maximize ROI.",
      },
      {
        question: "How soon can I expect results?",
        answer:
          "Initial improvements typically appear within 2–4 weeks. Strong, consistent scaling happens between 6–12 weeks, depending on budgets and goals.",
      },
      {
        question: "Do you handle ad creatives as well?",
        answer:
          "Yes, we create high-converting static ads, videos, motion graphics, and UGC-style creatives designed for maximum performance.",
      },
      {
        question: "Can you run ads for e-commerce businesses?",
        answer:
          "Absolutely. We specialize in running high-ROAS campaigns for Shopify, WooCommerce, and custom e-commerce systems.",
      },
      {
        question: "Do you provide monthly reports?",
        answer:
          "Yes, we provide detailed performance dashboards, insights, and monthly strategy calls to discuss improvements and next steps.",
      },
      {
        question: "How do you optimize campaigns?",
        answer:
          "We use analytics, A/B testing, budget reallocation, audience refinement, and creative refreshes to consistently improve performance.",
      },
      {
        question: "Can you manage large budgets?",
        answer:
          "Yes, our systems are built to scale from small test budgets to high-volume media buying for fast-growing brands.",
      },
      {
        question: "Do you offer full-funnel setup?",
        answer:
          "Yes, landing pages, retargeting systems, automation flows, and conversion optimization are included.",
      },
    ],

    // Process Section (performance marketing workflow)
    process: [
      {
        title: "Discovery",
        desc: "Understanding your goals, audience, and current performance.",
      },
      {
        title: "Strategy",
        desc: "Developing platform mix, budget allocation, and creative approach.",
      },
      {
        title: "Creative Production",
        desc: "Creating high-converting ads and assets for each platform.",
      },
      {
        title: "Campaign Launch",
        desc: "Setting up tracking, audiences, and launching campaigns.",
      },
      {
        title: "Optimization",
        desc: "Continuous A/B testing, refinement, and scaling.",
      },
      {
        title: "Reporting",
        desc: "Monthly performance dashboards and strategy reviews.",
      },
    ],

    // Portfolio Section
    portfolio: [
      {
        title: "E-commerce ROAS Growth",
        category: "Meta & Google Ads",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "SaaS Lead Generation",
        category: "LinkedIn & YouTube",
        image:
          "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "D2C Brand Scaling",
        category: "TikTok & Instagram",
        image:
          "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "videography",
    title: "VIDEOGRAPHY / COMMERCIAL PRODUCTION",
    heroTitle: "COMMERCIAL PRODUCTION",
    icon: Monitor, // You may want to change this to a more appropriate icon like Video
    shortDesc:
      "Crafting powerful visuals that transform your brand message into cinematic experiences.",
    fullDesc:
      "From concept to final delivery, we produce world-class commercial content that resonates, captivates, and performs.",
    heroImage: "/marketing/video/01.png", // Video production related image

    // Gallery Images (for portfolio showcase)
    galleryImages: [
      "/marketing/video/01.png", // Camera setup
    ],

    // Gallery Videos (showreel or sample work)
    galleryVideos: ["/marketing/video/1.mp4"],

    // Pre-Production Images
    preProductionImages: [
      "/marketing/video/Pre-Production/01.png",
      "/marketing/video/Pre-Production/02.png",
      "/marketing/video/Pre-Production/03.png",
      "/marketing/video/Pre-Production/04.png",
    ],

    // Production Images
    productionImages: [
      "/marketing/video/Production/01.png",
      "/marketing/video/Production/02.png",
      "/marketing/video/Production/03.png",
      "/marketing/video/Production/04.png",
    ],

    // Post-Production Images
    postProductionImages: [
      "/marketing/video/Post-Production/01.png",
      "/marketing/video/Post-Production/02.png",
      "/marketing/video/Post-Production/03.png",
      "/marketing/video/Post-Production/04.png",
    ],

    // Gallery Heading
    galleryHeading: "Our Work",

    // Gallery Description
    galleryDesc:
      "Explore our portfolio of commercial productions, brand films, and cinematic storytelling.",

    // Basic Features List
    features: [
      "Pre-Production",
      "Cinematography",
      "Drone Videography",
      "Live Shooting",
      "Steadicam & Gimbal",
      "Multi-Camera Setup",
      "Time-lapse",
      "Studio Setup",
      "Post-Production",
      "Color Grading",
      "Sound Design",
      "3D Animation & VFX",
    ],

    // Subhead Section
    subheadSection: {
      title: "From Concept to Screen: Your Vision, Expertly Executed",
      description:
        "Every frame matters. We combine technical expertise with creative vision to produce commercial content that doesn't just look beautiful—it performs. Whether you need a brand film, product commercial, or social content, our end-to-end production capabilities ensure your message lands with impact.",
    },

    // Headline Section
    headlineSection: {
      title: "Cinematic Excellence. Commercial Results.",
      description:
        "We don't just make videos—we create visual assets that drive brand recall, engagement, and conversion. Every project is approached with the same dedication to quality, regardless of scale.",
    },

    // Key Features (Production Pillars)
    keyFeatures: [
      {
        title: "Pre-Production Excellence",
        desc: "Great videos begin with strong planning. From concept development to scriptwriting, storyboarding, location scouting, and talent management—we lay the perfect foundation.",
      },
      {
        title: "World-Class Production",
        desc: "Our cinematographers, drone pilots, and gimbal operators use premium 4K/6K cinema cameras and lighting to capture stunning visuals that elevate your brand.",
      },
      {
        title: "Masterful Post-Production",
        desc: "The magic happens in the edit. Our colorists, sound designers, and VFX artists transform footage into polished commercial masterpieces.",
      },
    ],

    // Detailed Features - PRE-PRODUCTION
    detailedFeatures: [
      {
        title: "Concept Development",
        desc: "We work closely with you to shape the creative direction. From mood boards to story beats, we craft the idea that anchors your film.",
      },
      {
        title: "Scriptwriting",
        desc: "Our writers develop compelling scripts built around your goals, whether it's a commercial, brand film, product story, or narrative piece.",
      },
      {
        title: "Storyboard Design",
        desc: "We visualize your film shot-by-shot, giving you a clear understanding of how scenes will unfold before production begins.",
      },
      {
        title: "Location Scouting",
        desc: "Finding the perfect location is everything. Our team secures the right environment to match your vision, tone, and aesthetics.",
      },
      {
        title: "Casting & Talent Management",
        desc: "Models, actors, voice artists—we handle casting, negotiation, and coordination to ensure the right talent brings your story to life.",
      },
      {
        title: "Equipment & Crew Planning",
        desc: "We assemble a professional crew tailored to your project—DOP, gaffer, assistants, sound team, stylists, and more.",
      },
      {
        title: "Production Timeline",
        desc: "A detailed timeline keeps your project efficient and stress-free, ensuring a smooth shoot from start to finish.",
      },
    ],

    // Additional Features Block - PRODUCTION
    additionalFeatures1: [
      {
        title: "Cinematography",
        desc: "Our cinematographers craft beautiful visuals through expert lighting, framing, and camera movement, delivering high-end commercial production quality.",
      },
      {
        title: "Drone Videography",
        desc: "Aerial footage that adds scale, drama, and elegance to your film. Ideal for real estate, lifestyle, hospitality, automotive, and outdoor shots.",
      },
      {
        title: "Live Shooting",
        desc: "Behind-the-scenes coverage, events, interviews, process videos, and product walkthroughs, captured with precision and style.",
      },
      {
        title: "Steadicam & Gimbal Work",
        desc: "Smooth, professional, dynamic shots perfect for modern commercial videos that require fluid camera movement.",
      },
      {
        title: "Multi-Camera Setup",
        desc: "For interviews, performances, events, and productions requiring multiple angles and perfect timing.",
      },
      {
        title: "Time-lapse & Motion Shots",
        desc: "We capture stunning timelapses, hyperlapses, and motion-driven visuals to elevate your storytelling.",
      },
      {
        title: "Studio & In-House Setup",
        desc: "We offer complete studio lighting, backgrounds, and product setups tailored for lifestyle and commercial shoots.",
      },
      {
        title: "Premium Filmmaking Gear",
        desc: "4K/6K cinema cameras, stabilizers, lighting rigs, sound equipment—everything needed to produce exceptional results.",
      },
    ],

    // Additional Features Block - POST-PRODUCTION
    additionalFeatures2: [
      {
        title: "Video Editing",
        desc: "Rhythm, pacing, storytelling, transitions—our editors craft a captivating final cut that aligns with your brand's tone and project goals.",
      },
      {
        title: "Color Grading",
        desc: "We enhance your visuals with cinematic color tones, balancing exposure, contrast, and mood to achieve the perfect aesthetic.",
      },
      {
        title: "Sound Design",
        desc: "Professional sound cleanup, ambient design, foley, and audio mixing to create a rich auditory experience.",
      },
      {
        title: "3D Animation & VFX",
        desc: "From subtle enhancements to full CGI scenes, our team integrates advanced visual effects to elevate your film's impact.",
      },
      {
        title: "Subtitles & On-Screen Graphics",
        desc: "Stylish titles, lower thirds, kinetic typography, and brand-centric on-screen elements that enhance engagement.",
      },
      {
        title: "Rendering & Final Output",
        desc: "Your video is delivered in the highest quality, ready for social media, websites, ads, events, or broadcast.",
      },
    ],

    // FAQ Section - "Curious? Check Out the Scoop!"
    faq: [
      {
        question: "What's the process for creating a commercial video?",
        answer:
          "We follow a structured approach: pre-production (planning, scripting, storyboarding), production (shooting), and post-production (editing, color grading, sound design)—to ensure clarity and quality at every stage.",
      },
      {
        question: "How long does a typical production take?",
        answer:
          "Smaller projects take 1–2 weeks; larger commercial productions may require 3–6 weeks depending on complexity, shooting days, and post-production requirements.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "We offer multiple revisions based on your package, ensuring you get a result you love. Our goal is your complete satisfaction with the final product.",
      },
      {
        question: "Can you work with my existing script or concept?",
        answer:
          "Absolutely, we can develop your idea further or execute exactly as planned. We're flexible and collaborative throughout the process.",
      },
      {
        question: "Do you provide video marketing support?",
        answer:
          "Yes, we guide you on placements, formats, and creative best practices for better ad performance across platforms like Instagram, YouTube, TikTok, and more.",
      },
      {
        question: "Can you work with a specific budget?",
        answer:
          "Yes, we offer flexible solutions depending on your vision and requirements. We'll work with you to maximize impact within your budget constraints.",
      },
      {
        question: "What equipment do you use?",
        answer:
          "We use premium filmmaking gear including 4K/6K cinema cameras, stabilizers, lighting rigs, professional sound equipment, and drones for aerial shots.",
      },
      {
        question: "Do you handle music licensing?",
        answer:
          "Yes, we can source and license royalty-free or original music that perfectly complements your video's tone and message.",
      },
    ],

    // Process Section (simplified 3-stage process)
    process: [
      {
        title: "Pre-Production",
        desc: "Concept development, scriptwriting, storyboarding, location scouting, casting, and crew planning.",
      },
      {
        title: "Production",
        desc: "Cinematography, drone videography, live shooting, multi-camera setup, and studio work.",
      },
      {
        title: "Post-Production",
        desc: "Video editing, color grading, sound design, VFX, graphics, and final delivery.",
      },
    ],

    // Portfolio Section
    portfolio: [
      {
        title: "Luxury Brand Commercial",
        category: "Cinematography",
        image:
          "https://images.unsplash.com/photo-1574717024453-354056afc3d8?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Real Estate Drone Showcase",
        category: "Aerial Videography",
        image:
          "https://images.unsplash.com/photo-1587613754562-6e5a4c3d6f3b?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Product Launch Film",
        category: "Commercial Production",
        image:
          "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "influencer",
    title: "INFLUENCER MARKETING",
    heroTitle: "INFLUENCER MARKETING",
    icon: Monitor,
    shortDesc:
      "Authentic partnerships that transform brands into cultural conversations.",
    fullDesc:
      "We connect your brand with influencers, creators, and digital voices who genuinely resonate with your audience, delivering real engagement, real awareness, and real results. Across beauty, fashion, tech, lifestyle, F&B, travel, wellness, and more, our influencer marketing strategies ensure your brand becomes part of the story people love to share.",
    heroImage: "/marketing/influencer/Banner.png", // Influencer/social media related image

    // Gallery Images (for "SOME OF OUR WORK" section)
    galleryImages: [
      "/marketing/influencer/01.png",
      "/marketing/influencer/02.png",
    ],

    // Gallery Heading
    galleryHeading: "Some of Our Work",

    // Gallery Description
    galleryDesc:
      "Explore authentic influencer campaigns that sparked conversations and drove real engagement for our clients.",

    // Basic Features List
    features: [
      "Instagram Campaigns",
      "YouTube Partnerships",
      "TikTok Creator Collaborations",
      "Facebook Influencer Marketing",
      "Snapchat Campaigns",
      "Blog & Niche Platform Partnerships",
      "UGC-Style Campaigns",
      "Product Seeding",
    ],

    // Subhead Section
    subheadSection: {
      title: "Turning Influence Into Impact",
      description:
        "Influencers are no longer just content creators, they are cultural drivers. We blend strategy, creativity, and data to build influencer collaborations that feel natural, credible, and impossible to ignore. From creator selection and negotiation to campaign execution and performance tracking—we handle every detail, ensuring your brand message travels far, wide, and authentically.",
    },

    // Headline Section
    headlineSection: {
      title: "Real Voices. Real Reach. Real Results.",
      description:
        "In a world of ads, authentic voices cut through. We partner with creators who genuinely connect with their audiences, ensuring your brand message lands with credibility and impact.",
    },

    // Key Features (Influencer Marketing Pillars)
    keyFeatures: [
      {
        title: "Strategic Creator Selection",
        desc: "We filter by audience quality, engagement rate, niche relevance, brand tone, and past performance to find the perfect voices for your brand.",
      },
      {
        title: "Authentic Storytelling",
        desc: "Creators receive brand guidelines but maintain creative freedom for authentic storytelling that resonates with their audience.",
      },
      {
        title: "End-to-End Campaign Management",
        desc: "From negotiation and product seeding to performance tracking—we handle every detail of your influencer campaigns.",
      },
    ],

    // Detailed Features
    detailedFeatures: [
      {
        title: "Strategic Creator Selection",
        desc: "We filter by audience quality, engagement rate, niche relevance, brand tone, and past performance to find the perfect voices for your brand.",
      },
      {
        title: "Authentic Storytelling",
        desc: "Creators receive brand guidelines but maintain creative freedom for authentic storytelling that resonates with their audience.",
      },
      {
        title: "End-to-End Campaign Management",
        desc: "From negotiation and product seeding to performance tracking—we handle every detail of your influencer campaigns.",
      },
      {
        title: "Multi-Platform Expertise",
        desc: "We manage campaigns across Instagram, YouTube, TikTok, Facebook, Snapchat, blogs, and niche content platforms.",
      },
      {
        title: "Micro-Influencer Partnerships",
        desc: "We work with micro creators who often deliver the highest engagement rates and genuine audience trust.",
      },
      {
        title: "UGC-Style Campaigns",
        desc: "Creators produce authentic content that can be reused for ads, websites, and social media channels.",
      },
    ],

    // FAQ Section
    faq: [
      {
        question: "What platforms do you manage influencer campaigns on?",
        answer:
          "Instagram, YouTube, TikTok, Facebook, Snapchat, blogs, and niche content platforms.",
      },
      {
        question: "How do you choose influencers for a brand?",
        answer:
          "We filter by audience quality, engagement rate, niche relevance, brand tone, and past performance.",
      },
      {
        question: "Are the influencers required to follow a script?",
        answer:
          "No, creators receive brand guidelines, but maintain creative freedom for authentic storytelling.",
      },
      {
        question: "Do you handle product seeding?",
        answer: "Yes, complete logistics, coordination, and tracking.",
      },
      {
        question: "How do you prevent fake followers?",
        answer:
          "Every influencer is vetted via analytics tools, engagement audits, and historical performance.",
      },
      {
        question: "Can you run UGC-style campaigns?",
        answer:
          "Yes, creators produce content that can be reused for ads, websites, and social media.",
      },
      {
        question: "How do you measure campaign success?",
        answer:
          "We track reach, views, engagement, conversions, traffic, and brand sentiment.",
      },
      {
        question: "Do you work with micro influencers as well?",
        answer:
          "Absolutely, micro creators often deliver the highest engagement and trust.",
      },
    ],

    // Process Section (influencer marketing workflow)
    process: [
      {
        title: "Discovery",
        desc: "Understanding your brand goals, target audience, and campaign objectives.",
      },
      {
        title: "Creator Selection",
        desc: "Identifying and vetting influencers that align with your brand values.",
      },
      {
        title: "Strategy & Guidelines",
        desc: "Developing campaign briefs and creative direction for creators.",
      },
      {
        title: "Campaign Execution",
        desc: "Managing content creation, approvals, and publishing schedules.",
      },
      {
        title: "Performance Tracking",
        desc: "Monitoring reach, engagement, conversions, and brand sentiment.",
      },
      {
        title: "Optimization & Reporting",
        desc: "Analyzing results and providing insights for future campaigns.",
      },
    ],

    // Portfolio Section
    portfolio: [
      {
        title: "Beauty Brand Launch",
        category: "Instagram & YouTube",
        image:
          "https://images.unsplash.com/photo-1611162616305-cf11d3bfde4d?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Fashion Collection Campaign",
        category: "TikTok & Instagram",
        image:
          "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Lifestyle Product Seeding",
        category: "Micro-Influencer Campaign",
        image:
          "https://images.unsplash.com/photo-1611162616478-3f6a5c9b8e4d?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "email",
    title: "EMAIL MARKETING",
    heroTitle: "EMAIL MARKETING",
    icon: Monitor,
    shortDesc:
      "Our expertise lies in crafting high-performing email campaigns that nurture relationships, drive conversions, and strengthen your brand's presence.",
    fullDesc:
      "We design email journeys that blend persuasive copy, strategic automation, and stunning visuals, ensuring your business stays connected with your audience at every step.",
    heroImage: "/marketing/email/Banner.png", // Email marketing related image

    // Gallery Images (for "SOME OF OUR WORK" section)
    galleryImages: [
      "/marketing/email/01.png",
      "/marketing/email/02.png",
      "/marketing/email/03.png",
    ],

    // Gallery Heading
    galleryHeading: "Some of Our Work",

    // Gallery Description
    galleryDesc:
      "Explore email campaigns that drive engagement, nurture relationships, and deliver measurable results.",

    // Basic Features List
    features: [
      "Welcome Flows",
      "Newsletters",
      "Promotional Emails",
      "Abandoned Cart Emails",
      "Nurture Sequences",
      "Retention Campaigns",
      "Automated Journeys",
      "CRM Integration",
    ],

    // Subhead Section
    subheadSection: {
      title: "Your Communication, Perfected",
      description:
        "We build email campaigns that not only look beautiful but deliver measurable results. From onboarding flows to promotional campaigns, newsletters to re-engagement sequences, every email is optimized for impact and revenue.",
    },

    // Headline Section
    headlineSection: {
      title: "Inboxes Become Revenue Streams.",
      description:
        "Email isn't just communication—it's your most direct line to customers. We craft messages that get opened, read, and acted upon, turning subscribers into loyal advocates.",
    },

    // Key Features (Email Marketing Pillars)
    keyFeatures: [
      {
        title: "Custom Email Strategy",
        desc: "We plan tailored strategies based on your audience behavior, brand tone, and business objective, ensuring every send has purpose.",
      },
      {
        title: "Design & Automation",
        desc: "Responsive email templates, automated journeys, and CRM integrations that create seamless communication at scale.",
      },
      {
        title: "Performance-Driven Optimization",
        desc: "A/B testing, segmentation, analytics, and ongoing refinement to maximize open rates, clicks, and conversions.",
      },
    ],

    // Detailed Features
    detailedFeatures: [
      {
        title: "Custom Email Strategy",
        desc: "We plan tailored strategies based on your audience behavior, brand tone, and business objective, ensuring every send has purpose.",
      },
      {
        title: "Design & Automation",
        desc: "Responsive email templates, automated journeys, and CRM integrations that create seamless communication at scale.",
      },
      {
        title: "Performance-Driven Optimization",
        desc: "A/B testing, segmentation, analytics, and ongoing refinement to maximize open rates, clicks, and conversions.",
      },
      {
        title: "Welcome & Onboarding Flows",
        desc: "Automated sequences that introduce new subscribers to your brand and guide them toward their first purchase.",
      },
      {
        title: "Newsletter Campaigns",
        desc: "Regular, engaging content that keeps your audience informed, entertained, and connected to your brand.",
      },
      {
        title: "Abandoned Cart Recovery",
        desc: "Strategic emails that bring customers back to complete their purchases with compelling incentives.",
      },
      {
        title: "Segmentation & Personalization",
        desc: "Targeted messaging based on behavior, purchase patterns, demographics, and engagement history.",
      },
      {
        title: "Analytics & Reporting",
        desc: "Detailed insights into open rates, click-through rates, conversions, and ROI to continuously improve performance.",
      },
    ],

    // FAQ Section
    faq: [
      {
        question: "What types of emails do you design?",
        answer:
          "We design welcome flows, newsletters, promotional emails, abandoned cart emails, nurture sequences, customer retention emails, and more.",
      },
      {
        question: "Can you create both copy and graphics for emails?",
        answer:
          "Yes, every email includes professionally written copy and tailored visual design to match your brand identity.",
      },
      {
        question: "Do you offer automated email sequences?",
        answer:
          "Absolutely. We build customer journeys such as onboarding flows, re-engagement sequences, upsell paths, and smart behavioral automations.",
      },
      {
        question:
          "How long does it take to set up a full email marketing system?",
        answer:
          "Typically 1–4 weeks, depending on the number of campaigns, automations, and integrations required.",
      },
      {
        question: "Can you help improve our open and click-through rates?",
        answer:
          "Yes, we use data-driven insights, segmentation, and optimization techniques to increase engagement across all email types.",
      },
      {
        question: "Do you handle list management and segmentation?",
        answer:
          "Yes, we organize your list based on behavior, purchase patterns, demographics, and engagement to ensure targeted messaging.",
      },
      {
        question: "Can you integrate email marketing with our website or CRM?",
        answer:
          "Yes, we manage all integrations, including pop-ups, forms, API connections, and synced customer data.",
      },
      {
        question: "Will you write copy for every email?",
        answer:
          "Yes, all emails come with professionally crafted copy designed to convert.",
      },
      {
        question: "Do you provide monthly email marketing support?",
        answer:
          "Yes, monthly retainers include strategy, creation, scheduling, design, automation, and performance reporting.",
      },
    ],

    // Process Section (email marketing workflow)
    process: [
      {
        title: "Discovery",
        desc: "Understanding your audience, goals, and current email performance.",
      },
      {
        title: "Strategy",
        desc: "Developing email types, frequency, and automation flows.",
      },
      {
        title: "Copywriting",
        desc: "Crafting compelling, on-brand copy that drives action.",
      },
      {
        title: "Design",
        desc: "Creating responsive, visually stunning email templates.",
      },
      {
        title: "Automation Setup",
        desc: "Building sequences, integrations, and behavioral triggers.",
      },
      {
        title: "Optimization",
        desc: "A/B testing, segmentation refinement, and performance reporting.",
      },
    ],

    // Portfolio Section
    portfolio: [
      {
        title: "E-commerce Welcome Flow",
        category: "Automation",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "SaaS Newsletter Campaign",
        category: "Content Marketing",
        image:
          "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Retail Abandoned Cart Series",
        category: "Recovery Campaign",
        image:
          "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "whatsapp",
    title: "WHATSAPP MARKETING",
    heroTitle: "WHATSAPP MARKETING",
    icon: Monitor,
    shortDesc:
      "Our expertise lies in creating powerful, real-time communication strategies using WhatsApp to drive instant engagement and higher conversions.",
    fullDesc:
      "We build automated workflows, targeted broadcasts, and conversational experiences that help your brand connect with customers directly, fast, personal, and effective.",
    heroImage: "/marketing/whatsapp/Banner.png", // WhatsApp/messaging related image

    // Gallery Images (for "SOME OF OUR WORK" section)
    galleryImages: [
      "/marketing/whatsapp/01.png",
      "/marketing/whatsapp/02.png",
      "/marketing/whatsapp/03.png",
      "/marketing/whatsapp/04.png",
    ],

    // Gallery Heading
    galleryHeading: "Some of Our Work",

    // Gallery Description
    galleryDesc:
      "Explore WhatsApp campaigns that drive real-time engagement and deliver instant results.",

    // Basic Features List
    features: [
      "Promotional Broadcasts",
      "Abandoned Cart Reminders",
      "Event Notifications",
      "Customer Support Flows",
      "Automated Nurture Sequences",
      "Order Updates",
      "Product Showcases",
      "COD Confirmations",
    ],

    // Subhead Section
    subheadSection: {
      title: "Your Direct Line to Higher Engagement",
      description:
        "WhatsApp is where conversations happen, and where buying decisions are made. We design intelligent messaging journeys, personalized broadcasts, and seamless support automations that keep your customers informed, engaged, and ready to act.",
    },

    // Headline Section
    headlineSection: {
      title: "Real-Time Conversations. Real Business Impact.",
      description:
        "With 98% open rates, WhatsApp is the most direct way to reach your customers. We help you leverage this powerful channel for marketing, support, and sales—all in one place.",
    },

    // Key Features (WhatsApp Marketing Pillars)
    keyFeatures: [
      {
        title: "AI-Driven Automation",
        desc: "We create automated message sequences and smart chatbot flows that respond instantly, guide users through the buying journey, and reduce manual workload.",
      },
      {
        title: "High-Converting Campaigns",
        desc: "From promotions to product launches, we craft WhatsApp messages designed to capture attention and encourage immediate action.",
      },
      {
        title: "End-to-End Setup & Optimization",
        desc: "We manage everything, from API setup, integration, template creation, segmentation, analytics, and performance refinement for smooth and impactful communication.",
      },
    ],

    // Detailed Features
    detailedFeatures: [
      {
        title: "AI-Driven Automation",
        desc: "We create automated message sequences and smart chatbot flows that respond instantly, guide users through the buying journey, and reduce manual workload.",
      },
      {
        title: "High-Converting Campaigns",
        desc: "From promotions to product launches, we craft WhatsApp messages designed to capture attention and encourage immediate action.",
      },
      {
        title: "End-to-End Setup & Optimization",
        desc: "We manage everything, from API setup, integration, template creation, segmentation, analytics, and performance refinement for smooth and impactful communication.",
      },
      {
        title: "E-Commerce Integration",
        desc: "Cart recovery, order updates, product showcases, COD confirmation, and re-engagement offers all through WhatsApp.",
      },
      {
        title: "Customer Support Automation",
        desc: "Chat flows that answer common questions, share product details, and route complex queries to your team instantly.",
      },
      {
        title: "Broadcast Campaigns",
        desc: "Targeted promotional messages, event notifications, and nurture sequences that reach customers where they're most active.",
      },
    ],

    // FAQ Section
    faq: [
      {
        question: "What types of WhatsApp campaigns do you create?",
        answer:
          "We handle promotions, broadcasts, abandoned cart reminders, event notifications, customer support flows, and automated nurture sequences.",
      },
      {
        question: "Do you work with WhatsApp Business API?",
        answer:
          "Yes, we use the WhatsApp Business API to enable automation, templates, analytics, and scalable communication.",
      },
      {
        question: "Can WhatsApp be used for e-commerce brands?",
        answer:
          "Absolutely. It is ideal for cart recovery, order updates, product showcases, COD confirmation, and re-engagement offers.",
      },
      {
        question: "Do you offer automated customer service?",
        answer:
          "Yes, our chat flows answer common questions, share product details, and route complex queries to your team instantly.",
      },
      {
        question: "Will you write copy for the WhatsApp campaigns?",
        answer:
          "Yes, every message is professionally written to align with your brand voice and maximize conversions.",
      },
      {
        question: "How long does setup take?",
        answer:
          "Typically, 3–10 days, depending on API approval and integration requirements.",
      },
    ],

    // Process Section (WhatsApp marketing workflow)
    process: [
      {
        title: "Discovery",
        desc: "Understanding your goals, audience, and communication needs.",
      },
      {
        title: "API Setup",
        desc: "WhatsApp Business API integration and approval management.",
      },
      {
        title: "Strategy",
        desc: "Developing campaign types, message templates, and automation flows.",
      },
      {
        title: "Copywriting",
        desc: "Crafting concise, impactful messages that drive action.",
      },
      {
        title: "Automation Build",
        desc: "Creating chatbots, sequences, and integration with your systems.",
      },
      {
        title: "Optimization",
        desc: "Analytics tracking, A/B testing, and continuous refinement.",
      },
    ],

    // Portfolio Section
    portfolio: [
      {
        title: "E-Commerce Cart Recovery",
        category: "Automation",
        image:
          "https://images.unsplash.com/photo-1611162616478-3f6a5c9b8e4d?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Product Launch Broadcast",
        category: "Campaign",
        image:
          "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Customer Support Chatbot",
        category: "AI Automation",
        image:
          "https://images.unsplash.com/photo-1611162617261-4b8b7a5e8c9d?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
];
