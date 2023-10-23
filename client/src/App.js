import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Routes, Route } from "react-router-dom";
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/userprofile/:id" element={<Profile />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
