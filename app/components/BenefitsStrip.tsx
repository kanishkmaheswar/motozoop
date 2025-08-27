export default function BenefitsStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 my-6 card elevated" style={{ background: "color-mix(in oklab, var(--brand-secondary), transparent 90%)", borderColor: "color-mix(in oklab, var(--brand-primary), transparent 70%)" }}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
        <div className="flex items-center gap-4">
          <div className="text-3xl" aria-hidden>🚚</div>
          <div>
            <div className="font-semibold tracking-tight">Free Delivery</div>
            <div className="text-sm opacity-80">Across the country</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-3xl" aria-hidden>↩️</div>
          <div>
            <div className="font-semibold tracking-tight">Easy Returns</div>
            <div className="text-sm opacity-80">10 days return policy</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-3xl" aria-hidden>💳</div>
          <div>
            <div className="font-semibold tracking-tight">Comfort Payments</div>
            <div className="text-sm opacity-80">COD and online options</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-3xl" aria-hidden>🎧</div>
          <div>
            <div className="font-semibold tracking-tight">Customer Support</div>
            <div className="text-sm opacity-80">Mon–Sat, 9:00 AM–6:00 PM</div>
          </div>
        </div>
      </div>
    </section>
  );
}


