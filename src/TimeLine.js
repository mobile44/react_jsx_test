import React, {useRef, useEffect, useState} from "react";
import { gsap } from "gsap";
import "./TimeLine.css";

function Cube1({children}) {
  return <div className="box4"><div className="cubeBlock">{children}</div></div>
}
function Circle1({children}) {
  return <div className="circle1"><div className="circleBlock">{children}</div></div>
}

function TimeLine() {
  const el3 = useRef(); //exercise 4
  const q2 = gsap.utils.selector(el3); //exercise 4
  const tl1 = useRef(); //exercise 4
  const [reversed, setReversed] = useState(false); //exercise 4

  useEffect(() => {
    tl1.current = gsap.timeline()
      .to(q2(".box4"), {
        rotate: 360,
      })
      .to(q2(".circle1"), {
        x: 100
      });
  },[]);

  useEffect(()=>{
    tl1.current.reversed(reversed);
  },[reversed]);
  return (
    <div className="timelineBody">
      <div className="timelinePage">
        <div className="timelineBlock" ref={el3}>
          <div className="buttonBlock">
            <button className="toggle" onClick={()=>setReversed(!reversed)}>Toggle</button>
          </div>
          <Cube1>cube</Cube1>
          <Circle1>circle</Circle1>
        </div>
      </div>
    </div>
  );
};
export default TimeLine;