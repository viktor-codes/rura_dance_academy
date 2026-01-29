import localFont from "next/font/local";
import { Roboto } from "next/font/google";

export const angst = localFont({
  src: [
    {
      path: "../../public/fonts/angst/Angst-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/angst/Angst-Normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/angst/Angst-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-angst",
  display: "swap",
});

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});
