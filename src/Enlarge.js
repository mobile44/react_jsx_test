import React from "react";
import { gsap } from "gsap";
import "./Enlarge.css";

function Enlarge() {
  const onEnter = ({currentTarget})=> {
    gsap.to(currentTarget, {backgroundColor: "#e77614", color: "navy", scale: 1.2});
  }
    
  const onLeave = ({currentTarget})=>{
    gsap.to(currentTarget, {backgroundColor: "#28a92b", color: "white", scale: 1});
  }
  return (
    <div className="enlargeBody">
      <div className="enlargePage">
        <div className="enlargeBox" onMouseEnter={onEnter} onMouseLeave={onLeave}>Point Me</div>
      </div>
    </div>
  )
}
export default Enlarge;