import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            <img src="/logo.png" alt="Capital Lights Company" />
                            <div className="footer__logo-text">
                                Capital Lights Company
                                <span>CLCC</span>
                            </div>
                        </Link>
                        <p className="footer__description">
                            {t('footer.description')}
                        </p>
                    </div>

                    <div className="footer__column">
                        <h4>{t('footer.quickLinks')}</h4>
                        <nav className="footer__links">
                            <Link to="/" className="footer__link">{t('nav.home')}</Link>
                            <Link to="/about" className="footer__link">{t('nav.about')}</Link>
                            <Link to="/partners" className="footer__link">{t('nav.partners')}</Link>
                            <Link to="/contact" className="footer__link">{t('nav.contact')}</Link>
                        </nav>
                    </div>

                    <div className="footer__column">
                        <h4>{t('footer.services')}</h4>
                        <nav className="footer__links">
                            <Link to="/it-services" className="footer__link">{t('nav.itServices')}</Link>
                            <Link to="/construction-services" className="footer__link">{t('nav.constructionServices')}</Link>
                        </nav>
                    </div>

                    <div className="footer__column">
                        <h4>{t('footer.contactInfo')}</h4>
                        <div className="footer__contact-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{t('contact.address')}</span>
                        </div>
                        <div className="footer__contact-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href="tel:+966536990113">{t('contact.phone')}</a>
                        </div>
                        <div className="footer__contact-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:imuhammad@capitallightscorner.com">{t('contact.email')}</a>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} {t('footer.company')}. {t('footer.rights')}.
                    </p>
                    <div className="footer__social">
                        <a href="#" className="footer__social-link" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href="#" className="footer__social-link" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
