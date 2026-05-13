import { Monitor, PenTool, Box, Video, Camera } from 'lucide-react';

export interface InfrastructureData {
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
  subheadSection?: {  // Add this new property
    title: string;
    description: string;
  };
  keyFeatures?: { title: string; desc: string }[];
  faq?: { question: string; answer: string }[];
  process?: { title: string; desc: string }[];
  portfolio: { title: string; category: string; image: string }[];
}

export const infrastructureData: InfrastructureData[] = [
  {
    id: 'email-service',
    title: 'EMAIL SERVICE PROVIDER',
    heroTitle: 'EMAIL SERVICE PROVIDER',
    icon: Monitor,
    shortDesc: 'We set up, integrate, and manage email service providers that ensure your business sends emails securely, delivers messages without landing in spam, and maintains a professional identity across all departments.',
    fullDesc: 'From domain authentication to inbox management, we build a powerful email ecosystem that supports smooth business communication.',
    subheadSection: {
      title: "Your Business Needs Emails That Always Reach the Inbox.",
      description: "Emails are the foundation of reliability in any organisation, from customer communication to internal workflows. But poorly configured email systems lead to delivery failures, security risks, and unprofessional branding. We help businesses set up secure and scalable email infrastructures with trusted ESPs like Google Workspace, Microsoft 365, Zoho Mail, and custom SMTP servers. Your email system will be fast, authenticated, protected, and fully integrated with your workflows."
    },
    // Using a placeholder that resembles a dark group of devices
    heroImage: '/infrastructure/email/Banner.png', 
    galleryImages: [
      "/infrastructure/email/01.png",
      "/infrastructure/email/02.png",
      "/infrastructure/email/03.png",
    ],
    features: ['Custom Frontend Architecture', 'Headless CMS Integration', 'E-commerce Solutions', 'WebGL & 3D Interactions', 'Progressive Web Apps'],
    detailedFeatures: [
      {
        title: "Business Email Setup",
        desc: "Professional email IDs (name@yourcompany.com) are configured using secure, enterprise-grade service providers."
      },
      {
        title: "Domain Authentication",
        desc: "Improved email deliverability and enhanced protection against spam & phishing."
      },
      {
        title: "Admin Configuration & User Management",
        desc: "Organised mailbox creation, storage management, roles, passwords, and multi-device access."
      }
    ],
    faq: [
      {
        question: "Which email service providers do you support?",
        answer: "We set up Google Workspace, Microsoft 365, Zoho Mail, ProtonMail, and custom SMTP servers."
      },
      {
        question: "Do you help with company-wide email migration?",
        answer: "Yes, we migrate emails, contacts, and data without downtime."
      },
      {
        question: "Can you configure SPF, DKIM, and DMARC?",
        answer: "Absolutely, proper authentication is part of every setup we deliver."
      },
      {
        question: "Do you provide admin panel setup?",
        answer: "Yes, user creation, group management, storage allocation, and security settings."
      },
      {
        question: "Can emails be synced across multiple devices?",
        answer: "Yes, your emails will sync seamlessly across laptops, desktops, mobiles, and tablets."
      },
      {
        question: "Is the system secure?",
        answer: "Yes, every setup includes encryption, spam protection, admin controls, and login security."
      },
      {
        question: "Do you train my team to use the new email system?",
        answer: "Yes, complete training and documentation are provided."
      },
      {
        question: "Can you integrate emails with CRM or ERP?",
        answer: "Yes, sales, support, and automation tools can be fully connected."
      },
    ],
    portfolio: [
      { title: 'Fintech Dashboard', category: 'Web App', image: 'https://picsum.photos/id/119/800/600' },
      { title: 'Luxury Fashion', category: 'E-commerce', image: 'https://picsum.photos/id/160/800/600' },
      { title: 'Architectural Firm', category: 'Portfolio', image: 'https://picsum.photos/id/201/800/600' }
    ]
  },
  {
    id: 'cloud-hosting',
    title: 'CLOUD HOSTING',
    heroTitle: 'CLOUD HOSTING',
    icon: Monitor,
    shortDesc: 'We are an authorized, certified reseller of IBM and Hostinger cloud solutions.',
    fullDesc: 'We provide end-to-end outsourcing solutions that help businesses reduce operational burden, increase productivity, and tap into specialized expertise without hiring full-time teams. From tech and design talent to support, marketing, and administrative operations, our outsourcing services ensure you get reliable, high-quality work at a fraction of the traditional cost.',
    heroImage: '/infrastructure/cloud/Banner.png',
    
    // Gallery Images
    galleryImages: [
      "/infrastructure/cloud/01.png",
      "/infrastructure/cloud/02.png",
      "/infrastructure/cloud/03.webp",
    ],
    
    // Basic Features List
    features: ['AWS/Google Cloud/Azure', 'Load Balancing & Auto-scaling', 'DDoS Protection', '24/7 Monitoring', 'Automated Backups'],
    
    // Detailed Features (Service Blocks)
    detailedFeatures: [
      {
        title: "Managed Cloud Hosting",
        desc: "Fully managed servers on AWS, Google Cloud, or Azure—configured, optimized, and monitored for peak performance."
      },
      {
        title: "High-Performance Server Setup",
        desc: "Custom server environments with advanced caching, load balancing, CDN integration, and automatic scaling."
      },
      {
        title: "Advanced Security Architecture",
        desc: "Firewalls, SSL, server hardening, DDoS protection, access controls, and real-time monitoring."
      }
    ],
    
    // Headline Section (appears after hero)
    headlineSection: {
      title: "Cloud Hosting That Works as Hard as Your Business.",
      description: "We don't just set up servers—we engineer complete cloud environments that deliver speed, reliability, and long-term stability. Every hosting setup is designed to withstand traffic surges, maintain low latency, and keep your data fully secure, no matter the scale of your operations."
    },
    
    // Subhead Section (additional descriptive section)
    subheadSection: {
      title: "Your Business Needs Hosting That Can Keep Up.",
      description: "From websites to mobile apps, CRMs, ERPs, and enterprise applications, your business depends on hosting that's fast, secure, and built for growth. We set up cloud hosting environments that handle high traffic, process large data volumes, and maintain consistent performance around the clock. Whether you're a startup looking for reliable hosting or an enterprise migrating to the cloud, our cloud solutions are designed to support you at every stage."
    },
    
    // Key Features (can be used for additional feature blocks)
    keyFeatures: [
      {
        title: "Reliable Performance",
        desc: "Designed to keep your applications stable, responsive, and consistently accessible."
      },
      {
        title: "Auto-scaling Capabilities",
        desc: "Automatically adjust resources based on traffic demands without manual intervention."
      },
      {
        title: "Global CDN Integration",
        desc: "Deliver content faster to users worldwide with integrated content delivery networks."
      }
    ],
    
    // FAQ Section
    faq: [
      {
        question: "Which cloud platforms do you use?",
        answer: "We work with AWS, Google Cloud, Microsoft Azure, DigitalOcean, and custom private cloud setups."
      },
      {
        question: "Can you migrate our current hosting?",
        answer: "Yes, we perform a full migration without downtime or data loss."
      },
      {
        question: "Is cloud hosting secure?",
        answer: "Absolutely. We implement encryption, firewalls, DDoS protection, backups, and role-based access."
      },
      {
        question: "Do you provide 24/7 server monitoring?",
        answer: "Yes, our team continuously monitors server health and performance."
      },
      {
        question: "Can you host high-traffic websites or applications?",
        answer: "Yes, our scalable cloud setups are designed for high-load performance."
      },
      {
        question: "Do you provide email hosting and domain setup?",
        answer: "Yes, domain, DNS, email service provider integration, and full infrastructure setup."
      },
      {
        question: "Do you optimize servers for speed?",
        answer: "Yes, caching layers, CDN, compression, load balancing, and performance tuning are included."
      },
      {
        question: "Is this hosting suitable for enterprise applications?",
        answer: "Yes, our setups support CRMs, ERPs, POS systems, SaaS platforms, and large databases."
      }
    ],
    
    // Process Section
    process: [
      { title: 'Discovery', desc: 'Analyzing your requirements and infrastructure needs.' },
      { title: 'Architecture Design', desc: 'Creating scalable and secure cloud architecture.' },
      { title: 'Implementation', desc: 'Setting up servers, security, and configurations.' },
      { title: 'Migration & Launch', desc: 'Seamless migration and go-live support.' },
      { title: 'Monitoring & Optimization', desc: '24/7 monitoring and continuous performance tuning.' }
    ],
    
    // Portfolio Section
    portfolio: [
      { title: 'E-commerce Platform Migration', category: 'AWS Migration', image: 'https://picsum.photos/id/119/800/600' },
      { title: 'Fintech Infrastructure', category: 'Private Cloud', image: 'https://picsum.photos/id/160/800/600' },
      { title: 'SaaS Application Hosting', category: 'Azure Setup', image: 'https://picsum.photos/id/201/800/600' }
    ]
  },
  {
    id: 'outsourcing',
    title: 'OUTSOURCING',
    heroTitle: 'OUTSOURCING',
    icon: Monitor,
    shortDesc: 'We provide end-to-end outsourcing solutions that help businesses reduce operational burden, increase productivity, and tap into specialized expertise without hiring full-time teams.',
    fullDesc: 'From tech and design talent to support, marketing, and administrative operations—our outsourcing services ensure you get reliable, high-quality work at a fraction of the traditional cost.',
    heroImage: '/infrastructure/outsourcing/Banner.png', // Updated to a more outsourcing/team-related image
    
    // Gallery Images (updated for outsourcing context)
    galleryImages: [
      "/infrastructure/outsourcing/01.png",
      "/infrastructure/outsourcing/02.png",
      "/infrastructure/outsourcing/03.png",
    ],
    
    // Basic Features List
    features: ['Dedicated Remote Teams', 'Project-Based Outsourcing', 'Process Outsourcing', '24/7 Support', 'Multi-timezone Coverage'],
    
    // Detailed Features (Service Blocks)
    detailedFeatures: [
      {
        title: "Dedicated Remote Teams",
        desc: "Handpicked experts working full-time for your business across tech, design, marketing, and operations."
      },
      {
        title: "Project-Based Outsourcing",
        desc: "Specialized talent is assigned for specific projects with defined timelines and deliverables."
      },
      {
        title: "Process Outsourcing & Support",
        desc: "Customer support, admin operations, back-office management, data entry, CRM support, and more."
      }
    ],
    
    // Gallery Heading (for PORTFOLIO section)
    galleryHeading: "Teams & Functions We've Successfully Outsourced",
    
    // Gallery Description
    galleryDesc: "From development teams to customer support—see the diverse roles we've helped businesses fill across the globe.",
    
    // Headline Section
    headlineSection: {
      title: "Scale Your Operations Without the Overhead.",
      description: "Outsourcing isn't just about cutting costs—it's about accessing world-class talent, increasing agility, and focusing your internal resources on what matters most. We build teams that integrate seamlessly with your workflow."
    },
    
    // Subhead Section
    subheadSection: {
      title: "Your Team, Powered by Experts.",
      description: "Building and managing an in-house team is expensive, slow, and resource-heavy. Our outsourcing solutions give you instant access to skilled professionals who work as an extension of your company, fully trained, accountable, and aligned with your operational goals. Whether you need short-term support or long-term dedicated staff, we build customized outsourcing models that deliver efficiency, consistency, and measurable results."
    },
    
    // Key Features (additional benefit highlights)
    keyFeatures: [
      {
        title: "Cost-Effective Scaling",
        desc: "Reduce operational costs by up to 60% compared to in-house hiring while maintaining quality."
      },
      {
        title: "Rapid Deployment",
        desc: "Get your team up and running in days, not months—with pre-vetted professionals ready to contribute."
      },
      {
        title: "Full Integration",
        desc: "Outsourced teams use your tools, follow your processes, and become a seamless part of your organization."
      }
    ],
    
    // FAQ Section
    faq: [
      {
        question: "What roles can you outsource?",
        answer: "Developers, designers, marketers, support agents, admins, content teams, and technical staff."
      },
      {
        question: "Do the outsourced teams work full-time?",
        answer: "Yes, depending on your chosen model (full-time, part-time, project-based)."
      },
      {
        question: "How do you ensure quality?",
        answer: "We use structured workflows, performance monitoring, and weekly reporting."
      },
      {
        question: "Are teams trained before deployment?",
        answer: "Yes, each member goes through onboarding and training aligned with your workflow."
      },
      {
        question: "Do outsourced teams work in our time zone?",
        answer: "Yes, we offer global time zone support."
      },
      {
        question: "Can the remote team use our tools?",
        answer: "Absolutely, your team uses your software, tools, and systems."
      },
      {
        question: "Is communication seamless?",
        answer: "Yes, via Slack, WhatsApp, Email, Zoom, Teams, or your preferred channel."
      },
      {
        question: "Can we scale the team anytime?",
        answer: "Yes, add or reduce team members whenever needed."
      }
    ],
    
    // Process Section (outsourcing-specific process)
    process: [
      { title: 'Needs Assessment', desc: 'Understanding your requirements, goals, and team structure.' },
      { title: 'Talent Sourcing', desc: 'Identifying and vetting candidates that match your criteria.' },
      { title: 'Onboarding & Training', desc: 'Integrating talent into your workflows and systems.' },
      { title: 'Deployment', desc: 'Team members begin work with your existing processes.' },
      { title: 'Ongoing Management', desc: 'Performance monitoring, feedback loops, and continuous optimization.' }
    ],
    
    // Portfolio Section
    portfolio: [
      { title: 'E-commerce Customer Support', category: 'Process Outsourcing', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop' },
      { title: 'Fintech Development Team', category: 'Dedicated Remote Team', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop' },
      { title: 'Healthcare Admin Support', category: 'Back-Office Operations', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop' }
    ]
  },
  {
    id: 'it-support',
    title: 'IT SUPPORT',
    heroTitle: 'IT SUPPORT',
    icon: Monitor,
    shortDesc: 'We provide comprehensive IT support services that keep your systems running smoothly, protect your data, and ensure your teams can work without interruptions.',
    fullDesc: 'From troubleshooting and remote assistance to network management and cybersecurity, our IT support solutions are built to keep your business online, secure, and efficient.',
    heroImage: '/infrastructure/it-support/Banner.png', // Updated to a more IT support-related image
    
    // Gallery Images (updated for IT support context)
    galleryImages: [
      "/infrastructure/it-support/01.png",
      "/infrastructure/it-support/02.png",
      "/infrastructure/it-support/04.png"
      // Network setup
    ],
    
    // Basic Features List
    features: ['24/7 Remote Support', 'Network Management', 'Cybersecurity', 'Server Maintenance', 'Help Desk Services'],
    
    // Detailed Features (Service Blocks)
    detailedFeatures: [
      {
        title: "24/7 Remote IT Support",
        desc: "Instant help for system issues, errors, configuration problems, and technical troubleshooting."
      },
      {
        title: "Network & Server Management",
        desc: "Monitoring, maintenance, optimization, and security for your network, cloud, and servers."
      },
      {
        title: "Cybersecurity & Protection",
        desc: "Firewalls, antivirus management, threat detection, email security, and secure access."
      }
    ],
    
    // Gallery Heading (for PORTFOLIO section)
    galleryHeading: "Some of Our IT Support & Infrastructure Work",
    
    // Gallery Description
    galleryDesc: "From network setups to security implementations—see how we've helped businesses maintain reliable IT operations.",
    
    // Headline Section
    headlineSection: {
      title: "Proactive IT Support That Prevents Problems Before They Happen.",
      description: "We don't just fix issues—we prevent them. Our proactive monitoring and maintenance identify potential problems before they impact your business, ensuring maximum uptime and productivity."
    },
    
    // Subhead Section
    subheadSection: {
      title: "Your Business Runs on Technology, We Make Sure It Never Stops.",
      description: "Downtime costs money. Technical issues slow productivity. Security gaps put your entire business at risk. Our IT support team monitors, manages, and maintains your systems so you can focus on growth, while we handle the tech. Whether you're a growing business or managing large-scale operations, we provide fast, reliable, and expert support whenever you need it."
    },
    
    // Key Features (additional benefit highlights)
    keyFeatures: [
      {
        title: "Rapid Response Times",
        desc: "Average response time under 15 minutes for critical issues, with 24/7 availability."
      },
      {
        title: "Comprehensive Monitoring",
        desc: "24/7 monitoring of servers, networks, and endpoints to detect and resolve issues proactively."
      },
      {
        title: "Vendor Management",
        desc: "We handle all hardware and software vendors, saving you time and coordination headaches."
      }
    ],
    
    // FAQ Section
    faq: [
      {
        question: "What does your IT support include?",
        answer: "Troubleshooting, monitoring, maintenance, software installation, network support, security, backups, and device management."
      },
      {
        question: "Do you offer 24/7 support?",
        answer: "Yes, round-the-clock remote and on-site support options."
      },
      {
        question: "Can you manage our entire IT infrastructure?",
        answer: "Absolutely. We manage networks, servers, devices, security, cloud systems, and more."
      },
      {
        question: "Do you support remote teams?",
        answer: "Yes, secure setups for distributed teams, VPN configurations, and cloud access."
      },
      {
        question: "What industries do you support?",
        answer: "Retail, hospitality, finance, healthcare, real estate, education, logistics, manufacturing, and startups."
      },
      {
        question: "Are data backups included?",
        answer: "Yes, automated backup and secure recovery solutions can be added."
      },
      {
        question: "Can you help with email, domain, and hosting issues?",
        answer: "Yes, we handle complete IT infrastructure and workspace setups."
      },
      {
        question: "Do you provide cybersecurity support?",
        answer: "Yes, firewalls, endpoint protection, threat detection, and system hardening."
      }
    ],
    
    // Process Section (IT support-specific process)
    process: [
      { title: 'Infrastructure Audit', desc: 'Comprehensive assessment of your current IT systems and needs.' },
      { title: 'Support Plan Design', desc: 'Customized support package tailored to your business requirements.' },
      { title: 'Setup & Integration', desc: 'Implementing monitoring tools, security protocols, and access controls.' },
      { title: 'Proactive Monitoring', desc: '24/7 surveillance of systems, networks, and endpoints.' },
      { title: 'Ongoing Support', desc: 'Continuous maintenance, updates, and rapid issue resolution.' }
    ],
    
    // Portfolio Section
    portfolio: [
      { title: 'Retail Chain Network Upgrade', category: 'Infrastructure', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop' },
      { title: 'Healthcare Data Security', category: 'Cybersecurity', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop' },
      { title: 'Financial Services 24/7 Support', category: 'Managed Services', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop' }
    ]
  }
];