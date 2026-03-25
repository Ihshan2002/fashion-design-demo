import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import NewArrivals from "@/components/NewArrivals";
import PromoBanner from "@/components/PromoBanner";
import BrandShowcase from "@/components/BrandShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <NewArrivals />
      <PromoBanner />
      <BrandShowcase />
      <Footer />
    </div>
  );
};

export default Index;
