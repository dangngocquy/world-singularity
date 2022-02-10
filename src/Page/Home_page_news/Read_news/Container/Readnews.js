import { Link, useLocation, withRouter, Switch } from "react-router-dom";
import './Read_news.css';
import Header_news from '../../Header_news/Container/Header_news';
import Header_extra from '../../Header_news/Extra/Header_extra';
import Comments_news from '../Body/Comments_news/Comments_news';
import Offer_news from '../Body/Offer_news/Offer_news';
import Hot_topics_news from '../Body/Hot_topics_news/Hot_topics_news';
import Tags_news from '../Body/Tags_news/Tags_news';
import Like from '../Body/Like/Like';
import React, { useState } from 'react';
import Video_news from '../Body/Video_news/Video_news';
import Section_send from '../../Body/Section_send/Section_send';
import LoadingNews from './LoadingNews';
import useCopyToClipboard  from "./Coppy/useCopyToClipboard";

import Logo from '../../../../Image/logo-2.png';
import { Footers } from '../../../../Component/';

import { BiCodeAlt } from 'react-icons/bi';
import { FaFacebookF, FaTwitter, FaBloggerB } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';
import parse from 'html-react-parser';


const Readnews = (props) => {

const { state } = useLocation();

const { id, title, Date, danh_muc, teams, content, Time, danh_muc_link, link_page, BinhLuan } = state.Readnews;


// window.onscroll = function () {
// myFunction();
// };

// function myFunction() {
//   var winScroll =
//     document.body.scrollTop || document.documentElement.scrollTop;
//   var height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }
    const [copyText, setCopyText] = useState(`http://localhost:3000/News/${danh_muc_link}/${link_page}/`);
    const { isCopied, onCopy } = useCopyToClipboard({ text: copyText });

    const handleChange = (ev) => {
        setCopyText(ev.target.value);
    };


  return (
    <Switch key={id}>
    <React.Fragment>
    {/*<LoadingNews/>*/}
    <div className="Read_news_background_all Font_text"> 

      <title>{title} | WORLD SINGULARITY</title>

        <div className="Read_news_background">
          < Header_news />
        </div>

        <div className="Read_news_background_scroll">
          <Header_extra />
      {/* <div className="Read_news_progress-container">
            <div className="Read_news_progress-bar" id="myBar"></div>
          </div>*/}
        </div>

      <div className="Read_news_padding_flex">
        <span>
          <div className="Read_news_padding">
            <div className="Read_news_background_left">
              <a href="/">
                <img src={Logo} alt="Logo" height="25" with="30" />
              </a>
              <FiChevronRight className="Read_news_background_icon"/>
              <Link to="/News" className="Read_news_background_p">
                Tin tức
              </Link>
              <FiChevronRight className="Read_news_background_icon"/>
              <Link
                      to={{
                            pathname: `/News/${danh_muc_link}/`,
                          }}
              >
              <p className="Read_news_background_p">{danh_muc}</p>
              </Link>
            </div>
            
            <div className="Read_news_background_flex_row">
              <div className="Read_news_background_felxs">
                <p className="Read_news_background_p_p">Tin tức</p>

                <h2 className="Read_news_background_h2">{title}</h2>

                <p className="Read_news_background_pc">Được đăng bởi: {teams}</p>

                  <div className="Read_news_background_scroll_div_p_share">
                    <span className="Read_news_background_p_content_span_span_flex">

                      <div className="Read_news_background_scroll_div_p">
                        <p>Ngày đăng: {Date}</p>
                        <p className="ppms"><AiOutlineFieldTime />Lúc: {Time}</p>
                      </div>

                      <div className="Read_news_background_height"></div>
                      <span className="Read_news_background_p_content_span_slcnj">
                        <div className="Read_news_background_div_share">Chia sẻ với</div>
                        <div className="Read_news_backgroundd">
                          <FaFacebookF className="icon_Read_news GrFacebookOption"/>
                          <FaTwitter className="icon_Read_news FaTwitter"/>
                          <FaBloggerB className="icon_Read_news FaBloggerB"/>
                          <BiCodeAlt className="icon_Read_news BiCodeAlt" />
                        </div>
                      </span>
                    </span>

                    <span>
                      <div className="Read_news_background_div_p_link">
                        <input type="text" value={copyText} onChange={handleChange} disabled className="ClipboardREADNEWS"/>
                        <button type="button" onClick={onCopy} className="ClipboardREADNEWSYS">
                          Sao chép liên kết
                        </button>
                      </div>
                    </span>
                    {/*<p>Sao chép liên kết: <strong>{isCopied ? 'Thành công' : 'Thất bại'}</strong></p>*/}
                  </div>

                  {/*<img src={require(`../../../../Image/timeline/${images}`).default} alt={t('alt_img') + "'" + t(title) + "'"} className="Read_news_background_img_2"/>*/}
                 {/* <img src={link_images} alt={t('alt_img') + "'" + t(title_img) + "'"} className="Read_news_background_img_2"/>
                  <i className="Read_news_background_i">{title_img}</i>*/}

                  <p className="Read_news_background_p_content">{parse(content)}</p>

                  <div className="Read_news_background_emoji">
                    <Like />
                  </div>

                  <Comments_news />
              </div>

              <span className="Read_news_background_p_content_span">
                <Offer_news />

                <Video_news />

                <Tags_news />
              </span>
            </div>

         {/*<Link to="/News">
              <button style={{ marginTop: "1rem" }}>Back</button>
            </Link>*/}
    
          </div>
        </span>

      </div>

      <Hot_topics_news />
      
      <Section_send />
      <div className="Home_News_bgr">
        <div className="Background_news_home">
        <Footers />
        </div>
      </div>
    </div>
    </React.Fragment>
    </Switch>
  );
};

export default withRouter(Readnews);
