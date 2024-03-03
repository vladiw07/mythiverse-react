import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import './NorseMythologySection.css';

function NorseMythologySection() {
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
        y: 0,
        transition: { duration: 0.5 },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isVisible, controls]);

  return (
    <div>
      <motion.ul
        ref={elementRef}
        className="norseMythologyUl"
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
      >
        <Link to="/odin">
          <li id="norseGod1">
            <header>Odin</header>
          </li>
        </Link>

        <Link to="/loki">
          <li id="norseGod2">
            <header>Loki</header>
          </li>
        </Link>

        <Link to="/frigg">
          <li id="norseGod3">
            <header>Frigg</header>
          </li>
        </Link>

        <Link to="/freya">
          <li id="norseGod4">
            <header>Freya</header>
          </li>
        </Link>

        <Link to="/thor">
          <li id="norseGod5">
            <header>Thor</header>
          </li>
        </Link>

        <Link to="/baldur">
          <li id="norseGod6">
            <header>Baldur</header>
          </li>
        </Link>
      </motion.ul>
    </div>
  );
}

export default NorseMythologySection;
