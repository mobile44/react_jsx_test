import React, {useState, useEffect} from 'react';
import {BrowserRouter,Route,Routes,Link,Outlet} from "react-router-dom";
import './App.css';
import facebook from './images/facebook.jpg';
import linkedin from './images/linkedin.jpg';
import twitter from './images/twitter.jpg';
import instagram from './images/instagram.jpg';
import logo from './images/logo.jpg';
import Home from './Home';


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
        {(toggleMenu || screenWidth > 500) && (
          <div className="topNav">
            <div className="topMenu">
              <a href='https://www.facebook.com/KEV-Group-111378062266170/'>
                <img src={facebook} alt='facebook' width="30" height="30"/>
              </a>
              <a href='https://www.linkedin.com/company/kev-group/'>
                <img src={linkedin} alt='linkedin' width="30" height="30"/>
              </a>
              <a href='https://twitter.com/kevgroup?lang=en'>
                <img src={twitter} alt='twitter' width="30" height="30"/>
              </a>
              <a href='https://www.instagram.com/kevgroup/'>
                <img src={instagram} alt='instagram' width="30" height="30"/>
              </a>
              <div className="topMenuRight">
                <Link className="link" to="/react_jsx_test/" >Blog</Link>
                <Link className="link" to="/react_jsx_test/" >Careers</Link>
                <Link className="link" to="/react_jsx_test/" >In the News</Link>
                <Link className="link" to="/react_jsx_test/" >Order Forms</Link>
                <Link className="link" to="/react_jsx_test/" >Contact</Link>
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
                <Link className="flat" to="/react_jsx_test/" >About Us</Link>
                <div className="dropMenu">
                  <Link className="drop" to="/react_jsx_test/" >Resources &dArr;</Link>
                  <div className="subDrop">
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
        <div className="shortMenu" onClick={toggleNav}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":slug" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;