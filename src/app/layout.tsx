import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Satori UI",
  description: "Minimalist UI Components that Just Flows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        {/* In your layout.tsx or equivalent */}
        <div className="fixed top-0 left-0 w-full z-50">
          <div className="flex items-center justify-between px-6 py-3 bg-transparent">
            {/* Logo (left) */}
            <div
              style={{ width: 56, height: 56 }}
              className="flex items-center"
            >
              <img
                src="/satori-logo.svg"
                alt="Satori UI Logo"
                className="rounded-lg shadow-xl border border-gray-200 bg-white"
                draggable={false}
              />
            </div>
            {/* GitHub Link (right) */}
            <a
              href="https://github.com/d2d-weizhi/satori-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 font-mono text-sm transition"
              aria-label="View Satori UI on GitHub"
            >
              {/* GitHub SVG icon */}
              <img src="/github.svg" height="24px" width="24px" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <main className="min-h-screen flex flex-col w-full pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
