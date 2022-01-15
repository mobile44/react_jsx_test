import React from "react";

function SliderContent({activeIndex, sliderImage}) {
  return (
    <section id="homeSection">
      {sliderImage.map((slide, index)=>(
        <div
          key={index}
          className={index===activeIndex ? "slides actie":"inactive"}
        >
          <img className="slide-image" src={slide.urls} alt=""/>
          <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
        </div>
      ))}
    </section>
  );
}
export default SliderContent;