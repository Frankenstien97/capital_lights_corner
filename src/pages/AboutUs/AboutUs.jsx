import { useTranslation } from 'react-i18next';
import Hero from '../../components/Hero/Hero';
import './AboutUs.css';

function AboutUs() {
    const { t } = useTranslation();

    return (
        <>
            <Hero
                variant="page"
                title={t('about.title')}
                subtitle={t('about.subtitle')}
                showCta={false}
            />

            <section className="about-page">
                <div className="about-page__container">
                    {/* Introduction */}
                    <div className="about-page__section">
                        <h2 className="about-page__section-title">{t('about.introTitle')}</h2>
                        <p className="about-page__text">{t('about.introText')}</p>
                        <p className="about-page__text">{t('about.introText2')}</p>
                        <p className="about-page__text">{t('about.introText3')}</p>
                    </div>

                    {/* Mission */}
                    <div className="about-page__section">
                        <div className="about-page__mission">
                            <h3>{t('about.missionTitle')}</h3>
                            <p>{t('about.missionText')}</p>
                        </div>
                    </div>

                    {/* Team & Workforce */}
                    <div className="about-page__section">
                        <div className="about-page__grid">
                            <div className="about-page__card">
                                <h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    {t('about.teamTitle')}
                                </h4>
                                <p>{t('about.teamText')}</p>
                                <p style={{ marginTop: '1rem' }}>{t('about.teamText2')}</p>
                            </div>

                            <div className="about-page__card">
                                <h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {t('about.workforceTitle')}
                                </h4>
                                <p>{t('about.workforceText')}</p>
                                <p style={{ marginTop: '1rem' }}>{t('about.workforceText2')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Org Chart */}
                    <div className="about-page__section">
                        <div className="org-chart">
                            <h3 className="org-chart__title">{t('about.orgChartTitle')}</h3>
                            <div className="org-chart__box">General Manager</div>
                            <div className="org-chart__level">
                                <div className="org-chart__item">Civil Manager</div>
                                <div className="org-chart__item">Maintenance Manager</div>
                                <div className="org-chart__item">IT Manager</div>
                                <div className="org-chart__item">DM Manager</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;
