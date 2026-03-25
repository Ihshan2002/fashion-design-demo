import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <img
        src={heroBanner}
        alt="Spring Summer Collection - Elegant fashion editorial"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />

      <div className="relative h-full flex items-end section-padding pb-16 md:pb-24">
        <div className="max-w-lg animate-fade-in">
          <p className="text-label text-primary-foreground/80 mb-4">
            Spring / Summer 2026
          </p>
          <h1 className="heading-display text-primary-foreground mb-6">
            The Art of <br />
            <em className="italic">Effortless</em> Style
          </h1>
          <p className="font-body text-primary-foreground/80 text-base md:text-lg mb-8 max-w-md leading-relaxed">
            Discover curated pieces that define modern elegance. Timeless silhouettes meet contemporary craftsmanship.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="inline-block bg-primary-foreground text-primary px-8 py-3.5 text-label hover:bg-primary-foreground/90 transition-colors"
            >
              Shop Collection
            </a>
            <a
              href="#"
              className="inline-block border border-primary-foreground/50 text-primary-foreground px-8 py-3.5 text-label hover:bg-primary-foreground/10 transition-colors"
            >
              Lookbook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
