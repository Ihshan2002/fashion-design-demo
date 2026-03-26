import ProductCard from "./ProductCard";
import FitFinder from "./FitFinder"; // Intha killer feature-a ingeye add pannuvom
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const products = [
  { image: product1, name: "Cashmere Crew Sweater", price: 189, rating: 4.8, isNew: true },
  { image: product2, name: "Structured Leather Tote", price: 295, originalPrice: 350, rating: 4.9 },
  { image: product3, name: "Merino Wool Turtleneck", price: 145, rating: 4.6, isNew: true },
  { image: product4, name: "Minimal Court Sneakers", price: 175, rating: 4.7 },
  { image: product5, name: "Silk Blend Blouse", price: 165, originalPrice: 210, rating: 4.5 },
  { image: product6, name: "Italian Leather Belt", price: 95, rating: 4.8 },
];

const FeaturedProducts = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[#FAFAFA] dark:bg-[#09090B]">
      {/* Background Decorative Element - Buildup Factor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#182257]/5 -skew-x-12 transform translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-[#28609d] font-bold mb-4 px-3 py-1 bg-[#28609d]/10 rounded-full">
              Spring / Summer 2026
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 dark:text-white leading-tight">
              Curated Selection of <br /> <span className="italic">Essential Pieces</span>
            </h2>
          </div>
          <a href="#" className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-zinc-500 hover:text-[#182257] transition-all">
            Explore All Collection 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* The Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product, index) => (
            <div 
              key={product.name} 
              className={`${index % 2 !== 0 ? 'md:mt-12' : ''} transition-all duration-700`}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* NEXT LEVEL ADDITION: Size Fit Finder Integration */}
        <div className="mt-32 pt-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-serif mb-6 text-zinc-900 dark:text-white">
                Not sure about your size?
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
                Our proprietary sizing engine analyzes your physical metrics to recommend the most precise fit for your unique silhouette. 
                Eliminate the guesswork and experience the art of perfect tailoring.
              </p>
              <ul className="space-y-4 mb-8">
                {['98.4% Accuracy Rate', 'Reduced Return Friction', 'Tailored for Xenwear Silhouettes'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#28609d]">
                    <span className="w-1.5 h-1.5 bg-[#28609d] rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* FitFinder Component - Indha section-la dhaan unga hardwork mass-ah theriyum */}
            <FitFinder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;