import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="max-w-xl">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent">
          404
        </p>
        <h1 className="mt-5 font-serif text-3xl italic leading-[1.05] tracking-[-0.03em] text-fg sm:text-4xl">
          Not here.
        </h1>
        <Link
          href="/"
          className="mt-8 inline-flex text-sm font-medium text-fg-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          Return home →
        </Link>
      </div>
    </main>
  );
}
