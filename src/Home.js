import React, {useState, useEffect} from 'react';
import SliderContent from './SliderContent';
import Dots from './Dots';
import Arrows from './Arrows';
import sliderImage from "./sliderImage";
import "./Home.css";
import Jumping from "./Jumping";

const len = sliderImage.length - 1;

function Home(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
     const interval = setInterval(()=>{
       setActiveIndex(activeIndex===len?0:activeIndex+1);
     },5000)
     return () => clearInterval(interval);
  }, [activeIndex]);
  
  function handleTextChange(text) {
    setValue(text);
  
    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <div>
      <div className="slider-container">
        <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
        <Arrows
          prevSlide={()=>
            setActiveIndex(activeIndex<1?len:activeIndex-1)
          }
          nextSlide={()=>
            setActiveIndex(activeIndex===len?0:activeIndex+1)
          }
        />
        <Dots
          activeIndex={activeIndex}
          sliderImage={sliderImage}
          onclick={(activeIndex)=>setActiveIndex(activeIndex)}
        />
      </div>
      <div className="jumpingBeans">
        <Jumping/>
      </div>
      <div id="float-label">
        <input type="email" value={value} onChange={(e)=>handleTextChange(e.target.value)}/>
          <label className={isActive?"Active":""} htmlFor="email">
            E-mail
          </label>
      </div>
    </div>
  );
}

export default Home;