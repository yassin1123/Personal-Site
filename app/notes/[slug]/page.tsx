import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { BackNav } from "@/components/chrome/BackNav";
import { ScrollProgress } from "@/components/chrome/ScrollProgress";
import { notes, profile } from "@/lib/content";

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return notes
    .filter((note) => note.published)
    .map((note) => ({
      slug: note.slug,
    }));
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
  return date.replaceAll("-", ".");
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
          className="rounded-sm bg-bg-elevated px-1.5 py-0.5 font-mono text-[0.9em] text-fg"
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
          className="underline decoration-accent decoration-1 underline-offset-4 transition-colors hover:text-accent"
        >
          {linkMatch[1]}
        </a>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong
          key={`${part}-${index}`}
          className="font-medium text-fg"
        >
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={`${part}-${index}`} className="font-serif italic text-fg">
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

    const unorderedMatch = line.match(/^- (.+)$/);
    if (unorderedMatch) {
      flushParagraph();
      if (listType !== "ul") {
        flushList();
        listType = "ul";
      }
      listItems.push(unorderedMatch[1]);
      continue;
    }

    const orderedMatch = line.match(/^\d+\. (.+)$/);
    if (orderedMatch) {
      flushParagraph();
      if (listType !== "ol") {
        flushList();
        listType = "ol";
      }
      listItems.push(orderedMatch[1]);
      continue;
    }

    flushList();
    paragraph.push(line.trim());
  }

  flushParagraph();
  flushList();

  let paragraphIndex = 0;

  return (
    <div className="mt-12">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2
              key={index}
              className="mb-5 mt-12 font-serif text-fg"
              style={{
                fontSize: "clamp(1.6rem, 3.6vw, 2.2rem)",
                fontWeight: 420,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
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
              className="mb-4 mt-10 font-serif text-fg"
              style={{
                fontSize: "1.4rem",
                fontWeight: 460,
                letterSpacing: "-0.018em",
                lineHeight: 1.2,
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
              className="my-10 border-l-[3px] border-accent pl-6 font-serif italic text-fg"
              style={{
                fontSize: "clamp(1.5rem, 3.4vw, 2rem)",
                fontWeight: 340,
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
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
              className="my-8 overflow-x-auto rounded-[3px] border border-border bg-bg-elevated p-5 font-mono text-sm leading-[1.65] text-fg-muted"
            >
              <code>{block.content}</code>
            </pre>
          );
        }

        if (block.type === "hr") {
          return (
            <div
              key={index}
              className="my-10 h-px w-full bg-border"
              aria-hidden="true"
            />
          );
        }

        if (block.type === "ul") {
          return (
            <ul
              key={index}
              className="mb-8 space-y-3 pl-6 text-[1.1rem] leading-[1.62] text-fg-muted"
              style={{ listStyle: "none" }}
            >
              {block.items.map((item, i) => (
                <li
                  key={`${index}-${i}`}
                  className="relative"
                  style={{ paddingLeft: "0.2rem" }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-[-1.1rem] top-[0.75em] inline-block h-[6px] w-[6px] rounded-full bg-accent"
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
              className="mb-8 space-y-4 pl-10 text-[1.1rem] leading-[1.62] text-fg-muted"
              style={{
                listStyle: "decimal-leading-zero",
                color: "var(--accent)",
              }}
            >
              {block.items.map((item, i) => (
                <li
                  key={`${index}-${i}`}
                  className="pl-1 font-mono marker:font-mono marker:text-[0.85em] marker:text-accent"
                >
                  <span className="font-serif text-fg-muted">
                    {renderInline(item)}
                  </span>
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
              className={
                isLead
                  ? "mb-6 max-w-[680px] font-serif italic text-fg"
                  : "mb-6 max-w-[680px] text-fg-muted"
              }
              style={{
                fontSize: isLead ? "1.35rem" : "1.22rem",
                lineHeight: isLead ? 1.5 : 1.72,
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

  return (
    <>
      <ScrollProgress />
      <BackNav
        links={[
          { href: "/#notes", label: "Notes" },
          { href: "/deck", label: "Substrate deck →", cta: true },
        ]}
      />
      <main id="main" className="px-6 sm:px-10 lg:px-16">
        <article className="mx-auto max-w-[760px] pb-16 pt-40">
          <p className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent">
            {formatArticleDate(note.date)} · Notes
          </p>

          <h1
            className="mb-5 font-serif leading-none text-fg"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 4.6rem)",
              fontWeight: 340,
              letterSpacing: "-0.035em",
            }}
          >
            {note.title}
          </h1>
          <p
            className="mb-12 font-serif italic text-fg-muted"
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
            }}
          >
            {note.subtitle}
          </p>

          <div className="mb-12 h-px bg-border" aria-hidden="true" />

          <MarkdownBody body={note.body} />

          <div className="mt-14 border-t border-border pt-8">
            <p
              className="mb-1 font-serif text-[1.3rem] text-fg"
              style={{ fontWeight: 460, letterSpacing: "-0.02em" }}
            >
              {profile.name}
            </p>
            <p className="mb-6 text-[1rem] text-fg-subtle">
              Founder of Substrate · Building agentic AI for deep-tech
              engineering.
            </p>
            <Link
              href="/#notes"
              className="group inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-accent transition-[gap] duration-300 hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              More notes →
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
