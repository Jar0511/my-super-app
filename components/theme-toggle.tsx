"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themes = [
  {
    key: "light",
    label: "라이트",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
  {
    key: "system",
    label: "시스템",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    key: "dark",
    label: "다크",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
  },
] as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className="flex h-8 w-[6.5rem] items-center rounded-full"
        style={{ background: "var(--toggle-bg)" }}
      />
    );
  }

  const activeIndex = themes.findIndex((t) => t.key === theme);

  return (
    <div
      className="relative flex h-8 w-[6.5rem] items-center rounded-full p-0.5"
      style={{ background: "var(--toggle-bg)" }}
    >
      {/* Sliding indicator */}
      <div
        className="absolute top-0.5 h-7 w-[calc(100%/3-2px)] rounded-full transition-transform duration-300 ease-in-out"
        style={{
          background: "var(--toggle-indicator)",
          boxShadow: `0 1px 3px var(--toggle-shadow)`,
          transform: `translateX(calc(${activeIndex} * (100% + 3px)))`,
          left: "2px",
        }}
      />

      {themes.map((t) => (
        <button
          key={t.key}
          onClick={() => setTheme(t.key)}
          className="relative z-10 flex flex-1 cursor-pointer items-center justify-center transition-colors duration-200"
          style={{
            color: theme === t.key ? "var(--text-primary)" : "var(--text-secondary)",
          }}
          title={t.label}
          aria-label={t.label}
        >
          {t.icon}
        </button>
      ))}
    </div>
  );
}
