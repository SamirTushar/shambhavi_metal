import Link from 'next/link'
import { ArticleLayout } from '../../../components/article-layout'

export default function ArticleOnePage() {
  return (
    <ArticleLayout
      category="Technical Guide"
      title="What Are Aluminium Alloy Ingots? A Complete Guide for Industrial Buyers"
      readingTime="6 min read"
    >
      <div className="space-y-7 text-[16px] leading-[1.8] text-text">
        <p>
          Aluminium alloy ingots are solid blocks of aluminium combined with other metals such as silicon,
          copper, magnesium, and zinc. These ingots serve as the primary raw material for casting processes
          across automotive, electrical, construction, and consumer goods industries.
        </p>
        <p>
          Unlike pure aluminium, alloy ingots are engineered to deliver specific properties - higher strength,
          better castability, improved corrosion resistance, or enhanced thermal conductivity - depending on the
          grade and composition.
        </p>

        <div className="border border-accent bg-[#c9a84c1a] p-5">
          <p className="heading-serif text-[24px] italic text-accent">
            Reliable ingot quality directly impacts casting yield, rejection rates, and final component
            performance.
          </p>
        </div>

        <h2 className="heading-serif text-[34px] text-accent">Why Alloys, Not Pure Aluminium?</h2>
        <p>
          Pure aluminium is soft and has limited mechanical strength. For industrial applications - especially
          die-casting of automotive and electrical components - manufacturers need materials that can withstand
          stress, resist wear, and flow smoothly into complex mould shapes.
        </p>
        <p>
          This is where alloying comes in. By adding controlled amounts of silicon (for fluidity), copper (for
          strength), magnesium (for corrosion resistance), or zinc (for hardness), producers create ingots
          optimized for specific manufacturing processes and end-use conditions.
        </p>

        <h2 className="heading-serif text-[34px] text-accent">How Are Aluminium Alloy Ingots Made?</h2>
        <p>The production process typically involves:</p>
        <ul className="list-disc space-y-3 pl-6 text-text">
          <li>
            <strong>Raw Material Selection</strong> - Scrap aluminium, primary aluminium, and alloying elements
            are selected based on the target grade specification.
          </li>
          <li>
            <strong>Melting</strong> - Materials are melted in furnaces at temperatures exceeding 660°C. The
            composition is carefully controlled through spectrometric analysis during the melting process.
          </li>
          <li>
            <strong>Alloying</strong> - Precise quantities of silicon, copper, magnesium, and other elements are
            added to achieve the desired chemical composition.
          </li>
          <li>
            <strong>Degassing &amp; Cleaning</strong> - Molten metal is treated to remove dissolved gases and
            impurities that could cause porosity or defects in castings.
          </li>
          <li>
            <strong>Casting</strong> - The refined molten alloy is poured into moulds and allowed to solidify into
            ingot form. Standard ingot weights range from 5 kg to 10 kg depending on the specification.
          </li>
          <li>
            <strong>Quality Testing</strong> - Each batch undergoes chemical analysis and, where required,
            mechanical property testing before dispatch.
          </li>
        </ul>

        <h2 className="heading-serif text-[34px] text-accent">Common Grades and Their Applications</h2>
        <p>
          ADC-12 is the most widely used die-casting alloy in India&apos;s automotive sector. It offers excellent
          castability and good mechanical properties, making it ideal for engine components, gear boxes, and
          transmission housings.
        </p>
        <p>
          LM-24 (also known as BS 1490 LM24) is preferred for components requiring higher strength and good
          machinability. It is commonly used in cylinder heads and structural automotive parts.
        </p>
        <p>
          LM-6 offers superior corrosion resistance and ductility, making it suitable for marine applications,
          architectural fittings, and electrical components exposed to moisture.
        </p>
        <p>
          AC4B (JIS standard) provides good wear resistance and thermal conductivity, commonly specified for
          engine blocks and brake components.
        </p>

        <h2 className="heading-serif text-[34px] text-accent">What Should Buyers Look For?</h2>
        <ul className="list-disc space-y-3 pl-6 text-text">
          <li>
            <strong>Chemical composition certificates for every batch</strong> - this ensures the ingot meets the
            specified grade and will perform as expected in your casting process.
          </li>
          <li>
            <strong>Supplier certifications</strong> - ISO 9001 certification indicates that the supplier
            follows standardized quality management practices.
          </li>
          <li>
            <strong>Consistency</strong> - A reliable supplier delivers the same quality batch after batch. Ask
            for references from existing clients in your industry.
          </li>
          <li>
            <strong>Logistics capability</strong> - For production-critical materials, on-time delivery is
            non-negotiable. Choose a supplier with proven delivery track records in your region.
          </li>
        </ul>

        <h2 className="heading-serif text-[34px] text-accent">Why This Matters for Your Production</h2>
        <p>
          The quality of your raw material directly impacts your casting yield, rejection rates, and final product
          quality. Substandard ingots lead to porosity, dimensional inaccuracies, and mechanical failures - all of
          which increase costs and damage your reputation with end customers.
        </p>
        <p>
          Investing in a reliable ingot supplier is not just procurement - it is a production quality decision.
        </p>

        <div className="border border-border bg-card p-6">
          <p className="text-[16px] leading-[1.8] text-muted">
            Shambhavi Metal Alloys supplies premium aluminium alloy ingots across Delhi-NCR and India.
          </p>
          <Link href="/contact" className="mt-3 inline-block text-sm uppercase tracking-[1px] text-accent">
            Contact us to discuss your requirements
          </Link>
        </div>
      </div>
    </ArticleLayout>
  )
}
