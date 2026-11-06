import Image from "next/image";
import CopyMessage from "./components/copy-message";
import {
  brand,
  demos,
  email,
  faqs,
  messageTemplate,
  pains,
  promises,
  services,
  steps,
} from "../data/site";

const zaloUrl = process.env.NEXT_PUBLIC_ZALO_URL || "#lien-he";

function ZaloButton({ children = "Nhắn Zalo", className = "" }) {
  return (
    <a
      href={zaloUrl}
      target={zaloUrl.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-mint px-6 font-semibold text-ink transition-colors hover:bg-[#2fc986] ${className}`}
    >
      {children}
    </a>
  );
}

function SectionHead({ label, title, children }) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-sm text-mint-deep">{label}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-balance sm:text-3xl">{title}</h2>
      {children && <p className="mt-3 leading-relaxed text-muted">{children}</p>}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
          <a href="#dau-trang" className="truncate font-bold tracking-tight">
            {brand}
          </a>
          <nav aria-label="Các mục chính" className="hidden items-center gap-6 text-sm text-muted md:flex">
            <a className="hover:text-ink" href="#demo">Demo</a>
            <a className="hover:text-ink" href="#gia">Giá</a>
            <a className="hover:text-ink" href="#cach-lam">Cách làm</a>
            <a className="hover:text-ink" href="#hoi-dap">Hỏi đáp</a>
          </nav>
          <a
            href={zaloUrl}
            target={zaloUrl.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="inline-flex min-h-9 shrink-0 items-center rounded-full bg-ink px-4 text-sm font-semibold text-paper"
          >
            Nhắn Zalo
          </a>
        </div>
      </header>

      <main id="dau-trang">
        <section className="mx-auto grid max-w-5xl items-center gap-8 px-4 pt-8 pb-12 sm:px-6 md:grid-cols-[1.15fr_1fr] md:gap-12 md:pt-16 md:pb-20">
          <div>
            <p className="font-mono text-sm text-mint-deep">&gt; web · app · phần mềm quản lý</p>
            <h1 className="mt-3 text-4xl leading-[1.12] font-extrabold tracking-tight text-balance sm:text-5xl">
              Phần mềm làm theo đúng cách bạn làm ăn.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Mình là Thống Khoa, lập trình viên full-stack ở TP.HCM. Một người tư vấn, làm và bảo trì.
              Mọi thứ đứng tên bạn.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ZaloButton>Nhắn Zalo cho mình</ZaloButton>
              <a
                href="#demo"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/25 px-6 font-semibold transition-colors hover:border-ink"
              >
                Bấm thử demo
              </a>
            </div>
          </div>
          <Image
            src="/image/thong-khoa.jpg"
            alt="Thống Khoa đứng bên bờ sông Sài Gòn buổi tối"
            width={800}
            height={620}
            priority
            className="w-full rounded-3xl object-cover"
          />
        </section>

        <section className="border-y border-line bg-card">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
            <SectionHead label="// có giống bạn không?" title="Những chuyện mình hay nghe" />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {pains.map((pain) => (
                <li key={pain} className="flex gap-3 rounded-2xl border border-line bg-paper p-4 leading-snug">
                  <span aria-hidden="true" className="font-mono text-mint-deep">&gt;</span>
                  {pain}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="demo" className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20">
          <SectionHead label="// bấm thử" title="Đừng nghe mình nói, bấm thử đi">
            Đây là các bản demo mình làm, dùng dữ liệu giả. Mở trên điện thoại là bấm được ngay.
          </SectionHead>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {demos.map((demo) => (
              <article key={demo.name} className="flex flex-col overflow-hidden rounded-3xl border border-line bg-card">
                <div className="relative aspect-[4/5] overflow-hidden bg-line">
                  <Image
                    src={demo.image}
                    alt={demo.alt}
                    width={640}
                    height={1385}
                    className="w-full object-cover object-top"
                  />
                  <span className="absolute bottom-3 left-3 rounded-md bg-term px-2 py-1 font-mono text-xs text-term-text">
                    BẢN DEMO · dữ liệu giả
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-mono text-xs text-mint-deep">{demo.kind}</p>
                  <h3 className="mt-1 text-xl font-bold">{demo.name}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-muted">{demo.points}</p>
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 font-semibold text-paper"
                  >
                    Bấm thử {demo.name}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="gia" className="bg-term text-term-text">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1fr_1.5fr] md:gap-12 md:py-20">
            <div>
              <p className="font-mono text-sm text-mint">// bao nhiêu tiền</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Làm được gì, khoảng bao nhiêu
              </h2>
              <p className="mt-3 leading-relaxed">
                Đây là mức khởi điểm để bạn hình dung. Bản bạn cần có thể nhỏ hơn bạn nghĩ. Giá chốt nằm trong
                bản mô tả một trang, làm đúng như vậy.
              </p>
            </div>
            <ul className="divide-y divide-white/15 font-mono text-sm sm:text-base">
              {services.map((service) => (
                <li key={service.name} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="font-sans">{service.name}</span>
                  <span className="shrink-0 text-mint">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="cach-lam" className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20">
          <SectionHead label="// cách làm việc" title="Rõ từng bước, không phát sinh giữa chừng" />
          <ol className="mt-8 grid gap-6 md:grid-cols-5 md:gap-4">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 md:block">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-mint-soft font-mono font-semibold text-mint-deep">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold md:mt-3">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-y border-line bg-card">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
            <SectionHead label="// làm với mình" title="Bốn điều mình giữ" />
            <div className="mt-7 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {promises.map((promise) => (
                <div key={promise.title} className="border-t-2 border-mint pt-4">
                  <h3 className="font-bold">{promise.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{promise.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="hoi-dap" className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-20">
          <SectionHead label="// hỏi đáp" title="Mấy câu hay được hỏi" />
          <div className="mt-6 divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-1">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-2 font-semibold [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span aria-hidden="true" className="font-mono text-xl text-mint-deep group-open:rotate-45">+</span>
                </summary>
                <p className="pb-4 leading-relaxed text-muted">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="lien-he" className="bg-term text-term-text">
          <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-12 md:py-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-balance text-white">
                Kể mình nghe bạn đang làm gì
              </h2>
              <p className="mt-3 leading-relaxed">
                Chưa cần biết phải làm web hay app. Nhắn vài dòng, mình trả lời trong ngày và gợi ý nên bắt đầu từ đâu.
              </p>
              <ZaloButton className="mt-6">Nhắn Zalo cho mình</ZaloButton>
              <p className="mt-4 text-sm">
                Hoặc email:{" "}
                <a className="underline underline-offset-2 hover:text-mint" href={`mailto:${email}`}>
                  {email}
                </a>
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 p-5">
              <p className="font-mono text-xs text-mint">&gt; mẫu tin nhắn, sửa lại cho đúng chuyện của bạn</p>
              <pre className="mt-3 font-sans leading-relaxed whitespace-pre-wrap text-white">{messageTemplate}</pre>
              <div className="mt-4">
                <CopyMessage text={messageTemplate} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-5xl px-4 pt-6 pb-24 text-sm text-muted sm:px-6 md:pb-8">
        {brand} · TP.HCM · Các bản demo dùng thương hiệu và dữ liệu giả.
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
        <ZaloButton className="w-full">Nhắn Zalo cho mình</ZaloButton>
      </div>
    </>
  );
}
