import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (product, size, qty = 1) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (it) => it.id === product.id && it.size === size
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          qty: next[existingIndex].qty + qty,
        };
        return next;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          size,
          qty,
        },
      ];
    });
  };

  const updateQty = (id, size, qty) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((it) => !(it.id === id && it.size === size))
        : prev.map((it) =>
            it.id === id && it.size === size ? { ...it, qty } : it
          )
    );
  };

  const removeItem = (id, size) => {
    setItems((prev) => prev.filter((it) => !(it.id === id && it.size === size)));
  };

  const clearCart = () => setItems([]);

  const totalItems = useMemo(
    () => items.reduce((sum, it) => sum + it.qty, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, it) => sum + it.qty * it.price, 0),
    [items]
  );

  const value = {
    items,
    addItem,
    updateQty,
    removeItem,
    clearCart,
    totalItems,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
