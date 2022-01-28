import React, {useEffect, useRef, forwardRef, useImperativeHandle} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
/*import lightLess from "./images/lightblub00.jpg";*/
import lightOff from "./images/lightblub01.jpg";
import lightOn from "./images/lightblub02.jpg";
import "./ScrollImage.css";

function ScrollImage() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef();
  useEffect(()=>{
    const el = ref.current;
    gsap.utils.toArray(".scrollimageSection").forEach(item=>{
      /*gsap.fromTo(el, {
        opacity:0,
        x: 0,
      }, {
        opacity: 1,
        x: 100,
        duration: 3,
      });*/
      let tl = gsap.timeline({
        scrollTrigger: {el,
          trigger: item,
          start: "top center",
          end: "bottom +=100", /*()=>"+=" + el.offsetWidth,*/
          scrub: true,
          pin: true,
          anticipatePin: 1,
          /*markers: true,*/
        },
        defaults: {ease: "none"}
      });
      tl.fromTo(item.querySelector(".scrollimageAfter"),{opacity:1},{opacity:0, duration: 4});
      /*tl.fromTo(item.querySelector(".scrollimageAfter"),{opacity: 0, y:0},{opacity: 1,y:-500,});*/
      /*tl.fromTo(item.querySelector(".scrollimageAfter"),{xPercent: -100, x:0},{xPercent: 0},0);*/
    });
  },[])
  
  /*
  gsap.registerPlugin(ScrollTrigger);
  const ref=useRef(null);
  useEffect(()=>{
    const element = ref.current;
    gsap.fromTo(element.querySelector(".scrollimageAfter"),{
      opacity: 0,
      y: -20,
    }, {
      opacity: 1,
      y:-550,
      scrollTrigger: {
        trigger: element.querySelector(".scrollimageAfter"),
        start: "top top",
        end: "bottom center",
        scrub: true,
      }
    });
  },[]);
  */
  return (
    <div className="scrollimageBody">
      <div className="scrollimagePage">
        <div><h1>Scroll up and down</h1></div>
        <div className="scrollimageSection" ref={ref}>
          <div className="scrollImage scrollimageBefore">
            <img src={lightOn} alt="On"/>
          </div>
          <div className="scrollImage scrollimageAfter">
            <img src={lightOff} alt="Off"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ScrollImage;