"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "About Us",
    href: "https://www.notion.so/2f940d2ef66d807ea0d1d1197dcc5190",
  },
  {
    label: "Ventures",
    href: "https://www.notion.so/32340d2ef66d8054a483cb628ac8de99",
  },
  {
    label: "Thinking",
    href: "https://www.notion.so/32340d2ef66d80c5af52fe40c8c8ba90",
  },
  {
    label: "Work with us",
    href: "https://www.notion.so/32340d2ef66d80959d79c224a1b28bfa",
  },
  {
    label: "Contact",
    href: "https://www.notion.so/32340d2ef66d809b99aed3fc5c46facb",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-page-background text-ink">
      <div className="mx-auto flex min-h-screen w-full max-w-[108rem] flex-col px-4 pb-4 pt-[2.5rem] min-[744px]:px-8 min-[744px]:pb-8 min-[744px]:pt-[3.3125rem] min-[1280px]:px-0 min-[1280px]:pb-10 min-[1280px]:pt-[3.0625rem]">
        <header className="mx-auto flex h-[2.8675rem] w-[min(20.25rem,calc(100vw-4.125rem))] items-center justify-between min-[744px]:h-[3.375rem] min-[744px]:w-[min(39.3125rem,calc(100vw-4.625rem))] min-[1280px]:h-[5.003125rem] min-[1280px]:w-[80.381944%] min-[1280px]:max-w-[86.8125rem]">
          <Link href="/" aria-label="Northform home" className="shrink-0">
            <NorthformLogo
              priority
              className="h-[2.8675rem] w-[2.9375rem] min-[744px]:h-[3.264375rem] min-[744px]:w-[3.34375rem] min-[1280px]:h-[5.003125rem] min-[1280px]:w-[5.125rem]"
            />
          </Link>

          <nav className="hidden min-[1280px]:flex min-[1280px]:h-[1.6875rem] min-[1280px]:items-center min-[1280px]:gap-[2.6875rem] min-[1280px]:text-[1.375rem] min-[1280px]:font-medium min-[1280px]:leading-[1.6875rem] min-[1280px]:tracking-normal min-[1280px]:text-ink">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap transition-opacity duration-200 hover:opacity-60"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            aria-controls="northform-mobile-sidebar"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            className="flex h-[2.4575rem] w-[2.4575rem] items-center justify-center text-ink min-[744px]:h-[3.375rem] min-[744px]:w-[3.375rem] min-[1280px]:hidden"
          >
            <HamburgerIcon className="h-[2.4575rem] w-[2.4575rem] min-[744px]:h-[3.375rem] min-[744px]:w-[3.375rem]" />
          </button>
        </header>

        <section className="mx-auto mt-[1.5075rem] grid h-[44.3125rem] w-[min(21.5625rem,calc(100vw-2.8125rem))] place-items-center rounded-[2.1875rem] bg-panel-background px-4 py-8 min-[744px]:mt-[2.1875rem] min-[744px]:h-[58.9375rem] min-[744px]:w-[min(41.875rem,calc(100vw-4.625rem))] min-[744px]:px-8 min-[744px]:py-10 min-[1280px]:mt-[2.559375rem] min-[1280px]:h-[53.75rem] min-[1280px]:w-[min(96.25rem,calc(100vw-11.75rem))] min-[1280px]:px-12 min-[1280px]:py-14">
          <h1 className="flex h-[1.875rem] w-[14.875rem] translate-y-[0.9375rem] items-baseline justify-center gap-x-[0.1em] whitespace-nowrap text-center text-[1.503125rem] font-normal leading-[1.8125rem] tracking-normal text-ink min-[744px]:h-[3.125rem] min-[744px]:w-[24.625rem] min-[744px]:translate-y-[1.59375rem] min-[744px]:text-[2.4884rem] min-[744px]:leading-[3.0625rem] min-[1280px]:h-[3.75rem] min-[1280px]:w-[29.6875rem] min-[1280px]:translate-y-[2.59375rem] min-[1280px]:text-[3rem] min-[1280px]:leading-[3.6875rem]">
            <span>Building</span>
            <span className="font-serif italic">Something...</span>
          </h1>
        </section>
      </div>

      <button
        type="button"
        aria-label="Close menu overlay"
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px] transition-opacity duration-200 min-[1280px]:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        id="northform-mobile-sidebar"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(84vw,22rem)] flex-col bg-white px-5 py-6 shadow-[-24px_0_64px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-out min-[744px]:w-[min(30rem,70vw)] min-[744px]:px-6 min-[744px]:py-7 min-[1280px]:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between">
          <NorthformLogo className="h-[2.8675rem] w-[2.9375rem] min-[744px]:h-[3.264375rem] min-[744px]:w-[3.34375rem]" />

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="flex h-[2.4575rem] w-[2.4575rem] items-center justify-center text-ink min-[744px]:h-[3.375rem] min-[744px]:w-[3.375rem]"
          >
            <CloseIcon className="h-[1.1rem] w-[1.1rem] min-[744px]:h-[1.3rem] min-[744px]:w-[1.3rem]" />
          </button>
        </div>

        <nav className="mt-10 flex flex-col border-t border-black/8 min-[744px]:mt-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-black/8 py-4 text-[1rem] font-normal leading-none text-ink transition-opacity duration-200 hover:opacity-60"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </main>
  );
}

type IconProps = {
  className?: string;
};

type LogoProps = IconProps & {
  priority?: boolean;
};

function NorthformLogo({ className = "", priority = false }: LogoProps) {
  return (
    <Image
      src="/images/vector_northform.svg"
      alt="Northform logo"
      width={82}
      height={81}
      priority={priority}
      className={className}
    />
  );
}

function HamburgerIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 39.32 39.32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6.55 8.19H22.94M6.55 19.66H32.77M6.55 31.13H32.77"
        stroke="currentColor"
        strokeWidth="2.46"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 5L19 19M19 5L5 19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
