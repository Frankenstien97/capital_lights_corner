import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../../components/Hero/Hero';
import './ContactUs.css';

function ContactUs() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('/send_email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: t('contact.successMessage') || 'Message sent successfully!' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            setStatus({ type: 'error', message: t('contact.errorMessage') || 'Failed to send message. Please try again later.' });
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Hero
                variant="page"
                title={t('contact.title')}
                subtitle={t('contact.subtitle')}
                showCta={false}
            />

            <section className="contact-page">
                <div className="contact-page__container">
                    <div className="contact-page__intro">
                        <p>{t('contact.introText')}</p>
                    </div>

                    <div className="contact-page__grid">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="contact-info__person">
                                <h3 className="contact-info__person-name">{t('contact.contactPerson')}</h3>
                                <p className="contact-info__person-role">{t('contact.contactRole')}</p>
                            </div>

                            <div className="contact-info__items">
                                <div className="contact-info__item">
                                    <div className="contact-info__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="contact-info__content">
                                        <h4>{t('contact.addressTitle')}</h4>
                                        <p>{t('contact.address')}</p>
                                    </div>
                                </div>

                                <div className="contact-info__item">
                                    <div className="contact-info__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="contact-info__content">
                                        <h4>{t('contact.phoneTitle')}</h4>
                                        <a href="tel:+966536990113">{t('contact.phone')}</a>
                                    </div>
                                </div>

                                <div className="contact-info__item">
                                    <div className="contact-info__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="contact-info__content">
                                        <h4>{t('contact.emailTitle')}</h4>
                                        <a href="mailto:imuhammad@capitallightscorner.com">{t('contact.email')}</a>
                                    </div>
                                </div>

                                <div className="contact-info__item">
                                    <div className="contact-info__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                    <div className="contact-info__content">
                                        <h4>{t('contact.websiteTitle')}</h4>
                                        <a href="https://www.capitallightscorner.com" target="_blank" rel="noopener noreferrer">
                                            {t('contact.website')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3 className="contact-form__title">{t('contact.formTitle')}</h3>

                            <div className="contact-form__group">
                                <label className="contact-form__label" htmlFor="name">
                                    {t('contact.nameLabel')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="contact-form__input"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="contact-form__group">
                                <label className="contact-form__label" htmlFor="email">
                                    {t('contact.emailLabel')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="contact-form__input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="contact-form__group">
                                <label className="contact-form__label" htmlFor="subject">
                                    {t('contact.subjectLabel')}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="contact-form__input"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="contact-form__group">
                                <label className="contact-form__label" htmlFor="message">
                                    {t('contact.messageLabel')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="contact-form__textarea"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="contact-form__submit" disabled={isSubmitting}>
                                {isSubmitting ? (t('contact.sending') || 'Sending...') : t('contact.submitBtn')}
                            </button>

                            {status.message && (
                                <div className={`contact-form__status contact-form__status--${status.type}`} style={{ marginTop: '1rem', padding: '1rem', borderRadius: '4px', backgroundColor: status.type === 'error' ? '#fee2e2' : '#dcfce7', color: status.type === 'error' ? '#dc2626' : '#16a34a' }}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactUs;
