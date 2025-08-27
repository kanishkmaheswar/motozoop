"use client";
import { useEffect, useState } from "react";

function format(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function TopSaleBanner() {
  const [end] = useState(() => Date.now() + 1000 * 60 * 60 * 24); // 24h from mount
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const { days, hours, minutes, seconds } = format(end - now);

  return (
    <div className="w-full text-white" style={{ background: "linear-gradient(90deg, var(--brand-secondary), #0b1220)" }}>
      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between gap-4">
        <div className="font-semibold tracking-wide" style={{ color: "var(--brand-primary)" }}>MOTOSALE</div>
        <div className="text-sm">ENDS IN:</div>
        <div className="flex items-center gap-5 font-mono">
          <div className="flex items-end gap-1"><span className="text-xl">{String(days).padStart(2, "0")}</span><span className="text-xs">Days</span></div>
          <div className="flex items-end gap-1"><span className="text-xl">{String(hours).padStart(2, "0")}</span><span className="text-xs">Hours</span></div>
          <div className="flex items-end gap-1"><span className="text-xl">{String(minutes).padStart(2, "0")}</span><span className="text-xs">Minutes</span></div>
          <div className="flex items-end gap-1"><span className="text-xl">{String(seconds).padStart(2, "0")}</span><span className="text-xs">Seconds</span></div>
        </div>
        <button className="btn btn-primary">Hurry!</button>
      </div>
    </div>
  );
}


