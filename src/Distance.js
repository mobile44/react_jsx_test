import React, {useRef, useEffect, useState, forwardRef, useImperativeHandle} from "react";
import { gsap } from "gsap";
import "./Distance.css";

/*
function Box({children}) {
  return <div className="distanceBox">{children}</div>;
}
*/
const Box = forwardRef(({size, value},ref) => {
  const el = useRef();
      
  useImperativeHandle(ref, () => {           
      
      // return our API
      return {
        moveTo(width) {
          gsap.fromTo(el.current, {x:0},{
            x:width,
            repeat:-1,
            duration: 4,
            stagger: 0.33,
            yoyo: true,
          });
        }
      };
  },[value]); 
  return <div className="distanceBox" ref={el}>{size}</div>;
});

function Distance() {

  const el2 = useRef();

  //const q1 = gsap.utils.selector(el2);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    el2.current.moveTo(screenWidth);
    const changeWidth = ({screenWidth}) => {
      setScreenWidth(window.innerWidth); 
      el2.current.moveTo(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    }

  }, []);
  /*
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
  
  return (
    

    <div className="distanceBody">
      <div className="distancePage">
        <div className="distanceSection">
          <Box fr={0} size={screenWidth} value={1} ref={el2}/>
        </div>
      </div>
    </div>

    
  );
}
export default Distance;