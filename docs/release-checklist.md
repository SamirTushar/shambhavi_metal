# Release Checklist

## Pages and Links
- [ ] All routes load: `/`, `/about`, `/products`, `/why-us`, `/knowledge-hub`, `/contact`
- [ ] Knowledge Hub article routes load correctly
- [ ] Navigation links and in-page CTAs use Next.js `Link`

## Policy and Branding
- [ ] No phone number displayed anywhere on the site
- [ ] Floating WhatsApp button appears on all pages and links to `https://wa.me/919891047155`
- [ ] No tool branding badges present

## Home
- [ ] Hero carousel auto-rotates every 4s
- [ ] Hero carousel has dots and pause-on-hover on desktop
- [ ] Mobile hero text is centered with proper horizontal padding
- [ ] Home contact form submits and shows success/error state

## Products
- [ ] JIS and BS tables render all rows/columns
- [ ] Mobile table containers scroll horizontally
- [ ] Right-edge shadow indicator is visible on mobile table overflow

## Contact and Forms
- [ ] Contact form validation works
- [ ] Submission stored in `data/inquiries.json`
- [ ] SMTP email sends when env vars are configured

## SEO and Assets
- [ ] Metadata title/description are correct
- [ ] Open Graph image is configured
- [ ] Favicon loads

## Deploy Handoff
- [ ] Push to GitHub
- [ ] Connect project to Vercel
- [ ] Configure `shambhavimetal.com` domain and DNS records
- [ ] Configure mailbox provider (Zoho/Google Workspace)
- [ ] Test WhatsApp and form submission on mobile
