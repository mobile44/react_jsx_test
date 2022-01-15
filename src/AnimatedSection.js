import React, {useRef} from 'react';
import useIsInViewPort from "./useIsInViewPort";

function AnimatedSection({ getStyles, children }) {
    const elementRef = useRef();
    const isInViewport = useIsInViewPort(elementRef);

    
  
    return (
      <section id="animatedSection" style={getStyles(isInViewport)}>
        <div className="rectangle" ref={elementRef}>
          <h2>{children}</h2>
        </div>
      </section>
    );
}
  
export default AnimatedSection;