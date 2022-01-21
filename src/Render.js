import React, {useRef, useEffect, useState} from "react";
import { gsap } from "gsap";
import "./Render.css";

function Render() {
  const el4 = useRef();
  const [count, setCount] = useState(0);
  const [delayedCount, setDelayedCount] = useState(0);
  const q3 = gsap.utils.selector(el4);
  useEffect(()=>{
    gsap.to(q3(".renderBox-1"), {rotation: "+=360"});
  },[]);
  useEffect(()=>{
    gsap.to(q3(".renderBox-2"), {rotation: "+=360"});
  }, [delayedCount]);

  useEffect(()=>{
    gsap.to(q3(".renderBox-3"), {rotation: "+=360"});
  })
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setDelayedCount(count);
    }, 1000);
    return()=>clearTimeout(timer);
  }, [count])
  return (
    <div className="renderBody">
      <div className="renderPage">
        <div className="renderSection" ref={el4}>
          <div className="toggleSection">
            <button className="renderToggle" onClick={()=>setCount(count + 1)}>Click for render</button>
          </div>
          <div className="countSection">
            <p>Count: {count}</p>
            <p>Delayed Count: {delayedCount}</p>
            <p>Renders: {1 + delayedCount + count}</p>
          </div>
          <div className="boxSection">
            <span className="renderBox renderBox-1 purple">Render 1</span>
            <span className="renderBox renderBox-2 blue">Render 2</span>
            <span className="renderBox renderBox-3 red">Render 3</span>
          </div>
        </div>
      </div>
    </div>    
  )

}
export default Render;