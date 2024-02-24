
import { Link, Route, Routes } from "react-router-dom";
import "./styles.css";
import { Navbar } from "./components/Navbar";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from './components/pages/main/About'
import Contact from './components/pages/main/Contact'
import Home from "./components/pages/main/Home";
import { motion } from "framer-motion";
import MythologyTemplate from "./components/pages/Mythologies/MythologyTemplate";
import greekMythology from './components/pages/Mythologies/images/greekMythology.jpg'
import norseMythology from './components/pages/Mythologies/images/norseMythology.jpg'
import egyptianMythology from './components/pages/Mythologies/images/egyptianMythology.jpg'
import chineseMythology from './components/pages/Mythologies/images/chineseMythology.jpg'
import celticMythology from './components/pages/Mythologies/images/celticMythology.jpg'
import hinduMythology from './components/pages/Mythologies/images/hinduMythology.jpg'
import aztecMythology from './components/pages/Mythologies/images/aztecMythology.png'
import japaneseMythology from './components/pages/Mythologies/images/japaneseMythology.jpg'
import secondGreekGodsImage from './components/pages/Mythologies/images/greekGodsImage.jpg'
import secondNorseGodsImage from './components/pages/Mythologies/images/norseGodsImage.avif'
import egyptianGodsImage from './components/pages/Mythologies/images/egyptianGodsImage.avif'
import chineseGodsImage from './components/pages/Mythologies/images/chineseGodsImage.avif'
import celticGodsImage from './components/pages/Mythologies/images/celticGodsImage.avif'
import hinduGodsImage from './components/pages/Mythologies/images/hinduGodsImage.avif'
import aztecGodsImage from './components/pages/Mythologies/images/aztecGodsImage.avif'
import japaneseGodsImage from './components/pages/Mythologies/images/japaneseGodsImage.avif'
import Zeus from './components/pages/Gods/greekMythology/Zeus';
import Athena from './components/pages/Gods/greekMythology/Athena';
import Poseidon from "./components/pages/Gods/greekMythology/Poseidon";
import Prometheus from "./components/pages/Gods/greekMythology/Prometheus";
import GreekTitans from "./components/pages/Gods/greekMythology/GreekTitans";
import GreekOlympians from "./components/pages/Gods/greekMythology/GreekOlympians";
import OdinTemplate from "./components/pages/NorseMythology/GodsTemplates/odinTemplate";
import LokiTemplate from "./components/pages/NorseMythology/GodsTemplates/lokiTemplate";
import FriggTemplate from "./components/pages/NorseMythology/GodsTemplates/friggTemplate";
import FreyaTemplate from "./components/pages/NorseMythology/GodsTemplates/freyaTemplate";
import ThorTemplate from "./components/pages/NorseMythology/GodsTemplates/thorTemplate";
import BaldurTemplate from "./components/pages/NorseMythology/GodsTemplates/baldurTemplate";
import AnubisTemplate from "./components/pages/EgyptianMythology/anubisTemplate";
import RaTemplate from "./components/pages/EgyptianMythology/raTemplate";
import NephthysTemplate from "./components/pages/EgyptianMythology/nephthysTemplate";
import OsirisTemplate from "./components/pages/EgyptianMythology/osirisTemplate";
import IsisTemplate from "./components/pages/EgyptianMythology/isisTemplate";
import HorusTemplate from "./components/pages/EgyptianMythology/horusTemplate";
import Aphrodite from "./components/pages/Olympians/Aphrodite";
import Hermes from "./components/pages/Olympians/Hermes";
import Demeter from "./components/pages/Olympians/Demeter";
import Apollo from "./components/pages/Olympians/Apollo";
import Dionysus from "./components/pages/Olympians/Dionysus";
import Artemis from "./components/pages/Olympians/Artemis";
import Hera from "./components/pages/Olympians/Hera";
import Hephaestus from "./components/pages/Olympians/Hephaestus";
import Hestia from "./components/pages/Olympians/Hestia";
import Ares from "./components/pages/Olympians/Ares";
import ChangE from "./components/pages/ChineseMythology/Chang'e";
import Nezha from "./components/pages/ChineseMythology/Nezha";
import Fuxi from "./components/pages/ChineseMythology/Fuxi";
import JadeEmperor from "./components/pages/ChineseMythology/JadeEmperor";
import Nuwa from "./components/pages/ChineseMythology/Nuwa";
import Guanyin from "./components/pages/ChineseMythology/Guanyin";
import Brigid from "./components/pages/CelticMythology/Brigid";
import CuChulainn from "./components/pages/CelticMythology/Cu-Chulainn";
import Dagda from "./components/pages/CelticMythology/Dagda";
import Lugh from "./components/pages/CelticMythology/Lugh";
import Morrigan from "./components/pages/CelticMythology/Morrigan";
import Cernunnos from "./components/pages/CelticMythology/Cernunnos";
import GreekMythologyPage from "./components/pages/AllMythologyMainPages/GreekMythologyPage";
import NorseMythologyPage from "./components/pages/AllMythologyMainPages/NorseMythologyPage";
import EgyptianMythologyPage from "./components/pages/AllMythologyMainPages/EgyptianMythologyPage";
import ChineseMythologyPage from "./components/pages/AllMythologyMainPages/ChineseMythologyPage";
import CelticMythologyPage from "./components/pages/AllMythologyMainPages/CelticMythologyPage";
import HinduMythologyPage from "./components/pages/AllMythologyMainPages/HinduMythologyPage";
import AztecMythologyPage from "./components/pages/AllMythologyMainPages/AztecMythologyPage";
import JapaneseMythology from "./components/pages/AllMythologyMainPages/JapaneseMythologyPage";
import JapaneseMythologyPage from "./components/pages/AllMythologyMainPages/JapaneseMythologyPage";
import Shiva from "./components/pages/HinduMythology/Shiva";
import Vishnu from "./components/pages/HinduMythology/Vishnu";
import Ganesha from "./components/pages/HinduMythology/Ganesha";
import Parvati from "./components/pages/HinduMythology/Parvati";
import Brahma from "./components/pages/HinduMythology/Brahma";
import Krishna from "./components/pages/HinduMythology/Krishna";
import Footer from "./components/Footer";

import GreekMortalsPage from "./components/pages/Collections/CollectionPages/GreekMortalsPage";
import GreekCreatures from "./components/pages/Collections/CollectionPages/GreekCreatures";
import NorseGodsPage from "./components/pages/Collections/CollectionPages/NorseGodsPage";
import EgyptianGodsPage from "./components/pages/Collections/CollectionPages/EgyptianGodsPage";
import ChineseGodsPage from "./components/pages/Collections/CollectionPages/ChineseGodsPage";
import CelticGodsPage from "./components/pages/Collections/CollectionPages/CelticGodsPage";
import HinduGodsPage from "./components/pages/Collections/CollectionPages/hinduGodsPage";
import AztecGodsPage from "./components/pages/Collections/CollectionPages/AztecGodsPage";
import JapaneseGodsPage from "./components/pages/Collections/CollectionPages/JapaneseGodsPage";
import { AnimatePresence } from "framer-motion";
import Newsletter from "./components/pages/main/Newsletter";







function App() {
  
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
      
      scrollToTop();
    }, [pathname]);
  
    return null;
  };
  return (
    <div className="App">
      
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode='wait'>
      
              
      <Routes>
        
      <Route path="/greek-mythology" element={<GreekMythologyPage />}/>
      <Route path="/norse-mythology" element={<NorseMythologyPage />} />
      <Route path="/Egyptian-mythology" element={<EgyptianMythologyPage />} />
      <Route path="/Chinese-mythology" element={<ChineseMythologyPage />} />  
      <Route path="/Celtic-mythology" element={<CelticMythologyPage />} />
      <Route path="/Hindu-mythology" element={<HinduMythologyPage />} />
      <Route path="/Aztec-mythology" element={<AztecMythologyPage />} />
      <Route path="/Japanese-mythology" element={<JapaneseMythologyPage />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Newsletter" element={<Newsletter />} />


        {/***********************Gods**************************/}
        
        <Route path="/zeus" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Zeus /></motion.div>} />
        <Route path="/athena" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Athena /></motion.div>} />
        <Route path="/greekOlympians" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><GreekOlympians /></motion.div>} />
        <Route path="/greekTitans" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><GreekTitans /></motion.div>} />
        <Route path="/poseidon" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Poseidon /></motion.div>} />
        <Route path="/prometheus" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Prometheus /></motion.div>} />
        <Route path="/aphrodite" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Aphrodite /></motion.div>} />
        <Route path="/hermes" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Hermes /></motion.div>} />
        <Route path="/demeter" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Demeter /></motion.div>} />
        <Route path="/apollo" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Apollo /></motion.div>} />
        <Route path="/artemis" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Artemis /></motion.div>} />
        <Route path="/dionysus" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Dionysus /></motion.div>} />
        <Route path="/hera" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Hera /></motion.div>} />
        <Route path="/hephaestus" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Hephaestus /></motion.div>} />
        <Route path="/hestia" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Hestia /></motion.div>} />
        <Route path="/ares" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Ares /></motion.div>} />
        

        <Route path="/odin" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><OdinTemplate /></motion.div>} />
        <Route path="/loki" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><LokiTemplate /></motion.div>} />
        <Route path="/frigg" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><FriggTemplate /></motion.div>} />
        <Route path="/freya" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><FreyaTemplate /></motion.div>} />
        <Route path="/thor" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><ThorTemplate /></motion.div>} />
        <Route path="/baldur" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><BaldurTemplate /></motion.div>} />

        <Route path="/anubis" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><AnubisTemplate /></motion.div>} />
        <Route path="/ra" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><RaTemplate /></motion.div>} />
        <Route path="/nephthys" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><NephthysTemplate /></motion.div>} />
        <Route path="/osiris" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><OsirisTemplate /></motion.div>} />
        <Route path="/isis" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><IsisTemplate /></motion.div>} />
        <Route path="/horus" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><HorusTemplate /></motion.div>} />

        <Route path="/chang'e" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><ChangE /></motion.div>} />
        <Route path="/nezha" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Nezha /></motion.div>} />
        <Route path="/fuxi" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Fuxi /></motion.div>} />
        <Route path="/jadeEmperor" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><JadeEmperor /></motion.div>} />
        <Route path="/nuwa" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Nuwa /></motion.div>} />
        <Route path="/guanyin" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Guanyin /></motion.div>} />

        <Route path="/brigid" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Brigid /></motion.div>} />
        <Route path="/cernunnos" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Cernunnos/></motion.div>} />
        <Route path="/cuChulainn" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><CuChulainn /></motion.div>} />
        <Route path="/dagda" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Dagda /></motion.div>} />
        <Route path="/lugh" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Lugh /></motion.div>} />
        <Route path="/morrigan" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Morrigan /></motion.div>} />

        <Route path="/shiva" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Shiva /></motion.div>} />
        <Route path="/vishnu" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Vishnu/></motion.div>} />
        <Route path="/ganesha" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Ganesha /></motion.div>} />
        <Route path="/parvati" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Parvati /></motion.div>} />
        <Route path="/brahma" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Brahma /></motion.div>} />
        <Route path="/krishna" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Krishna /></motion.div>} />

        

        <Route path="/greekMortalsPage" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><GreekMortalsPage /></motion.div>} />
        <Route path="/greekCreaturesPage" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><GreekCreatures /></motion.div>} />

        <Route path="/norseGodsPage" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><NorseGodsPage /></motion.div>} />

        <Route path="/egyptianGodsPage" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><EgyptianGodsPage /></motion.div>} />

        <Route path="/chineseGodsPage" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><ChineseGodsPage /></motion.div>} />

        <Route path="/celticGodsPage" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><CelticGodsPage /></motion.div>} />

        <Route path="/hinduGodsPage" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><HinduGodsPage /></motion.div>} />

        <Route path="/aztecGodsPage" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><AztecGodsPage /></motion.div>} />

        <Route path="/japaneseGodsPage" element={<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><JapaneseGodsPage /></motion.div>} />


      </Routes>
      
      </AnimatePresence>
      <Footer />
      
      
     
    </div>
  );
}

export default App;
