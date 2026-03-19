import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BarChart3 } from "lucide-react";

function HeroCarousel() {
    return (
        <Carousel className="charlie-carousel" controls indicators pause="hover" wrap>
            {/* Slide 1 - Hero with image */}
            <Carousel.Item interval={4000}>
                <div className="carousel-overlay"></div>
                <Container>
                    <Row className="align-items-center min-vh-50 py-5">
                        <Col lg={6} md={6} className="text-white mb-4 mb-md-0">
                            <h1 className="display-4 fw-bold mb-3">
                                Welcome to <span className="brand-accent">CharlieFx</span>
                            </h1>
                            <p className="lead mb-4 text-light opacity-75">
                                Trade forex with institutional-grade spreads, lightning execution, and 24/7 expert support.
                                Your gateway to the global currency markets.
                            </p>
                            <Button variant="warning" size="lg" className="me-3 fw-semibold px-4">Start Trading</Button>
                            <Button variant="outline-light" size="lg" className="px-4">Demo Account</Button>
                        </Col>
                        <Col lg={6} md={6} className="text-center">
                            <img
                                src="https://placehold.co/600x400/1e2a47/ffd700?text=CharlieFx+Platform"
                                alt="Trading dashboard preview"
                                className="img-fluid rounded-4 shadow-glow"
                            />
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>

            {/* Slide 2 - Speed & performance */}
            <Carousel.Item interval={4000}>
                <div className="carousel-overlay"></div>
                <Container>
                    <Row className="align-items-center min-vh-50 py-5 text-center text-lg-start">
                        <Col lg={7} className="text-white order-2 order-lg-1">
                            <h1 className="display-4 fw-bold mb-3">
                                Lightning <span className="brand-accent">Execution</span>
                            </h1>
                            <p className="lead mb-4 text-light opacity-75">
                                Ultra-fast order execution with no requotes. Leverage our cutting-edge infrastructure
                                to capture every market opportunity.
                            </p>
                            <Button variant="warning" size="lg" className="fw-semibold">Explore Technology</Button>
                        </Col>
                        <Col lg={5} className="text-center order-1 order-lg-2 mb-4 mb-lg-0">
                            <BarChart3 size={180} className="text-warning opacity-75" />
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>

            {/* Slide 3 - Community & Trust */}
            <Carousel.Item interval={4000}>
                <div className="carousel-overlay"></div>
                <Container>
                    <Row className="align-items-center min-vh-50 py-5 text-center">
                        <Col md={12} className="text-white">
                            <h1 className="display-4 fw-bold mb-3">
                                Join <span className="brand-accent">45,000+</span> Traders
                            </h1>
                            <p className="lead mb-5 text-light opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
                                Become part of a thriving community. Benefit from daily analysis, webinars,
                                and exclusive trading insights.
                            </p>
                            <Button variant="warning" size="lg" className="fw-semibold px-5 py-3">Create Free Account</Button>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>
    );
}

export default HeroCarousel;