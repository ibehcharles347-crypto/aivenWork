import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TrendingUp, Shield, Globe, BarChart3 } from "lucide-react";
import FeatureItem from "./FeatureItem";
import "../pages/CharlieFxLanding.css";

const FeatureCard = () => {
    const features = [
        {
            icon: TrendingUp,
            title: "Tight spreads",
            description: "From 0.0 pips on major pairs. No hidden commissions."
        },
        {
            icon: Shield,
            title: "Regulated & safe",
            description: "FCA, CySEC licensed. Client funds segregated."
        },
        {
            icon: Globe,
            title: "Global markets",
            description: "Forex, indices, commodities, crypto. 300+ instruments."
        },
        {
            icon: BarChart3,
            title: "Advanced tools",
            description: "Trading Central, Autochartist, and free VPS."
        }
    ];

    return (
        <section className="features-section py-5">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="display-6 fw-bold text-white">
                        Why trade with <span className="brand-accent">CharlieFx</span>?
                    </h2>
                    <p className="text-light opacity-75">
                        Experience the difference with our premium features
                    </p>
                </div>

                <Row className="g-4">
                    {features.map((feature, index) => (
                        <Col lg={3} md={6} key={index}>
                            <FeatureItem {...feature} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default FeatureCard;