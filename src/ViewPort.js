import React from 'react';
import AnimatedSection from "./AnimatedSection";
import "./ViewPort.css";

/*const AnimatedSection.propTypes = {
  getStyles: PropTypes.func.isRequired,
  children: PropTypes.element,
};*/

function ViewPoint() {
  

  const getFadeLeftStyles = isfadeLeftInViewPort => ({
    transition: 'all 1s ease-in',
    opacity: isfadeLeftInViewPort ? '1' : '0',
    transform: isfadeLeftInViewPort ? '' : 'translateX(100%)'
  });

  const getFadeRightStyles = isfadeRightInViewPort => ({
    transition: 'all 1s ease-in',
    opacity: isfadeRightInViewPort ? '1' : '0',
    transform: isfadeRightInViewPort ? '' : 'translateX(-100%)'
  });

  return (
    <div className="viewPoint">
      <div className="viewContent">
        <div className="header">
          <h1>Scroll animations without GSAP</h1>
        </div>
        <AnimatedSection getStyles={getFadeLeftStyles}>Left in</AnimatedSection>
        <AnimatedSection getStyles={getFadeRightStyles}>Right in</AnimatedSection>
      </div>
    </div>
  )
}
export default ViewPoint;