import { useMemo, useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = ["All", "Shirts", "Pants", "Accessories"];

export default function Shop() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) => category === "All" || p.category === category
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [category, sort]);

  return (
    <div className="container-content py-12 md:py-16">
      <div className="mb-10 animate-fade-up">
        <p className="text-sm font-medium text-maroon mb-2">Shop</p>
        <h1 className="font-display text-3xl md:text-4xl text-ink">
          The Full Collection
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-line">
        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-pill text-sm font-medium border transition-colors ${
                category === c
                  ? "bg-ink text-sand border-ink"
                  : "border-ink/20 text-ink/70 hover:border-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="text-sm font-medium border border-ink/20 rounded-pill px-4 py-2 bg-sand text-ink"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-ink/60 text-sm">No products in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
