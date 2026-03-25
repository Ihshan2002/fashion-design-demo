import promoBanner from "@/assets/promo-banner.jpg";

const PromoBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src={promoBanner}
        alt="Seasonal promotion - luxury fabric textures"
        loading="lazy"
        width={1920}
        height={640}
        className="w-full h-64 md:h-80 lg:h-96 object-cover"
      />
      <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
        <div className="text-center max-w-2xl px-6">
          <p className="text-label text-primary-foreground/70 mb-4">Limited Time</p>
          <h2 className="heading-display text-primary-foreground mb-4">
            Spring Sale — Up to 40% Off
          </h2>
          <p className="font-body text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Elevate your wardrobe with pieces from our latest collection at exclusive prices.
          </p>
          <a
            href="#"
            className="inline-block bg-accent text-accent-foreground px-10 py-3.5 text-label hover:bg-accent/90 transition-colors"
          >
            Shop the Sale
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
