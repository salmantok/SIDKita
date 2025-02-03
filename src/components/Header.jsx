import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">SIDKita</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Beranda</Nav.Link>
                        <Nav.Link href="/news">Berita</Nav.Link>
                        <Nav.Link href="/gallery">Galeri</Nav.Link>
                        <Nav.Link href="/profile">Profil</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
