import React, { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { designData } from "../data/design";
import { developmentData } from "../data/development";
import { marketingData } from "../data/marketing";
import { infrastructureData } from "../data/infrastructure";

type ChildItem = {
  name: string;
  href: string;
  image?: string;
};

type NavItem = {
  name: string;
  href?: string;
  children?: ChildItem[];
};

/* ---------- DYNAMIC MENU DATA FROM HERO IMAGES ---------- */

// Helper to extract service items with hero images
const getDesignItems = (): ChildItem[] => {
  return designData.map((item) => ({
    name: item.title,
    href: `/design/${item.id}`,
    image: item.heroImage, // Use the actual hero image
  }));
};

const getDevelopmentItems = (): ChildItem[] => {
  return developmentData.map((item) => ({
    name: item.title,
    href: `/development/${item.id}`,
    image: item.heroImage,
  }));
};

const getMarketingItems = (): ChildItem[] => {
  return marketingData.map((item) => ({
    name: item.title,
    href: `/marketing/${item.id}`,
    image: item.heroImage,
  }));
};

const getInfrastructureItems = (): ChildItem[] => {
  return infrastructureData.map((item) => ({
    name: item.title,
    href: `/infrastructure/${item.id}`,
    image: item.heroImage,
  }));
};

const navData: NavItem[] = [
  { name: "About Us", href: "/about" },
  { name: "Design", href: "/design", children: getDesignItems() },
  {
    name: "Development",
    href: "/development",
    children: getDevelopmentItems(),
  },
  { name: "Marketing", href: "/marketing", children: getMarketingItems() },
  {
    name: "Infrastructure",
    href: "/infrastructure",
    children: getInfrastructureItems(),
  },
  { name: "Portfolio", href: "/portfolio" },
  // { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Insights", href: "/insights" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(null);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [activeMenuRect, setActiveMenuRect] = useState<DOMRect | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);

  // Handle scroll lock for mobile menu
  useEffect(() => {
    if (isOpen) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPositionRef.current);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  // Check if mobile on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!isOpen) {
        setScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMega(null);
        setIsOpen(false);
        setOpenMobileIndex(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside both the menu button and the mega menu
      const target = event.target as Node;
      const isOutsideMegaMenu =
        megaMenuRef.current && !megaMenuRef.current.contains(target);
      const isOutsideMenuButton = !Array.from(
        menuButtonRefs.current.values(),
      ).some((button) => button.contains(target));

      if (isOutsideMegaMenu && isOutsideMenuButton) {
        setOpenMega(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update active menu rect when openMega changes
  useEffect(() => {
    if (openMega) {
      const button = menuButtonRefs.current.get(openMega);
      if (button) {
        setActiveMenuRect(button.getBoundingClientRect());
      }
    } else {
      setActiveMenuRect(null);
    }
  }, [openMega]);

  const closeAll = () => {
    setOpenMega(null);
    setIsOpen(false);
    setOpenMobileIndex(null);
  };

  // Refresh children data periodically (optional, if data might change)
  const getCurrentChildren = (menuName: string) => {
    switch (menuName) {
      case "Design":
        return getDesignItems();
      case "Development":
        return getDevelopmentItems();
      case "Marketing":
        return getMarketingItems();
      case "Infrastructure":
        return getInfrastructureItems();
      default:
        return [];
    }
  };

  return (
    <>
      <header
        ref={menuRef}
        className={`fixed top-0  font-lato left-0 w-full z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "backdrop-blur-xl bg-black/80 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-4 shadow-none"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center"
              onClick={() => {
                closeAll();

                // If already on home page
                if (window.location.pathname === "/") {
                  const banner = document.getElementById("banner");

                  if (banner) {
                    banner.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }
              }}
            >
              <span className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] tracking-wide">
                HypeLab
              </span>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              {navData.map((top) => {
                const hasChildren = !!top.children?.length;

                return (
                  <div key={top.name}>
                    {hasChildren ? (
                      <button
                        ref={(el) => {
                          if (el) menuButtonRefs.current.set(top.name, el);
                        }}
                        type="button"
                        onClick={() =>
                          setOpenMega(openMega === top.name ? null : top.name)
                        }
                        className="flex items-center gap-1 px-4 py-2 text-sm text-white/90 hover:text-white transition-colors whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                      >
                        {top.name}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] ${
                            openMega === top.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        to={top.href || "/"}
                        className="inline-block px-4 py-2 text-sm text-white/90 hover:text-white transition-colors whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                        onClick={closeAll}
                      >
                        {top.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop Contact - Right aligned */}
            {/* <div className="hidden lg:flex flex-col items-end gap-1">
              <a
                href="support@connectia.in"
                className="px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
              >
                Contact Us
              </a>
              <a 
                href="support@connectia.in" 
                className="text-xs text-white/60 hover:text-white/80 transition-colors drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]"
              >
                support@connectia.in
              </a>
            </div> */}
            <div className="hidden lg:flex flex-col items-end gap-1">
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
              >
                Contact Us
              </button>
              <span className="text-xs text-white/60 hover:text-white/80 transition-colors drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]">
                support@connectia.in
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-white/90 hover:text-white transition-colors ml-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {openMega && activeMenuRect && !isMobile && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setOpenMega(null)}
            />

            <motion.div
              ref={megaMenuRef}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="fixed z-50"
              style={{
                left: Math.max(
                  10,
                  Math.min(activeMenuRect.left, window.innerWidth - 330),
                ),
                top: activeMenuRect.bottom + 8,
              }}
            >
              <div className="w-56 max-h-none overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9)]">
                <div className="backdrop-blur-xl bg-black/90 rounded-xl overflow-hidden border border-white/10">
                  {/* Header */}
                  <div className="px-4 py-3 border-b border-white/10 sticky top-0 bg-black/90 z-10 shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                    <h2 className="text-sm font-medium text-white/90 drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">
                      {openMega}
                    </h2>
                  </div>

                  {/* Vertical List with Thumbnails */}
                  <div className="flex flex-col p-2">
                    {getCurrentChildren(openMega).map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        onClick={() => setOpenMega(null)}
                        className="flex items-center gap-2 px-3 py-2 w-full hover:bg-white/10 transition-all duration-200 group rounded-md"
                      >
                        {/* Thumbnail Image - Left */}
                        <div className="w-8 h-8 rounded-md overflow-hidden bg-white/10 shrink-0 shadow-[0_4px_8px_rgba(0,0,0,0.7)]">
                          {child.image ? (
                            <img
                              src={child.image}
                              alt={child.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  "https://via.placeholder.com/40x40?text=img";
                              }}
                            />
                          ) : (
                            <div className="w-full h-full bg-linear-to-br from-white/20 to-white/5 flex items-center justify-center">
                              <span className="text-white/40 text-xs">🖼️</span>
                            </div>
                          )}
                        </div>

                        {/* Name - Right */}
                        <span className="text-xs text-white/80 group-hover:text-white  drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">
                          {child.name}
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="px-4 py-3 border-t border-white/10 sticky bottom-0 bg-black/90 shadow-[0_-8px_20px_-8px_rgba(0,0,0,0.9)]">
                    <Link
                      to={navData.find((n) => n.name === openMega)?.href || "/"}
                      onClick={() => setOpenMega(null)}
                      className="text-xs text-white/60 hover:text-white/90 transition-colors flex items-center justify-between drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]"
                    >
                      <span>View all {openMega}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              key="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-gray-900 z-50 lg:hidden flex flex-col shadow-[-10px_0_30px_-10px_rgba(0,0,0,0.9)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-white/10 flex justify-end items-center bg-gray-900 shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors border-none cursor-pointer shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto overscroll-contain">
                <div className="p-4 space-y-1">
                  {navData.map((top, idx) => {
                    const hasChildren = !!top.children?.length;
                    const isExpanded = openMobileIndex === idx;

                    return (
                      <div
                        key={top.name}
                        className="border-b border-white/10 last:border-0"
                      >
                        {hasChildren ? (
                          <div>
                            <button
                              onClick={() =>
                                setOpenMobileIndex(isExpanded ? null : idx)
                              }
                              className="w-full flex justify-between items-center py-4 px-2 font-bold uppercase text-sm text-white/90 hover:text-white bg-transparent border-none cursor-pointer text-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                              aria-expanded={isExpanded}
                            >
                              <span>{top.name}</span>
                              <ChevronDown
                                size={18}
                                className={`transition-transform text-white/70 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            <AnimatePresence initial={false}>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-4 pb-2 space-y-1">
                                    {top.children?.map((child) => (
                                      <Link
                                        key={child.name}
                                        to={child.href}
                                        onClick={closeAll}
                                        className="flex items-center gap-3 py-3 px-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-left"
                                      >
                                        {/* Mobile thumbnail */}
                                        <div className="w-8 h-8 rounded-md overflow-hidden bg-white/10 shrink-0 shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
                                          {child.image && (
                                            <img
                                              src={child.image}
                                              alt=""
                                              className="w-full h-full object-cover"
                                              loading="lazy"
                                            />
                                          )}
                                        </div>
                                        <span className="drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]">
                                          {child.name}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            to={top.href || "/"}
                            onClick={closeAll}
                            className="block py-4 px-2 font-bold uppercase text-sm text-white/90 hover:text-white transition-colors text-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                          >
                            {top.name}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-4 border-t border-white/10 bg-gray-900 shrink-0 shadow-[0_-8px_20px_-8px_rgba(0,0,0,0.9)]">
                {/* <a
                  href="mailto:support@connectia.in"
                  className="block w-full py-3 text-center text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors mb-2 shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
                >
                  Contact Us
                </a> */}
                {/* <button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
     setIsOpen(false); // instant close
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
>
  Contact Us
</button> */}
                <button
                  onClick={() => {
                    setIsOpen(false); // close menu

                    // wait for menu to close & scroll unlock
                    setTimeout(() => {
                      const el = document.getElementById("contact");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 300);
                  }}
                  className="px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
                >
                  Contact Us
                </button>
                <a
                  href="mailto:support@connectia.in"
                  className="block text-center text-sm text-white/60 hover:text-white/80 drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]"
                >
                  support@connectia.in
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
