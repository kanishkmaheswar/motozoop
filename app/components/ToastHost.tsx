"use client";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

type Toast = { id: string; message: string };

const ToastContext = createContext<(message: string) => void>(() => {});

export function useToast() {
  return useContext(ToastContext);
}

export default function ToastHost({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const add = useCallback((message: string) => {
    const id = String(Date.now() + Math.random());
    setToasts((t) => [...t, { id, message }]);
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 2500);
  }, []);

  return (
    <ToastContext.Provider value={add}>
      {children}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-[1000]">
        {toasts.map((t) => (
          <div key={t.id} className="card elevated px-4 py-2" style={{ background: "color-mix(in oklab, var(--background), transparent 10%)" }}>
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}


