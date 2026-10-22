import { personalData } from "../../../../utils/data/personal-data.js";

// Primary contact channel by audience: foreign clients expect email (and
// LinkedIn); Vietnamese SMEs expect Zalo. The first entry is the main button.
export function contactChannels(lang) {
  const email = { kind: "email", href: `mailto:${personalData.email}`, external: false };
  const zalo = { kind: "zalo", href: personalData.zalo, external: true };
  return lang === "vi" ? [zalo, email] : [email, zalo];
}
