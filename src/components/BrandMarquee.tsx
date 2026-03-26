import React from "react";
import { motion } from "framer-motion";

const brandLogos = [
  {
    name: "ODEL",
    url: "https://upload.wikimedia.org/wikipedia/en/0/0e/Odel_logo.png",
  },
  {
    name: "NIKE",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    name: "ADIDAS",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    name: "PUMA",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_logo.svg",
  },
  {
    name: "ZARA",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
  },
  {
    name: "H&M",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
  },
  {
    name: "LEVI'S",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Levi%27s_logo_red.svg",
  },
];

const BrandMarquee = () => {
  const repeated = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <div className="relative py-16 bg-white dark:bg-[#09090B] overflow-hidden border-y border-zinc-100 dark:border-zinc-900">
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white dark:from-[#09090B] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white dark:from-[#09090B] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: [0, -2400] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {repeated.map((brand, index) => (
            <div key={index} className="flex items-center group mx-12 md:mx-16">
              <img
                src={brand.url}
                alt={brand.name}
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallback = target.nextElementSibling as HTMLElement;
                  target.style.display = "none";
                  if (fallback) fallback.style.display = "block";
                }}
                className="h-7 md:h-10 w-auto object-contain opacity-30 grayscale brightness-0 dark:invert transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 dark:group-hover:invert-0 group-hover:scale-110"
              />
              <span className="hidden text-sm font-sans tracking-[0.35em] text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-500">
                {brand.name}
              </span>
              <div className="ml-12 md:ml-16 w-[1px] h-5 bg-zinc-200 dark:bg-zinc-800" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandMarquee;