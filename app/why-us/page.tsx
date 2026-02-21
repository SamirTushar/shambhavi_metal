import { SiteShell } from '../../components/site-shell'

const differentiators = [
  {
    title: 'Certified Quality',
    text: 'Every ingot meets ISO standards. We provide chemical composition test certificates with every consignment. No exceptions.'
  },
  {
    title: 'Reliable Supply',
    text: 'Consistent availability across standard and popular grades. We maintain strategic inventory so your production line never waits.'
  },
  {
    title: 'On-Time Delivery',
    text: 'Delhi-NCR delivery within 24-48 hours. Our logistics network is optimized for the production schedules of our automotive and electrical industry clients.'
  },
  {
    title: 'Competitive Pricing',
    text: 'Direct sourcing relationships and lean operations allow us to offer consistently competitive rates without compromising on quality.'
  },
  {
    title: 'Technical Support',
    text: 'Not sure which grade suits your application? Our team can recommend the right alloy composition based on your casting process and end-use requirements.'
  },
  {
    title: 'Long-Term Partnerships',
    text: "We don't chase one-time orders. Our business is built on repeat clients who trust us year after year - from Oswal Auto Tech to Super Auto India."
  }
]

const promiseSteps = [
  {
    title: 'Sourcing & Procurement',
    text: 'Raw materials sourced from verified, certified suppliers. We maintain stringent supplier qualification criteria.'
  },
  {
    title: 'Melting & Alloying',
    text: 'Precision-controlled melting in modern furnaces. Alloying elements added to exact specifications for each grade.'
  },
  {
    title: 'Testing & Certification',
    text: 'Spectrometric analysis for chemical composition. Mechanical testing per applicable standards. Certificates issued per batch.'
  },
  {
    title: 'Packaging & Dispatch',
    text: 'Secure bundling and palletization. Real-time dispatch tracking. Dedicated logistics for Delhi-NCR clients.'
  }
]

const testimonials = [
  {
    quote: "Consistent quality and always on time. We've been sourcing from Shambhavi for years.",
    client: 'Oswal Auto Tech'
  },
  {
    quote:
      'Their team understands our production requirements and ensures we never face a raw material shortage.',
    client: 'Super Auto India Ltd.'
  }
]

export default function WhyUsPage() {
  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden bg-bg py-[44px] pt-[64px]">
          <div className="absolute inset-x-0 top-[78px] h-[180px] bg-[radial-gradient(circle_at_top,_#c9a84c1c,_transparent_70%)]" />
          <div className="container-wide relative text-center">
            <h1 className="heading-serif text-4xl text-text md:text-5xl">Why Choose Shambhavi</h1>
            <p className="mx-auto mt-4 max-w-[72ch] text-base leading-8 text-muted">
              What makes us the preferred aluminium alloy ingot supplier for leading manufacturers.
            </p>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-wide">
            <p className="section-label">Differentiators</p>
            <h2 className="heading-serif mt-3 text-4xl text-text">Why Manufacturers Prefer Us</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {differentiators.map((item, index) => (
                <article
                  key={item.title}
                  className="border border-border bg-card p-7 transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_0_32px_rgba(201,168,76,0.14)]"
                >
                  <span className="mb-5 inline-flex h-9 w-9 items-center justify-center border border-accent bg-[#c9a84c1a] text-xs font-semibold text-accent">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="heading-serif text-2xl text-text">{item.title}</h3>
                  <p className="mt-4 leading-7 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-separator" />

        <section className="section-spacing bg-section">
          <div className="container-wide">
            <p className="section-label">Process Detail</p>
            <h2 className="heading-serif mt-3 text-4xl text-text">Our Quality Promise</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {promiseSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="border border-border bg-card p-6 transition duration-300 hover:border-accent hover:shadow-[0_0_26px_rgba(201,168,76,0.12)]"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent text-xs font-semibold text-accent">
                      {index + 1}
                    </span>
                    <div className="h-px flex-1 bg-[linear-gradient(90deg,#c9a84c99,transparent)]" />
                  </div>
                  <h3 className="heading-serif text-[24px] leading-tight text-text">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-separator" />

        <section className="section-spacing bg-bg">
          <div className="container-wide">
            <p className="section-label">Trust</p>
            <h2 className="heading-serif mt-3 text-center text-4xl text-text">What Our Clients Say</h2>
            <div className="mx-auto mt-10 grid max-w-[980px] gap-5 md:grid-cols-2">
              {testimonials.map((item) => (
                <blockquote key={item.client} className="border border-border bg-card p-7">
                  <p className="heading-serif text-[26px] leading-[1.5] text-[#d7d7d7]">&ldquo;{item.quote}&rdquo;</p>
                  <footer className="mt-6 text-sm uppercase tracking-[1px] text-accent">{item.client}</footer>
                </blockquote>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-muted">
              Note: These are representative testimonials. Client confirmation may be required for publication.
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
