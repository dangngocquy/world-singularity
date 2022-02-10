import './Header_extra.css';
import Mobileextraheader from '../Mobile/Mobileextraheader';
import $ from 'jquery';

import { FaRegShareSquare, FaBloggerB } from 'react-icons/fa';
import { Data_header } from '../Data/Data.js';
import { Link, useLocation } from "react-router-dom";
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter } from 'react-icons/ai';
import { user } from '../../../DataBase/Admin.json';
import Readnews from '../../Read_news/Container/Readnews';
import { useState } from 'react';
import SearchInput from '../SearchNews/SearchInput';

function Header_extra() {

$(window).scroll(function(){
    if ($(window).scrollTop() >= 77.6) {
        $('.header_news').addClass('fixed-header');
        $('.header_news div').addClass('visible-title');
    }
    else {
        $('.header_news').removeClass('fixed-header');
        $('.header_news div').removeClass('visible-title');
    }
});

  return (
    <div className="TEstExtra">
      <Mobileextraheader />
      <nav className="header_news">
        <ul className="Header_extra_mn">
          <li>
          <a href="/News/" className="Header_extra_font_size">Trang chủ</a>
          </li>
          {Data_header.map(({link, name, Readnews, id}) => (
            <li className="Header_extra_font_size" key={id}>
              <Link to={link}
                    className="Header_extra_font_size" >
                {name}
              </Link>
            </li>
            ))}
          </ul>
          
          <ul className="Header_extra_mn">
            <li>
              <SearchInput/>
            </li>
            <li className="Header_extra_0">
              <div className="Header_extra_icon_share">
                <GrFacebookOption className="Header_extra_icon_icon_share1"/>
                <AiOutlineTwitter className="Header_extra_icon_icon_share2"/>
                <FaBloggerB className="Header_extra_icon_icon_share3"/>
              </div>
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header_extra;
