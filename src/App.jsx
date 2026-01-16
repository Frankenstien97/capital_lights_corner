import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ITServices from './pages/ITServices/ITServices';
import ConstructionServices from './pages/ConstructionServices/ConstructionServices';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Partners from './pages/Partners/Partners';

function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        // Set document direction based on language
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <div className="app">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/it-services" element={<ITServices />} />
                    <Route path="/construction-services" element={<ConstructionServices />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/partners" element={<Partners />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
