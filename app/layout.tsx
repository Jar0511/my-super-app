import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import DateTimeText from "@/components/datetime-text";
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
  description: "Single-container responsive page inspired by iOS, iPadOS, and macOS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="scene-bg relative min-h-screen w-screen overflow-hidden">
          <section className="relative flex min-h-screen w-full flex-col">
            <div className="text-slate-700 relative flex items-center justify-between bg-transparent px-4 py-3 backdrop-blur-md xl:bg-white/50 xl:px-5 xl:py-2">
              <p className="hidden text-xs font-semibold xl:block">
                Responsive OS Demo
              </p>
              <DateTimeText />
            </div>
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
