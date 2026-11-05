import { MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { BUSINESS, wa } from '../lib/site'
import { Logo, WhatsAppIcon } from './ui'

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.6-1.5H17V5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.8V11H8.5v3H11v7" />
    </svg>
  )
}

export default function Footer() {
  const { t } = useLanguage()

  const links = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'experiences', label: t.nav.experiences },
    { id: 'training', label: t.nav.training },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo asLink={false} />
            <p>{t.footer.tagline}</p>
            <div className="footer__social">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shadow Fitness on Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shadow Fitness on Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <nav aria-labelledby="footer-explore">
            <p className="footer__title" id="footer-explore">
              {t.footer.explore}
            </p>
            <div className="footer__links">
              {links.map((link) => (
                <a key={link.id} href={`#${link.id}`}>
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div>
            <p className="footer__title" id="footer-contact">
              {t.footer.contact}
            </p>
            <div className="footer__contact">
              <a href={BUSINESS.phoneHref} dir="ltr">
                <Phone size={15} aria-hidden="true" />
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={wa(t.whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={15} />
                {t.actions.whatsapp}
              </a>
              <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin size={15} aria-hidden="true" />
                {BUSINESS.addressEn}
              </a>
            </div>
          </div>
        </div>

        <div className="footer__watermark" aria-hidden="true">
          Shadow Fitness
        </div>

        <div className="footer__bottom">
          <p className="footer__legal">
            {t.footer.demo}
            {t.footer.notAffiliated ? <strong>{t.footer.notAffiliated}</strong> : null}
          </p>
          <span className="footer__credit">
            {t.footer.credit.replace('TRIBAL³', '')}
            <strong>TRIBAL³</strong>
          </span>
        </div>
      </div>
    </footer>
  )
}
