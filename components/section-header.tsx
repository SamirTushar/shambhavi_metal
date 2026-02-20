export function SectionHeader({ label, title, subtitle, centered = false }: { label: string; title: string; subtitle?: string; centered?: boolean }) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <p className="section-label">{label}</p>
      <h2 className="heading-serif mt-3 text-4xl text-text">{title}</h2>
      {subtitle ? <p className="mt-4 max-w-[74ch] leading-8 text-muted">{subtitle}</p> : null}
    </div>
  )
}
