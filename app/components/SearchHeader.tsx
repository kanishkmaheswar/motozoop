import Link from "next/link";

export default function SearchHeader() {
  return (
    <div className="w-full text-white" style={{ background: "linear-gradient(90deg, #0d1528, var(--brand-secondary))" }}>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <div className="text-xl font-semibold tracking-wide" style={{ color: "var(--brand-primary)" }}>NEO
          <span className="opacity-80" style={{ color: "var(--foreground)" }}>DRIFT</span>
        </div>
        <div className="flex-1">
          <div className="flex">
            <input className="w-full rounded-l-lg px-4 py-2 text-black" placeholder="Search..." />
            <button className="rounded-r-lg px-4 py-2" style={{ background: "var(--brand-primary)", color: "#1a1a1a" }}>🔍</button>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-6 text-sm">
          <Link href="#" className="hover:underline">Login / Signup</Link>
          <Link href="#" className="hover:underline">My Account ▾</Link>
          <Link href="/cart" className="hover:underline">Cart</Link>
        </div>
      </div>
    </div>
  );
}


