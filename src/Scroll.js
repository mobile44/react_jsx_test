import React, {useRef, useEffect} from "react";
import {gsap} from "gsap";
import "./Scroll.css";

function Scroll() {
  const circleRef = useRef(null);
  useEffect(()=>{
    gsap.to("#thirdCircle",{
      x: 100,
      duration: 5,
      /*ease: "bounce",
      delay: 1,*/
      scrollTrigger: {
        trigger: "#thirdCircle",
        /*markers: true,*/
        start: "top center",
        end: "bottom 80px",
        scrub: true,
      }
    });
  },[]);
  return (
    <div className="scrollBody">
      <div className="scrollPage">
        <div id="firstCircle"></div>
        <div id="secondCircle"></div>
        <div ref={circleRef} id="thirdCircle"></div>
      </div>
    </div>
  )
}
export default Scroll;