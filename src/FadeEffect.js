import React, {useRef, useEffect, useLayoutEffect, forwardRef, useState} from "react";
import { gsap } from "gsap";
import "./FadeEffect.css";

const FadeIn = forwardRef(({ children, stagger = 0, x = 0 }, ref) => {
  const el = useRef();
  const animation = useRef();
  
  useLayoutEffect(() => {    
    animation.current = gsap.from(el.current.children, { 
      opacity: 0,
      stagger, 
      x 
    });        
  }, []);
  
  useEffect(() => {
    
    // forward the animation instance
    if (typeof ref === "function") {
      ref(animation.current);
    } else if (ref) {
      ref.current = animation.current;
    }
  }, [ref]);
  
  return <span ref={el}>{children}</span>
});

function FadeEffect() {
  
  const [state, setState] = useState(true);
  const [toggletxt, setToggletxt] = useState("Fade out")
  const animation = useRef();
     
  const toggle = () => {
    animation.current.reversed(!animation.current.reversed());
    if (state===true) {
      setToggletxt("Fade in");
    } else {
      setToggletxt("Fade out");
    }
    setState(!state);
  };

  return (
    <div className="fadeBody">
      <div className="fadePage">
        <div className="fadePanel">
          <div>
            <button className="fadeToggle" onClick={toggle}>{toggletxt}</button>
          </div>
          <FadeIn stagger={0.1} x={100} ref={animation}>
            <div className="box8 box8-blue">Box 1</div>
            <div className="box8 box8-red">Box 2</div>
            <div className="box8 box8-purple">Box 3</div>
          </FadeIn>
          
        </div>
      </div>
    </div>
  );
}
export default FadeEffect;