import { Public_Sans } from "@next/font/google";
import "../styles/globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${publicSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
