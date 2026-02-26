import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import DateTimeText from "@/components/datetime-text";
import ThemeProvider from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Responsive OS Style Demo",
  description:
    "Single-container responsive page inspired by iOS, iPadOS, and macOS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <main
            className="relative min-h-screen w-screen overflow-hidden transition-colors duration-500"
            style={{
              background: `
                radial-gradient(circle at 15% 20%, var(--scene-grad-1) 0%, transparent 40%),
                radial-gradient(circle at 85% 25%, var(--scene-grad-2) 0%, transparent 45%),
                linear-gradient(150deg, var(--scene-grad-3-from) 0%, var(--scene-grad-3-mid) 35%, var(--scene-grad-3-to) 100%)
              `,
            }}
          >
            <section className="relative flex min-h-screen w-full flex-col">
              {/* Top bar */}
              <div
                className="relative z-10 flex items-center justify-between px-5 py-3 backdrop-blur-xl transition-colors duration-300 xl:px-6 xl:py-2"
                style={{
                  background: "var(--glass-bg)",
                  borderBottom: "1px solid var(--glass-border)",
                }}
              >
                {/* Left: Title (desktop only) */}
                <p
                  className="hidden text-xs font-semibold xl:block"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Responsive OS Demo
                </p>

                {/* Center: DateTime (mobile/tablet left, desktop reorder) */}
                <DateTimeText />

                {/* Right: Theme toggle */}
                <ThemeToggle />
              </div>

              {children}
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
