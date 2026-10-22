import HomePage from "./components/home-page";

export const metadata = {
  alternates: { canonical: "/", languages: { en: "/", vi: "/vi" } },
};

export default function Home() {
  return <HomePage lang="en" />;
}
