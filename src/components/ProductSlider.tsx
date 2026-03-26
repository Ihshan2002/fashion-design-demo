import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: "Junior Urban Hoodie", price: "2,490", img: "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 2, name: "Petite Floral Gown", price: "4,190", img: "https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 3, name: "Kids Linen Set", price: "3,290", img: "https://images.pexels.com/photos/35188/child-childrens-baby-children-s-wear.jpg?auto=compress&cs=tinysrgb&w=600" },
  { id: 4, name: "Silk Blend Dress", price: "5,990", img: "https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 5, name: "Heritage Polo", price: "2,790", img: "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 6, name: "Monogram Knit", price: "3,890", img: "https://images.pexels.com/photos/1103828/pexels-photo-1103828.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const ProductSlider = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#09090B] overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <h2 className="text-2xl md:text-3xl font-serif dark:text-white uppercase tracking-tight">
          Latest in store <span className="text-zinc-400 font-light italic">This week</span>
        </h2>
      </div>

      <div className="relative flex items-center">
        {/* Infinite Loop Container */}
        <motion.div 
          className="flex gap-4 md:gap-6"
          animate={{ x: [0, -1500] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...products, ...products, ...products].map((product, index) => (
            <div key={index} className="min-w-[160px] md:min-w-[200px] group">
              <div className="relative aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 overflow-hidden mb-3 rounded-sm">
                <img 
                  src={product.img} 
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=200";
                  }}
                />
                <div className="absolute top-2 left-2 bg-black/80 text-[7px] text-white px-2 py-0.5 uppercase tracking-widest font-bold">
                  New
                </div>
              </div>
              <h4 className="text-[10px] uppercase tracking-wider font-medium dark:text-zinc-300 truncate mb-1">
                {product.name}
              </h4>
              <p className="text-[11px] font-serif text-[#c5a358]">LKR {product.price}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSlider;