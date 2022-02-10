import "./Section_slider.css";
import Slideshow from "./SlideShow";


function Section_slider() {
  return (
  	 <Slideshow
          ratio={`6:2.3`}
          // mode={`automatic`}
          timeout={`9000`}
        />
  );
}

export default Section_slider;
