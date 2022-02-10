import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState } from 'react';
import { Data_header } from '../Data/Data.js';
import './Mobile_extra_header.css';
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegShareSquare } from 'react-icons/fa';
import $ from 'jquery';
import SearchInput from '../SearchNews/SearchInput';

function Mobileextraheader() {
$(window).scroll(function(){
    if ($(window).scrollTop() >= 70) {
        $('.header_extra_news').addClass('fixed-header');
        $('.header_extra_news div').addClass('visible-title');
    }
    else {
        $('.header_extra_news').removeClass('fixed-header');
        $('.header_extra_news div').removeClass('visible-title');
    }
});
const [toggleMenu_reponsive, setToggleMenu_reponsive] = useState(false);

  return (
  <div className="Mobile_extra_header header_extra_news">
    {toggleMenu_reponsive
          ? <div className="Mobile_extra_header_background">
              <p onClick={() => setToggleMenu_reponsive(false)}>Trang chủ<FiChevronUp color="rgb(15, 23, 36)" size={20} /></p>
              <div className="Mobile_extra_header_background_buuton">
                <button className="Header_news_color Mobile_extra_header_menu_color">Tải xuống Assistant</button>
                <button className="Header_news_color Mobile_extra_header_menu_color">Khám phá vũ trụ</button>
              </div>
            </div>
          : <div className="Mobile_extra_header_background">
              <p onClick={() => setToggleMenu_reponsive(true)}>Trang chủ<FiChevronDown color="rgb(15, 23, 36)" size={20} /></p>
              <div className="Mobile_extra_header_background_buuton">
                <button className="Header_news_color Mobile_extra_header_menu_color">Tải xuống Assistant</button>
                <button className="Header_news_color Mobile_extra_header_menu_color">Khám phá vũ trụ</button>
              </div>
            </div>
    }
        {toggleMenu_reponsive && (
        <div className="Mobile_extra_header_menu animation_extra">
          <div className="Mobile_extra_header_background_buuton_flex">
            <div className="search-box_news">
              <input className="search-input_news search-box_news_2" type="text" placeholder="Tìm kiếm tin tức..."/>
            <button className="search-btn_news"><AiOutlineSearch /></button>
           </div>
            <div className="Header_extra_0">
              {/*<a href="#/" className="Header_extra_0_fl">
                <span>Share</span>
                <FaRegShareSquare className="Header_extra_icon"/>
              </a>*/}
            </div>
          </div>
        {Data_header.map(({link, name}) => (
          <a href={link}>{name}</a>
        ))}
        </div>
        )}
  </div>
  );
}

export default Mobileextraheader;
