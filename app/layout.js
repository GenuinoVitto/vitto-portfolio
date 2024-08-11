import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Vitto Genuino",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any"></link>
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
