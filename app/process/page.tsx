import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '../../components/scroll-reveal'
import { SiteShell } from '../../components/site-shell'

const steps = [
  {
    id: 1,
    title: 'Sorting & Segregation',
    subtitle: 'Grade-wise separation for precise chemistry',
    description:
      'Raw aluminium scrap travels along conveyor belts where it is sorted by alloy type. Ferrous contaminants are removed, non-aluminium materials separated, and scrap is binned by grade - ensuring each furnace charge starts with the right composition.',
    image: '/images/process/sorting.webp'
  },
  {
    id: 2,
    title: 'Furnace Charging',
    subtitle: 'Precision loading for optimal melt',
    description:
      'Sorted scrap is weighed and loaded into our furnaces in calculated proportions. The charge composition is pre-determined based on the target alloy specification - whether ADC-12, LM-6, or any of our other grades.',
    image: '/images/process/charging.webp'
  },
  {
    id: 3,
    title: 'Melting',
    subtitle: '700°C+ controlled transformation',
    description:
      'The furnace brings the charge to over 700°C, transforming solid scrap into a molten aluminium bath. Temperature is continuously monitored to ensure uniform heating and prevent excessive oxidation.',
    image: '/images/process/melting.webp'
  },
  {
    id: 4,
    title: 'Casting',
    subtitle: 'From molten metal to solid ingot',
    description:
      'Once the melt passes spectrometric verification, molten aluminium flows through a launder system into pre-heated ingot molds. Pouring temperature is carefully controlled to prevent shrinkage and surface defects.',
    image: '/images/process/casting.webp'
  },
  {
    id: 5,
    title: 'Quality Testing',
    subtitle: 'Every batch tested, every element verified',
    description:
      'A sample from every batch is tested using our Optical Emission Spectrometer, analysing all 11 key elements - Cu, Si, Mg, Zn, Fe, Mn, Ni, Sn, Pb, Ti, and Al - to verify compliance with JIS and BS specifications.',
    image: '/images/process/quality_testing.webp'
  },
  {
    id: 6,
    title: 'Finishing & Dispatch',
    subtitle: 'Inspected, stamped, and shipped to your door',
    description:
      'Cooled ingots are de-molded, visually inspected, weighed, and stamped with alloy grade and batch number. Every shipment includes a composition certificate. Ingots are securely strapped and dispatched across India.',
    image: '/images/process/dispatch.webp'
  }
]

export default function ProcessPage() {
  return (
    <SiteShell>
      <main>
        <section className="bg-bg py-[56px] md:py-[84px]">
          <div className="container-wide">
            <p className="text-[12px] font-medium uppercase tracking-[3px] text-accent">Our Process</p>
            <h1 className="heading-serif mt-4 text-[32px] leading-tight text-white md:text-[48px]">
              From Scrap to Specification
            </h1>
            <p className="mt-6 max-w-[72ch] text-[18px] leading-9 text-[#a0a0a0]">
              Every ingot we produce passes through 6 controlled stages - from sorted raw material to
              spectrometer-verified alloy. No shortcuts.
            </p>
          </div>
        </section>

        <section className="section-spacing pt-2">
          <div className="container-wide relative">
            <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[rgba(201,168,76,0.3)] lg:block" />

            <div className="space-y-10 md:space-y-14">
              {steps.map((step, index) => {
                const odd = index % 2 === 0

                return (
                  <ScrollReveal key={step.id}>
                    <article className="rounded-lg border border-border bg-card p-5 md:p-7">
                      <div className="grid gap-7 lg:grid-cols-20 lg:items-center">
                        {odd ? (
                          <>
                            <div className="lg:col-span-11">
                              <div className="group relative overflow-hidden rounded-lg border border-border">
                                <div className="relative aspect-[16/9]">
                                  <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="lg:col-span-9">
                              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-accent text-accent">
                                <span className="heading-serif text-lg">{step.id}</span>
                              </div>
                              <h2 className="heading-serif text-[28px] leading-tight text-white">{step.title}</h2>
                              <p className="mt-2 text-[16px] italic text-accent">{step.subtitle}</p>
                              <p className="mt-5 text-[16px] leading-8 text-[#a0a0a0]">{step.description}</p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="lg:col-span-9 order-2 lg:order-1">
                              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-accent text-accent">
                                <span className="heading-serif text-lg">{step.id}</span>
                              </div>
                              <h2 className="heading-serif text-[28px] leading-tight text-white">{step.title}</h2>
                              <p className="mt-2 text-[16px] italic text-accent">{step.subtitle}</p>
                              <p className="mt-5 text-[16px] leading-8 text-[#a0a0a0]">{step.description}</p>
                            </div>

                            <div className="lg:col-span-11 order-1 lg:order-2">
                              <div className="group relative overflow-hidden rounded-lg border border-border">
                                <div className="relative aspect-[16/9]">
                                  <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </article>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-[rgba(201,168,76,0.3)] bg-card py-[60px] md:py-[80px]">
          <div className="container-wide text-center">
            <h2 className="heading-serif text-[32px] leading-tight text-white md:text-[36px]">
              Ready to Source Quality Aluminium Ingots?
            </h2>
            <p className="mx-auto mt-4 max-w-[62ch] text-[16px] leading-8 text-[#a0a0a0]">
              Get a quote for ADC-12, LM-6, and all our standard grades.
            </p>
            <Link href="/contact" className="primary-btn mt-8 inline-flex rounded-md px-8 py-3">
              Request a Quote
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
