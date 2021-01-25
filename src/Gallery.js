import React, { useState, useRef } from 'react';
import { TweenLite, Power3 } from 'gsap';

import leftArrow from './assets/arrow-left.svg';
import rightArrow from './assets/arrow-right.svg';
import img01 from './assets/img01.png';
import img02 from './assets/img02.png';
import img03 from './assets/img03.png';
import img04 from './assets/img04.png';

import './App.css';

const testimonials = [
  {
    caption: '',
    image: `${img01}`,
  },
  {
    caption: '',
    image: `${img02}`,
  },
  {
    caption: '',
    image: `${img03}`,
  },
  {
    caption: '',
    image: `${img04}`,
  },
];

function Gallery() {
  let imageList = useRef(null);

  const imageWidth = 340;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
    isActive4: false,
  });

  //Image transition
  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const slideRight = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const nextSlide = () => {
    if (state.isActive1) {
      setState({ isActive1: false, isActive2: true });
      //Image transition
      slideLeft(0, 1);
      slideLeft(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);
      slideLeft(3, 1);
      slideLeft(3, 0);
    } else if (state.isActive2) {
      setState({ isActive2: false, isActive3: true });
      //Image transition
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      slideLeft(3, 1, 2);
    } else if (state.isActive3) {
      setState({ isActive4: true, isActive3: false });
      //Image transition
      slideRight(0, 0, 1);
      slideLeft(1, 0, 3);
      slideLeft(2, 1, 3);
      slideLeft(3, 1, 3);
    } else if (state.isActive4) {
      setState({ isActive1: true, isActive4: false });
      //Image transition
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      slideLeft(2, 0, 0);
      slideLeft(3, 1, 0);
    }
  };

  const prevSlide = () => {
    if (state.isActive1) {
      setState({ isActive1: false, isActive4: true });
      //Image transition
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      slideRight(0, 1);
      slideRight(1, 1);
    } else if (state.isActive2) {
      setState({ isActive2: false, isActive1: true });
      //Image transition
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
    } else if (state.isActive3) {
      setState({ isActive2: true, isActive3: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
    } else if (state.isActive4) {
      setState({ isActive3: true, isActive4: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
    }
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div>
          <img
            onClick={prevSlide}
            className="arrows left"
            src={leftArrow}
            alt="left arrow"
          />
        </div>
        <div className="inner">
          <div className="t-image">
            <ul ref={(el) => (imageList = el)}>
              <li className={state.isActive1 ? 'active' : ''}>
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive2 ? 'active' : ''}>
                <img src={testimonials[1].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive3 ? 'active' : ''}>
                <img src={testimonials[2].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive4 ? 'active' : ''}>
                <img src={testimonials[3].image} alt={testimonials[0].name} />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            className="arrows right"
            onClick={nextSlide}
            src={rightArrow}
            alt="right arrow"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
