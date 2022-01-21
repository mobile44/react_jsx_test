import React, {useRef, useEffect, useState} from "react";
import { gsap } from "gsap";
import "./Random.css";

const randomX = gsap.utils.random(-100, 100, 1, true);

function Rect({children, endX}) {
  const rectRef = useRef();
  useEffect(()=>{
    gsap.to(rectRef.current, {
      x: endX,
      duration: 4,
      ease: "bounce",
    });
  },[endX])
  return <div className="box6" ref={rectRef}>{children}</div>;
}

function Random() {
  const [endX, setEndX] = useState(0);
  return (
    <div className="randomBody">
      <div className="randomPage">
        <div className="randomSection">
          <button className="randomToggle" onClick={()=>setEndX(randomX())}>Radmom Move</button>
          <Rect endX={endX}>{endX}</Rect>
        </div>
      </div>
    </div>
  )
}
export default Random;