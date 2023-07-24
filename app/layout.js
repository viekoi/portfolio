import "./globals.css";
import Navbar from "@/components/Navbar";
import NextThemeProvider from "@/providers/theme-provider";
import { Exo_2 } from "next/font/google";
import Footer from "@/components/Footer";

const exo2 = Exo_2({ subsets: ["latin"] });

export const metadata = {
  title: "Khôi Nguyễn",
  description: "Khôi Nguyễn's personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo2.className}>
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="dark:bg-[#121212]">
            <Navbar />
            {children}
            <Footer/>
          </div>
        </NextThemeProvider>
      </body>
    </html>
  );
}
