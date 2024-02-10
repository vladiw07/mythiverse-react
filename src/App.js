
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import { Navbar } from "./components/Navbar";

import About from './components/pages/main/About'
import Contact from './components/pages/main/Contact'
import Home from "./components/pages/main/Home";
import MythologyTemplate from "./components/pages/Mythologies/MythologyTemplate";
import greekMythology from './components/pages/Mythologies/images/greekMythology.avif'
import norseMythology from './components/pages/Mythologies/images/norseMythology.jpg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/greek-mythology" element={<MythologyTemplate imageUrl={greekMythology} header={'Ultimate Guide to Greek Mythology'} firstText={<p>Greek mythology is the body of work detailing the origins of the ancient Hellenic world and the many deities who ruled over it.It includes the histories of gods and goddesses, heroes and monsters, as well as explanations for many important religious rituals.</p>} />} />
      <Route path="/norse-mythology" element={<MythologyTemplate imageUrl={norseMythology} header={'Ultimate Guide to Norse Mythology'} firstText={<p>Norse mythology is the compilation of the stories, religious practices, and myths of the ancient Nordic people. These texts span a period of time beginning in Norse paganism and continuing through the medieval era, during which most of Scandinavia converted to Christianity.</p>} />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
    </div>
  );
}

export default App;
