import Link from 'next/link'
import { ArticleLayout } from '../../../components/article-layout'

export default function ArticleThreePage() {
  return (
    <ArticleLayout
      category="Industry Insights"
      title="The Role of Aluminium Alloy Ingots in India's Automotive Supply Chain"
      readingTime="5 min read"
    >
      <div className="space-y-7 text-[16px] leading-[1.8] text-text">
        <p>
          India&apos;s automotive industry is one of the largest in the world, producing over 25 million vehicles
          annually. Behind every vehicle - from two-wheelers to commercial trucks - are hundreds of die-cast
          aluminium components. And behind every one of those components is an aluminium alloy ingot.
        </p>

        <div className="border border-accent bg-[#c9a84c1a] p-5">
          <p className="heading-serif text-[24px] italic text-accent">
            Aluminium alloy castings are 60-65% lighter than equivalent iron castings while maintaining comparable
            strength.
          </p>
        </div>

        <h2 className="heading-serif text-[34px] text-accent">Why Aluminium in Automotive?</h2>
        <p>
          The shift towards aluminium in automotive manufacturing has been driven by one primary factor: weight
          reduction. Lighter vehicles consume less fuel and produce fewer emissions - critical priorities as India
          tightens emission standards (BS-VI) and global OEMs push for sustainability targets.
        </p>
        <p>
          Aluminium alloy castings are 60-65% lighter than equivalent iron castings while maintaining comparable
          strength. This makes aluminium the material of choice for engine blocks, transmission housings, wheel
          rims, structural cross-members, and increasingly, body panels.
        </p>

        <h2 className="heading-serif text-[34px] text-accent">The Supply Chain Structure</h2>
        <p>The aluminium alloy supply chain in India&apos;s automotive sector typically works as follows:</p>
        <ul className="list-disc space-y-3 pl-6 text-text">
          <li>
            Tier 1 and Tier 2 component manufacturers (die-casters) receive orders from OEMs like Maruti Suzuki,
            Hyundai, Honda, Toyota, Bajaj, and Hero MotoCorp.
          </li>
          <li>
            These component manufacturers source aluminium alloy ingots from suppliers like Shambhavi Metal
            Alloys. The ingot is their primary raw material.
          </li>
          <li>
            The ingots are melted in die-casting furnaces and injected under high pressure into moulds to produce
            finished components.
          </li>
          <li>Components are then machined, surface-treated, and assembled into the final vehicle.</li>
        </ul>

        <h2 className="heading-serif text-[34px] text-accent">What OEMs Demand from the Supply Chain</h2>
        <p>
          Quality consistency is paramount. OEMs run high-volume production lines where even a small increase in
          casting rejection rates translates to significant financial losses. They expect:
        </p>
        <ul className="list-disc space-y-3 pl-6 text-text">
          <li>
            <strong>Grade compliance</strong> - The ingot must meet the specified grade (typically ADC-12 or AC4B)
            with chemical composition within tight tolerances.
          </li>
          <li>
            <strong>Batch traceability</strong> - Every ingot batch must be traceable back to its source, with test
            certificates documenting composition and quality checks.
          </li>
          <li>
            <strong>Supply reliability</strong> - Production lines cannot stop due to raw material shortages.
            Suppliers must maintain adequate inventory and have contingency plans.
          </li>
          <li>
            <strong>Cost competitiveness</strong> - While quality is non-negotiable, the automotive industry
            operates on thin margins. Suppliers must offer competitive pricing through operational efficiency.
          </li>
        </ul>

        <h2 className="heading-serif text-[34px] text-accent">Regional Dynamics: Delhi-NCR as an Automotive Hub</h2>
        <p>
          Delhi-NCR and the surrounding regions of Haryana and Rajasthan form one of India&apos;s most significant
          automotive manufacturing clusters. Major OEM plants (Maruti in Gurugram and Manesar, Honda in Greater
          Noida, Yamaha in Surajpur) are all located here, along with hundreds of Tier 1 and Tier 2 component
          suppliers.
        </p>
        <p>
          This geographic concentration creates a strong local demand for aluminium alloy ingots. Suppliers based
          in this region - like Shambhavi Metal Alloys in Delhi-NCR and Tatarpur, Palwal - benefit from proximity
          to clients, enabling faster delivery and more responsive service.
        </p>

        <h2 className="heading-serif text-[34px] text-accent">Industry Trends to Watch</h2>
        <p>
          Electric vehicles (EVs) are increasing aluminium content per vehicle, as battery housings, motor
          casings, and lightweight structural components all require aluminium alloys. This is expanding the market
          for alloy ingot suppliers.
        </p>
        <p>
          Recycled aluminium is gaining acceptance. Secondary aluminium (made from recycled scrap) consumes 95%
          less energy than primary aluminium production. OEMs are increasingly accepting recycled content in
          non-critical components, opening new sourcing options.
        </p>
        <p>
          Tighter quality standards are raising the bar for suppliers. IATF 16949 and similar automotive quality
          certifications are becoming expected, not optional, for suppliers serving the automotive chain.
        </p>

        <div className="border border-border bg-card p-6">
          <p className="text-[16px] leading-[1.8] text-muted">
            Shambhavi Metal Alloys is a trusted aluminium alloy ingot supplier to Delhi-NCR&apos;s automotive
            component manufacturers.
          </p>
          <Link href="/contact" className="mt-3 inline-block text-sm uppercase tracking-[1px] text-accent">
            Contact us to support your production requirements
          </Link>
        </div>
      </div>
    </ArticleLayout>
  )
}
