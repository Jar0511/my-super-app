"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface AppShellProps {
  title: string;
  children: React.ReactNode;
}

export default function AppShell({ title, children }: AppShellProps) {
  const router = useRouter();
  const [isClosing, setIsClosing] = useState(false);

  const closeApp = () => {
    if (isClosing) {
      return;
    }

    setIsClosing(true);
    window.setTimeout(() => {
      router.push("/");
    }, 240);
  };

  return (
    <div
      className={`h-full w-full ${isClosing ? "app-close-active" : ""}`}
      style={{ animationDuration: "var(--app-close-duration)" }}
    >
      <div className="flex h-full w-full flex-col backdrop-blur-sm">
        <header
          className="flex items-center justify-between px-5 py-3 backdrop-blur-xl transition-colors duration-300 xl:px-6 xl:py-2"
          style={{
            background: "var(--glass-bg)",
            borderBottom: "1px solid var(--glass-border)",
          }}
        >
          <h1 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
            {title}
          </h1>
          <button
            type="button"
            onClick={closeApp}
            disabled={isClosing}
            className="rounded-md px-3 py-1.5 text-xs font-medium transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            style={{
              background: "var(--toggle-bg)",
              color: "var(--text-primary)",
            }}
            aria-label="Close app"
          >
            Close
          </button>
        </header>

        <div className="flex-1 overflow-auto p-5 md:p-8">{children}</div>
      </div>
    </div>
  );
}
