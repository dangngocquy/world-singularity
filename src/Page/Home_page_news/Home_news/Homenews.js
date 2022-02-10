import Home_page_news from '../Home/Container/Home_page_news';
import Header_news from '../Header_news/Container/Header_news';
import Header_extra from '../Header_news/Extra/Header_extra';
import Section_news_topic from '../Body/Section_news_topic/Section_news_topic';
import Section_title from '../Body/Section_title/Section_title';
import Section_media from '../Body/Section_media/Section_media';
import Section_columnist from '../Body/Section_columnist/Section_columnist';
import Section_send from '../Body/Section_send/Section_send';
import Section_slider from '../Body/Section_slider/Section_slider';
import { Footers } from '../../../Component/';

import './Home_news.css';

function Homenews() {

  return (
    <div className="Font_text">
      <title>Tin tức cập nhật | WORLD SINGULARITY</title>
            
        <div className="Read_news_background">
          < Header_news />
        </div>

        <div className="Read_news_background_scroll">
          <Header_extra />
        </div>

      <Home_page_news />

      <Section_news_topic />

      <Section_title />

      <Section_slider />

      <Section_media />

      <Section_columnist />

      <Section_send />
      
      <div className="Home_News_bgr">
        <div className="Background_news_home">
          <Footers />
        </div>
      </div>
    </div>
  );
}

export default Homenews;
