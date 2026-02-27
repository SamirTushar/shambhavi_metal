import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from './site-nav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[#0f0f0ff2] backdrop-blur-md">
      <div className="container-wide flex h-[78px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo/logo.webp"
            alt="Shambhavi Metal Alloys logo"
            width={38}
            height={38}
            className="h-[38px] w-[38px] object-contain"
            priority
          />
          <span className="heading-serif text-[19px] tracking-[0.5px]">SHAMBHAVI METAL ALLOYS</span>
        </Link>

        <nav className="desktop-menu items-center gap-8 text-sm text-[#bbbbbb]">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="mobile-menu relative">
          <summary className="list-none cursor-pointer select-none [&::-webkit-details-marker]:hidden">
            <span className="inline-flex flex-col gap-[4px]">
              <span className="h-[2px] w-6 bg-accent" />
              <span className="h-[2px] w-6 bg-accent" />
              <span className="h-[2px] w-6 bg-accent" />
            </span>
          </summary>
          <nav className="absolute right-0 mt-4 w-[220px] border border-border bg-card p-4">
            <div className="flex flex-col gap-3 text-sm text-[#bbbbbb]">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </details>
      </div>
    </header>
  )
}
