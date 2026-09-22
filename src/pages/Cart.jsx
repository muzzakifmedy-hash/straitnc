import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatIDR } from "../data/products";

export default function Cart() {
  const { items, updateQty, removeItem, subtotal } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="container-content py-24 text-center animate-fade-up">
        <p className="font-display text-2xl text-ink mb-3">Your Cart is Empty</p>
        <p className="text-ink/60 text-sm mb-8">
          Nothing here yet. Let's find something you'll love.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-ink text-sand px-7 py-3 rounded-pill text-sm font-medium hover:bg-maroon transition-colors"
        >
          Browse the Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="container-content py-10 md:py-16">
      <h1 className="font-display text-2xl md:text-3xl text-ink mb-10">
        Your Cart ({items.length})
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 divide-y divide-line">
          {items.map((item) => (
            <div key={`${item.id}-${item.size}`} className="py-6 flex gap-4">
              <div className="w-24 aspect-[3/4] overflow-hidden bg-line rounded-xl flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-ink">{item.name}</p>
                    <p className="text-xs text-stone mt-1">Size: {item.size}</p>
                  </div>
                  <p className="text-sm font-semibold text-ink whitespace-nowrap">
                    {formatIDR(item.price * item.qty)}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border border-ink/20 rounded-pill overflow-hidden">
                    <button
                      onClick={() => updateQty(item.id, item.size, item.qty - 1)}
                      className="w-8 h-8 flex items-center justify-center text-ink/70 hover:text-ink"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.size, item.qty + 1)}
                      className="w-8 h-8 flex items-center justify-center text-ink/70 hover:text-ink"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.size)}
                    className="text-xs text-ink/50 hover:text-maroon underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="md:col-span-1">
          <div className="bg-white/40 border border-line rounded-soft p-6 sticky top-24">
            <p className="text-sm font-medium text-ink mb-4">Order Summary</p>
            <div className="flex justify-between text-sm text-ink/70 mb-2">
              <span>Subtotal</span>
              <span>{formatIDR(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-ink/70 mb-4">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="flex justify-between text-base font-semibold text-ink pt-4 border-t border-line mb-6">
              <span>Total</span>
              <span>{formatIDR(subtotal)}</span>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-ink text-sand py-3 rounded-pill text-sm font-medium hover:bg-maroon transition-colors"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
