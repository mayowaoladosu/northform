const navItems = [
  "About Us",
  "Ventures",
  "Thinking",
  "Work With Us",
  "Contact",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-page-background text-ink">
      <div className="mx-auto flex min-h-screen w-full max-w-[1728px] flex-col px-6 pb-6 pt-8 sm:px-10 sm:pb-10 sm:pt-10 lg:px-14 lg:pb-12 lg:pt-12 xl:px-20 xl:pb-14">
        <header className="flex items-start justify-between">
          <a href="/" aria-label="Northform home" className="shrink-0">
            <NorthformLogo className="h-[70px] w-[70px] sm:h-[84px] sm:w-[84px] lg:h-[96px] lg:w-[96px]" />
          </a>

          <nav className="hidden lg:flex items-center gap-8 pt-4 text-[18px] font-medium tracking-[-0.03em] text-ink xl:gap-12">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="transition-opacity duration-200 hover:opacity-60"
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            className="flex h-12 w-12 items-center justify-center pt-1 text-ink lg:hidden"
          >
            <HamburgerIcon className="h-8 w-8 sm:h-10 sm:w-10" />
          </button>
        </header>

        <section className="mt-8 flex min-h-[calc(100svh-9.5rem)] flex-1 items-center justify-center rounded-[30px] bg-panel-background px-6 py-8 sm:mt-10 sm:min-h-[calc(100svh-11rem)] sm:rounded-[38px] sm:px-10 sm:py-12 lg:mt-11 lg:min-h-[calc(100svh-13.5rem)] lg:rounded-[42px] lg:px-16 lg:py-16">
          <h1 className="flex flex-wrap items-baseline justify-center gap-x-[0.14em] text-center text-[clamp(2.2rem,4.2vw,4.6rem)] leading-none tracking-[-0.055em] text-ink">
            <span className="font-medium">Building</span>
            <span className="font-serif italic font-medium">Something...</span>
          </h1>
        </section>
      </div>
    </main>
  );
}

type IconProps = {
  className?: string;
};

function NorthformLogo({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="96" height="96" rx="24" fill="#050505" />
      <path
        d="M18 44.75L42.5 16H57V44.75H72V56.75H57V82H44.5V56.75H18V44.75Z"
        fill="#FFFFFF"
      />
      <rect x="18" y="44.75" width="54" height="12" fill="#FFFFFF" />
    </svg>
  );
}

function HamburgerIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 4H36M4 16H36M4 28H36"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
