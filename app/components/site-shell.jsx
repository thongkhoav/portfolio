import Footer from "./footer";
import HtmlLang from "./helper/html-lang";
import ScrollProgress from "./helper/scroll-progress";
import ScrollToTop from "./helper/scroll-to-top";
import Navbar from "./navbar";

// Chrome for the portfolio pages. /links renders without it.
export default function SiteShell({ lang = "en", children }) {
  return (
    <>
      <HtmlLang lang={lang} />
      <ScrollProgress />
      <Navbar lang={lang} />
      <main className="relative mx-auto min-h-screen px-5 sm:px-8 lg:max-w-[70rem] xl:max-w-[76rem]">
        {children}
      </main>
      <Footer lang={lang} />
      <ScrollToTop />
    </>
  );
}
