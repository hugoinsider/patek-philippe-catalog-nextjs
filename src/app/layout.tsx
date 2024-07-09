import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const poppins = Poppins({ weight: ["300", "400", "500", "600"], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Catalogo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
