import './Section_news_topic.css';
import Robot from '../../../../Image/News_page/Section_news_topic/robot.jpg';
import { BsArrowRight } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Tabs, Tab, Content} from "./Tab/Tab";
import { BiTimeFive } from 'react-icons/bi';
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { user } from '../../../DataBase/Admin';
import { FiChevronRight } from "react-icons/fi";

function Section_news_topic() {

const [active, setActive] = useState(0);
const handleClick = e => {
  const index = parseInt(e.target.id, 0);
  if (index !== active) {
    setActive(index);
  }
};


const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
const randomUser = shuffle(user);
  return (
  	<div className="Section_news_topic_nen">

     <div className="Home_page_news_flex_row_2 Home_page_news_flex_row_2mobile">
        <div className="Home_page_news_flex_row_2_Hmrow">
          <span className="Home_page_news_flex_row_2_Hmrow_ppp">
            <div className="Home_page_news_flex_row_2_Hmrow_skp">Tin mới nhất</div>
          </span>
          <div className="Home_page_news_background_box">
            {randomUser.slice(user.length - 3).map((Readnews) => (
            <span className="Home_page_news_img_flex">
            <Link
                to={{
                      pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                      state: { Readnews }
                    }}
                >
              <figure className="Home_page_news_img_flexsm">
                <img src={Readnews.link_images} alt={Readnews.title} className="Home_page_news_img"/>
              </figure>
            </Link>
              <div className="Home_page_news_img_snncxmcs">
                <p className="Home_page_news_l"><BiTimeFive/> {Readnews.Date}</p>
                <Link
                  to={{
                        pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                        state: { Readnews }
                      }}
                >
                <figcaption className="Home_page_news_rowo">{Readnews.title}</figcaption>
                </Link>
              </div>
            </span>
            ))}
          </div>
          <div className="Home_page_news_margin_left_uuui"></div>
        </div>

        <div className="Home_page_news_margin_left">
          <p className="Home_page_news_row8">Bạn muốn trở thành cộng tác viên?</p>
          <p className="Home_page_news_row18">Bằng cách nhấp vào nút bên dưới để trở thành cộng tác viên của chúng tôi</p>
          <FiChevronRight className="FAcolor"/>
        </div>
      </div>

      <div className="Section_news_topic_bacground_flex">
      
        <div className="Section_news_topic_bacground_flex_flexdis Secsion_news_black_1">
          <div className="Section_news_topic_bacground_map">
            {user.slice(user.length - 3).map((Readnews) => (
            <div className="Home_page_news_map">
              <div className="Home_page_news_row rh1">
                <GoPrimitiveDot className="Home_page_news_icon"/>
                <p>Hot topic</p>
              </div>
              <Link 
                    to={{
                        pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                        state: { Readnews }
                      }}
              >
              <h4 className="Section_news_topic_map_title_h4s">{Readnews.title}</h4>
              </Link>
              <p className="po5"><BiTimeFive/> {Readnews.Date}</p>
            </div>
            ))}
          </div>

          <span className="Section_media_background_span_span_fl"><div className="gpt3__header-content__input">
              <input type="email" 
              placeholder="Đăng ký nhận tin tức mới nhất" />
              <button type="button">Gửi</button>
          </div></span>
        </div>

        <div className="Section_news_topic_container Secsion_news_black_2">
          <div className="Section_news_topic_container_abc_content">
              <div className="Section_news_topic_container_abc">
                {user.slice(user.length - 1).map((Readnews) => (
                  <img src={Readnews.link_images}  alt={Readnews.tilte} className="Section_news_topic_map_title_h4s_img"/>
                ))}
              </div>
              <div className="Secsion_news_black"></div>
              <p className="Section_news_topic_p">
                Vũ trụ tin tức
                <div className="Secsion_news_title_div"></div>
              </p>
              <div className="Secsion_news_title">
              {user.slice(user.length - 1).map((Readnews) => (
              <div className="Section_news_topic_h1">
                <div className="Home_page_news_row bs1">
                  <GoPrimitiveDot className="Home_page_news_icon"/>
                  <p className="Section_news_topic_bacground_map_co">Top Trending</p>
                </div>
                <Link 
                    to={{
                        pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                        state: { Readnews }
                      }}
                >
                <h1 className="bs3">{Readnews.title}</h1>
                </Link>
                <div className="Home_page_news_row1 bs2">
                  <p className="Section_news_topic_map_time_pos_olll">27 phút trước</p>
                  <Link 
                    to={{
                        pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                        state: { Readnews }
                      }}
                  >
                  <p className="Home_page_news_row2">Xem<BsArrowRight /></p>
                  </Link>
                </div>
              </div>
              ))}
              </div>
          </div>
           
        </div>

        <div className="Section_news_with Secsion_news_black_3">

          <Tabs>
            <Tab onClick={handleClick} active={active === 0} id={0}>
              <p onClick={handleClick} active={active === 0} id={0} className="the_p_size">Tin mới nhất</p>
            </Tab>
            <Tab onClick={handleClick} active={active === 1} id={1}>
              <p onClick={handleClick} active={active === 1} id={1} className="the_p_size">Phổ biến</p>
            </Tab>
            <Tab onClick={handleClick} active={active === 2} id={2}>
              <p onClick={handleClick} active={active === 2} id={2} className="the_p_size">Hot topic</p>
            </Tab>
          </Tabs>

          <Content active={active === 0}>
            
            <div className="Section_news_topic_all_scroll">
            <div className="Section_news_topic_all">
              {user.map((Readnews) => (
              <div className="Section_news_topic_map_klls">
                  <Link className="Section_news_topic_map_klls_figure"
                        to={{
                            pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                            state: { Readnews }
                          }}
                  >
                      <img src={Readnews.link_images} alt={Readnews.title} className="Section_news_topic_map_data"/>
                  </Link>
                <div className="Section_news_topic_map_sajn">
                  <Link 
                        to={{
                            pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                            state: { Readnews }
                          }}
                  >
                      <h4 className="Section_news_topic_map_title">{Readnews.title}</h4>
                  </Link>
                  <span className="Section_news_topic_map_title_os">
                    <p className="Section_news_topic_map_time"><BiTimeFive/>{Readnews.Date}</p>
                     <Link 
                          to={{
                              pathname: `/News/${Readnews.danh_muc_link}`,
                              state: { Readnews }
                            }}
                            className="Section_news_topic_map_time_danh_muc"
                    >{Readnews.danh_muc}</Link>
                  </span>
                </div>
              </div>
              ))}
            </div>
            </div>
          </Content>

          <Content active={active === 1}>
            <p>Tab 2</p>
          </Content>

          <Content active={active === 2}>
            <p>Tab 3</p>
          </Content>

        </div>
      </div>
  	</div>
  );
}

export default Section_news_topic;
