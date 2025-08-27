"use client";
import Nav from "@/app/components/Nav";
import { useEffect, useState } from "react";
import { useToast } from "@/app/components/ToastHost";

interface CartItem {
  id: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const toast = useToast();

  useEffect(() => {
    const raw = localStorage.getItem("motozoop_cart");
    if (raw) setItems(JSON.parse(raw));
  }, []);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  function openRemove(id: string) {
    setConfirmId(id);
  }

  function closeDialog() {
    setConfirmId(null);
  }

  function removeItem(id: string) {
    setItems((prev) => {
      const next = prev.filter((p) => p.id !== id);
      localStorage.setItem("motozoop_cart", JSON.stringify(next));
      return next;
    });
    toast("Removed item from cart");
    closeDialog();
  }

  function changeQuantity(id: string, delta: number) {
    setItems((prev) => {
      const next = prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + delta } : p)).filter((p) => p.quantity > 0);
      localStorage.setItem("motozoop_cart", JSON.stringify(next));
      return next;
    });
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-semibold mb-6 tracking-tight">Your Cart</h1>
        {items.length === 0 ? (
          <p className="opacity-80">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {items.map((i) => (
              <div key={i.id} className="flex items-center justify-between card elevated p-4">
                <div>
                  <div className="font-medium">{i.name}</div>
                  <div className="text-sm opacity-80">
                    {i.currency} {(i.price / 100).toFixed(2)} × {i.quantity}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <button className="btn" onClick={() => (i.quantity <= 1 ? openRemove(i.id) : changeQuantity(i.id, -1))}>−</button>
                    <span className="min-w-[2ch] text-center">{i.quantity}</span>
                    <button className="btn" onClick={() => changeQuantity(i.id, 1)}>+</button>
                  </div>
                  <div className="font-semibold">
                    {i.currency} {((i.price * i.quantity) / 100).toFixed(2)}
                  </div>
                  <button className="btn" onClick={() => openRemove(i.id)}>Remove</button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between border-t pt-3 mt-2">
              <div className="font-medium">Total</div>
              <div className="font-semibold">INR {(total / 100).toFixed(2)}</div>
            </div>
            <button className="self-end btn btn-primary elevated hover-raise">Checkout (demo)</button>
          </div>
        )}
        {/* Confirm Remove Dialog */}
        {confirmId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "color-mix(in oklab, var(--background), transparent 40%)" }}>
            <div className="card elevated p-5 max-w-sm w-[90%]" style={{ background: "color-mix(in oklab, var(--background), transparent 5%)" }}>
              <div className="text-lg font-semibold mb-2">Remove item?</div>
              <p className="opacity-80 mb-4">Are you sure you want to remove this item from your cart?</p>
              <div className="flex items-center justify-end gap-2">
                <button className="btn" onClick={closeDialog}>Cancel</button>
                <button className="btn btn-primary" onClick={() => removeItem(confirmId)}>Remove</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}


