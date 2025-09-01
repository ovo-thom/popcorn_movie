import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FavoritesProvider } from "@/contexts/FavoritesContext";

export const metadata = {
  title: "Popcorn Movie",
  description: "Popcorn Movie, your official website for watching your favorite movies",
  icons: {
    icon: "/popcorn.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body flex min-h-screen flex-col bg-[#121212]">
        <FavoritesProvider>
          <Header />
          <main className="flex-1 h-full">{children}</main>
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
