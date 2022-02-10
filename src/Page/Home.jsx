import React from "react";
import ReactDOM from "react-dom";

import { Header, Body, Footers, Head, Back_to_top, Tooltip } from '../Component/';

class Home extends React.Component {

  // fake authentication Promise
  LoadingPageHome(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount(){
    this.LoadingPageHome().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 1000)
      }
    })
  }

  render() {
    return (
      <div id="Page_all">
      
        <Tooltip />

        <Back_to_top />

        <Header />

        <Head />

        <Body />

        <div className="Footers_main">
          <Footers />
        </div>

      </div>
    );
  }
}

export default Home;
