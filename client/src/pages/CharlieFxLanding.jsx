import "./CharlieFxLanding.css";
import HeroCarousel from "../components/Hero.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import TrustedStats from "../components/TrustedStats.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";

const CharlieFxLanding = () => {
    return (
        <div className="charlie-landing">
            <HeroCarousel />

            <main>
                <TrustedStats />
                <FeatureCard />
                <CTA />
                <Footer />
            </main>
        </div>
    );
};

export default CharlieFxLanding;