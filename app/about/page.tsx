import Nav from "@/app/components/Nav";

export default function AboutPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Nav />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About MotoZoop</h1>
        <p className="opacity-80 mb-6">We’re on a mission to make upgrading your car simple, affordable, and exciting. From performance parts to everyday accessories, we curate quality products from trusted brands.</p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card elevated p-4">
            <div className="font-semibold mb-1">Quality First</div>
            <p className="opacity-80 text-sm">Every item is vetted for build quality, fitment, and durability.</p>
          </div>
          <div className="card elevated p-4">
            <div className="font-semibold mb-1">Fast Shipping</div>
            <p className="opacity-80 text-sm">We partner with reliable logistics to deliver quickly across India.</p>
          </div>
          <div className="card elevated p-4">
            <div className="font-semibold mb-1">Support You Can Trust</div>
            <p className="opacity-80 text-sm">Friendly support for product questions, returns, and recommendations.</p>
          </div>
        </div>
      </main>
    </div>
  );
}


