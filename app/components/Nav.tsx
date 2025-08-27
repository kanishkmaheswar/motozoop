"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="w-full sticky top-0 z-40 glass border-b" style={{ borderColor: "color-mix(in oklab, var(--brand-primary), transparent 80%)" }}>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight" style={{ color: "var(--brand-primary)" }}>MotoZoop</Link>
        <nav className="flex items-center gap-1 text-sm sm:text-base">
          <Link href="/shop" className="pill hover-raise">Shop</Link>
          <Link href="/about" className="pill hover-raise">About</Link>
          <Link href="/contact" className="pill hover-raise">Contact</Link>
          <Link href="/cart" className="pill hover-raise">Cart</Link>
          <Link href="/admin" className="pill hover-raise">Admin</Link>
        </nav>
      </div>
    </header>
  );
}


