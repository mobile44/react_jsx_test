import React, {useRef, useEffect, useState, forwardRef} from "react";
import { gsap } from "gsap";
import "./Distance.css";
/*
function Box({children}) {
  return <div className="distanceBox">{children}</div>;
}
*/
const NameInput = forwardRef(({ children}, ref) => {
  return <input ref={ref} {...children} type="text"/>;
});
function Distance() {
  /*
  const el2 = useRef();
  const q1 = gsap.utils.selector(el2);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    }

  }, [])
  useEffect(() => {
    gsap.to(q1(".distanceBox"),{
      x: screenWidth,
      stagger: 0.33,
      repeat: -1,
      repeatDelay: 1,
      duration: 4,
      yoyo: true,
    });

  },[screenWidth]);
  */
  const myRef = useRef(null);
  const handleClick=()=>{
    myRef.current.focus();
  }
  return (
    <div>
      <NameInput ref={myRef}/>
      <button onClick={handleClick}>
        click here
      </button>
    </div>
    /*
    <div className="distanceBody">
      <div className="distancePage">
        <div ref={el2}>
          <Box>{screenWidth}</Box>
        </div>
      </div>
    </div>
    */
    
  );
}
export default Distance;