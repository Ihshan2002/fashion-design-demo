import ProductCard from "./ProductCard";
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
    <section className="section-padding py-20 md:py-28 bg-card">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-label text-muted-foreground mb-3">Curated Selection</p>
          <h2 className="heading-section text-foreground">Featured Products</h2>
        </div>
        <a href="#" className="text-label text-foreground/70 hover:text-foreground transition-colors hidden md:block">
          Shop All →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
