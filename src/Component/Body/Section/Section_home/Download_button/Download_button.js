import React from 'react';
import Popup from './Popup/Popup';
import { IoMdDownload } from "react-icons/io";
import "./Download_button.css";


const Download_button = function(props) {
  return (
    <div className="Font_text">
      <button className="mausaccuanuti ppdlbt-toggle cangiuavtsscsc">
          <IoMdDownload />
          <span className="salkdjoiasdj">Download Now</span>
      </button>
      
      <Popup/>
  </div>
  )
}
export default Download_button;