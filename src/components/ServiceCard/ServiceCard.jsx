import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ServiceCard.css';

function ServiceCard({ title, description, icon, link, variant = 'default' }) {
    const { t } = useTranslation();

    return (
        <div className={`service-card ${variant === 'horizontal' ? 'service-card--horizontal' : ''}`}>
            <div className="service-card__icon">
                {icon}
            </div>
            <div className="service-card__content">
                <h3 className="service-card__title">{title}</h3>
                <p className="service-card__description">{description}</p>
                {link && (
                    <Link to={link} className="service-card__link">
                        {t('home.learnMore')}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default ServiceCard;
