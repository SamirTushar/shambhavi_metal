import Link from 'next/link'
import { DataTable } from '../components/data-table'
import { HeroCarousel } from '../components/hero-carousel'
import { InquiryForm } from '../components/inquiry-form'
import { ProcessShowcaseSlider } from '../components/process-showcase-slider'
import { SectionHeader } from '../components/section-header'
import { SiteShell } from '../components/site-shell'
import { TestimonialCard } from '../components/testimonial-card'

const stats = [
  { value: '10,000+', label: 'Tons Delivered' },
  { value: '20+', label: 'Years Industry Experience' },
  { value: '100%', label: 'Quality Assured' },
  { value: '30+', label: 'Customers Served' }
]

const applications = [
  {
    title: 'Automotive Components',
    text: 'Engine blocks, body panels, transmission housings, wheel rims'
  },
  {
    title: 'Electrical & Electronics',
    text: 'Conductors, heat sinks, enclosures, busbars'
  },
  {
    title: 'Construction & Industrial',
    text: 'Structural profiles, architectural fittings, machinery parts'
  }
]

const gradeColumns = ['Alloy', 'Standard', 'Cu', 'Si', 'Mg', 'Zn', 'Fe', 'Mn', 'Ni', 'Sn', 'Pb', 'Ti', 'Al']

const gradeRows = [
  ['ADC-12', 'JIS', '1.5-3.5', '9.6-12.0', '0.3 max', '1.0 max', '1.3 max', '0.5 max', '0.5 max', '0.2 max', '0.2 max', '0.3 max', 'Rem.'],
  ['ADC-6', 'JIS', '0.1 max', '1.0 max', '2.5-4.0', '0.4 max', '0.8 max', '0.4-0.6', '0.1 max', '0.1 max', '0.1 max', '0.2 max', 'Rem.'],
  ['LM-4', 'BS', '2.0-4.0', '4.0-6.0', '0.2 max', '0.5 max', '1.0 max', '0.2-0.6', '0.3 max', '0.1 max', '0.1 max', '0.2 max', 'Rem.'],
  ['LM-6', 'BS', '0.1 max', '10.0-13.0', '0.1 max', '0.1 max', '0.6 max', '0.5 max', '0.1 max', '0.05 max', '0.1 max', '0.2 max', 'Rem.'],
  ['LM-24', 'BS', '3.0-4.0', '7.5-9.5', '0.3 max', '3.0 max', '1.3 max', '0.5 max', '0.5 max', '0.2 max', '0.3 max', '0.2 max', 'Rem.'],
  ['LM-25', 'BS', '0.2 max', '6.5-7.5', '0.2-0.6', '0.1 max', '0.5 max', '0.3 max', '0.1 max', '0.05 max', '0.1 max', '0.2 max', 'Rem.']
]

const processSteps = [
  {
    title: 'Sourcing',
    text: 'Quality raw materials from certified suppliers'
  },
  {
    title: 'Processing',
    text: 'Melting, alloying, and casting at controlled specifications'
  },
  {
    title: 'Quality Testing',
    text: 'Spectrometric analysis, mechanical testing, batch certificates'
  },
  {
    title: 'Delivery',
    text: 'Secure packaging, timely dispatch across Delhi-NCR and India'
  }
]

const reasons = [
  {
    title: 'ISO Certified',
    text: 'Every batch tested and certified'
  },
  {
    title: 'Reliable Supply',
    text: 'Strategic inventory, no production stoppages'
  },
  {
    title: 'Delhi-NCR Based',
    text: '24-48 hour delivery in the region'
  },
  {
    title: 'Competitive Pricing',
    text: 'Lean operations, direct sourcing'
  },
  {
    title: 'Technical Guidance',
    text: 'Grade recommendations for your application'
  },
  {
    title: 'Long-Term Partnerships',
    text: 'Built on repeat trust, not one-time orders'
  }
]

const customers = [
  'Oswal Auto Tech',
  'Super Auto India Ltd.',
  'PAC',
  'Super Alloy Ltd.',
  'Altruistic Metal Pvt. Ltd.',
  'JSB Industries Pvt. Ltd.',
  'Vinayak Industries',
  'Mittalu Pvt. Ltd.'
]

const leaders = [
  {
    name: 'Ajesh Sinha',
    role: 'Co-Founder & Managing Director',
    bio: "With over two decades of experience in the metals trade, Ajesh brings deep industry relationships and strategic vision to Shambhavi.",
    image: '/images/AS.webp'
  },
  {
    name: 'Swati Sinha',
    role: 'Co-Founder & Operations Director',
    bio: "Swati leads quality control, procurement, logistics, and customer service to ensure every delivery meets Shambhavi's operating standards.",
    image: '/images/SS.webp'
  },
  {
    name: 'Engineer Wael Riad',
    role: 'CEO',
    bio: 'Wael leads Shambhavi with over 15 years of international sourcing experience, strengthening global supplier relationships and ensuring reliable procurement for customer-specific alloy requirements.',
    image: '/images/WR.webp'
  }
]

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden section-spacing">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#c9a84c20,_transparent_58%)]" />
          <div className="container-wide relative">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7 text-center md:text-left">
                <p className="section-label mb-5">Est. Delhi-NCR</p>
                <h1 className="heading-serif text-[28px] leading-tight text-text md:text-5xl md:leading-tight lg:max-w-[18ch]">
                  Premium Aluminium Alloy Ingots for India&apos;s Leading Industries
                </h1>
                <p className="mx-auto mt-6 max-w-[58ch] text-base leading-8 text-muted lg:mx-0">
                  Trusted supplier to automotive OEMs and electrical component manufacturers across Delhi-NCR and
                  beyond. ISO certified quality. On-time delivery.
                </p>
                <div className="mt-9 flex flex-wrap justify-center gap-3 md:justify-start">
                  <Link href="/contact" className="primary-btn">
                    Get In Touch
                  </Link>
                  <Link href="/products" className="outline-btn">
                    View Products
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <HeroCarousel />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card">
          <div className="container-wide grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="text-center sm:text-left">
                <p className="heading-serif text-4xl text-accent">{item.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[2px] text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="gold-separator" />

        <section className="section-spacing bg-section">
          <div className="container-wide">
            <SectionHeader
              label="WHAT WE DO"
              title="Aluminium Alloy Ingots"
              subtitle="We supply premium-grade aluminium alloy ingots - the essential raw material for automotive components, electrical parts, and industrial manufacturing. Our ingots meet ISO standards, sourced and quality-tested to serve India's most demanding production lines."
            />
            <div className="relative mt-8 min-h-[240px] overflow-hidden border border-border">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(15,15,15,0.42), rgba(15,15,15,0.2)), url('/images/enlightening-images-xkAlktfevDg-unsplash.webp')"
                }}
              />
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {applications.map((card) => (
                <article
                  key={card.title}
                  className="border border-border bg-card p-7 transition duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(201,168,76,0.15)]"
                >
                  <div className="mb-5 h-9 w-9 border border-accent bg-[#c9a84c1a]" />
                  <h3 className="heading-serif text-2xl text-text">{card.title}</h3>
                  <p className="mt-4 leading-7 text-muted">{card.text}</p>
                </article>
              ))}
            </div>
            <Link href="/products" className="mt-8 inline-block text-sm uppercase tracking-[1px] text-accent">
              View All Products →
            </Link>
          </div>
        </section>

        <div className="gold-separator" />

        <section className="section-spacing bg-bg">
          <div className="container-wide">
            <SectionHeader
              label="OUR GRADES"
              title="Alloy Specifications We Supply"
              subtitle="We supply standard JIS and BS aluminium alloy grades for die-casting applications. Full chemical composition details available on our Products page."
            />
            <div className="mt-10">
              <DataTable columns={gradeColumns} rows={gradeRows} />
            </div>
            <Link href="/products" className="mt-7 inline-block text-sm uppercase tracking-[1px] text-accent">
              See full chemical composition tables →
            </Link>
          </div>
        </section>

        <div className="gold-separator" />

        <section className="section-spacing bg-section">
          <div className="container-wide">
            <SectionHeader label="OUR PROCESS" title="From Source to Delivery" />
            <ProcessShowcaseSlider />
            <div className="relative mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <article key={step.title} className="border border-border bg-card p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent text-xs font-semibold text-accent">
                      {i + 1}
                    </span>
                    <span className="h-px flex-1 bg-[linear-gradient(90deg,#c9a84c99,transparent)]" />
                  </div>
                  <h3 className="heading-serif text-[25px] text-text">{step.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-separator" />

        <section className="section-spacing bg-bg">
          <div className="container-wide">
            <SectionHeader label="WHY SHAMBHAVI" title="Why Leading Manufacturers Trust Us" />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason, i) => (
                <article
                  key={reason.title}
                  className="border border-border bg-card p-7 transition duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(201,168,76,0.15)]"
                >
                  <span className="mb-5 inline-flex h-9 w-9 items-center justify-center border border-accent bg-[#c9a84c1a] text-xs font-semibold text-accent">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="heading-serif text-2xl text-text">{reason.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-separator" />

        <section className="section-spacing bg-section">
          <div className="container-wide">
            <SectionHeader label="LEADERSHIP" title="The Team Behind Shambhavi" />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {leaders.map((leader) => (
                <article
                  key={leader.name}
                  className="border border-border bg-card transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
                  style={{ borderLeft: '3px solid #c9a84c' }}
                >
                  <div
                    className="h-[340px] md:h-[380px] border-b border-border bg-cover bg-top"
                    style={{
                      backgroundImage: `linear-gradient(140deg, rgba(15,15,15,0.1), rgba(15,15,15,0.2)), url('${leader.image}')`
                    }}
                  />
                  <div className="p-6">
                    <h3 className="heading-serif text-[22px] text-accent">{leader.name}</h3>
                    <p className="mt-1 text-[13px] text-muted">{leader.role}</p>
                    <p className="mt-4 text-[14px] leading-[1.7] text-[#aaaaaa]">{leader.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-separator" />

        <section className="section-spacing bg-section overflow-hidden">
          <div className="container-wide">
            <SectionHeader label="TRUSTED BY" title="Our Clients" centered />
            <div className="mt-8 border-y border-border py-6 text-sm uppercase tracking-[2px] text-muted">
              <div className="marquee-track">
                {[...customers, ...customers].map((name, index) => (
                  <span key={`${name}-${index}`}>
                    {name} <span className="mx-4 text-accent">|</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <TestimonialCard
                quote="Consistent quality and always on time. We've been sourcing from Shambhavi for years."
                author="Automotive Sector Customer"
              />
              <TestimonialCard
                quote="Their team understands our production requirements and ensures we never face a raw material shortage."
                author="Electrical Components Customer"
              />
            </div>
          </div>
        </section>

        <div className="gold-separator" />

        <section className="section-spacing bg-card">
          <div className="container-wide">
            <div
                className="border border-border p-7 md:p-10"
                style={{
                  background:
                    'radial-gradient(circle at center, rgba(201,168,76,0.14), rgba(26,26,26,0.88) 45%, rgba(26,26,26,1) 100%)'
                }}
              >
              <SectionHeader
                label="GET IN TOUCH"
                title="Ready to Discuss Your Requirements?"
                subtitle="Share your requirement details and our team will get back with the right grade and pricing guidance."
              />
              <div className="mt-10 grid gap-7 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <InquiryForm sourcePage="home" />
                </div>
                <div className="space-y-5 border border-border bg-[#131313] p-6 lg:col-span-2">
                  <div>
                    <p className="section-label">Email</p>
                    <a href="mailto:info@shambhavimetal.com" className="mt-2 inline-block text-base text-text">
                      info@shambhavimetal.com
                    </a>
                  </div>
                  <div>
                    <p className="section-label">Location</p>
                    <p className="mt-2 text-sm leading-7 text-muted">Delhi-NCR & Tatarpur, Palwal, Haryana</p>
                  </div>
                  <div>
                    <p className="section-label">Business Hours</p>
                    <p className="mt-2 text-sm leading-7 text-muted">Mon-Sat, 9:00 AM - 7:00 PM</p>
                  </div>
                  <a
                    href="https://wa.me/919891047155"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex bg-[#25D366] px-4 py-3 text-xs font-semibold uppercase tracking-[1px] text-white"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
