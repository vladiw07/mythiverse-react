
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import { Navbar } from "./components/Navbar";

import About from './components/pages/main/About'
import Contact from './components/pages/main/Contact'
import Home from "./components/pages/main/Home";
import GreekMythology from "./components/pages/Mythologies/GreekMythology";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/greek-mythology" element={<GreekMythology />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
    </div>
  );
}

export default App;
