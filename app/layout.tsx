import { Fira_Code, Francois_One } from "next/font/google";
import 'normalize.css';
import "./globals.css";

const fira = Fira_Code({ subsets: ["latin"], variable: '--font-fira' });
const francois = Francois_One({weight: "400",subsets: ["latin"], variable: '--font-francois'});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fira.variable} ${francois.variable}`}>{children}</body>
    </html>
  );
}
