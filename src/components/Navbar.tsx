import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingBag, Heart, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Left nav */}
          <div className="hidden md:flex items-center gap-8">
            {["New In", "Women", "Men", "Kids"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-label text-foreground/80 hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Logo */}
          <a href="#" className="font-heading text-xl md:text-2xl font-semibold tracking-wide text-foreground">
            MAISON ÉLARA
          </a>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button onClick={() => setDark(!dark)} className="text-foreground/70 hover:text-foreground transition-colors hidden md:block" aria-label="Toggle theme">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Search size={18} className="text-foreground/70 hover:text-foreground cursor-pointer transition-colors hidden md:block" />
            <Heart size={18} className="text-foreground/70 hover:text-foreground cursor-pointer transition-colors hidden md:block" />
            <div className="relative">
              <ShoppingBag size={18} className="text-foreground/70 hover:text-foreground cursor-pointer transition-colors" />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-body font-semibold rounded-full flex items-center justify-center">
                3
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="section-padding py-6 flex flex-col gap-4">
            {["New In", "Women", "Men", "Kids"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-label text-foreground/80 hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
            <button onClick={() => setDark(!dark)} className="text-label text-foreground/80 flex items-center gap-2 mt-2">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
              {dark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
