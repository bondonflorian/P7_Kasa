import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from './components/pages/Notfound';
import Home from './components/pages/Home';
import Housing from './components/pages/Housing';
import About from './components/pages/About';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing:id" element={<Housing />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
