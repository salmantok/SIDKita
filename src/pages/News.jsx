import { Container, Row, Col, Card } from 'react-bootstrap';

const News = () => {
    const newsData = [
        {
            title: 'Hari Kebersihan Desa',
            date: '10 Januari 2025',
            content:
                'Mari bergabung dalam acara kebersihan desa pada Sabtu ini untuk menjaga lingkungan desa tetap bersih.',
        },
        {
            title: 'Pembangunan Jalan Baru',
            date: '20 Desember 2024',
            content:
                'Pembangunan jalan baru yang menghubungkan desa dengan jalan raya utama telah dimulai.',
        },
        {
            title: 'Pemeriksaan Kesehatan Gratis',
            date: '15 November 2024',
            content:
                'Warga desa dapat memanfaatkan pemeriksaan kesehatan gratis di balai desa akhir pekan ini.',
        },
    ];

    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <h1>Berita Terbaru</h1>
                    {newsData.map((news, index) => (
                        <Card key={index} className="mb-3">
                            <Card.Body>
                                <Card.Title>{news.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {news.date}
                                </Card.Subtitle>
                                <Card.Text>{news.content}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default News;
