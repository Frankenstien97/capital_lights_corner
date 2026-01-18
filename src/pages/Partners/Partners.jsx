import { useTranslation } from 'react-i18next';
import Hero from '../../components/Hero/Hero';
import './Partners.css';

function Partners() {
    const { t } = useTranslation();

    // Partner placeholders - in production these would be actual logos
    const partners = [
        'Partner 1', 'Partner 2', 'Partner 3', 'Partner 4',
        'Partner 5', 'Partner 6', 'Partner 7', 'Partner 8',
        'Partner 9', 'Partner 10', 'Partner 11', 'Partner 12'
    ];

    const services = [
        {
            titleKey: 'itServices.infrastructure.title',
            descKey: 'itServices.infrastructure.desc',
            icon: ServerIcon
        },
        {
            titleKey: 'itServices.backup.title',
            descKey: 'itServices.backup.desc',
            icon: DatabaseIcon
        },
        {
            titleKey: 'itServices.security.title',
            descKey: 'itServices.security.desc',
            icon: ShieldIcon
        },
        {
            titleKey: 'itServices.datacenter.title',
            descKey: 'itServices.datacenter.desc',
            icon: ServerStackIcon
        },
        {
            titleKey: 'itServices.telecom.title',
            descKey: 'itServices.telecom.desc',
            icon: SignalIcon
        }
    ];

    return (
        <>
            <Hero
                variant="page"
                title={t('partners.title')}
                subtitle={t('partners.subtitle')}
                showCta={false}
            />

            <section className="partners-page">
                <div className="partners-page__container">
                    <div className="partners-page__intro">
                        <p>
                            {t('footer.description')}
                        </p>
                    </div>

                    <div className="partners-page__image-container">
                        <img src="/src/assets/partners/partners_collage.png" alt="Our Partners: Huawei, Alcatel-Lucent, Ubiquiti, TP-Link, and others" />
                    </div>

                    {/* Hardware Networking Services */}
                    <div className="partners-services">
                        <h2 className="partners-services__title">
                            {t('itServices.subtitle')}
                        </h2>
                        <div className="partners-services__grid">
                            {services.map(({ titleKey, descKey, icon: Icon }, index) => (
                                <div key={index} className="partners-service">
                                    <div className="partners-service__icon">
                                        <Icon />
                                    </div>
                                    <div className="partners-service__content">
                                        <h4>{t(titleKey)}</h4>
                                        <p>{t(descKey)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// Icons
function ServerIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
    );
}

function DatabaseIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
    );
}

function ShieldIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    );
}

function ServerStackIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
        </svg>
    );
}

function SignalIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
    );
}

export default Partners;
