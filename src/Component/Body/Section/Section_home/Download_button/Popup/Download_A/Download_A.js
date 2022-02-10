import React from 'react';
import './Download_A.css';
import From_Register from '../From_Register/From_Register';
import { HiDownload } from "react-icons/hi";

const Download_A = function(props) {

  return (
    
  <div>
      {/*<From_Register />*/}
        <button className="chucnangpudktButton thumot" data-popup="popupOne" >
        
          <div className="vhiadoinutdownload">
              < HiDownload />
              <font>Download</font>
          </div>
          
        </button>
  </div>
  )
}
export default Download_A;