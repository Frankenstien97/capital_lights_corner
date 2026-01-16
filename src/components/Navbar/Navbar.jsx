import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

function Navbar() {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar__container">
                    <Link to="/" className="navbar__logo">
                        <img src="/logo.png" alt="Capital Lights Company" />
                        <div className="navbar__logo-text">
                            Capital Lights Company
                            <span>CLCC</span>
                        </div>
                    </Link>

                    <div className="navbar__nav">
                        <ul className="navbar__links">
                            <li>
                                <Link to="/" className={`navbar__link ${isActive('/') ? 'active' : ''}`}>
                                    {t('nav.home')}
                                </Link>
                            </li>
                            <li className="navbar__dropdown">
                                <button className="navbar__dropdown-btn">
                                    {t('nav.services')}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="navbar__dropdown-menu">
                                    <Link to="/it-services" className="navbar__dropdown-link">
                                        {t('nav.itServices')}
                                    </Link>
                                    <Link to="/construction-services" className="navbar__dropdown-link">
                                        {t('nav.constructionServices')}
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <Link to="/about" className={`navbar__link ${isActive('/about') ? 'active' : ''}`}>
                                    {t('nav.about')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/partners" className={`navbar__link ${isActive('/partners') ? 'active' : ''}`}>
                                    {t('nav.partners')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className={`navbar__link ${isActive('/contact') ? 'active' : ''}`}>
                                    {t('nav.contact')}
                                </Link>
                            </li>
                        </ul>

                        <div className="navbar__actions">
                            <button className="navbar__lang-btn" onClick={toggleLanguage}>
                                {i18n.language === 'en' ? 'العربية' : 'English'}
                            </button>

                            <button
                                className={`navbar__hamburger ${isMobileMenuOpen ? 'open' : ''}`}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`navbar__overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)} />
            <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <nav className="navbar__mobile-links">
                    <Link to="/" className={`navbar__mobile-link ${isActive('/') ? 'active' : ''}`}>
                        {t('nav.home')}
                    </Link>
                    <div className="navbar__mobile-divider" />
                    <Link to="/it-services" className={`navbar__mobile-link ${isActive('/it-services') ? 'active' : ''}`}>
                        {t('nav.itServices')}
                    </Link>
                    <Link to="/construction-services" className={`navbar__mobile-link ${isActive('/construction-services') ? 'active' : ''}`}>
                        {t('nav.constructionServices')}
                    </Link>
                    <div className="navbar__mobile-divider" />
                    <Link to="/about" className={`navbar__mobile-link ${isActive('/about') ? 'active' : ''}`}>
                        {t('nav.about')}
                    </Link>
                    <Link to="/partners" className={`navbar__mobile-link ${isActive('/partners') ? 'active' : ''}`}>
                        {t('nav.partners')}
                    </Link>
                    <Link to="/contact" className={`navbar__mobile-link ${isActive('/contact') ? 'active' : ''}`}>
                        {t('nav.contact')}
                    </Link>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
