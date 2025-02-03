import { Container, Row, Col } from 'react-bootstrap';

const Profile = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <h1>Profil Desa</h1>
                    <p>Berikut adalah informasi umum tentang desa kami:</p>
                    <h3>Informasi Umum</h3>
                    <ul>
                        <li>Nama Desa: Contoh Desa</li>
                        <li>Kepala Desa: Nama Kepala Desa</li>
                        <li>Jumlah Penduduk: 2,500 jiwa</li>
                        <li>Luas Wilayah: 15 km²</li>
                    </ul>

                    <h3>Visi & Misi</h3>
                    <p>
                        <strong>Visi:</strong> Membangun masyarakat desa yang
                        sejahtera, ramah lingkungan, dan harmonis.
                    </p>
                    <p>
                        <strong>Misi:</strong>
                        <ol>
                            <li>
                                Meningkatkan pendidikan dan layanan kesehatan.
                            </li>
                            <li>Mendorong praktik pertanian berkelanjutan.</li>
                            <li>
                                Mengembangkan infrastruktur dan layanan publik.
                            </li>
                        </ol>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
