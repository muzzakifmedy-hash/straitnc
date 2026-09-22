import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductById, formatIDR, products } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addItem } = useCart();

  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState(product?.sizes[0] ?? "");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="container-content py-20 text-center">
        <p className="text-ink/70">Product not found.</p>
        <Link to="/shop" className="text-maroon underline mt-4 inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 2);

  const handleAddToCart = () => {
    addItem(product, size, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container-content py-10 md:py-16">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-ink/60 hover:text-ink mb-8 inline-flex items-center gap-1"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Images */}
        <div className="animate-fade-up">
          <div className="aspect-[3/4] overflow-hidden bg-line rounded-soft mb-3">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="w-full h-full object-cover transition-opacity duration-300"
              key={activeImage}
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 aspect-[3/4] overflow-hidden rounded-xl border-2 transition-colors ${
                    activeImage === i ? "border-maroon" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="animate-fade-up-delay-1">
          <p className="text-xs uppercase tracking-wide text-stone mb-2">
            {product.category}
          </p>
          <h1 className="font-display text-2xl md:text-3xl text-ink">
            {product.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-maroon">
            {formatIDR(product.price)}
          </p>

          <p className="mt-6 text-ink/70 text-sm leading-relaxed">
            {product.description}
          </p>

          {/* Size selector */}
          <div className="mt-8">
            <p className="text-sm font-medium text-ink mb-3">Size</p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 rounded-pill text-sm border transition-colors ${
                    size === s
                      ? "bg-ink text-sand border-ink"
                      : "border-ink/20 text-ink/70 hover:border-ink"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Qty + Add to cart */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-ink/20 rounded-pill overflow-hidden">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center text-ink/70 hover:text-ink"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-10 text-center text-sm font-medium">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-10 h-10 flex items-center justify-center text-ink/70 hover:text-ink"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 bg-ink text-sand py-3 rounded-pill text-sm font-medium hover:bg-maroon transition-colors"
            >
              {added ? "Added ✓" : "Add to Cart"}
            </button>
          </div>

          {/* Details */}
          <div className="mt-10 pt-8 border-t border-line">
            <p className="text-sm font-medium text-ink mb-3">Product Details</p>
            <ul className="space-y-2">
              {product.details.map((d, i) => (
                <li key={i} className="text-sm text-ink/70 flex gap-2">
                  <span className="text-maroon">—</span> {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-20 pt-12 border-t border-line">
          <h2 className="font-display text-xl md:text-2xl text-ink mb-8">
            Pairs Well With
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 max-w-2xl">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
