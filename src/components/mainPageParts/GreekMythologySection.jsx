import React, { useEffect, useRef, useState } from 'react'
import "./GreekMythologySection.css"
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion';


function AllMythologiesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const top = elementRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        x: 0, 
        transition: { duration: 0.5 },
      });
    } else {
      controls.start({ opacity: 0, x: -50 }); 
    }
  }, [isVisible, controls]);




  return (
    <>
    <div id='headers'>
    <h2>Spotlight</h2>
    <h1>Meet the Greeks</h1>
    <hr />
    </div>
    <motion.ul
        ref={elementRef}
        className='mythologiesUl'
        animate={controls}
        initial={{ opacity: 0, x: -50 }} 
      >
        <li>
        <div className="img"></div>
        <p id='collectiontext'>collection</p>
        <header>Greek Olympians</header>
        <p>The primary deities of the Greek pantheon, who ruled from Mount Olympus</p>
        <Link to='/greekOlympians'><button>View</button></Link>
        <hr />
        <p className="featuredP">featured</p>
        <Link className='godLink' to='/athena'>
          <div id='threelementDiv'>
            <div id='headersDiv'>
          <header>Athena</header>
          <header>Greek Goddess</header>
            </div>
          <div className="godImageDiv1"></div>
          </div>
        </Link>

        <Link className='godLink' to='/zeus'>
          <div id='threelementDiv'>
            <div id='headersDiv'>
          <header>Zeus</header>
          <header>Olympian God</header>
            </div>
          <div className="godImageDiv2"></div>
          </div>
        </Link>

        <Link className='godLink' to='/artemis'>
          <div id='threelementDiv'>
            <div id='headersDiv'>
          <header>Artemis</header>
          <header>Olympian Goddess</header>
            </div>
          <div className="godImageDiv3"></div>
          </div>
        </Link>
        </li>
        
        <li>
        <div className="img"></div>
        <p id='collectiontext'>collection</p>
        <header>Greek Heroes</header>
        <p>Notable or superhuman mortals from Greek mythology</p>
        <Link to='/greekOlympians'><button>View</button></Link>
        <hr />
        <p className="featuredP">featured</p>

        <Link className='godLink' to='/heracles'>
          <div id='threelementDiv'>
            <div id='headersDiv'>
          <header>Heracles</header>
          <header>Greek Hero</header>
            </div>
          <div className="godImageDiv4"></div>
          </div>
        </Link>

        <Link className='godLink' to='/athena'>
          <div id='threelementDiv'>
            <div id='headersDiv'>
          <header>Achilles</header>
          <header>Greek Hero</header>
            </div>
          <div className="godImageDiv5"></div>
          </div>
        </Link>

        <Link className='godLink' to='/athena'>
          <div id='threelementDiv'>
            <div id='headersDiv'>
          <header>Perseus</header>
          <header>Argive Hero</header>
            </div>
          <div className="godImageDiv6"></div>
          </div>
        </Link>
        
        </li>
        
        <li>
        <div className="img"></div>
        <p id='collectiontext'>collection</p>
        <header>Greek Creatures</header>
        <p>Legendary beasts, animals, and humanoids of ancient Greek mythology</p>
        <Link to='/greekCreaturesPage'><button>View</button></Link>
        <hr />
        <p className="featuredP">featured</p>

        <Link className='godLink' to='/athena'>
          <div id='threelementDiv'>
            <div id='headersDiv'>
          <header>Medusa</header>
          <header>Creature</header>
            </div>
          <div className="godImageDiv7"></div>
          </div>
        </Link>

        <Link className='godLink' to='/athena'>
          <div id='threelementDiv'>
            <div id='headersDiv'>
          <header>Hydra</header>
          <header>Greek Creature</header>
            </div>
          <div className="godImageDiv8"></div>
          </div>
        </Link>

        <Link className='godLink' to='/athena'>
          <div id='threelementDiv'>
            <div id='headersDiv'>
          <header>Cerberus</header>
          <header>Greek Creature</header>
            </div>
          <div className="godImageDiv9"></div>
          </div>
        </Link>
        </li>

        <li>
        <div className="img"></div>
        <p id='collectiontext'>collection</p>
        <header>Greek Titans</header>
        <p>The generation of Greek gods who directly preceded the Olympians</p>
        <Link to='/greekTitans'><button>View</button></Link>
        <hr />
        <p className="featuredP">featured</p>

        <Link className='godLink' to='/athena'>
          <div id='threelementDiv'>
            <div id='headersDiv'>
          <header>Atlas</header>
          <header>Greek Titan</header>
            </div>
          <div className="godImageDiv10"></div>
          </div>
        </Link>

        <Link className='godLink' to='/athena'>
          <div id='threelementDiv'>
            <div id='headersDiv'>
          <header>Prometheus</header>
          <header>Greek Titan</header>
            </div>
          <div className="godImageDiv11"></div>
          </div>
        </Link>

        <Link className='godLink' to='/athena'>
          <div id='threelementDiv'>
            <div id='headersDiv'>
          <header>Cronus</header>
          <header>Titan</header>
            </div>
          <div className="godImageDiv12"></div>
          </div>
        </Link>
        </li>
       
        

        </motion.ul>
    </>
  )
}

export default AllMythologiesSection