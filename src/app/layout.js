import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Super Cool Number Guessing Game",
  description: "Number guessing game project to work on React/CSS/JavaScript skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col items-center justify-center`}>{children}</body>
    </html>
  );
}
