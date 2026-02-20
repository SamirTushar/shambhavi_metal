import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'
import { WhatsAppFloat } from './whatsapp-float'

export function SiteShell({ children, showWhatsapp = true }: { children: React.ReactNode; showWhatsapp?: boolean }) {
  return (
    <>
      <SiteHeader />
      {children}
      <div className="mt-10">
        <SiteFooter />
      </div>
      {showWhatsapp ? <WhatsAppFloat /> : null}
    </>
  )
}
