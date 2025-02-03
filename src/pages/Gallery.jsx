import { Container, Row, Col, Card } from 'react-bootstrap';

const Gallery = () => {
    const images = [
        {
            src: 'https://placehold.co/600x400',
            alt: 'Acara 1',
            title: 'Acara Komunitas 1',
        },
        {
            src: 'https://placehold.co/600x400',
            alt: 'Acara 2',
            title: 'Acara Komunitas 2',
        },
        {
            src: 'https://placehold.co/600x400',
            alt: 'Acara 3',
            title: 'Acara Komunitas 3',
        },
        {
            src: 'https://placehold.co/600x400',
            alt: 'Acara 4',
            title: 'Acara Komunitas 4',
        },
    ];

    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <h1>Galeri</h1>
                    <p>Lihat momen-momen dari kegiatan dan acara desa kami.</p>
                </Col>
            </Row>
            <Row>
                {images.map((image, index) => (
                    <Col key={index} md={3} sm={6} className="mb-4">
                        <Card>
                            <Card.Img
                                variant="top"
                                src={image.src}
                                alt={image.alt}
                            />
                            <Card.Body>
                                <Card.Title>{image.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Gallery;
