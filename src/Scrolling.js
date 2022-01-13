import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lightBulbs from "./scrollImage";
import lightLess from "./images/lightblub00.jpg";
import lightOff from "./images/lightblub01.jpg";
import lightOn from "./images/lightblub02.jpg";
gsap.registerPlugin(ScrollTrigger);

const len = lightBulbs.length - 1;

const sections = [
  {
    title: 'Title 1',
    subtitle: 'Subtitle 1'
  },
  {
    title: 'Title 2',
    subtitle: 'Subtitle 2'
  },
  {
    title: 'Title 3',
    subtitle: 'Subtitle 3'
  }
];

const Scrolling = () => {
  const headerRef = useRef(null);
  const [background, setBackground] = useState('#5a7d95');
  const [showimg, setShowimg] = useState(lightBulbs[0]);
  const revealRefs = useRef([]);
  const imageRef = useRef([]);
  revealRefs.current = [];
  imageRef.current = showimg;

  const toggleBackground = () => {
    const color = background !== '#5a7d95' ? '#5a7d95' : '#1b4943';
    setBackground(color);
  }

  useEffect(() => {
    gsap.to(headerRef.current, {
        backgroundColor: background,
        duration: 1, 
        ease: 'none'
    });
  }, [background]);
  
  useEffect(() => {
    gsap.from(headerRef.current, {
      autoAlpha: 0,
      ease: 'none',
      delay: 1
    });
    for (let i = 0; i < lightBulbs.len; i++) {
      setShowimg(lightBulbs[i]);
      gsap.to(lightBulbs[i], {
        height: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: ".images",
          start: 'top center+=100',
          pin: true,
          scrub: 0.5
        }
      })
    }
    
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(el, {
          autoAlpha: 0
      }, {
        duration: 1,
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top center+=100',
          //start: 'top top',
          end: '+=300',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);
  
  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  return (
    <div>
      <div className="App">
        {sections.map(({title,subtitle})=>(
          <div className="App-section" key={title} ref={addToRefs}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        ))}
      </div>
      <div>
          <div className="images" ref={imageRef}></div>
          
      </div>
      <div className="bigSpace"></div>
      {/*<div ref={headerRef}>
      <div>
          <img src={lightLess} className="lightless" alt="No" width="100"/>
        </div>
        <div>
          <img src={lightOff} className="lightoff" alt="Off" width="100"/>
        </div>
        <div>
          <img src={lightOn} className="lighton" alt="On" width="100"/>
        </div>
        <div>
          <button onClick={() => toggleBackground()}>Change background</button>
        </div>
      </div>*/}
        </div>
  )
}
export default Scrolling;