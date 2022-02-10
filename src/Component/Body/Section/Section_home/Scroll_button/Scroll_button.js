import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Scroll_button.css';
import { BiChevronDown } from 'react-icons/bi';
import React from 'react';

const Scroll_button = function(props) {
  return (

    <div id="section04" className="demo">
    
      <AnchorLink className="lkcm" href="#Section_introduce">
        <span className="dichuyenchimuc"></span>
        <span className="dichuyenchimuc"></span>
        <span className="dichuyenchimuc"></span>
      </AnchorLink>
      
    </div>

  )
}
  export default Scroll_button;