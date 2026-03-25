import categoryMen from "@/assets/category-men.jpg";
import categoryWomen from "@/assets/category-women.jpg";
import categoryKids from "@/assets/category-kids.jpg";

const categories = [
  { name: "Women", image: categoryWomen, count: "248 Styles" },
  { name: "Men", image: categoryMen, count: "186 Styles" },
  { name: "Kids", image: categoryKids, count: "124 Styles" },
];

const CategorySection = () => {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-label text-muted-foreground mb-3">Explore</p>
          <h2 className="heading-section text-foreground">Shop by Category</h2>
        </div>
        <a href="#" className="text-label text-foreground/70 hover:text-foreground transition-colors hidden md:block">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href="#"
            className="group relative overflow-hidden aspect-[3/4]"
          >
            <img
              src={cat.image}
              alt={cat.name}
              loading="lazy"
              width={800}
              height={1024}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground font-medium mb-1">
                {cat.name}
              </h3>
              <p className="text-label text-primary-foreground/70 text-xs">
                {cat.count}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
