import { motion } from "framer-motion";
import categoryMen from "@/assets/category-men.jpg";
import categoryWomen from "@/assets/category-women.jpg";
import categoryKids from "@/assets/category-kids.jpg";

const categories = [
  { name: "Women", image: categoryWomen, count: "248 Styles", gridClass: "md:col-span-1" },
  { name: "Men", image: categoryMen, count: "186 Styles", gridClass: "md:col-span-1" },
  { name: "Kids", image: categoryKids, count: "124 Styles", gridClass: "md:col-span-1" },
];

const CategorySection = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32 bg-white dark:bg-zinc-950">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
        <div className="space-y-2">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-400">
            Curated Collections
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-zinc-100">
            Shop by <span className="italic font-light">Category</span>
          </h2>
        </div>
        <motion.a 
          whileHover={{ x: 5 }}
          href="#" 
          className="text-[11px] font-bold tracking-widest uppercase border-b border-zinc-900 dark:border-zinc-100 pb-1"
        >
          Explore All Categories →
        </motion.a>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {categories.map((cat, index) => (
          <motion.a
            key={cat.name}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative block overflow-hidden aspect-[3/4.5]"
          >
            {/* Image with subtle zoom & grayscale effect */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
            />

            {/* Premium Minimal Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />
            
            {/* Text Overlay */}
            <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start overflow-hidden">
               <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 mb-2 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                {cat.count}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-white group-hover:-translate-y-2 transition-transform duration-500">
                {cat.name}
              </h3>
              
              {/* Animated underline on hover */}
              <div className="w-0 h-[1px] bg-white group-hover:w-full transition-all duration-700" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;