import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from '../utils/lenis';

export const metadata: Metadata = {
  title: "LokaLink",
  description: "Temukan produk lokal dengan mudah tanpa harus cari kesana kemari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis options={{ duration: 1.7}} root>
      <body className='overflow-hidden'>{children}</body>
      </ReactLenis>
    </html>
  );
}
