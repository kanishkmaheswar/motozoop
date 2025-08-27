import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16" style={{ background: "linear-gradient(180deg, #0a0e18, #05070d)", color: "#d9d9d9", borderTop: "2px solid var(--brand-primary)" }}>
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div className="space-y-4">
          <div className="text-xl font-semibold tracking-tight" style={{ color: "var(--brand-primary)" }}>MotoZoop</div>
          <div>
            <div className="font-medium mb-2">Download our app</div>
            <div className="flex items-center gap-3">
              <a className="card p-2 bg-white text-black rounded-lg" href="#" aria-label="App Store">App Store</a>
              <a className="card p-2 bg-white text-black rounded-lg" href="#" aria-label="Google Play">Google Play</a>
            </div>
          </div>
        </div>

        <div>
          <div className="font-semibold mb-3">Special</div>
          <ul className="space-y-2 opacity-90">
            <li><Link href="/shop" className="hover:underline">Featured Products</Link></li>
            <li><Link href="/shop" className="hover:underline">Latest Products</Link></li>
            <li><Link href="/shop" className="hover:underline">Best Selling</Link></li>
            <li><Link href="/shop" className="hover:underline">Top Rated</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-3">Account & Shipping Info</div>
          <ul className="space-y-2 opacity-90">
            <li><Link href="/admin" className="hover:underline">Profile Info</Link></li>
            <li><Link href="/cart" className="hover:underline">Track Order</Link></li>
            <li><Link href="/about" className="hover:underline">Refund Policy</Link></li>
            <li><Link href="/about" className="hover:underline">Cancellation Policy</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-3" style={{ color: "var(--brand-primary)" }}>Newsletter</div>
          <p className="opacity-80 mb-3">Subscribe to get the latest updates.</p>
          <form className="flex items-center gap-2">
            <input className="w-full rounded-lg px-3 py-2 text-black" placeholder="Your Email Address" />
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "color-mix(in oklab, var(--brand-primary), transparent 80%)" }} />

      <div className="mx-auto max-w-6xl px-4 py-6 grid gap-6 md:grid-cols-2 items-center">
        <div className="space-y-1 opacity-90">
          <div>Start a conversation: <span className="font-medium">9566571222</span></div>
          <div>Email: <a href="mailto:info@motozoop.com" className="hover:underline">info@motozoop.com</a></div>
          <div>Support: <Link href="/contact" className="hover:underline">Support Ticket</Link></div>
        </div>
        <div className="opacity-90 md:text-right">
          <div className="font-medium mb-1">Address</div>
          <div>Dharapuram, Tamilnadu, India</div>
        </div>
      </div>

      <div style={{ background: "#0b1220" }}>
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/70 text-sm">
          <div>Copyright © {new Date().getFullYear()} MotoZoop</div>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


