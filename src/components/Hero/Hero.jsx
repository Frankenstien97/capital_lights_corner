import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Hero.css';

function Hero({ variant = 'home', title, subtitle, showCta = true }) {
    const { t } = useTranslation();

    return (
        <section className={`hero ${variant === 'page' ? 'hero--page' : ''}`}>
            <div className="hero__bg-pattern" />

            <div className="hero__container">
                {variant === 'home' && (
                    <span className="hero__tagline">{t('hero.tagline')}</span>
                )}

                <h1 className="hero__title">
                    {title || (
                        <>
                            {t('hero.title').split(' ').slice(0, -1).join(' ')}{' '}
                            <span>{t('hero.title').split(' ').slice(-1)}</span>
                        </>
                    )}
                </h1>

                <p className="hero__subtitle">
                    {subtitle || t('hero.subtitle')}
                </p>

                {showCta && variant === 'home' && (
                    <div className="hero__cta">
                        <Link to="/it-services" className="hero__btn hero__btn--primary">
                            {t('hero.cta')}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                        <Link to="/contact" className="hero__btn hero__btn--secondary">
                            {t('hero.ctaSecondary')}
                        </Link>
                    </div>
                )}
            </div>

            {variant === 'home' && (
                <div className="hero__scroll-indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </div>
            )}

            <div className="hero__wave" />
        </section>
    );
}

export default Hero;
