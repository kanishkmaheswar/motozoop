export default function PromoTicker() {
  return (
    <div className="w-full text-white text-sm" style={{ background: "linear-gradient(90deg, #3b2a09, var(--brand-accent))" }}>
      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center gap-5 overflow-x-auto whitespace-nowrap">
        <span>Value Above 1000</span>
        <span>•</span>
        <span>Site-Wide Free Shipping (No Min. Order Value)</span>
        <span>•</span>
        <span>Code 'LOVENEODRIFT' for Special Discount</span>
        <span>•</span>
        <span>Auto-Applied on Cart Value Above 1000</span>
      </div>
    </div>
  );
}


