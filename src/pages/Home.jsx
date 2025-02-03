import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col md={8}>
                    <h1>Selamat Datang di SIDKita</h1>
                    <p>
                        Sistem Informasi Desa yang membantu pemerintah desa
                        untuk mengelola dan menyampaikan informasi secara
                        efektif kepada masyarakat.
                    </p>
                </Col>
                <Col md={4}>
                    <h5>Informasi Cepat</h5>
                    <Card>
                        <Card.Body>
                            <Card.Title>Kepala Desa</Card.Title>
                            <Card.Text>Nama Kepala Desa</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
