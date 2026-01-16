import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../../components/Hero/Hero';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './Home.css';

function Home() {
    const { t } = useTranslation();

    return (
        <>
            <Hero />

            {/* Introduction Section */}
            <section className="home-intro">
                <div className="home-intro__container">
                    <div className="home-intro__content">
                        <h2>
                            {t('home.introTitle')} <span>({t('home.introSubtitle')})</span>
                        </h2>
                        <p className="home-intro__subtitle">{t('about.introTitle')}</p>
                        <p className="home-intro__text">{t('home.introText')}</p>
                        <p className="home-intro__text">{t('home.introText2')}</p>
                        <Link to="/about" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
                            {t('home.learnMore')}
                        </Link>
                    </div>
                    <div className="home-intro__image">
                        <div className="home-intro__image-wrapper">
                            <img src="/logo.png" alt="CLCC" style={{ objectFit: 'contain', background: 'white', padding: '2rem' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="home-services">
                <div className="home-services__container">
                    <div className="home-services__header">
                        <h2>{t('home.servicesTitle')}</h2>
                        <p>{t('home.servicesSubtitle')}</p>
                    </div>
                    <div className="home-services__grid">
                        <ServiceCard
                            title={t('home.itServicesTitle')}
                            description={t('home.itServicesDesc')}
                            link="/it-services"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            }
                        />
                        <ServiceCard
                            title={t('home.constructionTitle')}
                            description={t('home.constructionDesc')}
                            link="/construction-services"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            }
                        />
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="home-partners">
                <div className="home-partners__container">
                    <div className="home-partners__header">
                        <h2>{t('home.partnersTitle')}</h2>
                        <p>{t('home.partnersSubtitle')}</p>
                    </div>
                    <div className="home-partners__grid">
                        {['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5', 'Partner 6'].map((partner, index) => (
                            <div key={index} className="home-partners__item">
                                <span style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>{partner}</span>
                            </div>
                        ))}
                    </div>
                    <div className="home-partners__cta">
                        <Link to="/partners" className="btn btn--secondary">
                            {t('home.learnMore')}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
