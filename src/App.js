
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import { Navbar } from "./components/Navbar";

import About from './components/pages/main/About'
import Contact from './components/pages/main/Contact'
import Home from "./components/pages/main/Home";
import MythologyTemplate from "./components/pages/Mythologies/MythologyTemplate";
import greekMythology from './components/pages/Mythologies/images/greekMythology.jpg'
import norseMythology from './components/pages/Mythologies/images/norseMythology.jpg'
import secondGreekGodsImage from './components/pages/Mythologies/images/greekGodsImage.jpg'
import secondNorseGodsImage from './components/pages/Mythologies/images/norseGodsImage.avif'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route 
      path="/greek-mythology" 
      element={<MythologyTemplate 
      imageUrl={greekMythology}
      secondImageUrl={secondGreekGodsImage}
      header={'Ultimate Guide to Greek Mythology'} 
      firstText={<p>Greek mythology is the body of work detailing the origins of the ancient Hellenic world and the many deities who ruled over it.It includes the histories of gods and goddesses, heroes and monsters, as well as explanations for many important religious rituals.</p>} 
      godsHeader={'Greek Gods'} godText={<p>The Greek gods ruled over every aspect of Hellenic existence—from war to love, from childbirth to the afterlife. Commonly depicted in human form, they were capriciou s deities who demanded worship and sacrifice  to stave off misfortune and ruin.</p>} 
      godLiElements={<ul className="godsUl"><li>Greek Olympians</li><li>Athena</li><li>Poseidon</li><li>Greek Titans</li><li>Zeus</li><li>Prometheus</li></ul>} />} 
      />

      <Route 
      path="/norse-mythology" 
      element={<MythologyTemplate 
      imageUrl={norseMythology} 
      secondImageUrl={secondNorseGodsImage}
      header={'Ultimate Guide to Norse Mythology'} 
      firstText={<p>Norse mythology is the compilation of the stories, religious practices, and myths of the ancient Nordic people. These texts span a period of time beginning in Norse paganism and continuing through the medieval era, during which most of Scandinavia converted to Christianity.</p>} 
      godsHeader={'Nordic Gods'}
      godText={<p>The Norse gods and goddesses are the array of deities honored by ancient Nordic worshipers. They primarily came from two different tribes, the Aesir and the Vanir, but were united in their efforts to fight the jötnar, a tribe of giants dwelling in another realm of the world tree Yggdrasil.</p>}
      godLiElements={<ul className="godsUl"><li>Odin</li><li>Loki</li><li>Frigg</li><li>Freya</li><li>Thor</li><li>Baldur</li></ul>} />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
    </div>
  );
}

export default App;
