import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MotionProvider } from "@/components/MotionProvider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNav } from "@/components/site/SiteNav";
import { notes, profile } from "@/lib/content";

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

const META: Record<string, { category: string; read: string }> = {
  "the-knowledge-wall": { category: "Essay", read: "6 min read" },
  "150-users-agentic-ux": { category: "Field notes", read: "7 min read" },
  "leaving-argus-at-southampton": { category: "Essay", read: "5 min read" },
};

export function generateStaticParams() {
  return notes
    .filter((note) => note.published)
    .map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);

  if (!note || !note.published) {
    return { title: "Not found" };
  }

  return {
    title: `${note.title} — ${profile.name}`,
    description: note.subtitle,
    openGraph: {
      title: note.title,
      description: note.subtitle,
      type: "article",
      publishedTime: note.date,
    },
  };
}

function formatArticleDate(date: string) {
  return date.slice(0, 7).replace("-", ".");
}

function renderInline(text: string) {
  const parts = text.split(
    /(`[^`]+`|\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g,
  );

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={`${part}-${index}`}
          className="rounded-sm bg-paper-card px-1.5 py-0.5 font-mono text-[0.92em] text-ink"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={`${part}-${index}`}
          href={linkMatch[2]}
          className="border-b transition-colors duration-200 hover:border-accent"
          style={{
            color: "var(--accent-deep)",
            borderColor:
              "color-mix(in srgb, var(--accent) 40%, transparent)",
          }}
        >
          {linkMatch[1]}
        </a>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong
          key={`${part}-${index}`}
          style={{ color: "var(--ink)", fontWeight: 600 }}
        >
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={`${part}-${index}`} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }

    return part;
  });
}

type MarkdownBlock =
  | { type: "p" | "h2" | "h3" | "quote" | "code" | "hr"; content: string }
  | { type: "ul" | "ol"; items: string[] };

function MarkdownBody({ body }: { body: string }) {
  const lines = body.split("\n");
  const blocks: MarkdownBlock[] = [];
  let paragraph: string[] = [];
  let code: string[] = [];
  let listItems: string[] = [];
  let listType: "ul" | "ol" | null = null;
  let inCode = false;

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push({ type: "p", content: paragraph.join(" ") });
      paragraph = [];
    }
  };
  const flushList = () => {
    if (listType && listItems.length > 0) {
      blocks.push({ type: listType, items: listItems });
      listItems = [];
      listType = null;
    }
  };

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      if (inCode) {
        blocks.push({ type: "code", content: code.join("\n") });
        code = [];
        inCode = false;
      } else {
        flushParagraph();
        flushList();
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      code.push(line);
      continue;
    }
    if (line.trim() === "") {
      flushParagraph();
      flushList();
      continue;
    }
    if (/^-{3,}$/.test(line.trim())) {
      flushParagraph();
      flushList();
      blocks.push({ type: "hr", content: "" });
      continue;
    }
    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h3", content: line.slice(4) });
      continue;
    }
    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h2", content: line.slice(3) });
      continue;
    }
    if (line.startsWith("> ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "quote", content: line.slice(2) });
      continue;
    }
    const um = line.match(/^- (.+)$/);
    if (um) {
      flushParagraph();
      if (listType !== "ul") {
        flushList();
        listType = "ul";
      }
      listItems.push(um[1]);
      continue;
    }
    const om = line.match(/^\d+\. (.+)$/);
    if (om) {
      flushParagraph();
      if (listType !== "ol") {
        flushList();
        listType = "ol";
      }
      listItems.push(om[1]);
      continue;
    }
    flushList();
    paragraph.push(line.trim());
  }
  flushParagraph();
  flushList();

  let paragraphIndex = 0;

  return (
    <div
      className="prose"
      style={{ fontSize: "18.5px", lineHeight: 1.72, color: "#36322b" }}
    >
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2
              key={index}
              className="font-serif text-ink"
              style={{
                fontWeight: 400,
                fontSize: "clamp(26px, 3.2vw, 34px)",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                margin: "48px 0 16px",
                maxWidth: "68ch",
              }}
            >
              {renderInline(block.content)}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={index}
              className="font-mono uppercase"
              style={{
                fontSize: 12,
                letterSpacing: "0.14em",
                color: "var(--accent-deep)",
                margin: "40px 0 14px",
                maxWidth: "68ch",
              }}
            >
              {renderInline(block.content)}
            </h3>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="font-serif italic text-ink"
              style={{
                margin: "34px 0",
                padding: "4px 0 4px 26px",
                borderLeft: "2px solid var(--accent)",
                fontWeight: 300,
                fontSize: "clamp(21px, 2.7vw, 28px)",
                lineHeight: 1.36,
                letterSpacing: "-0.01em",
                maxWidth: "68ch",
              }}
            >
              {renderInline(block.content)}
            </blockquote>
          );
        }
        if (block.type === "code") {
          return (
            <pre
              key={index}
              className="overflow-x-auto rounded-[8px] border border-line bg-paper-card p-5 font-mono"
              style={{
                fontSize: 14,
                lineHeight: 1.65,
                color: "var(--ink-2)",
                margin: "32px 0",
                maxWidth: "68ch",
              }}
            >
              <code>{block.content}</code>
            </pre>
          );
        }
        if (block.type === "hr") {
          return (
            <hr
              key={index}
              className="border-0"
              style={{
                borderTop: "1px solid var(--line)",
                margin: "44px 0",
                maxWidth: "68ch",
              }}
              aria-hidden="true"
            />
          );
        }
        if (block.type === "ul") {
          return (
            <ul
              key={index}
              style={{
                margin: "0 0 24px",
                padding: 0,
                listStyle: "none",
                maxWidth: "68ch",
              }}
            >
              {block.items.map((item, i) => (
                <li
                  key={`${index}-${i}`}
                  className="relative"
                  style={{ paddingLeft: 26, marginBottom: 12 }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute"
                    style={{
                      left: 4,
                      top: "0.66em",
                      width: 9,
                      height: 1.5,
                      background: "var(--accent)",
                    }}
                  />
                  {renderInline(item)}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol
              key={index}
              style={{
                margin: "0 0 24px",
                paddingLeft: 32,
                listStyle: "decimal",
                maxWidth: "68ch",
              }}
              className="marker:font-mono marker:text-[0.85em] marker:text-accent-deep"
            >
              {block.items.map((item, i) => (
                <li key={`${index}-${i}`} style={{ marginBottom: 12 }}>
                  {renderInline(item)}
                </li>
              ))}
            </ol>
          );
        }
        if (block.type === "p") {
          const isLead = paragraphIndex === 0;
          paragraphIndex += 1;
          return (
            <p
              key={index}
              style={{
                margin: isLead ? "0 0 30px" : "0 0 24px",
                maxWidth: "68ch",
                ...(isLead && {
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontWeight: 300,
                  fontSize: "clamp(21px, 2.6vw, 26px)",
                  lineHeight: 1.46,
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                }),
              }}
            >
              {renderInline(block.content)}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);

  if (!note || !note.published) {
    notFound();
  }

  const meta = META[note.slug] ?? { category: "Essay", read: "" };
  const published = notes.filter((n) => n.published);
  const idx = published.findIndex((n) => n.slug === note.slug);
  const prev = idx > 0 ? published[idx - 1] : null;
  const next = idx < published.length - 1 ? published[idx + 1] : null;

  return (
    <MotionProvider>
      <SiteNav active="notes" />

      <main id="main">
        <header
          style={{
            padding: "clamp(126px, 18vh, 184px) 0 clamp(34px, 5vh, 52px)",
          }}
        >
          <div
            className="mx-auto"
            style={{
              maxWidth: 720,
              padding: "0 var(--gutter)",
            }}
          >
            <Link
              href="/notes"
              className="group inline-flex items-center gap-[9px] font-mono uppercase text-ink-3 transition-[color,gap] duration-200 hover:text-accent hover:gap-[13px]"
              style={{
                fontSize: 11,
                letterSpacing: "0.1em",
                marginBottom: 30,
              }}
            >
              ← All notes
            </Link>
            <ScrollReveal>
              <div
                className="flex flex-wrap gap-x-[18px] gap-y-[8px] font-mono uppercase text-ink-3"
                style={{ fontSize: 11.5, letterSpacing: "0.12em" }}
              >
                <span>{formatArticleDate(note.date)}</span>
                <span style={{ color: "var(--accent-deep)" }}>
                  {meta.category}
                </span>
                {meta.read ? <span>{meta.read}</span> : null}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h1
                className="font-serif text-ink"
                style={{
                  fontWeight: 400,
                  fontSize: "clamp(38px, 6.2vw, 68px)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  margin: "20px 0 22px",
                }}
              >
                {note.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p
                className="font-serif italic text-ink-2"
                style={{
                  fontWeight: 300,
                  fontSize: "clamp(20px, 2.8vw, 27px)",
                  lineHeight: 1.38,
                  maxWidth: "30ch",
                }}
              >
                {note.subtitle}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div
                className="flex items-center gap-[13px] border-t pt-[24px]"
                style={{ borderColor: "var(--line)", marginTop: 30 }}
              >
                <div
                  className="flex flex-none items-center justify-center font-serif text-paper"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "var(--ink)",
                    fontSize: 17,
                  }}
                >
                  Y
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.35 }}>
                  <b style={{ fontWeight: 600 }}>{profile.name}</b>
                  <br />
                  <span
                    className="font-mono text-ink-3"
                    style={{ fontSize: 11, letterSpacing: "0.04em" }}
                  >
                    Building Substrate · Southampton
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </header>

        <article
          style={{
            padding: "clamp(20px, 4vh, 40px) 0 clamp(50px, 8vh, 80px)",
          }}
        >
          <div
            className="mx-auto"
            style={{
              maxWidth: 720,
              padding: "0 var(--gutter)",
            }}
          >
            <MarkdownBody body={note.body} />
          </div>
        </article>

        <nav
          className="mx-auto"
          style={{
            maxWidth: 720,
            padding: "0 var(--gutter)",
            borderTop: "1px solid var(--line-2)",
          }}
        >
          <div
            className="flex justify-between gap-[20px]"
            style={{ padding: "34px 6px 70px" }}
          >
            {prev ? (
              <Link
                href={`/notes/${prev.slug}`}
                className="group flex flex-col gap-[6px] transition-transform duration-200 hover:-translate-y-[2px]"
              >
                <span
                  className="font-mono uppercase text-ink-3"
                  style={{ fontSize: 10.5, letterSpacing: "0.12em" }}
                >
                  ← Previous
                </span>
                <span
                  className="font-serif text-ink transition-colors duration-200 group-hover:text-accent"
                  style={{ fontSize: 19 }}
                >
                  {prev.title}
                </span>
              </Link>
            ) : (
              <Link
                href="/notes"
                className="group flex flex-col gap-[6px] transition-transform duration-200 hover:-translate-y-[2px]"
              >
                <span
                  className="font-mono uppercase text-ink-3"
                  style={{ fontSize: 10.5, letterSpacing: "0.12em" }}
                >
                  ← Index
                </span>
                <span
                  className="font-serif text-ink transition-colors duration-200 group-hover:text-accent"
                  style={{ fontSize: 19 }}
                >
                  All notes
                </span>
              </Link>
            )}
            {next ? (
              <Link
                href={`/notes/${next.slug}`}
                className="group ml-auto flex flex-col gap-[6px] text-right transition-transform duration-200 hover:-translate-y-[2px]"
              >
                <span
                  className="font-mono uppercase text-ink-3"
                  style={{ fontSize: 10.5, letterSpacing: "0.12em" }}
                >
                  Next →
                </span>
                <span
                  className="font-serif text-ink transition-colors duration-200 group-hover:text-accent"
                  style={{ fontSize: 19 }}
                >
                  {next.title}
                </span>
              </Link>
            ) : (
              <Link
                href="/notes"
                className="group ml-auto flex flex-col gap-[6px] text-right transition-transform duration-200 hover:-translate-y-[2px]"
              >
                <span
                  className="font-mono uppercase text-ink-3"
                  style={{ fontSize: 10.5, letterSpacing: "0.12em" }}
                >
                  Index →
                </span>
                <span
                  className="font-serif text-ink transition-colors duration-200 group-hover:text-accent"
                  style={{ fontSize: 19 }}
                >
                  All notes
                </span>
              </Link>
            )}
          </div>
        </nav>
      </main>

      <SiteFooter />
    </MotionProvider>
  );
}
