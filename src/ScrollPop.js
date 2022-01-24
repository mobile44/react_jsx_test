import React, {useRef, useEffect} from "react";
import {gsap} from "gsap";
import tanjiro from "./images/tanjiro.jpg";
import nezuko from "./images/nezuko.jpg";
import zenitsu from "./images/zenitsu.jpg";
import "./ScrollPop.css";

function ScrollPop() {
  const ref=useRef(null);
  useEffect(()=>{
    const element = ref.current;
    gsap.fromTo(element.querySelector(".spf-paragraph"),{
      opacity: 0,
      y: -20,
    }, {
      opacity: 1,
      y:0,
      scrollTrigger: {
        trigger: element.querySelector("scrollpopFirst"),
        start: "top top",
        end: "bottom center",
        scrub: true,
      }
    });
  },[]);
  useEffect(()=>{
    const element=ref.current;
    gsap.fromTo(element.querySelector("#second-image"),{
      opacity: 0,
      scale: 0.2,
      y:-20,
    },{
      opacity: 1,
      y:0,
      scale:1,
      duration: 1,
      ease:"none",
      scrollTrigger: {
        trigger: element.querySelector(".scrollpopFirst"),
        start: "top center",
        end: "bottom top",
        scrub: true,
      }
    });
  },[]);
  useEffect(()=>{
    const element=ref.current;
    gsap.from(element.querySelector(".spf-line"),{
      scale:0,
      ease:"none",
      scrollTrigger: {
        trigger: element.querySelector(".scrollpopThird"),
        scrub: true,
        start: "top bottom",
        end: "top top",
      }
    });
  },[]);
  return (
    <div className="scrollpopBody">
      <div className="scrollpopPage" ref={ref}>
        <div className="scrollpopFirst">
          <h1>ScrollTrigger</h1>
          <p className="spf-paragraph">
            is the collest Greensock plugin.
            <span role="img" aria-label="celebrating">^.^</span>
          </p>
          <div className="img-main">
            <img src={tanjiro} id="first-image" alt="Tanjiro" />
          </div>
        </div>
        <div className="scrollpopSecond">
          <div className="img-main">
            <img src={nezuko} id="second-image" alt="Nezuko" />
          </div>
        </div>
        <div className="scrollpopThird">
          <p>
            <span className="spf-line"/>
          </p>
          <div className="img-main">
            <img src={zenitsu} id="third-image" alt="Zenitsu" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ScrollPop