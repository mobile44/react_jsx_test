import React, {useRef, useEffect, useState} from "react";
import { gsap } from "gsap";
import "./GsapBegin.css";

const randomX = gsap.utils.random(-150, 150, 1, true);

function Rect({children, endX}) {
  const rectRef = useRef();
  useEffect(()=>{
    gsap.to(rectRef.current, {
      x: endX,
      duration: 4,
    });
  },[endX])
  return <div className="box6" ref={rectRef}>{children}</div>;
}

function Random() {
  const [endX, setEndX] = useState(0);
  return (
    <div className="gsapBody">
      <div className="gsapPage">
        <div className="randomPage">
          <button onClick={()=>setEndX(randomX())}>Radmom Now</button>
          <Rect endX={endX}>{endX}</Rect>
        </div>
      </div>
    </div>
  )
}
export default Random;