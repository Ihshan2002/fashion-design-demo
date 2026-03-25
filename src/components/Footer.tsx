const footerLinks = {
  Shop: ["Women", "Men", "Kids", "Accessories", "Sale"],
  Help: ["Customer Service", "Shipping & Returns", "Size Guide", "FAQs"],
  Company: ["About Us", "Careers", "Sustainability", "Press"],
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter */}
      <div className="section-padding py-16 border-b border-primary-foreground/10">
        <div className="max-w-md">
          <h3 className="font-heading text-xl font-medium mb-2">Stay in the Loop</h3>
          <p className="font-body text-sm text-primary-foreground/60 mb-6">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-primary-foreground/20 px-4 py-3 text-sm font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/50"
            />
            <button className="bg-accent text-accent-foreground px-6 py-3 text-label hover:bg-accent/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="section-padding py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="font-heading text-lg font-semibold tracking-wide">
              MAISON ÉLARA
            </a>
            <p className="font-body text-xs text-primary-foreground/50 mt-3 leading-relaxed max-w-xs">
              Modern elegance for the conscious individual. Crafted with intention, worn with confidence.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-label text-primary-foreground/80 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="section-padding py-6 border-t border-primary-foreground/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 Maison Élara. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
