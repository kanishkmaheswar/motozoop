"use client";
import Nav from "@/app/components/Nav";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Contact Us</h1>
        {sent ? (
          <div className="card elevated p-4">Thanks! We received your message and will get back soon.</div>
        ) : (
          <form onSubmit={onSubmit} className="card elevated p-5 grid gap-3">
            <input className="border rounded p-2" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="border rounded p-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea className="border rounded p-2" placeholder="Message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
            <button className="btn btn-primary elevated hover-raise w-fit">Send Message</button>
          </form>
        )}
      </main>
    </div>
  );
}


