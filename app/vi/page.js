import { getDict } from "@/utils/i18n/dictionary";
import HomePage from "../components/home-page";

const t = getDict("vi");

export const metadata = {
  title: t.meta.title,
  description: t.meta.description,
  alternates: { canonical: "/vi", languages: { en: "/", vi: "/vi" } },
  openGraph: { title: t.meta.title, description: t.meta.description, locale: "vi_VN" },
};

export default function HomeVi() {
  return <HomePage lang="vi" />;
}
