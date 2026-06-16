import "./globals.css";
import { Montserrat } from "next/font/google";

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
        className={`${montserrat.className} min-h-full flex justify-center overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
