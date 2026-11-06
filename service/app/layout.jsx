import { Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-jetbrains",
});

const title = "Thống Khoa làm phần mềm | Web, app, phần mềm quản lý";
const description =
  "Làm web, app, phần mềm quản lý theo đúng cách bạn làm ăn. Một người tư vấn, làm và bảo trì. Mọi thứ đứng tên bạn.";

export const metadata = {
  metadataBase: new URL("https://service.khoariodev.online"),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "vi_VN",
    type: "website",
    images: [{ url: "/image/thong-khoa.jpg", width: 800, height: 620 }],
  },
};

export const viewport = { themeColor: "#f5f2ea" };

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${beVietnam.variable} ${jetbrains.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
