import Image from "next/image";
import Nav from "@/app/components/Nav";
import AddToCartButton from "@/app/components/AddToCartButton";
import { readProducts } from "@/app/lib/fs";

export default async function ShopPage() {
  const products = await readProducts();
  return (
    <div className="min-h-screen gradient-bg">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-semibold mb-6 tracking-tight">Shop Accessories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="card elevated hover-raise p-4 flex flex-col gap-3 bg-[color-mix(in_oklab,var(--background),transparent_4%)]">
              <div className="w-full aspect-video relative glass rounded-lg">
                <Image src={p.imageUrl || "/vercel.svg"} alt={p.name} fill className="object-contain p-4" />
              </div>
              <div className="flex-1">
                <h2 className="font-medium text-lg tracking-tight">{p.name}</h2>
                <p className="text-sm opacity-80 line-clamp-2">{p.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">{p.currency} {(p.price / 100).toFixed(2)}</span>
                <AddToCartButton id={p.id} name={p.name} price={p.price} currency={p.currency} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}


