import { GoogleTagManager } from "@next/third-parties/google";
import { personalData } from "@/utils/data/personal-data";
import { Inter, JetBrains_Mono } from "next/font/google";
import { themeInitScript } from "./components/helper/theme-script";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-jetbrains",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.khoariodev.online";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: `${personalData.name} | ${personalData.designation}`,
  description: personalData.description,
  openGraph: {
    title: `${personalData.name} | ${personalData.designation}`,
    description: personalData.description,
    images: [{ url: "/image/avatar-blue-shirt.jpg", width: 2460, height: 2460 }],
    type: "website",
  },
};

export const viewport = {
  themeColor: "#f2f0ea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
