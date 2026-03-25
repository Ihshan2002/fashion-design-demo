import { Star, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  isNew?: boolean;
}

const ProductCard = ({ image, name, price, originalPrice, rating, isNew }: ProductCardProps) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden aspect-[4/5] bg-card mb-4">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={640}
          height={800}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {isNew && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-label text-[10px] px-3 py-1">
            New
          </span>
        )}
        <button
          className="absolute bottom-3 right-3 bg-primary text-primary-foreground p-2.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          aria-label="Add to cart"
        >
          <ShoppingBag size={16} />
        </button>
      </div>

      <div>
        <div className="flex items-center gap-1 mb-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < Math.floor(rating) ? "fill-accent text-accent" : "text-border"}
            />
          ))}
          <span className="text-xs text-muted-foreground font-body ml-1">{rating.toFixed(1)}</span>
        </div>
        <h3 className="font-body text-sm font-medium text-foreground mb-1 group-hover:text-accent transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-body text-sm font-semibold text-foreground">${price}</span>
          {originalPrice && (
            <span className="font-body text-xs text-muted-foreground line-through">${originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
