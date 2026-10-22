import AboutSection from "./homepage/about";
import ContactSection from "./homepage/contact";
import ContactBand from "./homepage/contact/contact-band";
import Education from "./homepage/education";
import Experience from "./homepage/experience";
import HeroSection from "./homepage/hero-section";
import Projects from "./homepage/projects";
import Services from "./homepage/services";
import Skills from "./homepage/skills";
import SiteShell from "./site-shell";

// The portfolio page in one language. Rendered at "/" (en) and "/vi" (vi).
// Order follows a service page: offer → proof → ask → person → details → ask.
export default function HomePage({ lang = "en" }) {
  return (
    <SiteShell lang={lang}>
      <HeroSection lang={lang} />
      <Services lang={lang} />
      <Experience lang={lang} />
      <Projects lang={lang} />
      <ContactBand lang={lang} />
      <AboutSection lang={lang} />
      <Skills lang={lang} />
      <Education lang={lang} />
      <ContactSection lang={lang} />
    </SiteShell>
  );
}
