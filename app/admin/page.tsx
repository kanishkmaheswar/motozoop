"use client";
import Nav from "@/app/components/Nav";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { Product, ProductInput } from "@/app/lib/types";

export default function AdminPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<ProductInput>({
    name: "",
    description: "",
    price: 0,
    currency: "INR",
    category: "Interior",
    brand: "",
    imageUrl: "",
    inStock: true,
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const isEditing = useMemo(() => Boolean(editingId), [editingId]);

  useEffect(() => {
    fetch("/api/products").then((r) => r.json()).then(setProducts);
  }, []);

  function onChange<K extends keyof ProductInput>(key: K, value: ProductInput[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit() {
    if (isEditing && editingId) {
      const res = await fetch(`/api/products/${editingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const updated = await res.json();
      setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    } else {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const created = await res.json();
      setProducts((prev) => [created, ...prev]);
    }
    setForm({ name: "", description: "", price: 0, currency: "INR", category: "Interior", brand: "", imageUrl: "", inStock: true });
    setEditingId(null);
  }

  async function onDelete(id: string) {
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  function onEdit(p: Product) {
    setEditingId(p.id);
    const { id, ...rest } = p as Product & Record<string, unknown>;
    setForm(rest as ProductInput);
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-10 grid gap-10 md:grid-cols-2">
        <section className="card elevated p-5">
          <h1 className="text-3xl font-semibold mb-6 tracking-tight">{isEditing ? "Edit" : "Add"} Product</h1>
          <div className="grid gap-3">
            <input className="border rounded p-2" placeholder="Name" value={form.name} onChange={(e) => onChange("name", e.target.value)} />
            <textarea className="border rounded p-2" placeholder="Description" value={form.description} onChange={(e) => onChange("description", e.target.value)} />
            <div className="grid grid-cols-2 gap-3">
              <input className="border rounded p-2" placeholder="Price (paise)" type="number" value={form.price} onChange={(e) => onChange("price", Number(e.target.value))} />
              <input className="border rounded p-2" placeholder="Currency" value={form.currency} onChange={(e) => onChange("currency", e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <select className="border rounded p-2" value={form.category} onChange={(e) => onChange("category", e.target.value as ProductInput["category"]) }>
                {(["Exterior","Interior","Electronics","Maintenance","Performance","Safety"] as const).map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <input className="border rounded p-2" placeholder="Brand" value={form.brand} onChange={(e) => onChange("brand", e.target.value)} />
            </div>
            <input className="border rounded p-2" placeholder="Image URL" value={form.imageUrl} onChange={(e) => onChange("imageUrl", e.target.value)} />
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={form.inStock} onChange={(e) => onChange("inStock", e.target.checked)} />
              <span>In Stock</span>
            </label>
            <button onClick={onSubmit} className="btn btn-primary elevated hover-raise w-fit">{isEditing ? "Save Changes" : "Add Product"}</button>
          </div>
        </section>

        <section className="card elevated p-5">
          <h2 className="text-3xl font-semibold mb-6 tracking-tight">Products</h2>
          <div className="grid gap-3">
            {products.map((p) => (
              <div key={p.id} className="card p-3 flex items-center justify-between">
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-sm opacity-80">{p.brand} · {p.category} · {p.currency} {(p.price/100).toFixed(2)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => onEdit(p)} className="btn text-sm">Edit</button>
                  <button onClick={() => onDelete(p.id)} className="btn text-sm">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}


