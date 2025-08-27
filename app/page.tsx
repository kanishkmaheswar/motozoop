import Link from "next/link";
import Nav from "@/app/components/Nav";
import { readProducts } from "@/app/lib/fs";
import BenefitsStrip from "@/app/components/BenefitsStrip";
import Footer from "@/app/components/Footer";

export default async function Home() {
  const products = await readProducts();
  const featured = products.slice(0, 3);
  return (
    <div className="min-h-screen gradient-bg">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-20 grid gap-12 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 pill">New season · Summer 2025</div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">Upgrade Your Ride with MotoZoop</h1>
          <p className="text-lg opacity-80 max-w-prose">Premium car accessories for style, comfort, and performance. Discover curated picks from top brands, ready to ship.</p>
          <div className="flex gap-3">
            <Link href="/shop" className="btn btn-primary elevated hover-raise">Shop Now</Link>
            <Link href="/admin" className="btn btn-ghost">Admin</Link>
          </div>
        </div>
        <div className="rounded-2xl elevated aspect-video glass" />
      </main>
      {/* Benefits placed near footer */}
      
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-3xl font-semibold mb-6 tracking-tight">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featured.map((p) => (
            <div key={p.id} className="card elevated hover-raise p-4">
              <div className="font-medium text-lg">{p.name}</div>
              <div className="opacity-80 text-sm line-clamp-2">{p.description}</div>
              <div className="mt-3 font-semibold">{p.currency} {(p.price/100).toFixed(2)}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-3xl font-semibold mb-6 tracking-tight">What Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <blockquote className="card elevated p-4">
            <p className="opacity-90">“The LED bulbs are insanely bright and easy to fit. Love it!”</p>
            <footer className="mt-3 text-sm opacity-70">— Aarav, Mumbai</footer>
          </blockquote>
          <blockquote className="card elevated p-4">
            <p className="opacity-90">“Floor mats fit perfectly and are easy to clean. Great value.”</p>
            <footer className="mt-3 text-sm opacity-70">— Neha, Pune</footer>
          </blockquote>
          <blockquote className="card elevated p-4">
            <p className="opacity-90">“Super fast delivery and quality products. Will shop again.”</p>
            <footer className="mt-3 text-sm opacity-70">— Rohan, Delhi</footer>
          </blockquote>
        </div>
      </section>
      <BenefitsStrip />
      <Footer />
    </div>
  );
}
