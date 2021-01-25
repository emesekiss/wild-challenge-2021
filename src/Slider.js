import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import img01 from './assets/img01.png';
import img02 from './assets/img02.png';
import img03 from './assets/img03.png';
import img04 from './assets/img04.png';
import arrowright from './assets/arrow-right.svg';
// import arrow from './assets/arrow.svg';

gsap.registerPlugin(Draggable, InertiaPlugin);

gsap.registerPlugin(MorphSVGPlugin);

const images = [
  { source: img01 },
  { source: img02 },
  { source: img03 },
  { source: img04 },
];

const Slide = ({ imageSource }) => {
  return (
    <div className="slide">
      <img src={imageSource} alt="The Plant" draggable="false" />
    </div>
  );
};

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    console.log(sliderRef);
    Draggable.create(sliderRef.current, {
      type: 'x',
      bounds: {
        left: sliderRef.current.offsetLeft,
        right: sliderRef.current.offsetLeft + sliderRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <div>
      <div id="slider" className="slider" ref={sliderRef}>
        {images.map((item, index) => {
          return <Slide key={index} imageSource={item.source} />;
        })}
      </div>
      <button>
        <img src={arrowright} alt="arrow"></img>
      </button>
    </div>
  );
};

export default Slider;
