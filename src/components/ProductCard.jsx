import { Link } from "react-router-dom";
import { formatIDR } from "../data/products";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="aspect-[3/4] overflow-hidden bg-line rounded-soft">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:-rotate-1"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-stone">{product.category}</p>
          <h3 className="mt-1 text-base font-medium text-ink transition-colors group-hover:text-maroon">
            {product.name}
          </h3>
        </div>
        <p className="text-sm font-semibold text-ink whitespace-nowrap">
          {formatIDR(product.price)}
        </p>
      </div>
    </Link>
  );
}
