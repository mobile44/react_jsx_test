import React, {useState, useEffect} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Photos from './Photos';
import Data from './Data';
import "./Home.css";

function Home() {
  const [image, setImage] = useState(Data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
     const lastIndex = image.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex){
      setIndex(0)
    }
  }, [index, image])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000);
    return () => clearInterval(slider)
  }, [index])
    
  return (
  <section className="section">
  <div className="title">
  <h2>
  reviews
  </h2>
  <div className="underline"></div>
  </div>
  <div className="section-center">
  {image.map((photo, photoIndex) => {
        return <Photos key={photo.id} {...photo} photoIndex={photoIndex} index={index} />
  })}
  <button className="prev" onClick={() => setIndex(index - 1)}>
    <FiChevronLeft />
  </button>
  <button className="next" onClick={() => setIndex(index + 1)}>
    <FiChevronRight />
  </button>
  </div>
  </section> 
  );
}

export default Home;