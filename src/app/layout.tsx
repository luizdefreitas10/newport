import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Luiz de Freitas - Software Developer Portfolio",
  description: "Full stack web developer portfolio, front-end, back-end",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} overflow-x-hidden`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
