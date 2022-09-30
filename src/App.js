import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from './pages/Notfound';
import Home from './pages/Home';
import Housing from './pages/Housing';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/housing" element={<Housing />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
