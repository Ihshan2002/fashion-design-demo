import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ph1 from "@/assets/ph1.jpg";
import ph2 from "@/assets/ph2.jpg";
import ph5 from "@/assets/ph5.jpg";


const SLIDES = [ph1, ph2, ph5,];

const HeroSection = () => {
  const [current, setCurrent] = useState<number>(0);
  const animatingRef = useRef(false);

  const goTo = useCallback((index: number) => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setCurrent(index);
    setTimeout(() => { animatingRef.current = false; }, 700);
  }, []);

  const prev = useCallback(() =>
    setCurrent(c => {
      if (animatingRef.current) return c;
      animatingRef.current = true;
      setTimeout(() => { animatingRef.current = false; }, 700);
      return (c - 1 + SLIDES.length) % SLIDES.length;
    }), []);

  const next = useCallback(() =>
    setCurrent(c => {
      if (animatingRef.current) return c;
      animatingRef.current = true;
      setTimeout(() => { animatingRef.current = false; }, 700);
      return (c + 1) % SLIDES.length;
    }), []);

  // Auto-advance — stable ref means interval never resets
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">

      {SLIDES.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Hero slide ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
          width={1920}
          height={1080}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

      <div className="relative h-full flex items-end px-6 md:px-14 pb-16 md:pb-24">
        <div className="max-w-lg">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/70 mb-5">
            Spring / Summer 2026
          </p>
          <h1
            className="text-[44px] md:text-[64px] leading-[1.05] font-normal text-white mb-6"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            The Art of <br />
            <em className="italic">Effortless</em>{" "}
            <span className="not-italic">Style</span>
          </h1>
          <p className="text-[15px] leading-relaxed text-white/75 mb-9 max-w-md font-light tracking-wide">
            Discover curated pieces that define modern elegance. Timeless
            silhouettes meet contemporary craftsmanship.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="inline-block bg-white text-zinc-900 px-8 py-3.5 text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-white/90 transition-colors duration-200">
              Shop Collection
            </a>
            <a href="#" className="inline-block border border-white/50 text-white px-8 py-3.5 text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-white/10 hover:border-white/80 transition-colors duration-200">
              Lookbook
            </a>
          </div>
        </div>
      </div>

      <button onClick={prev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-200 backdrop-blur-sm" aria-label="Previous slide">
        <ChevronLeft size={18} strokeWidth={1.2} />
      </button>
      <button onClick={next} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-200 backdrop-blur-sm" aria-label="Next slide">
        <ChevronRight size={18} strokeWidth={1.2} />
      </button>

      <div className="absolute bottom-8 right-6 md:right-14 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`}>
            <span className={`block rounded-full transition-all duration-300 ${i === current ? "w-6 h-[3px] bg-white" : "w-[3px] h-[3px] bg-white/40 hover:bg-white/70"}`} />
          </button>
        ))}
      </div>

      <div className="absolute bottom-8 left-6 md:left-14 text-[11px] font-bold tracking-[0.18em] text-white/50 tabular-nums">
        {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
      </div>

    </section>
  );
};

export default HeroSection;