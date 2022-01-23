import React, {useEffect, useRef, forwardRef, useImperativeHandle} from "react";
import {gsap} from "gsap";
import "./Follow.css";

const Circle = forwardRef(({ size, delay }, ref) => {
  const el = useRef();
      
  useImperativeHandle(ref, () => {           
      
      // return our API
      return {
        moveTo(x, y) {
          gsap.to(el.current, { x, y, delay });
        }
      };
  }, [delay]);
  return <div className={`followCircle ${size}`} ref={el}></div>;
});
function Follow() {
  const circleRefs = useRef([]);

  circleRefs.current=[];
  useEffect(()=>{
    circleRefs.current.forEach(ref=>ref.moveTo(window.innerWidth/2,window.innerHeight/2));
    const onMove=({clientX,clientY})=>{
      if (clientY>180) {
        circleRefs.current.forEach(ref=>ref.moveTo(clientX,clientY));
      }
    };
    window.addEventListener("pointermove", onMove);
    return ()=>window.removeEventListener("pointmove", onMove);
  },[]);
  const addCircleRef = ref =>{
    if (ref) {
      circleRefs.current.push(ref);
    }
  };
  return (
    <div className="followBody">
      <div className="followPage">
        <div className="followSection">
          <p>Move your mouse around</p>
          <Circle size="sm" ref={addCircleRef} delay={0}/>
          <Circle size="md" ref={addCircleRef} delay={0.1}/>
          <Circle size="lg" ref={addCircleRef} delay={0.2}/>
        </div>
      </div>
    </div>
  );
}
export default Follow;