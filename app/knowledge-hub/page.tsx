import Link from 'next/link'
import { SiteShell } from '../../components/site-shell'

const articles = [
  {
    category: 'Technical Guide',
    title: 'What Are Aluminium Alloy Ingots? A Complete Guide for Industrial Buyers',
    excerpt:
      'Understand alloy ingots, common grades, manufacturing steps, and what buyers should verify before sourcing.',
    readingTime: '6 min read',
    href: '/knowledge-hub/what-are-aluminium-alloy-ingots'
  },
  {
    category: "Buyer's Guide",
    title: 'How to Choose the Right Aluminium Alloy Grade for Your Application',
    excerpt:
      'A practical framework to match alloy grades to casting requirements, mechanical needs, and operating conditions.',
    readingTime: '5 min read',
    href: '/knowledge-hub/how-to-choose-right-alloy-grade'
  },
  {
    category: 'Industry Insights',
    title: "The Role of Aluminium Alloy Ingots in India's Automotive Supply Chain",
    excerpt:
      'Explore why aluminium is central to automotive manufacturing and how regional supply reliability affects production.',
    readingTime: '5 min read',
    href: '/knowledge-hub/aluminium-ingots-automotive-supply-chain'
  }
]

export default function KnowledgeHubPage() {
  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden bg-bg py-[44px] pt-[64px]">
          <div className="absolute inset-x-0 top-[78px] h-[180px] bg-[radial-gradient(circle_at_top,_#c9a84c1c,_transparent_70%)]" />
          <div className="container-wide relative text-center">
            <h1 className="heading-serif text-4xl text-text md:text-5xl">Knowledge Hub</h1>
            <p className="mx-auto mt-4 max-w-[72ch] text-base leading-8 text-muted">
              Industry insights and technical resources for aluminium alloy buyers and manufacturers.
            </p>
          </div>
        </section>

        <section className="section-spacing pt-10">
          <div className="container-wide">
            <div className="grid gap-5 lg:grid-cols-3">
              {articles.map((article) => (
                <article
                  key={article.href}
                  className="flex min-h-[320px] flex-col border border-border bg-card p-7 transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_0_30px_rgba(201,168,76,0.12)]"
                >
                  <p className="section-label">{article.category}</p>
                  <h2 className="heading-serif mt-4 text-[30px] leading-tight text-text">{article.title}</h2>
                  <p className="mt-4 leading-7 text-muted">{article.excerpt}</p>
                  <div className="mt-auto pt-8">
                    <p className="text-sm text-muted">{article.readingTime}</p>
                    <Link
                      href={article.href}
                      className="mt-3 inline-block text-sm uppercase tracking-[1px] text-accent transition-colors hover:text-accentLight"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
