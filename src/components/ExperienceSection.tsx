import React from 'react';
import { Truck, Wallet, Calendar, RefreshCw, ShieldCheck, Gem } from 'lucide-react';

const features = [
  { title: "Islandwide Delivery", icon: Truck },
  { title: "Cash On Delivery", icon: Wallet },
  { title: "Shop Now Pay Later", icon: Calendar },
  { title: "Easy Exchanges Any Store", icon: RefreshCw },
  { title: "Secure Payment", icon: ShieldCheck },
  { title: "Unparalleled Selection", icon: Gem },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#09090B]">
      <div className="container mx-auto px-6">
        {/* Exact Heading from Screenshot */}
        <div className="mb-12">
          <h2 className="text-4xl font-black text-[#001529] dark:text-white mb-4 uppercase tracking-tight">
            EXPERIENCE THE DIFFERENCE
          </h2>
          <p className="text-[14px] font-semibold text-zinc-500 dark:text-zinc-400 max-w-3xl leading-relaxed">
            Discover a shopping experience like no other, with handpicked products, 
            seamless service, and exclusive offers that elevate every purchase. Enjoy 
            quality, convenience, and care all in one place.
          </p>
        </div>

        {/* 6-Column Grid with Maison Gold Icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#f2f4f7] dark:bg-zinc-900/50 p-10 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 group"
            >
              <div className="mb-6 text-[#c5a358] group-hover:scale-110 transition-transform duration-500">
                <item.icon size={42} strokeWidth={1.2} />
              </div>
              <h4 className="text-[12px] font-bold text-[#001529] dark:text-zinc-200 leading-tight uppercase tracking-widest">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;