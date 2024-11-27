import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Tagline Tattoo Studio",
  description: "Welcome to the home of the best tattoo experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
