"use client";
import { useCallback } from "react";
import { useToast } from "@/app/components/ToastHost";

type Props = {
  id: string;
  name: string;
  price: number;
  currency: string;
};

export default function AddToCartButton({ id, name, price, currency }: Props) {
  const toast = useToast();
  const onAdd = useCallback(() => {
    const key = "motozoop_cart";
    const raw = typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
    const items = raw ? (JSON.parse(raw) as any[]) : [];
    const idx = items.findIndex((i) => i.id === id);
    if (idx >= 0) {
      items[idx].quantity += 1;
    } else {
      items.push({ id, name, price, currency, quantity: 1 });
    }
    window.localStorage.setItem(key, JSON.stringify(items));
    toast(`Added ${name} to cart`);
  }, [id, name, price, currency, toast]);

  return (
    <button onClick={onAdd} className="rounded border px-3 py-1 text-sm hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]">
      Add to Cart
    </button>
  );
}


