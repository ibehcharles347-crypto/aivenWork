import Card from "react-bootstrap/Card";

const FeatureItem = ({ icon: Icon, title, description }) => {
    return (
        <Card className="h-100 text-center p-3 bg-dark text-white border-0 shadow">
            <Card.Body>
                <div className="mb-3">
                    <Icon size={40} className="text-warning" />
                </div>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="opacity-75">
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default FeatureItem;