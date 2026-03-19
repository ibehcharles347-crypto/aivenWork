import Container from "react-bootstrap/Container";

const Footer = () => {
    return (
        <footer className="footer-section py-4">
            <Container>
                <div className="d-flex flex-wrap justify-content-between align-items-center text-white opacity-75">
                    <p className="mb-0">© 2025 CharlieFx. All rights reserved.</p>

                    <div className="d-flex gap-4">
                        <a href="#" className="text-white text-decoration-none">Terms</a>
                        <a href="#" className="text-white text-decoration-none">Privacy</a>
                        <a href="#" className="text-white text-decoration-none">Risk warning</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;