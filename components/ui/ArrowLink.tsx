import type { ReactNode } from "react";
import Link from "next/link";

const externalPattern = /^(https?:)?\/\//;

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  download?: boolean;
  external?: boolean;
};

export function ArrowLink({
  href,
  children,
  className,
  download,
  external,
}: ArrowLinkProps) {
  const isExternal = external ?? externalPattern.test(href);
  const isMail = href.startsWith("mailto:");
  const isDocument = href.endsWith(".pdf");
  const targetProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  const linkClass = [
    "group/link relative inline-flex items-center gap-2 text-sm font-medium text-fg transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-4 focus-visible:ring-offset-bg",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const content = (
    <>
      <span className="relative">
        <span>{children}</span>
        <span
          className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-200 ease-out group-hover/link:scale-x-100"
          aria-hidden="true"
        />
      </span>
      <span
        className="translate-y-px transition-transform duration-200 group-hover/link:translate-x-0.5"
        aria-hidden="true"
      >
        →
      </span>
    </>
  );

  if (isExternal || isMail || isDocument) {
    return (
      <a href={href} {...targetProps} download={download} className={linkClass}>
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={linkClass}
    >
      {content}
    </Link>
  );
}
