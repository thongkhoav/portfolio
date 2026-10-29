import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { educations } from "../utils/data/educations.js";
import { experiences } from "../utils/data/experience.js";
import { personalData } from "../utils/data/personal-data.js";
import { projectsData } from "../utils/data/projects-data.js";

const readSource = (relativePath) =>
  readFile(new URL(relativePath, import.meta.url), "utf8");

test("publishes Vo Thong Khoa's verified public profile", () => {
  assert.deepEqual(
    {
      name: personalData.name,
      designation: personalData.designation,
      email: personalData.email,
      address: personalData.address,
      github: personalData.github,
      linkedIn: personalData.linkedIn,
      leetcode: personalData.leetcode,
      resume: personalData.resume,
    },
    {
      name: "Vo Thong Khoa",
      designation: "Software Engineer",
      email: "thongkhoa2002@gmail.com",
      address: "Ho Chi Minh City, Viet Nam",
      github: "https://github.com/thongkhoav",
      linkedIn: "https://www.linkedin.com/in/khoa-vo-thong-38a68329b/",
      leetcode: "https://leetcode.com/u/thongkhoavo/",
      resume:
        "https://drive.google.com/file/d/1d9KYrL7AS741sCLEZjRDkwpDUB2Tzehy/view?usp=sharing",
    },
  );
});

test("uses a Zalo friend link instead of a public phone number", () => {
  assert.equal(personalData.zalo, "https://zaloapp.com/qr/p/x67wwb8h51un");
  for (const field of ["phone", "phoneHref", "phoneDisplay"]) {
    assert.equal(field in personalData, false, `${field} should not be public`);
  }
});

test("does not publish excluded social profiles", () => {
  for (const field of ["facebook", "twitter", "stackOverflow", "devUsername"]) {
    assert.equal(field in personalData, false, `${field} should not be public`);
  }
});

test("uses only real photos, no AI-generated images", async () => {
  assert.deepEqual(personalData.profileImages, [
    "/image/avatar-hero.jpg",
    "/image/work-office-desk.jpg",
    "/image/work-cafe-window.jpg",
    "/image/work-home-desk.jpg",
    "/image/avatar-front-of-laptop.jpg",
  ]);
  for (const aiImage of ["vothongkhoa_2d.png", "Code_Generated_Image.png", "upper-avt-square.png"]) {
    await assert.rejects(readSource(`../public/image/${aiImage}`), { code: "ENOENT" });
  }
});

test("matches the verified experience and education history", () => {
  assert.deepEqual(
    experiences.map(({ title, company, duration }) => ({ title, company, duration })),
    [
      {
        title: "Software Engineer",
        company: "Cigro Inc.",
        duration: "Nov 2024 - Present",
      },
      {
        title: "Intern Web Developer",
        company: "FPT Software",
        duration: "May 2023 - Sep 2023",
      },
    ],
  );

  assert.deepEqual(educations, [
    {
      id: 1,
      title: "Bachelor of Software Engineering",
      duration: "Sep 2020 - Sep 2024",
      institution: "FPT University",
      details: "GPA: 8.4/10",
    },
  ]);
});

test("features only the Task Management App with public source and demo links", () => {
  assert.equal(projectsData.length, 1);
  assert.equal(projectsData[0].name, "Task Management App");
  assert.deepEqual(projectsData[0].code, [
    {
      label: "Frontend",
      url: "https://github.com/thongkhoav/fe_task_nextjs",
    },
    {
      label: "Backend",
      url: "https://github.com/thongkhoav/be_task_nestjs",
    },
  ]);
  assert.equal(projectsData[0].demo, "https://fe-task-nextjs.vercel.app");
});

test("removes the blog integration from the homepage and navigation", async () => {
  const [homeSource, navbarSource] = await Promise.all([
    readSource("../app/page.js"),
    readSource("../app/components/navbar.jsx"),
  ]);

  assert.doesNotMatch(homeSource, /dev\.to|<Blog|homepage\/blog/);
  assert.doesNotMatch(navbarSource, /\/blog|BLOGS/i);
});

test("removes the contact form and Telegram/Gmail integrations", async () => {
  const [contactSource, envExample, packageSource] = await Promise.all([
    readSource("../app/components/homepage/contact/index.jsx"),
    readSource("../.env.example"),
    readSource("../package.json"),
  ]);

  assert.doesNotMatch(contactSource, /ContactForm|contact-form/);
  assert.doesNotMatch(
    envExample,
    /NEXT_PUBLIC_APP_URL|TELEGRAM_BOT_TOKEN|TELEGRAM_CHAT_ID|GMAIL_PASSKEY|EMAIL_ADDRESS/,
  );
  assert.doesNotMatch(
    packageSource,
    /@emailjs\/browser|axios|nodemailer|react-google-recaptcha|react-toastify/,
  );

  await assert.rejects(
    readSource("../app/components/homepage/contact/contact-form.jsx"),
    { code: "ENOENT" },
  );
  await assert.rejects(readSource("../app/api/contact/route.js"), {
    code: "ENOENT",
  });
  await assert.rejects(readSource("../app/api/google/route.js"), {
    code: "ENOENT",
  });
  await assert.rejects(readSource("../utils/check-email.js"), {
    code: "ENOENT",
  });
});

test("removes the template author's identity from rendered source", async () => {
  const sources = await Promise.all(
    [
      "../app/layout.js",
      "../app/components/navbar.jsx",
      "../app/components/footer.jsx",
      "../app/components/homepage/hero-section/index.jsx",
      "../app/components/homepage/about/index.jsx",
      "../app/components/homepage/contact/index.jsx",
    ].map(readSource),
  );

  assert.doesNotMatch(
    sources.join("\n"),
    /Abu Said|ABU SAID|said7388|Bangladesh|facebook|twitter|stackOverflow/i,
  );
});
