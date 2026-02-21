import Link from 'next/link'
import { navLinks } from './site-nav'

export function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] pt-[60px]">
      <div className="gold-separator" />
      <div className="container-wide grid gap-10 py-12 md:grid-cols-3">
        <div>
          <h3 className="heading-serif text-2xl text-text">Shambhavi Metal Alloys</h3>
          <p className="mt-4 max-w-[30ch] leading-7 text-muted">
            Premium aluminium alloy ingot supplier serving automotive, electrical, and industrial manufacturers
            across India.
          </p>
          <p className="mt-4 text-sm uppercase tracking-[1px] text-accent">ISO CERTIFIED</p>
        </div>

        <div>
          <h4 className="section-label">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[#c4c4c4]">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-accent">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="section-label">Contact</h4>
          <div className="mt-4 space-y-3 text-sm leading-7 text-muted">
            <p>Email: info@shambhavimetal.com</p>
            <p>Location: Delhi-NCR & Tatarpur, Palwal, Haryana</p>
            <p>Business Hours: Mon-Sat, 9:00 AM - 7:00 PM</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs uppercase tracking-[1px] text-[#727272]">
        © 2025 SHAMBHAVI METAL ALLOYS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  )
}
