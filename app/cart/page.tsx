"use client";
import Nav from "@/app/components/Nav";
import { useEffect, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("motozoop_cart");
    if (raw) setItems(JSON.parse(raw));
  }, []);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

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
                <div className="font-semibold">
                  {i.currency} {((i.price * i.quantity) / 100).toFixed(2)}
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
      </main>
    </div>
  );
}


