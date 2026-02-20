import Link from 'next/link'
import { SiteShell } from '../../components/site-shell'

const valueCards = [
  {
    title: 'Quality Without Compromise',
    text: 'Every ingot we supply meets ISO and BIS standards. We test every batch for chemical composition and mechanical properties before dispatch.'
  },
  {
    title: 'Relationships Over Transactions',
    text: 'We build long-term partnerships. Our clients stay with us because we understand their production needs and deliver consistently.'
  },
  {
    title: 'Operational Excellence',
    text: 'From sourcing to delivery, every step is optimized for speed, quality, and cost-efficiency. No delays, no surprises.'
  }
]

const leaders = [
  {
    name: 'Ajesh Sinha',
    role: 'Co-Founder & Managing Director',
    bio: "With over two decades of experience in the metals trade, Ajesh brings deep industry relationships and strategic vision to Shambhavi. His hands-on approach to client management and supply chain operations has been instrumental in building the company's reputation for reliability.",
    image: "linear-gradient(140deg, rgba(15,15,15,0.22), rgba(15,15,15,0.12)), url('/images/AS.webp')",
    position: 'center top'
  },
  {
    name: 'Swati Sinha',
    role: 'Co-Founder & Operations Director',
    bio: 'Swati oversees the operational backbone of Shambhavi - from quality control and procurement to logistics and customer service. Her meticulous attention to process ensures that every delivery meets the high standards our clients expect.',
    image: "linear-gradient(140deg, rgba(15,15,15,0.22), rgba(15,15,15,0.12)), url('/images/SS.webp')",
    position: '60% top'
  },
  {
    name: 'Wael Riad',
    role: 'Engineer',
    bio: "Wael brings technical rigour to Shambhavi's operations, ensuring that every alloy grade meets precise specifications from melting through final dispatch. With a sharp focus on process optimization and quality assurance, he works closely with clients to match the right aluminium alloy composition to their casting and manufacturing requirements.",
    image: "linear-gradient(140deg, rgba(15,15,15,0.22), rgba(15,15,15,0.12)), url('/images/WR.webp')",
    position: 'center top'
  }
]

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden bg-bg py-[40px] pt-[60px]">
          <div className="absolute inset-x-0 top-[78px] h-[180px] bg-[radial-gradient(circle_at_top,_#c9a84c1a,_transparent_70%)]" />
          <div className="container-wide relative text-center">
            <h1 className="heading-serif text-4xl text-text md:text-5xl">About Us</h1>
            <p className="mt-3 text-xs text-muted">
              <Link href="/" className="transition-colors hover:text-accent">
                Home
              </Link>{' '}
              &gt; About Us
            </p>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-wide">
            <p className="section-label">Our Story</p>
            <h2 className="heading-serif mt-3 max-w-[18ch] text-4xl leading-tight text-text md:text-[36px]">
              Building Trust, One Ingot at a Time
            </h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-5">
              <div className="space-y-6 text-base leading-8 text-muted lg:col-span-3">
                <p>
                  Shambhavi Metal Alloys was founded with a singular vision - to become the most reliable
                  aluminium alloy ingot supplier in the Delhi-NCR region. What started as a focused trading
                  operation has grown into a trusted name in the non-ferrous metals industry.
                </p>
                <p>
                  We serve the backbone of Indian manufacturing. Our clients - from automotive OEMs to electrical
                  component makers - depend on us for consistent quality, transparent dealings, and on-time
                  deliveries. Every ingot we supply is sourced with care, tested rigorously, and delivered with
                  the urgency that production lines demand.
                </p>
                <p>
                  Based in Delhi-NCR with warehousing operations in Tatarpur, Palwal (Haryana), we combine local
                  proximity with supply chain efficiency to keep our clients&apos; production schedules on track.
                </p>
              </div>
              <div className="relative min-h-[320px] border border-border bg-card lg:col-span-2">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-90"
                  style={{
                    backgroundImage:
                      "linear-gradient(140deg, rgba(15,15,15,0.36), rgba(15,15,15,0.16)), url('/images/enlightening-images-0XtG6U7fbeY-unsplash.webp')"
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="gold-separator" />

        <section className="section-spacing bg-section">
          <div className="container-wide">
            <p className="section-label">Our Values</p>
            <h2 className="heading-serif mt-3 text-4xl text-text">What Drives Us</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {valueCards.map((card) => (
                <article
                  key={card.title}
                  className="border border-border bg-card p-7 transition duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(201,168,76,0.15)]"
                  style={{ borderTop: '3px solid #c9a84c' }}
                >
                  <h3 className="heading-serif text-2xl text-text">{card.title}</h3>
                  <p className="mt-4 leading-7 text-muted">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-separator" />

        <section className="section-spacing bg-bg">
          <div className="container-wide">
            <p className="section-label">Leadership</p>
            <h2 className="heading-serif mt-3 text-4xl text-text">The Team Behind Shambhavi</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {leaders.map((leader) => (
                <article
                  key={leader.name}
                  className="border border-border bg-card transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
                  style={{ borderLeft: '3px solid #c9a84c' }}
                >
                  <div
                    className="h-[340px] md:h-[380px] border-b border-border bg-cover"
                    style={{ backgroundImage: leader.image, backgroundPosition: leader.position }}
                  />
                  <div className="p-6">
                    <h3 className="heading-serif text-[22px] text-accent">{leader.name}</h3>
                    <p className="mt-1 text-[13px] text-muted">{leader.role}</p>
                    <p className="mt-4 text-[14px] leading-[1.7] text-[#aaaaaa]">{leader.bio}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mx-auto mt-12 max-w-[860px]">
              <div className="gold-separator" />
              <p className="heading-serif mt-6 text-center text-[18px] italic text-accent">
                Combined Leadership in Metal Trade, Operations & Engineering Excellence
              </p>
            </div>
          </div>
        </section>

        <div className="gold-separator" />

        <section className="bg-section py-[60px]">
          <div className="container-wide text-center">
            <h2 className="heading-serif text-4xl text-text">Certifications & Standards</h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <span className="inline-flex border border-accent bg-[#c9a84c1a] px-6 py-3 text-sm uppercase tracking-[1px] text-accent">
                ISO Certified
              </span>
              <span className="inline-flex border border-accent bg-[#c9a84c1a] px-6 py-3 text-sm uppercase tracking-[1px] text-accent">
                BIS Approved
              </span>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
