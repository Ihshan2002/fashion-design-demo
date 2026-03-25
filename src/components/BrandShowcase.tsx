import collectionAccessories from "@/assets/collection-accessories.jpg";
import collectionOuterwear from "@/assets/collection-outerwear.jpg";

const collections = [
  {
    image: collectionOuterwear,
    title: "Outerwear Edit",
    description: "Coats & jackets for the transitional season",
  },
  {
    image: collectionAccessories,
    title: "Accessories",
    description: "Complete every look with curated details",
  },
];

const BrandShowcase = () => {
  return (
    <section className="section-padding py-20 md:py-28 bg-card">
      <div className="mb-12">
        <p className="text-label text-muted-foreground mb-3">Collections</p>
        <h2 className="heading-section text-foreground">Explore Our World</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collections.map((col) => (
          <a
            key={col.title}
            href="#"
            className="group relative overflow-hidden aspect-square md:aspect-[4/3]"
          >
            <img
              src={col.image}
              alt={col.title}
              loading="lazy"
              width={800}
              height={800}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground font-medium mb-2">
                {col.title}
              </h3>
              <p className="font-body text-sm text-primary-foreground/70 mb-4">
                {col.description}
              </p>
              <span className="text-label text-primary-foreground/90 border-b border-primary-foreground/40 pb-0.5 group-hover:border-primary-foreground transition-colors">
                Discover →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BrandShowcase;
