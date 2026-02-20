export function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <blockquote className="border border-border bg-card p-7">
      <p className="heading-serif text-[26px] leading-[1.5] text-[#d7d7d7]">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-6 text-sm uppercase tracking-[1px] text-accent">{author}</footer>
    </blockquote>
  )
}
