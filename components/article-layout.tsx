import Link from 'next/link'
import { SiteShell } from './site-shell'

type ArticleLayoutProps = {
  category: string
  title: string
  readingTime: string
  children: React.ReactNode
}

export function ArticleLayout({ category, title, readingTime, children }: ArticleLayoutProps) {
  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden bg-bg py-[42px] pt-[62px]">
          <div className="absolute inset-x-0 top-[78px] h-[160px] bg-[radial-gradient(circle_at_top,_#c9a84c1a,_transparent_70%)]" />
          <div className="container-wide relative">
            <p className="text-xs uppercase tracking-[2px] text-muted">
              <Link href="/" className="transition-colors hover:text-accent">
                Home
              </Link>{' '}
              &gt;{' '}
              <Link href="/knowledge-hub" className="transition-colors hover:text-accent">
                Knowledge Hub
              </Link>{' '}
              &gt; Article
            </p>
            <p className="section-label mt-5">{category}</p>
            <h1 className="heading-serif mt-3 max-w-[18ch] text-4xl leading-tight text-text md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm uppercase tracking-[1px] text-muted">{readingTime}</p>
          </div>
        </section>

        <article className="section-spacing pt-10">
          <div className="mx-auto max-w-[720px] px-5">{children}</div>
        </article>
      </main>
    </SiteShell>
  )
}
