import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VAIVENE - Wear The World You Love",
  description:
    "Premium Anime & Gaming Streetwear, Oversized Clothing, and Merch. Shop anime jerseys, acid wash tees, hoodies, and more. Bangladesh's #1 anime streetwear store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
