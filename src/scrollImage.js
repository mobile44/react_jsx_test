import React, {useEffect, useRef, forwardRef, useImperativeHandle} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import lightLess from "./images/lightblub00.jpg";
import lightOff from "./images/lightblub01.jpg";
import lightOn from "./images/lightblub02.jpg";

function ScrollImage() {

  return (
    <div className="scrollimageBody">
      <div className="scrollimagePage">
        <div className="scrollimageSection">
          <div className="scrollimageBefore">
            <img src={lightOff} alt="Off"/>
          </div>
          <div className="scrollimageAfter">
            <img src={lightOn} alt="On"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ScrollImage;