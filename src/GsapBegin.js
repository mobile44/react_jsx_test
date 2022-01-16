import React, {useRef, useEffect, forwardRef, useState} from "react";
import { gsap } from "gsap";
import "./GsapBegin.css";

function Box({children}) {
  return <div className="box2">{children}</div>;
}

function Container({children}) {
  return <div><Box>Follow-me</Box></div>;
}

const Sqr = forwardRef(({children}, ref)=>{
  return <div className="box3" ref={ref}>{children}</div>;
})

function Divider({children}) {
  return <div><Sqr>No Bother</Sqr></div>;
}

function Cube({children}) {
  return <div className="box4">{children}</div>
}

function Circle1({children}) {
  return <div className="circle1">{children}</div>
}

function GsapBegin() {
  const el1 = useRef();
  const el2 = useRef();
  const sqr1 = useRef();
  const sqr2 = useRef();
  const [reversed, setReversed] = useState(false);

  const q = gsap.utils.selector(el2);

  useEffect(() => {
    gsap.to(el1.current, { rotation: "+=360" });

    gsap.to(q(".box2"),{
      x: 100,
      stagger: 0.33,
      repeat: -1,
      repeatDelay: 2,
      duration: 3,
      yoyo: true,
    });

    const sqrs = [sqr1.current, sqr2.current,];

    gsap.to(sqrs, {
      x: 150,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    })
  });
    
  return (
    <div className="gsapBody">
      <div className="gsapPage">
        <div className="box1" ref={el1}>Hello</div>
        <div ref={el2}>
        <Container ref={el2}/>
        <Box>GSAP</Box>
        </div>
        <Sqr ref={sqr1}>Square 1</Sqr>
        <Divider></Divider>
        <Sqr ref={sqr2}>Square 2</Sqr>
      </div>
    </div>
  ) 
}
export default GsapBegin;