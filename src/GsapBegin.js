import React, {useRef, useEffect, forwardRef, useState, useLayoutEffect} from "react";
import { gsap } from "gsap";
import "./GsapBegin.css";

//const randomX = gsap.utils.random(-150, 150, 1, true); //exercise 6

function Box({children}) {
  return <div className="box2">{children}</div>;
}

function Container({children}) {
  return <div><Box>Follow-me</Box></div>;
}

const Sqr = forwardRef(({children}, ref)=>{
  return <div className="box3" ref={ref}>{children}</div>;
});

function Divider({children}) {
  return <div><Sqr>No Bother</Sqr></div>;
}

function Cube1({children}) {
  return <div className="box4">{children}</div>
}

function Circle1({children}) {
  return <div className="circle1"><div className="circletxt1">{children}</div></div>
}
/*
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
*/
/*
function fetchFakeData() {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve([
        {id: 1, color: "blue"},
        {id: 2, color: "red"},
        {id: 3, color: "purple"},
      ]);
    }, 2000);
  });
}
*/
/*
function Block({children, color}) {
  return (
    <div className={`box8 ${color}`}>{children}</div>
  );
}
*/
function GsapBegin() {
  const el1 = useRef(); //exercise 1
  const el2 = useRef(); //exercise 2
  //const el3 = useRef(); //exercise 4
  //const el4 = useRef(); //exercise 5
  //const el5 = useRef(); //exercise 8
  const sqr1 = useRef(); //exercise 3
  const sqr2 = useRef(); //exervise 3
  //const tl1 = useRef(); //exercise 4
  //const [reversed, setReversed] = useState(false); //exercise 4
  //const [count, setCount] = useState(0); //exercise 5
  //const [delayedCount, setDelayedCount] = useState(0); //exercise 5
  //const [endX, setEndX] = useState(0); //exercise 6
  //const [data, setData] = useState([]); //exercise 8
  //const [loadingState, setLoadingState] = useState(); //exercise 8
  const q1 = gsap.utils.selector(el2); //exercise 2
  //const q2 = gsap.utils.selector(el3); //exercise 4
  //const q3 = gsap.utils.selector(el4); //exercise 5
  //const q4 = gsap.utils.selector(el5); //exercise 8

  useEffect(() => {
    gsap.to(el1.current, { rotation: "+=360" });
    
    gsap.to(q1(".box2"),{
      x: 100,
      stagger: 0.33,
      repeat: -1,
      repeatDelay: 1,
      duration: 4,
      yoyo: true,
    });

    const sqrs = [sqr1.current, sqr2.current,];

    gsap.to(sqrs, {
      x: 150,
      repeat: -1,
      repeatDelay: 1,
      duration: 4,
      yoyo: true,
    });
    /*
    tl1.current = gsap.timeline()
      .to(q2(".box4"), {
        rotate: 360,
      })
      .to(q2(".circle1"), {
        x: 100
      });
    */
    //gsap.to(q3(".box5-1"), {rotation: "+=360"});  
  },[]);
  /*
  useEffect(()=>{
    tl1.current.reversed(reversed);
  },[reversed]);
  */
  /*
  useEffect(()=>{
    gsap.to(q3(".box5-2"), {rotation: "+=360"});
  }, [delayedCount]);
  
  useEffect(()=>{
    gsap.to(q3(".box5-3"), {rotation: "+=360"});
  })
  */
  /*
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setDelayedCount(count);
    }, 1000);
    return()=>clearTimeout(timer);
  }, [count])
  */
  /*
  useEffect(()=>{
    if (loadingState !== "start") return;
      const loadData = async()=>{
        const data = await fetchFakeData();
        setData(data);
        setLoadingState("complete");
      }
      loadData();
  },[loadingState]);

  useLayoutEffect(()=>{
    if (loadingState!=="complete") return;
      gsap.fromTo(q4(".box8"), {
        opacity: 0,
      },{
        opacity: 1,
        duration: 1,
        stagger: 0.2,
      });
  }, [loadingState]);
  */
 /*
  const onEnter = ({currentTarget})=> {
    gsap.to(currentTarget, {backgroundColor: "#e77614", scale: 1.2});
  }

  const onLeave = ({currentTarget})=>{
    gsap.to(currentTarget, {backgroundColor: "#28a92b", scale: 1});
  }
  */
  /*
  const startLoading = () => {
    if (!loadingState) {
      setLoadingState("start");
    }
  };
  */
  return (
    <div className="gsapBody1">
      <div className="gsapPage">
        <div className="box1" ref={el1}>Hello</div>
        <div ref={el2}>
          <Container/>
          <Box>GSAP</Box>
        </div>
        <div>
          <Sqr ref={sqr1}>Square 1</Sqr>
          <Divider></Divider>
          <Sqr ref={sqr2}>Square 2</Sqr>
        </div>
        {/*}
        <div className="cube" ref={el3}>
          <div>
            <button onClick={()=>setReversed(!reversed)}>Toggle</button>
          </div>
          <Cube1>cube</Cube1>
          <Circle1>circle</Circle1>
        </div>
        */}
        {/*
        <div className="cube3" ref={el4}>
          <div>
            <button onClick={()=>setCount(count + 1)}>Click for render</button>
          </div>
          <p>Count: {count}</p>
          <p>Delayed Count: {delayedCount}</p>
          <p>Renders: {1 + delayedCount + count}</p>
          <div className="flex-row">
            <div className="box5 box5-1 purple">onLoad render</div>
            <div className="box5 box5-2 blue">onLoad and delayed count change render</div>
            <div className="box5 box5-3 red">Every render</div>
          </div>
        </div>
        */}
        {/*
        <div className="randomPage">
          <button onClick={()=>setEndX(randomX())}>Radmom Now</button>
          <Rect endX={endX}>{endX}</Rect>
        </div>
        
        <div className="enLarge">
          <div className="box7" onMouseEnter={onEnter} onMouseLeave={onLeave}>Point Me</div>
        </div>
        
        <div className="panel flex-row" ref={el5}>
          {
            !loadingState
              ?<div><button onClick={startLoading}>Start Loading</button></div>
              :null
          }
          {
            loadingState==="start"
              ?<div className="loading">Loading fake data...</div>
              :null
          }
          {
            data.map(item=><Block key={item.id} {...item}>Block {item.id}</Block>)
          }
        </div>
        */}
      </div>
    </div>
  );
}
export default GsapBegin;