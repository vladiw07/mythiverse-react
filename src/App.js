
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import { Navbar } from "./components/Navbar";

import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Footer from "./components/Footer";




const styles = {header: "text-xl bg-red-800"};
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
