import React, {useState, useEffect} from 'react';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom";
import './App.css';
import facebook from './images/facebook.jpg';
import linkedin from './images/linkedin.jpg';
import twitter from './images/twitter.jpg';
import instagram from './images/instagram.jpg';
import logo from './images/logo.jpg';
import minlogo from './images/minlogo.jpg';
import Home from './Home';
import ViewPort from "./ViewPort";
import GsapBegin from "./GsapBegin";
import TimeLine from "./TimeLine";
import Enlarge from "./Enlarge";
import Random from "./Random";
import FadeEffect from "./FadeEffect";

const fburl = "https://www.facebook.com/react/";
const linkedinurl = "https://www.linkedin.com/company/react";
const twitterurl = "https://twitter.com/react";
const instagramurl = "https://www.instagram.com/reactjsofficial/";

const App=()=>{
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  }
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    }

  }, [])
  return(
    <BrowserRouter>
      <nav>
        {/*{(toggleMenu || screenWidth > 800) && (*/}
        {(screenWidth > 800) && (
          <div className="topNav">
            <div className="topMenu">
              <a href={fburl}>
                <img src={facebook} alt='facebook' width="30" height="30"/>
              </a>
              <a href={linkedinurl}>
                <img src={linkedin} alt='linkedin' width="30" height="30"/>
              </a>
              <a href={twitterurl}>
                <img src={twitter} alt='twitter' width="30" height="30"/>
              </a>
              <a href={instagramurl}>
                <img src={instagram} alt='instagram' width="30" height="30"/>
              </a>
              <div className="topMenuRight">
                <Link className="link" to="/react_jsx_test/viewport" >ViewPort</Link>
                <Link className="link" to="/react_jsx_test/gsapbegin" >GSAP</Link>
                <Link className="link" to="/react_jsx_test/timeline" >Timeline</Link>
                <Link className="link" to="/react_jsx_test/enlarge" >Enlarge</Link>
                <Link className="link" to="/react_jsx_test/random" >Random</Link>
              </div>
            </div>
            <div className="subMenu">
              <a href='./'>
                <img src={logo} alt='logo' height="75"/>
              </a>
              <div className="subMenuRight">
                <Link className="flat" to="/react_jsx_test/" >Products</Link>
                <Link className="flat" to="/react_jsx_test/" >Real Stores</Link>
                <Link className="flat" to="/react_jsx_test/" >Services&amp;Support</Link>
                <Link className="flat" to="/react_jsx_test/fadeeffect" >Fade</Link>
                <div className="dropDown">
                  <Link className="dropBTN" to="/react_jsx_test/" >Resources &dArr;</Link>
                  <div className="dropDownContent">
                    <Link className="dropPoint" to="/react_jsx_test/">R 1</Link>
                    <Link className="dropPoint" to="/react_jsx_test/">R 2</Link>
                    <Link className="dropPoint" to="/react_jsx_test/">R 3</Link>
                  </div>
                </div>
                <button className="meet">Schedule Meeting</button>
              </div>
            </div>
          </div>
        )}
        {/*<button onClick={toggleNav} className="btn">Menu</button>*/}
        {(screenWidth <= 800) && (
          <div className="minNav">
            <div className="mediaBar">
            <a href='./'>
                <img src={minlogo} alt='minlogo' height="30"/>
              </a>
              <a href={fburl}>
                <img src={facebook} alt='facebook' width="30" height="30"/>
              </a>
              <a href={linkedinurl}>
                <img src={linkedin} alt='linkedin' width="30" height="30"/>
              </a>
              <a href={twitterurl}>
                <img src={twitter} alt='twitter' width="30" height="30"/>
              </a>
              <a href={instagramurl}>
                <img src={instagram} alt='instagram' width="30" height="30"/>
              </a>
              <button className="meet">Schedule Meeting</button>
              <div className="shortMenu" onClick={toggleNav}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
            </div>
            {(toggleMenu) && (
              <div>
                <div className="firstBar">
                  <Link className="link" to="/react_jsx_test/viewport" >ViewPort</Link>
                  <Link className="link" to="/react_jsx_test/gsapbegin" >GSAP</Link>
                  <Link className="link" to="/react_jsx_test/timeline" >Timeline</Link>
                  <Link className="link" to="/react_jsx_test/enlarge" >Enlarge</Link>
                  <Link className="link" to="/react_jsx_test/random" >Random</Link>
                  
                </div>
                <div className="secondBar">
                  <Link className="flat" to="/react_jsx_test/" >Products</Link>
                  <Link className="flat" to="/react_jsx_test/" >Real Stores</Link>
                  <Link className="flat" to="/react_jsx_test/" >Services&amp;Support</Link>
                  <Link className="flat" to="/react_jsx_test/fadeeffect" >Fade Effect</Link>
                  <div className="dropDown">
                    <Link className="dropBTN" to="/react_jsx_test/" >Resources &dArr;</Link>
                    <div className="dropDownContent">
                      <Link className="dropPoint" to="/react_jsx_test/">R 1</Link>
                      <Link className="dropPoint" to="/react_jsx_test/">R 2</Link>
                      <Link className="dropPoint" to="/react_jsx_test/">R 3</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react_jsx_test/" element={<Home />} />
        <Route path="/react_jsx_test/viewport" element={<ViewPort />} />
        <Route path="/react_jsx_test/gsapbegin" element={<GsapBegin />} />
        <Route path="/react_jsx_test/timeline" element={<TimeLine />} />
        <Route path="/react_jsx_test/enlarge" element={<Enlarge />} />
        <Route path="/react_jsx_test/random" element={<Random />} />
        <Route path="/react_jsx_test/fadeeffect" element={<FadeEffect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;