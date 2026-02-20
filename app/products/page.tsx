import Link from 'next/link'
import { DataTable } from '../../components/data-table'
import { SectionHeader } from '../../components/section-header'
import { SiteShell } from '../../components/site-shell'

const jisColumns = ['Alloy', 'Cu', 'Si', 'Mg', 'Zn', 'Fe', 'Mn', 'Ni', 'Sn', 'Pb', 'Ti', 'Al']
const jisRows = [
  ['ADC1', '1.0 max', '11.0-13.0', '0.3 max', '0.5 max', '1.3 max', '0.3 max', '0.5 max', '0.1 max', '0.2 max', '0.3 max', 'Rem.'],
  ['ADC3', '0.6 max', '9.0-11.0', '0.4-0.6', '0.5 max', '1.3 max', '0.3 max', '0.5 max', '0.1 max', '0.15 max', '0.3 max', 'Rem.'],
  ['ADC5', '0.2 max', '0.3 max', '4.0-8.5', '0.1 max', '1.8 max', '0.3 max', '0.1 max', '0.1 max', '0.1 max', '0.2 max', 'Rem.'],
  ['ADC6', '0.1 max', '1.0 max', '2.5-4.0', '0.4 max', '0.8 max', '0.4-0.6', '0.1 max', '0.1 max', '0.1 max', '0.2 max', 'Rem.'],
  ['ADC10', '2.0-4.0', '7.5-9.5', '0.3 max', '1.0 max', '1.3 max', '0.5 max', '0.5 max', '0.2 max', '0.2 max', '0.3 max', 'Rem.'],
  ['ADC10Z', '2.0-4.0', '7.5-9.5', '0.3 max', '3.0 max', '1.3 max', '0.5 max', '0.5 max', '0.2 max', '0.2 max', '0.3 max', 'Rem.'],
  ['ADC12', '1.5-3.5', '9.6-12.0', '0.3 max', '1.0 max', '1.3 max', '0.5 max', '0.5 max', '0.2 max', '0.2 max', '0.3 max', 'Rem.'],
  ['ADC12Z', '1.5-3.5', '9.6-12.0', '0.3 max', '3.0 max', '1.3 max', '0.5 max', '0.5 max', '0.2 max', '0.2 max', '0.3 max', 'Rem.'],
  ['ADC14', '4.0-5.0', '16.0-18.0', '0.45-0.65', '1.5 max', '1.3 max', '0.5 max', '0.3 max', '0.3 max', '0.2 max', '0.3 max', 'Rem.'],
  ['AC4B', '2.0-4.0', '7.0-10.0', '0.5 max', '1.0 max', '0.8 max', '0.5 max', '0.35 max', '0.1 max', '0.2 max', '0.2 max', 'Rem.'],
  ['AC2B', '2.0-4.0', '5.0-7.0', '0.5 max', '1.0 max', '0.8 max', '0.5 max', '0.35 max', '0.1 max', '0.2 max', '0.2 max', 'Rem.']
]

const bsColumns = ['Alloy', 'Cu', 'Si', 'Mg', 'Zn', 'Fe', 'Mn', 'Ni', 'Sn', 'Pb', 'Ti', 'Al']
const bsRows = [
  ['LM6', '0.1 max', '10.0-13.0', '0.1 max', '0.1 max', '0.6 max', '0.5 max', '0.1 max', '0.05 max', '0.1 max', '0.2 max', 'Rem.'],
  ['LM10', '0.1 max', '0.25 max', '9.5-11.0', '0.1 max', '0.35 max', '0.1 max', '0.1 max', '0.05 max', '0.05 max', '0.2 max', 'Rem.'],
  ['LM4', '2.0-4.0', '4.0-6.0', '0.2 max', '0.5 max', '1.0 max', '0.2-0.6', '0.3 max', '0.1 max', '0.1 max', '0.2 max', 'Rem.'],
  ['LM24', '3.0-4.0', '7.5-9.5', '0.3 max', '3.0 max', '1.3 max', '0.5 max', '0.5 max', '0.2 max', '0.3 max', '0.2 max', 'Rem.'],
  ['LM26', '2.0-4.0', '8.5-10.5', '0.5-1.5', '1.0 max', '1.2 max', '0.5 max', '1.0 max', '0.1 max', '0.1 max', '0.2 max', 'Rem.'],
  ['LM13', '0.7-1.5', '10.5-13.0', '0.8-1.5', '0.5 max', '1.0 max', '0.5 max', '1.5 max', '0.1 max', '0.1 max', '0.2 max', 'Rem.']
]

const industries = ['Automotive', 'Electrical', 'Construction', 'Consumer Goods', 'Aerospace & Defence', 'General Engineering']

const guideItems = [
  {
    title: 'For automotive die-casting (Maruti, Honda, Toyota supply chain):',
    text: 'ADC-12 is the industry standard. Excellent castability and balanced mechanical properties.'
  },
  {
    title: 'For structural or high-strength components:',
    text: 'LM-24 or ADC-10. Higher strength, good machinability.'
  },
  {
    title: 'For corrosion-resistant applications (marine, outdoor, electrical):',
    text: 'LM-6. Superior corrosion resistance, high silicon content.'
  },
  {
    title: 'For high-temperature applications (engine blocks, brakes):',
    text: 'AC4B. Good wear resistance and thermal conductivity.'
  },
  {
    title: 'Custom requirement?',
    text: 'Contact us with your specification. We can source or recommend the right composition.'
  }
]

export default function ProductsPage() {
  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden bg-bg py-[44px] pt-[64px]">
          <div className="absolute inset-x-0 top-[78px] h-[180px] bg-[radial-gradient(circle_at_top,_#c9a84c1c,_transparent_70%)]" />
          <div className="container-wide relative">
            <p className="text-xs uppercase tracking-[2px] text-muted">Home &gt; Products</p>
            <h1 className="heading-serif mt-3 text-4xl text-text md:text-5xl">Our Products</h1>
            <p className="mt-4 max-w-[68ch] text-base leading-8 text-muted">
              Premium aluminium alloy ingots for demanding industrial applications
            </p>
          </div>
        </section>

        <section className="section-spacing pt-10">
          <div className="container-wide grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <SectionHeader label="PRODUCT OVERVIEW" title="Aluminium Alloy Ingots" />
              <p className="mt-5 leading-8 text-muted">
                Our aluminium alloy ingots are manufactured to precise specifications for die-casting, gravity
                casting, and other industrial processes. We supply standard JIS and BS grades as well as custom
                compositions tailored to your production requirements. Every batch is tested for chemical composition
                and dispatched with a test certificate.
              </p>
            </div>
            <div className="relative min-h-[320px] border border-border bg-card lg:col-span-2">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(130deg, rgba(15,15,15,0.36), rgba(15,15,15,0.14)), url('/images/Gemini_Generated_Image_5irhew5irhew5irh.webp')"
                }}
              />
            </div>
          </div>
        </section>

        <div className="gold-separator" />

        <section className="section-spacing bg-section">
          <div className="container-wide">
            <SectionHeader
              label="JIS STANDARD"
              title="Chemical Composition of Aluminium Alloys (Mass %)"
              subtitle="Japanese Industrial Standard - commonly specified by Japanese automotive OEMs operating in India"
            />
            <div className="mt-10">
              <DataTable columns={jisColumns} rows={jisRows} />
            </div>
          </div>
        </section>

        <div className="gold-separator" />

        <section className="section-spacing bg-bg">
          <div className="container-wide">
            <SectionHeader
              label="BS STANDARD"
              title="Chemical Composition of Aluminium Alloys (Mass %)"
              subtitle="British Standard (BS 1490) - widely referenced in India's casting industry"
            />
            <div className="mt-10">
              <DataTable columns={bsColumns} rows={bsRows} />
            </div>
          </div>
        </section>

        <div className="gold-separator" />

        <section className="section-spacing bg-section">
          <div className="container-wide">
            <SectionHeader
              label="GRADE REFERENCE"
              title="Which Grade Do You Need?"
              subtitle="A quick reference for matching alloy grade to your application"
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {guideItems.map((item) => (
                <article key={item.title} className="border border-border bg-card p-6">
                  <h3 className="heading-serif text-[24px] text-text">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">→ {item.text}</p>
                </article>
              ))}
            </div>
            <Link href="/contact" className="primary-btn mt-8">
              Discuss Your Requirements
            </Link>
          </div>
        </section>

        <div className="gold-separator" />

        <section className="section-spacing bg-bg">
          <div className="container-wide">
            <SectionHeader label="LOGISTICS" title="Packaging & Delivery" />
            <p className="mt-5 max-w-[88ch] leading-8 text-muted">
              Standard bundle weights: 500 kg, 750 kg, 1000 kg. Custom packaging available. Delhi-NCR delivery:
              24-48 hours. Pan-India dispatch available. Every consignment includes chemical composition test
              certificate.
            </p>
          </div>
        </section>

        <div className="gold-separator" />

        <section className="section-spacing bg-section">
          <div className="container-wide">
            <SectionHeader label="INDUSTRIES" title="Industries We Serve" />
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {industries.map((item) => (
                <article key={item} className="border border-border bg-card p-6">
                  <div className="mb-4 h-8 w-8 border border-accent bg-[#c9a84c1a]" />
                  <p className="heading-serif text-[24px] text-text">{item}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 border border-border bg-card p-7 text-center">
              <p className="heading-serif text-[30px] text-text">Need a specific grade or custom composition?</p>
              <p className="mt-2 text-muted">Contact our team.</p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <Link href="/contact" className="primary-btn">
                  Contact Us
                </Link>
                <a
                  href="https://wa.me/919891047155"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex bg-[#25D366] px-4 py-3 text-xs font-semibold uppercase tracking-[1px] text-white"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
