import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import NewArrivals from "@/components/NewArrivals";
import PromoBanner from "@/components/PromoBanner";
import BrandShowcase from "@/components/BrandShowcase";
import BrandMarquee from "@/components/BrandMarquee";
import Footer from "@/components/Footer";

const Index = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState<number>(0);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    setNavHeight(el.offsetHeight);

    // Watches for any navbar height change automatically
    // (announcement bar dismissed, window resize, etc.)
    const ro = new ResizeObserver(() => {
      setNavHeight(el.offsetHeight);
    });
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar ref={navRef} />

      {/* paddingTop keeps all sections below the fixed navbar */}
      <main style={{ paddingTop: navHeight }}>
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <BrandMarquee />
        <NewArrivals />
        <PromoBanner />
        <BrandShowcase />
        <Footer />
      </main>
    </div>
  );
};

export default Index;