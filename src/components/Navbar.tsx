import { useState, useEffect, forwardRef } from "react";
import { Menu, X, Search, ShoppingBag, Heart, Sun, Moon, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CategoryLink {
  label: string;
  accent?: boolean;
  hot?: boolean;
  sale?: boolean;
  dropdown?: string[];
}

const CATEGORY_LINKS: CategoryLink[] = [
  { label: "New Arrivals", accent: true },
  { label: "Women", dropdown: ["Dresses", "Tops", "Pants", "Skirts", "Outerwear"] },
  { label: "Men", dropdown: ["T-Shirts", "Shirts", "Trousers", "Shorts", "Jackets"] },
  { label: "Party Shop", hot: true },
  { label: "Kids", dropdown: ["Girls", "Boys", "Newborn", "Accessories"] },
  { label: "Shop By Size", dropdown: ["XS", "S", "M", "L", "XL", "XXL"] },
  { label: "Gift Cards" },
  { label: "Sale", sale: true },
];

const Navbar = forwardRef<HTMLDivElement>((_, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [dark, setDark] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [announcementVisible, setAnnouncementVisible] = useState<boolean>(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div ref={ref} className="fixed top-0 left-0 right-0 z-50">

      {/* ── Announcement Bar ── */}
      <AnimatePresence>
        {announcementVisible && (
          <motion.div
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-zinc-900 dark:bg-zinc-800 text-white text-[11px] tracking-[0.18em] uppercase font-medium text-center py-2.5 relative overflow-hidden"
          >
            <span className="opacity-70">Sign up & get </span>
            <span className="font-bold">10% off</span>
            <span className="opacity-70"> your first order</span>
            <button
              onClick={() => setAnnouncementVisible(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-100 transition-opacity"
              aria-label="Dismiss"
            >
              <X size={12} strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main Navbar ── */}
      <nav
        className={`transition-all duration-700 ease-in-out ${
          scrolled
            ? "bg-white/80 dark:bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/40 shadow-[0_1px_24px_0_rgba(0,0,0,0.05)]"
            : "bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-14">

          {/* ── Tier 1: Logo + Icons ── */}
          <div className="flex items-center justify-between h-[60px] md:h-[68px]">

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-zinc-900 dark:text-white"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span key="close" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.16 }}>
                    <X size={22} strokeWidth={1.2} />
                  </motion.span>
                ) : (
                  <motion.span key="open" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.16 }}>
                    <Menu size={22} strokeWidth={1.2} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Logo */}
            
            <a
              href="#"
              className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 select-none font-serif text-[18px] md:text-[21px] font-normal tracking-[0.28em] text-zinc-900 dark:text-white whitespace-nowrap hover:opacity-60 transition-opacity duration-300"
              style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
            >
              MAISON ÉLARA
            </a>

            {/* Right icons */}
            <div className="flex items-center gap-[16px]">
              <button
                onClick={() => setDark(!dark)}
                className="hidden md:flex text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {dark ? (
                    <motion.span key="sun" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} transition={{ duration: 0.18 }}>
                      <Sun size={18} strokeWidth={1.2} />
                    </motion.span>
                  ) : (
                    <motion.span key="moon" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} transition={{ duration: 0.18 }}>
                      <Moon size={18} strokeWidth={1.2} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <Search size={18} strokeWidth={1.2} className="hidden md:block text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white cursor-pointer transition-colors duration-200" />
              <Heart size={18} strokeWidth={1.2} className="hidden md:block text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white cursor-pointer transition-colors duration-200" />

              <div className="relative cursor-pointer group">
                <ShoppingBag size={18} strokeWidth={1.2} className="text-zinc-900 dark:text-white group-hover:opacity-50 transition-opacity duration-200" />
                <span className="absolute -top-[5px] -right-[6px] min-w-[15px] h-[15px] px-[2px] bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[9px] font-bold rounded-full flex items-center justify-center leading-none">
                  3
                </span>
              </div>
            </div>
          </div>

          {/* ── Tier 2: Category Strip (desktop only) ── */}
          <div className="hidden md:flex items-center border-t border-zinc-100 dark:border-zinc-800/60">
            {CATEGORY_LINKS.map((cat) => (
              <div
                key={cat.label}
                className="relative"
                onMouseEnter={() => cat.dropdown && setActiveDropdown(cat.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#"
                  className={`flex items-center gap-[3px] px-4 py-3 text-[11px] font-bold tracking-[0.16em] uppercase transition-colors duration-200 group
                    ${cat.accent ? "text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300" : ""}
                    ${cat.hot ? "text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300" : ""}
                    ${cat.sale ? "text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300" : ""}
                    ${!cat.accent && !cat.hot && !cat.sale ? "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white" : ""}
                  `}
                >
                  {cat.label}
                  {cat.dropdown && (
                    <ChevronDown size={10} strokeWidth={1.5} className="opacity-40 group-hover:opacity-80 transition-opacity mt-[0.5px]" />
                  )}
                </a>

                {/* Dropdown panel */}
                <AnimatePresence>
                  {cat.dropdown && activeDropdown === cat.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 min-w-[160px] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-200/40 dark:shadow-black/40 py-3 z-50"
                    >
                      {cat.dropdown.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-5 py-[9px] text-[11px] tracking-[0.12em] uppercase font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors duration-150"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: {
                height: { type: "spring", stiffness: 360, damping: 34 },
                opacity: { duration: 0.18 },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                height: { type: "spring", stiffness: 420, damping: 40 },
                opacity: { duration: 0.14 },
              },
            }}
            className="md:hidden overflow-hidden bg-white dark:bg-zinc-950 backdrop-blur-xl border-t border-zinc-100 dark:border-zinc-900"
          >
            <div className="flex flex-col">

              {/* ── Search Bar ── */}
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="px-5 pt-5 pb-4 border-b border-zinc-100 dark:border-zinc-800/60"
              >
                <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-none px-4 py-3 focus-within:border-zinc-400 dark:focus-within:border-zinc-600 transition-colors duration-200">
                  <Search size={15} strokeWidth={1.2} className="text-zinc-400 dark:text-zinc-500 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search products…"
                    className="bg-transparent flex-1 text-[12px] tracking-[0.08em] text-zinc-700 dark:text-zinc-300 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none font-medium"
                  />
                </div>
              </motion.div>

              {/* ── Category Links ── */}
              <div className="px-6 pt-5 pb-2 flex flex-col">
                <p className="text-[9px] tracking-[0.25em] uppercase text-zinc-300 dark:text-zinc-600 font-bold mb-3">Browse</p>

                {CATEGORY_LINKS.map((cat, i) => (
                  <motion.a
                    key={cat.label}
                    href="#"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i, duration: 0.2 }}
                    className={`text-[12px] font-bold uppercase tracking-[0.18em] py-3.5 border-b border-zinc-100 dark:border-zinc-800/60 last:border-none transition-colors duration-200 flex items-center justify-between group
                      ${cat.accent ? "text-emerald-600 dark:text-emerald-400" : ""}
                      ${cat.hot ? "text-violet-600 dark:text-violet-400" : ""}
                      ${cat.sale ? "text-red-500 dark:text-red-400" : ""}
                      ${!cat.accent && !cat.hot && !cat.sale ? "text-zinc-700 dark:text-zinc-300" : ""}
                    `}
                  >
                    {cat.label}
                    {cat.dropdown && (
                      <ChevronDown size={12} strokeWidth={1.3} className="opacity-30 group-hover:opacity-70 transition-opacity" />
                    )}
                  </motion.a>
                ))}
              </div>

              {/* ── Footer: Theme Toggle + Wishlist ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.2 }}
                className="mx-5 mt-4 mb-6 flex items-center justify-between border border-zinc-100 dark:border-zinc-800 px-4 py-3"
              >
                <button
                  onClick={() => setDark(!dark)}
                  className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800">
                    {dark
                      ? <Sun size={13} strokeWidth={1.3} className="text-amber-500" />
                      : <Moon size={13} strokeWidth={1.3} className="text-zinc-500 dark:text-zinc-400" />
                    }
                  </span>
                  {dark ? "Light Mode" : "Dark Mode"}
                </button>

                <div className="w-px h-4 bg-zinc-200 dark:bg-zinc-800" />

                <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">
                  <Heart size={14} strokeWidth={1.2} />
                  Wishlist
                </button>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;