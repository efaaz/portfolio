import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

const components = {
  h1: ({ children, ...props }) => (
    <h1
      {...props}
      className="
        mt-12
        mb-6
        text-4xl
        font-semibold
        tracking-[-0.04em]
        text-foreground
        sm:text-5xl
        sm:leading-[1.1]
      "
    >
      {children}
    </h1>
  ),

  h2: ({ children, ...props }) => (
    <h2
      {...props}
      className="
        mt-14
        mb-5
        scroll-mt-24
        text-2xl
        font-semibold
        tracking-tight
        text-foreground
        sm:text-3xl
      "
    >
      {children}
    </h2>
  ),

  h3: ({ children, ...props }) => (
    <h3
      {...props}
      className="
        mt-10
        mb-4
        scroll-mt-24
        text-xl
        font-semibold
        tracking-tight
        text-foreground
        sm:text-2xl
      "
    >
      {children}
    </h3>
  ),

  /* =========================================================
     PARAGRAPH
  ========================================================== */

  p: ({ children, ...props }) => (
    <p
      {...props}
      className="
        my-6
        text-[16px]
        leading-8
        text-muted-foreground
        sm:text-[17px]
        sm:leading-8
      "
    >
      {children}
    </p>
  ),

  /* =========================================================
     LINKS
  ========================================================== */

  a: ({ href, children, ...props }) => {
    const isExternal =
      typeof href === "string" &&
      (href.startsWith("http://") || href.startsWith("https://"));

    if (isExternal) {
      return (
        <a
          {...props}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            font-medium
            text-brand-cyan
            underline
            decoration-brand-cyan/30
            underline-offset-4
            transition-colors
            duration-200
            hover:text-brand-violet
            hover:decoration-brand-violet/50
          "
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href ?? "#"}
        className="
          font-medium
          text-brand-cyan
          underline
          decoration-brand-cyan/30
          underline-offset-4
          transition-colors
          duration-200
          hover:text-brand-violet
          hover:decoration-brand-violet/50
        "
      >
        {children}
      </Link>
    );
  },

  /* =========================================================
     EMPHASIS
  ========================================================== */

  strong: ({ children, ...props }) => (
    <strong {...props} className="font-semibold text-foreground">
      {children}
    </strong>
  ),

  em: ({ children, ...props }) => (
    <em {...props} className="font-serif italic text-foreground">
      {children}
    </em>
  ),

  /* =========================================================
     LISTS
  ========================================================== */

  ul: ({ children, ...props }) => (
    <ul
      {...props}
      className="
        my-6
        space-y-3
        pl-6
        text-[16px]
        leading-8
        text-muted-foreground
        marker:text-brand-violet
      "
    >
      {children}
    </ul>
  ),

  ol: ({ children, ...props }) => (
    <ol
      {...props}
      className="
        my-6
        space-y-3
        pl-6
        text-[16px]
        leading-8
        text-muted-foreground
        marker:font-mono
        marker:text-brand-cyan
      "
    >
      {children}
    </ol>
  ),

  li: ({ children, ...props }) => (
    <li {...props} className="pl-2">
      {children}
    </li>
  ),

  /* =========================================================
     BLOCKQUOTE
  ========================================================== */

  blockquote: ({ children, ...props }) => (
    <blockquote
      {...props}
      className="
        relative
        my-10
        overflow-hidden
        rounded-r-2xl
        border-l-2
        border-brand-violet
        bg-white/2.5
        px-6
        py-5
        text-lg
        leading-8
        text-foreground/90
        sm:px-8
        sm:py-6
        sm:text-xl
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -left-16
          top-1/2
          h-32
          w-32
          -translate-y-1/2
          rounded-full
          bg-brand-violet/8
          blur-[60px]
        "
      />

      <div className="relative">{children}</div>
    </blockquote>
  ),

  /* =========================================================
     CODE
  ========================================================== */

  code: ({ children, className, ...props }) => {
    const isBlock = className?.includes("language-");

    if (isBlock) {
      return (
        <code
          {...props}
          className={`
            font-mono
            text-[13px]
            leading-6
            text-slate-200
            sm:text-sm
            ${className ?? ""}
          `}
        >
          {children}
        </code>
      );
    }

    return (
      <code
        {...props}
        className="
          rounded-md
          border
          border-brand-violet/15
          bg-brand-violet/[0.07]
          px-1.5
          py-0.5
          font-mono
          text-[0.88em]
          text-brand-cyan
        "
      >
        {children}
      </code>
    );
  },

  pre: ({ children, ...props }) => (
    <pre
      {...props}
      className="
        my-8
        overflow-x-auto
        rounded-2xl
        border
        border-white/8
        bg-[#080E19]
        p-5
        shadow-[0_16px_50px_rgba(0,0,0,0.25)]
        sm:p-6
      "
    >
      {children}
    </pre>
  ),

  /* =========================================================
     IMAGES
  ========================================================== */

  img: (props) => (
    <Image
      {...(props as ImageProps)}
      sizes="(max-width: 768px) 100vw, 768px"
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "1rem",
      }}
      className="
        my-10
        border
        border-white/8
      "
    />
  ),

  /* =========================================================
     DIVIDER
  ========================================================== */

  hr: (props) => (
    <hr
      {...props}
      className="
        my-12
        border-0
        border-t
        border-white/8
      "
    />
  ),

  /* =========================================================
     TABLES
  ========================================================== */

  table: ({ children, ...props }) => (
    <div className="my-10 overflow-x-auto rounded-2xl border border-white/8">
      <table
        {...props}
        className="
          w-full
          border-collapse
          text-left
          text-sm
        "
      >
        {children}
      </table>
    </div>
  ),

  thead: ({ children, ...props }) => (
    <thead {...props} className="bg-white/3">
      {children}
    </thead>
  ),

  tbody: ({ children, ...props }) => (
    <tbody {...props} className="divide-y divide-white/[0.07]">
      {children}
    </tbody>
  ),

  tr: ({ children, ...props }) => <tr {...props}>{children}</tr>,

  th: ({ children, ...props }) => (
    <th
      {...props}
      className="
        px-4
        py-3
        font-medium
        text-foreground
      "
    >
      {children}
    </th>
  ),

  td: ({ children, ...props }) => (
    <td
      {...props}
      className="
        px-4
        py-3
        text-muted-foreground
      "
    >
      {children}
    </td>
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
