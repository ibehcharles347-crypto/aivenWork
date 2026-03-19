import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TrustedStats = () => {
    const stats = [
        { value: "$4.8B+", label: "Monthly volume" },
        { value: "0.1 pips", label: "Avg. spread" },
        { value: "24/7", label: "Expert support" },
        { value: "#1", label: "Broker 2024" }
    ];

    return (
        <section className="stats-section py-5">
            <Container>
                <Row className="g-4 text-center text-white">
                    {stats.map((stat, index) => (
                        <Col md={3} sm={6} key={index}>
                            <h2 className="fw-bold text-warning mb-0">
                                {stat.value}
                            </h2>
                            <p className="opacity-75">{stat.label}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default TrustedStats;