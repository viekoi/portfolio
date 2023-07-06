import "./globals.css";
import Navbar from "@/components/Navbar";
import NextThemeProvider from "@/providers/theme-provider";

export const metadata = {
  title: "Khôi Nguyễn",
  description: "Khôi Nguyễn's personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-[#121212]">
        <NextThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem
          >
           <Navbar/>
            {children}
          </NextThemeProvider >

      </body>
    </html>
  );
}
