
import { Link, Route, Routes } from "react-router-dom";
import "./styles.css";
import { Navbar } from "./components/Navbar";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from './components/pages/main/About'
import Contact from './components/pages/main/Contact'
import Home from "./components/pages/main/Home";
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



        {/***********************Gods**************************/}
        <Route path="/zeus" element={<Zeus />} />
        <Route path="/athena" element={<Athena />} />
        <Route path="/greekOlympians" element={<GreekOlympians />} />
        <Route path="/greekTitans" element={<GreekTitans />} />
        <Route path="/poseidon" element={<Poseidon />} />
        <Route path="/prometheus" element={<Prometheus />} />
        <Route path="/aphrodite" element={<Aphrodite />} />
        <Route path="/hermes" element={<Hermes />} />
        <Route path="/demeter" element={<Demeter />} />
        <Route path="/apollo" element={<Apollo />} />
        <Route path="/artemis" element={<Artemis />} />
        <Route path="/dionysus" element={<Dionysus />} />
        <Route path="/hera" element={<Hera />} />
        <Route path="/hephaestus" element={<Hephaestus />} />
        <Route path="/hestia" element={<Hestia />} />
        <Route path="/ares" element={<Ares />} />

        <Route path="/odin" element={<OdinTemplate />} />
        <Route path="/loki" element={<LokiTemplate />} />
        <Route path="/frigg" element={<FriggTemplate />} />
        <Route path="/freya" element={<FreyaTemplate />} />
        <Route path="/thor" element={<ThorTemplate />} />
        <Route path="/baldur" element={<BaldurTemplate />} />

        <Route path="/anubis" element={<AnubisTemplate />} />
        <Route path="/ra" element={<RaTemplate />} />
        <Route path="/nephthys" element={<NephthysTemplate />} />
        <Route path="/osiris" element={<OsirisTemplate />} />
        <Route path="/isis" element={<IsisTemplate />} />
        <Route path="/horus" element={<HorusTemplate />} />

        <Route path="/chang'e" element={<ChangE />} />
        <Route path="/nezha" element={<Nezha />} />
        <Route path="/fuxi" element={<Fuxi />} />
        <Route path="/jadeEmperor" element={<JadeEmperor />} />
        <Route path="/nuwa" element={<Nuwa />} />
        <Route path="/guanyin" element={<Guanyin />} />

        <Route path="/brigid" element={<Brigid />} />
        <Route path="/cernunnos" element={<Cernunnos/>} />
        <Route path="/cuChulainn" element={<CuChulainn />} />
        <Route path="/dagda" element={<Dagda />} />
        <Route path="/lugh" element={<Lugh />} />
        <Route path="/morrigan" element={<Morrigan />} />

        <Route path="/shiva" element={<Shiva />} />
        <Route path="/vishnu" element={<Vishnu/>} />
        <Route path="/ganesha" element={<Ganesha />} />
        <Route path="/parvati" element={<Parvati />} />
        <Route path="/brahma" element={<Brahma />} />
        <Route path="/krishna" element={<Krishna />} />

        <Route path="/greekMortalsPage" element={<GreekMortalsPage />} />
        <Route path="/greekCreaturesPage" element={<GreekCreatures />} />

        <Route path="/norseGodsPage" element={<NorseGodsPage />} />

        <Route path="/egyptianGodsPage" element={<EgyptianGodsPage />} />

        <Route path="/chineseGodsPage" element={<ChineseGodsPage />} />

        <Route path="/celticGodsPage" element={<CelticGodsPage />} />

        <Route path="/hinduGodsPage" element={<HinduGodsPage />} />

        <Route path="/aztecGodsPage" element={<AztecGodsPage />} />

        <Route path="/japaneseGodsPage" element={<JapaneseGodsPage />} />


      </Routes>
      <Footer />
      
      
     
    </div>
  );
}

export default App;
