import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Header from './components/Header';
import Home from './pages/Home';
import News from './pages/News';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route index element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/news" element={<News />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
            <Sidebar />
            <Footer />
        </Router>
    );
};

export default App;
