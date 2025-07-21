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
        <div className="fixed top-5 left-5 z-50"
          style={{
            width: 56,
            height: 56
          }}
        >
          <img 
            src="/satori-logo.svg"
            alt="Satori UI Logo"
            className="rounded-lg shadow-xl border border-gray-200 bg-white"
            draggable={false}
          />
        </div>
        <main className="min-h-screen flex flex-col px-20 sm:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
