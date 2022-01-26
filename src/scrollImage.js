import React, {useEffect, useRef, forwardRef, useImperativeHandle} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
/*import lightLess from "./images/lightblub00.jpg";*/
import lightOff from "./images/lightblub01.jpg";
import lightOn from "./images/lightblub02.jpg";
import "./ScrollImage.css";

function ScrollImage() {
  gsap.registerPlugin(ScrollTrigger);
  const ref=useRef(null);
  useEffect(()=>{
    const element = ref.current;
    gsap.fromTo(element.querySelector(".scrollimageAfter"),{
      opacity: 0,
      y: -20,
    }, {
      opacity: 1,
      y:-550,
      scrollTrigger: {
        trigger: element.querySelector(".scrollimageAfter"),
        start: "top top",
        end: "bottom center",
        scrub: true,
      }
    });
  },[]);
  return (
    <div className="scrollimageBody">
      <div className="scrollimagePage">
        <h1>Scroll down to switch off</h1>
        <div className="scrollimageSection" ref={ref}>
          <div className="scrollImage scrollimageBefore">
            <img src={lightOn} alt="On"/>
          </div>
          <div className="scrollImage scrollimageAfter">
            <img src={lightOff} alt="Off"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ScrollImage;