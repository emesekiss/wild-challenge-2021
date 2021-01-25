import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import img01 from './assets/img01.png';
import img02 from './assets/img02.png';
import img03 from './assets/img03.png';
import img04 from './assets/img04.png';

gsap.registerPlugin(Draggable);

const pictures = [
  { source: img01 },
  { source: img02 },
  { source: img03 },
  { source: img04 },
];

const Example = () => {
  function handleClick() {
    gsap.to('.exslider', { duration: 2, x: 300 });
  }
  function handleClickBack() {
    gsap.to('.exslider', { duration: 2, x: -300 });
  }
  return (
    <div>
      <div id="exslider" className="exslider">
        {pictures.map((item) => {
          return <img alt={item.source} src={item.source} />;
        })}
      </div>
      <button onClick={handleClick}>right</button>
      <button onClick={handleClickBack}>left</button>
    </div>
  );
};

export default Example;
