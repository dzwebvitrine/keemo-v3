import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KEEMO V3",
  description: "Designed & Created by Runcodedz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
