import "./globals.css";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diary About You",
  description: "A diary about you",
};

const montserrat = Montserrat({
  weight: ["400", "200", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased bg-black">
      <body
        className={`${montserrat.className} flex justify-center text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
