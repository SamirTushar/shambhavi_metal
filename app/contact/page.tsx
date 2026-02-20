import { InquiryForm } from '../../components/inquiry-form'
import { SectionHeader } from '../../components/section-header'
import { SiteShell } from '../../components/site-shell'

export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden bg-bg py-[44px] pt-[64px]">
          <div className="absolute inset-x-0 top-[78px] h-[180px] bg-[radial-gradient(circle_at_top,_#c9a84c1c,_transparent_70%)]" />
          <div className="container-wide relative">
            <h1 className="heading-serif text-4xl text-text md:text-5xl">Contact Us</h1>
            <p className="mt-4 max-w-[68ch] text-base leading-8 text-muted">
              Let&apos;s discuss your aluminium alloy ingot requirements.
            </p>
          </div>
        </section>

        <section className="section-spacing pt-10">
          <div className="container-wide grid gap-7 lg:grid-cols-5">
            <div className="lg:col-span-3 border border-border bg-card p-7 md:p-9">
              <SectionHeader label="INQUIRY FORM" title="Send Inquiry" />
              <div className="mt-7">
                <InquiryForm sourcePage="contact" />
              </div>
            </div>

            <aside className="lg:col-span-2 space-y-5 border border-border bg-[#131313] p-7 md:p-9">
              <SectionHeader label="CONTACT INFO" title="Reach Us" />
              <div>
                <p className="section-label">Email</p>
                <a href="mailto:info@shambhavimetal.com" className="mt-2 inline-block text-base text-text">
                  info@shambhavimetal.com
                </a>
              </div>

              <div>
                <p className="section-label">WhatsApp</p>
                <a
                  href="https://wa.me/919891047155"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex bg-[#25D366] px-4 py-3 text-xs font-semibold uppercase tracking-[1px] text-white"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div>
                <p className="section-label">Location</p>
                <p className="mt-2 text-sm leading-7 text-muted">Delhi-NCR, India | Warehouse: Tatarpur, Palwal, Haryana</p>
              </div>

              <div>
                <p className="section-label">Business Hours</p>
                <p className="mt-2 text-sm leading-7 text-muted">Monday-Saturday: 9:00 AM - 7:00 PM | Sunday: Closed</p>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
