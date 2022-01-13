import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Jumping = () => {
  const blue = useRef(null);
  const red = useRef(null);
  const yellow = useRef(null);
  const green = useRef(null);

  const toggleJumping = () => {
    gsap.fromTo(
      [blue.current],
      { y: 16 },
      { y: -18, yoyo: true, repeat: 3, duration: 0.5 }
    );
    gsap.fromTo(
      [red.current],
      { y: 16 },
      { y: -18, yoyo: true, repeat: 3, duration: 0.5}
    );
    gsap.fromTo(
      [yellow.current],
      { y: 16 },
      { y: -18, repeat: 3, yoyo: true, duration: 0.5 }
    );
    gsap.fromTo(
      [green.current],
      { y: 16 },
      { y: -18, repeat: 3, yoyo: true, duration: 0.5 }
    );
  }

  useEffect(() => {
    gsap.fromTo(
      [blue.current],
      { y: 16 },
      { y: -18, yoyo: true, repeat: 3, duration: 0.2 }
    );
    gsap.fromTo(
        [red.current],
        { y: 16 },
        { y: -18, yoyo: true, repeat: 3, duration: 0.3}
      );
    gsap.fromTo(
      [yellow.current],
      { y: -18 },
      { y: 16, repeat: 4, yoyo: true, duration: 0.4 }
    );
    gsap.fromTo(
        [green.current],
        { y: -18 },
        { y: 16, repeat: 4, yoyo: true, duration: 0.5 }
      );
  }, []);

  return (
    <svg viewBox="0 0 150 33.2" width="45" height="20" onMouseOver={toggleJumping}>
      <circle ref={blue} cx="16.1" cy="16" r="15" fill="#527abd" />
      <circle ref={red} cx="55.2" cy="16" r="15" fill="#de4431" />
      <circle ref={yellow} cx="94.3" cy="16" r="15" fill="#f4b61a" />
      <circle ref={green} cx="133.4" cy="16" r="15" fill="#009e52" />
    </svg>
  );
};

export default Jumping;