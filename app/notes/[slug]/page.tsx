import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
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
          className="bg-bg-subtle px-1.5 py-0.5 font-mono text-base text-fg"
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
          className="underline decoration-accent underline-offset-4 transition-colors hover:text-accent-soft"
        >
          {linkMatch[1]}
        </a>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-medium text-fg">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={`${part}-${index}`} className="font-serif text-fg">
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

  return (
    <div className="mt-14 max-w-2xl text-lg leading-[1.75] text-fg">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2
              key={index}
              className="mb-5 mt-12 font-serif text-2xl font-medium leading-[1.12] tracking-[-0.03em] text-fg"
            >
              {renderInline(block.content)}
            </h2>
          );
        }

        if (block.type === "h3") {
          return (
            <h3
              key={index}
              className="mb-4 mt-9 font-serif text-xl font-medium leading-[1.15] tracking-[-0.025em] text-fg"
            >
              {renderInline(block.content)}
            </h3>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="my-10 border-l-2 border-accent pl-6 font-serif text-2xl italic leading-[1.25] tracking-[-0.025em] text-fg"
            >
              {renderInline(block.content)}
            </blockquote>
          );
        }

        if (block.type === "code") {
          return (
            <pre
              key={index}
              className="my-8 max-w-3xl overflow-x-auto bg-bg-elevated p-5 font-mono text-sm leading-[1.65] text-fg-muted"
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
              className="mb-8 list-disc space-y-3 pl-6 text-fg-muted marker:text-accent"
            >
              {block.items.map((item) => (
                <li key={item}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "ol") {
          return (
            <ol
              key={index}
              className="mb-8 list-decimal space-y-4 pl-6 text-fg-muted marker:font-mono marker:text-accent"
            >
              {block.items.map((item) => (
                <li key={item}>{renderInline(item)}</li>
              ))}
            </ol>
          );
        }

        if (block.type === "p") {
          return (
            <p key={index} className="mb-6">
              {renderInline(block.content)}
            </p>
          );
        }

        return null;
      })}
    </div>
  );
}

function NoteTopBar() {
  return (
    <div className="sticky top-0 z-40 h-14 border-b border-border-soft bg-bg/80 px-4 backdrop-blur sm:px-8 lg:px-12">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.08em] text-fg-subtle transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          ← Back to home
        </Link>
        <span className="font-serif text-xl font-medium tracking-[-0.02em] text-fg">
          Notes
        </span>
      </div>
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
      <NoteTopBar />
      <main className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <article className="mx-auto max-w-2xl">
          <p className="text-center font-mono text-xs text-fg-subtle">
            {formatArticleDate(note.date)}
          </p>

          <h1 className="mt-10 font-serif text-3xl font-medium leading-[1.05] tracking-[-0.035em] text-fg">
            {note.title}
          </h1>
          <p className="mt-5 font-serif text-xl italic leading-[1.24] tracking-[-0.02em] text-fg-muted">
            {note.subtitle}
          </p>

          <div className="mt-10 h-px w-8 bg-accent" aria-hidden="true" />

          <MarkdownBody body={note.body} />

          <div className="mt-16 border-t border-border pt-8">
            <p className="font-serif text-xl tracking-[-0.02em] text-fg">
              {profile.name}
            </p>
            <p className="mt-2 text-sm leading-[1.55] text-fg-muted">
              Founder of Substrate · Building agentic AI for deep-tech
              engineering.
            </p>
            <Link
              href="/#notes"
              className="mt-8 inline-flex text-sm font-medium text-fg transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
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
