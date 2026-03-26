import { motion } from "framer-motion";
import { ArrowRight, Instagram, Facebook, Twitter, Globe, ArrowUp } from "lucide-react";

const footerLinks = {
  Shop: ["Women", "Men", "Kids", "Accessories", "Sale"],
  Help: ["Customer Service", "Shipping & Returns", "Size Guide", "FAQs"],
  Company: ["About Us", "Careers", "Sustainability", "Press"],
};

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 border-t border-zinc-100 dark:border-zinc-900 pt-10">

      {/* Marquee */}
      <div className="absolute top-0 left-0 w-full overflow-hidden py-2 border-b border-zinc-100 dark:border-zinc-900">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-400"
        >
          <span>Free Worldwide Shipping on Orders Over LKR 15,000</span>
          <span>New Season Drops Every Friday</span>
          <span>Sustainable Luxury Craftsmanship</span>
          <span>Free Worldwide Shipping on Orders Over LKR 15,000</span>
        </motion.div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">

        {/* Newsletter */}
        <div className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-zinc-100 dark:border-zinc-900">
          <div className="lg:col-span-7">
            <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 mb-3">Subscription</h3>
            <p className="font-serif text-3xl md:text-4xl leading-[1.15] max-w-2xl">
              Elevate your wardrobe with <span className="italic font-light">curated</span> inspiration.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative group flex items-center border-b border-zinc-300 dark:border-zinc-800 py-3 transition-all focus-within:border-zinc-900 dark:focus-within:border-white">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-transparent text-xs tracking-widest uppercase outline-none"
              />
              <motion.button whileHover={{ x: 5 }} className="text-[11px] font-bold tracking-widest uppercase flex items-center gap-2">
                Join <ArrowRight size={16} strokeWidth={1} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Nav Grid */}
        <div className="py-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2 lg:col-span-3">
            <h2 className="font-serif text-2xl tracking-[0.2em] mb-4">Xenwear</h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer transition-colors group w-fit">
                <Globe size={14} className="group-hover:rotate-12 transition-transform" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Sri Lanka | LKR Rs.</span>
              </div>
              <div className="flex gap-6 mt-2">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <motion.a key={i} whileHover={{ scale: 1.2, rotate: 5 }} href="#" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
                    <Icon size={18} strokeWidth={1.5} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4 text-zinc-400">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link} className="overflow-hidden">
                    <motion.a
                      whileHover={{ x: 5 }}
                      href="#"
                      className="inline-block text-[13px] font-light text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-y-2">
            <p className="text-[10px] tracking-widest text-zinc-400 uppercase">Crafted for Excellence • 2026</p>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <a key={item} href="#" className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
          >
            <ArrowUp size={18} strokeWidth={1} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;