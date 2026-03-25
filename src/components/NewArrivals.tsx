import ProductCard from "./ProductCard";
import product3 from "@/assets/product-3.jpg";
import product1 from "@/assets/product-1.jpg";
import product5 from "@/assets/product-5.jpg";
import product4 from "@/assets/product-4.jpg";

const arrivals = [
  { image: product3, name: "Relaxed Wool Blazer", price: 265, rating: 4.7, isNew: true },
  { image: product1, name: "Organic Cotton Hoodie", price: 120, rating: 4.5, isNew: true },
  { image: product5, name: "Draped Midi Skirt", price: 155, rating: 4.6, isNew: true },
  { image: product4, name: "Suede Chelsea Boots", price: 225, rating: 4.8, isNew: true },
];

const NewArrivals = () => {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-label text-muted-foreground mb-3">Just Landed</p>
          <h2 className="heading-section text-foreground">New Arrivals</h2>
        </div>
        <a href="#" className="text-label text-foreground/70 hover:text-foreground transition-colors hidden md:block">
          View All New →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6">
        {arrivals.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
