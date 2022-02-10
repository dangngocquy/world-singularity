import './LoadingNews.css';
import React from 'react';

class LoadingNews extends React.Component {

  // fake authentication Promise
  LoadingPageHome(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount(){
    this.LoadingPageHome().then(() => {
      const ele = document.getElementById('Loadning_page_news')
      if(ele){
        // fade out
        ele.classList.add('Load_NEWS')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

  render() {
    return (
      <div className="Loadning_page_news" id="Loadning_page_news">
        <div className="Loadning_page_news-head">
          <div className="Loading_news_page28"></div>
          <div className="Load_news_seconds"></div>
        </div>
{/*        <div className="frame_news">
         Đang tải
        </div>*/}
    </div>
    );
  }
}

export default LoadingNews;
