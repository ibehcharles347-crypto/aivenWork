import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const CTA = () => {
    return (
        <section className="cta-section py-5">
            <Container>
                <div className="cta-card rounded-5 p-5 text-center">
                    <h2 className="display-5 fw-bold text-white mb-3">
                        Start your trading journey today
                    </h2>
                    <p className="text-light opacity-75 mb-4 fs-5">
                        Get a <strong className="text-warning">50% deposit bonus</strong> on your first funding
                    </p>
                    <Button variant="warning" size="lg" className="fw-semibold px-5 py-3">
                        Claim Bonus →
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default CTA;