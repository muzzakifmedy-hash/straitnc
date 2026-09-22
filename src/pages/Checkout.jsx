import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatIDR } from "../data/products";

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "" });
  const [placed, setPlaced] = useState(false);

  if (items.length === 0 && !placed) {
    navigate("/shop");
    return null;
  }

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <div className="container-content py-24 text-center animate-fade-up">
        <p className="font-display text-2xl md:text-3xl text-ink mb-3">
          Order Placed
        </p>
        <p className="text-ink/60 text-sm max-w-md mx-auto mb-8">
          Thank you, {form.name || "friend"}. This is a portfolio demo
          checkout — no real payment has been processed.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="inline-block bg-ink text-sand px-7 py-3 rounded-pill text-sm font-medium hover:bg-maroon transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container-content py-10 md:py-16">
      <h1 className="font-display text-2xl md:text-3xl text-ink mb-10">
        Checkout
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <form onSubmit={handleSubmit} className="md:col-span-2 space-y-5">
          <div>
            <label className="block text-sm font-medium text-ink mb-2">
              Full Name
            </label>
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-ink/20 rounded-xl px-4 py-3 text-sm bg-sand focus:border-maroon"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink mb-2">Email</label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-ink/20 rounded-xl px-4 py-3 text-sm bg-sand focus:border-maroon"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink mb-2">
              Shipping Address
            </label>
            <input
              required
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border border-ink/20 rounded-xl px-4 py-3 text-sm bg-sand focus:border-maroon"
              placeholder="Street name, house number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink mb-2">City</label>
            <input
              required
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full border border-ink/20 rounded-xl px-4 py-3 text-sm bg-sand focus:border-maroon"
              placeholder="City"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-ink text-sand py-3 rounded-pill text-sm font-medium hover:bg-maroon transition-colors"
          >
            Place Order — {formatIDR(subtotal)}
          </button>
          <p className="text-xs text-stone">
            *This is a demo checkout for portfolio purposes — no real
            payment is processed.
          </p>
        </form>

        <div className="md:col-span-1">
          <div className="bg-white/40 border border-line rounded-soft p-6">
            <p className="text-sm font-medium text-ink mb-4">Summary</p>
            {items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex justify-between text-sm text-ink/70 py-2"
              >
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>{formatIDR(item.price * item.qty)}</span>
              </div>
            ))}
            <div className="flex justify-between text-base font-semibold text-ink pt-4 mt-2 border-t border-line">
              <span>Total</span>
              <span>{formatIDR(subtotal)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
