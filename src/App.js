
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
        
      <Route 
      path="/greek-mythology" 
      element={<MythologyTemplate 
      imageUrl={greekMythology}
      secondImageUrl={secondGreekGodsImage}
      header={'Ultimate Guide to Greek Mythology'} 
      topTextColor={'white'}
      firstText={<p>Greek mythology is the body of work detailing the origins of the ancient Hellenic world and the many deities who ruled over it.It includes the histories of gods and goddesses, heroes and monsters, as well as explanations for many important religious rituals.</p>} 
      godsHeader={'Greek Gods'} godText={<p>The Greek gods ruled over every aspect of Hellenic existence—from war to love, from childbirth to the afterlife. Commonly depicted in human form, they were capricious deities who demanded worship and sacrifice  to stave off misfortune and ruin.</p>} 
      godLiElements={<ul className="godsUl"><li><Link className="GodLink" to="/greekOlympians">Greek Olympians</Link></li><li><Link className="GodLink" to="/athena">Athena</Link></li><li><Link className="GodLink" to="/poseidon">Poseidon</Link></li><li><Link className="GodLink" to="/greekTitans">Greek Titans</Link></li><li><Link className="GodLink" to="/zeus">Zeus</Link></li><li><Link className="GodLink" to="/prometheus">Prometheus</Link></li></ul>} />} 
      />
    
      <Route 
      path="/norse-mythology" 
      element={<MythologyTemplate 
      imageUrl={norseMythology} 
      secondImageUrl={secondNorseGodsImage}
      header={'Ultimate Guide to Norse Mythology'} 
      topTextColor={'white'}
      firstText={<p>Norse mythology is the compilation of the stories, religious practices, and myths of the ancient Nordic people. These texts span a period of time beginning in Norse paganism and continuing through the medieval era, during which most of Scandinavia converted to Christianity.</p>} 
      godsHeader={'Norse Gods'}
      godText={<p>The Norse gods and goddesses are the array of deities honored by ancient Nordic worshipers. They primarily came from two different tribes, the Aesir and the Vanir, but were united in their efforts to fight the jötnar, a tribe of giants dwelling in another realm of the world tree Yggdrasil.</p>}
      godLiElements={<ul className="godsUl"><li><Link to='/odin' className="GodLink">Odin</Link></li><li><Link to='/loki' className="GodLink">Loki</Link></li><li><Link to='/frigg' className="GodLink">Frigg</Link></li><li><Link to='/freya' className="GodLink">Freya</Link></li><li><Link to='/thor' className="GodLink">Thor</Link></li><li><Link to='/baldur' className="GodLink">Baldur</Link></li></ul>} />} 
      />

      <Route 
      path="/Egyptian-mythology" 
      element={<MythologyTemplate 
      imageUrl={egyptianMythology} 
      secondImageUrl={egyptianGodsImage}
      header={'Ultimate Guide to Egyptian Mythology'} 
      topTextColor={'black'}
      firstText={<p>Egyptian mythology focuses on the fundamental order of the universe, explaining the patterns of the natural world through divine actions. Of particular importance are the creation myths, the constant struggle against disorder, and the cycles of death and rebirth.</p>} 
      godsHeader={'Egyptian Gods'}
      godText={<p>Egyptian gods and goddesses were incarnations of both natural phenomena, such as the sun, and social phenomena, like knowledge. Egypt itself was ruled by a pharaoh who claimed to be the gods’ representative on earth, and who acted as a mediator between mankind and the divine.</p>}
      godLiElements={<ul className="godsUl"><li><Link to='/anubis' className="GodLink">Anubis</Link></li><li><Link to='/ra' className="GodLink">Ra</Link></li><li><Link to='/nephthys' className="GodLink">Nephthys</Link></li><li><Link to='/osiris' className="GodLink">Osiris</Link></li><li><Link to='/isis' className="GodLink">Isis</Link></li><li><Link to='/horus' className="GodLink">Horus</Link></li></ul>} />} 
      />

      <Route 
      path="/Chinese-mythology" 
      element={<MythologyTemplate 
      imageUrl={chineseMythology} 
      secondImageUrl={chineseGodsImage}
      header={'Ultimate Guide to Chinese Mythology'} 
      topTextColor={'black'}
      firstText={<p>Chinese mythology encompasses a wide range of folklore, history, and religious belief across numerous time periods and peoples, including the present day. Many of these myths are intricately bound to philosophy, religion, tradition, and society.</p>} 
      godsHeader={'Chinese Gods'}
      godText={<p>The pantheon of Chinese gods and goddesses is extensive, spanning thousands of years as well as different ethnic groups and changing geographical boundaries. Some of the most enduring deities are Pangu, the Jade Emperor, Guanyin, Sun Wukong, and the Eight Immortals.</p>}
      godLiElements={<ul className="godsUl"><li>Chang'e</li><li>Nezha</li><li>Fuxi</li><li>Jade Emperor</li><li>Nuwa</li><li>Guanyin</li></ul>} />} 
      />  

      <Route 
      path="/Celtic-mythology" 
      element={<MythologyTemplate 
      imageUrl={celticMythology} 
      secondImageUrl={celticGodsImage}
      header={'Ultimate Guide to Celtic Mythology'} 
      topTextColor={'white'}
      firstText={<p>Celtic mythology is the collection of stories and folklore from various ancient Celtic cultures like the Irish, the Welsh, and the Gauls. Many of these myths were suppressed by Roman conquerors, with their first widespread recordings dating from the early medieval period.</p>} 
      godsHeader={'Celtic Gods'}
      godText={<p>The Celtic gods and goddesses are a vast group of deities who were worshipped by the ancient Celtic tribes. Their names and attributes varied between languages and locations, with some deities worshipped by all tribes while others were specific to a particular region or people.</p>}
      godLiElements={<ul className="godsUl"><li>Morrigan</li><li>Cu Chulainn</li><li>Brigid</li><li>Dagda</li><li>Lugh</li><li>Cernunnos</li></ul>} />} 
      />

      <Route 
      path="/Hindu-mythology" 
      element={<MythologyTemplate 
      imageUrl={hinduMythology} 
      secondImageUrl={hinduGodsImage}
      header={'Ultimate Guide to Hindu Mythology'} 
      topTextColor={'white'}
      firstText={<p>Hindu mythology comprises ancient Indian tales, including those from the Vedas, Mahabharata, Ramayana, and Puranas. These stories feature gods, heroes, and mystical beings, conveying philosophical ideas and moral lessons. Despite historical challenges, they've persisted through oral tradition and religious texts, with widespread documentation starting in the early medieval period.</p>} 
      godsHeader={'Hindu Gods'}
      godText={<p>Hinduism is a major world religion, with one of the longest-surviving pantheons in history. Within its rich mythology, elephant-headed gods clash with powerful demons and titans, preserver gods send out their avatars to restore the righteous order of the universe, and powerful sages challenge the gods themselves.</p>}
      godLiElements={<ul className="godsUl"><li>Shiva</li><li>Ganesha</li><li>Brahma</li><li>Vishnu</li><li>Parvati</li><li>Krishna</li></ul>} />} 
      />

      <Route 
      path="/Aztec-mythology" 
      element={<MythologyTemplate 
      imageUrl={aztecMythology} 
      secondImageUrl={aztecGodsImage}
      header={'Ultimate Guide to Aztec Mythology'} 
      topTextColor={'white'}
      firstText={<p>Aztec mythology is the collected myths and legends of the Aztec people. One of their best-known myths is the founding of the city Tenochtitlan, built on the spot where the travelers saw an eagle perched on a cactus and holding a rattlesnake, an image which endures on the Mexican flag today.</p>} 
      godsHeader={'Aztec Gods'}
      godText={<p>The Aztec gods and goddesses were a bloodthirsty group whose constant warring with each other led to a cycle of death and rebirth for all humanity. Each of the first four ages was ruled by a different deity, or “sun,” and each age ended in violence before a new sun was chosen.</p>}
      godLiElements={<ul className="godsUl"><li>Quetzalcoatl</li><li>Mictlantecuhtli</li><li>Tezcatlipoca</li><li>Huitzilopochtli</li><li>Ometeotl</li><li>Mixcoatl</li></ul>} />} 
      />

    <Route 
      path="/Japanese-mythology" 
      element={<MythologyTemplate 
      imageUrl={japaneseMythology} 
      secondImageUrl={japaneseGodsImage}
      header={'Ultimate Guide to Japanese Mythology'} 
      topTextColor={'white'}
      firstText={<p>Japanese mythology is a combination of primarily Shinto and Buddhist traditions. In addition to the most powerful gods and goddesses, there are also millions of kami, or “holy powers,” associated with forces of nature, geographical features, and the spirits of the venerated dead.</p>} 
      godsHeader={'Japanese Gods'}
      godText={<p>Japanese gods and goddesses include everyone from powerful creator gods to minor, localized kami. Particularly notable is the sun goddess Amaterasu, held to be the divine ancestor of the first emperor of Japan, a lineage that remains unbroken into the current day.</p>}
      godLiElements={<ul className="godsUl"><li>Amaterasu</li><li>Susanoo</li><li>Ebisu</li><li>Tsukuyomi</li><li>Izanagi</li><li>Inari</li></ul>} />} 
      />



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

      </Routes>
      
     
    </div>
  );
}

export default App;
