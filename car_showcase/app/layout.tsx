import { Navbar, Footer } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Car Porn",
  description: "Discover Best Car Porns",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
