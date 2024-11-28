import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/styles/masking.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
