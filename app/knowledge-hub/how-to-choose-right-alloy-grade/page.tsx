import Link from 'next/link'
import { ArticleLayout } from '../../../components/article-layout'

export default function ArticleTwoPage() {
  return (
    <ArticleLayout
      category="Buyer's Guide"
      title="How to Choose the Right Aluminium Alloy Grade for Your Application"
      readingTime="5 min read"
    >
      <div className="space-y-7 text-[16px] leading-[1.8] text-text">
        <p>
          Selecting the right aluminium alloy grade is one of the most important decisions in the casting
          process. The wrong grade can lead to casting defects, poor mechanical performance, and costly
          production failures. This guide helps you understand which grade fits your application.
        </p>

        <div className="border border-accent bg-[#c9a84c1a] p-5">
          <p className="heading-serif text-[24px] italic text-accent">
            Even alloys within specification can behave differently across die-casting setups, so trial batches
            are essential before volume commitments.
          </p>
        </div>

        <h2 className="heading-serif text-[34px] text-accent">Understanding the Grading Systems</h2>
        <p>
          Aluminium alloy ingots are classified under different national and international standards. The most
          common systems used in India are:
        </p>
        <ul className="list-disc space-y-3 pl-6 text-text">
          <li>
            <strong>Indian Standard (IS)</strong> - Governed by the Bureau of Indian Standards.
          </li>
          <li>
            <strong>Japanese Industrial Standard (JIS)</strong> - Common in Japanese OEM supply chains operating
            in India (Toyota, Honda, Yamaha).
          </li>
          <li>
            <strong>British Standard (BS 1490)</strong> - Legacy standard still widely referenced, especially for
            LM-series alloys.
          </li>
          <li>
            <strong>American (ASTM/AA)</strong> - Used by some multinational manufacturers.
          </li>
        </ul>
        <p>
          Different standards may describe similar compositions under different names. For example, ADC-12 (JIS),
          LM-2 (BS), and A383 (AA) are broadly similar alloys. Your procurement team should be able to
          cross-reference between standards.
        </p>

        <h2 className="heading-serif text-[34px] text-accent">Matching Grade to Application</h2>
        <p>
          <strong>For automotive die-casting (two-wheelers and four-wheelers):</strong>
          <br />
          ADC-12 is the default choice for most die-cast automotive components in India. It offers the best
          balance of castability, strength, and cost. If you are supplying to Maruti, Honda, Hyundai, or similar
          OEMs, ADC-12 is likely your starting point.
        </p>
        <p>
          <strong>For components requiring higher strength:</strong>
          <br />
          LM-24 or ADC-10 offer improved mechanical properties. These are used where the component will bear
          structural loads or operate under higher stress conditions.
        </p>
        <p>
          <strong>For corrosion-resistant applications:</strong>
          <br />
          LM-6 is the go-to choice. Its higher silicon content provides excellent fluidity and corrosion
          resistance. Used in marine environments, outdoor architectural applications, and electrical housings
          exposed to moisture.
        </p>
        <p>
          <strong>For high-temperature applications:</strong>
          <br />
          AC4B and similar grades with controlled copper and silicon content provide good thermal stability. Used
          in engine blocks and components that operate at elevated temperatures.
        </p>
        <p>
          <strong>For custom or niche applications:</strong>
          <br />
          Discuss your specific requirements with your supplier. A knowledgeable supplier can recommend or source
          custom compositions tailored to your exact casting process and end-use conditions.
        </p>

        <h2 className="heading-serif text-[34px] text-accent">Key Properties to Evaluate</h2>
        <ul className="list-disc space-y-3 pl-6 text-text">
          <li>
            <strong>Castability</strong> - How well does the alloy flow into your mould? High silicon content
            (10-13%) generally improves fluidity. Critical for thin-walled or complex-geometry components.
          </li>
          <li>
            <strong>Mechanical Strength</strong> - Tensile strength and hardness matter for structural components.
            Copper additions increase strength but may reduce corrosion resistance.
          </li>
          <li>
            <strong>Machinability</strong> - Will the cast component need secondary machining? Some alloys machine
            more cleanly than others.
          </li>
          <li>
            <strong>Corrosion Resistance</strong> - Important for components exposed to weather, chemicals, or
            moisture. Silicon and magnesium improve corrosion resistance; copper reduces it.
          </li>
          <li>
            <strong>Thermal Conductivity</strong> - Relevant for heat sinks, engine components, and electrical
            applications where heat dissipation is critical.
          </li>
        </ul>

        <h2 className="heading-serif text-[34px] text-accent">Practical Tips for Buyers</h2>
        <p>
          Always request a test certificate with chemical composition data for each batch you receive. Compare
          against your required specification.
        </p>
        <p>
          If you are switching grades or suppliers, run a trial batch through your production process before
          committing to full volumes. Even alloys within specification can behave differently in different
          die-casting setups.
        </p>
        <p>
          Build a relationship with a supplier who understands your application. A good supplier does not just
          sell ingots - they help you solve production problems.
        </p>

        <div className="border border-border bg-card p-6">
          <p className="text-[16px] leading-[1.8] text-muted">
            Shambhavi Metal Alloys can help you select the right grade for your application.
          </p>
          <Link href="/contact" className="mt-3 inline-block text-sm uppercase tracking-[1px] text-accent">
            Contact our team for technical guidance
          </Link>
        </div>
      </div>
    </ArticleLayout>
  )
}
