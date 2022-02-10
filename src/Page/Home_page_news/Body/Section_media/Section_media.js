import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import './Section_media.css';
import { GoPrimitiveDot } from 'react-icons/go';
import { Tabs, Tab, Content} from "./Tab/Tab";
import { user, Video_iframe } from '../../../DataBase/Admin.json';
import { Link } from "react-router-dom";
import Readnews from '../../Read_news/Container/Readnews';
import TabImage from './TabImage/TabImage';

import { BsFillPlayFill, BsArrowRight } from 'react-icons/bs';
import { MdClose } from "react-icons/md";
import { AiOutlineEye } from 'react-icons/ai';
import { BiLoaderAlt, BiTimeFive } from "react-icons/bi";

function Section_media() {

const [active, setActive] = useState(0);

const handleClick = e => {
  const index = parseInt(e.target.id, 0);
  if (index !== active) {
    setActive(index);
  }
};


// modal iframe youtube
const [modal_popup, setModal] = useState(false);
const [videoLoading, setVideoLoading] = useState(true);


const openModal = () => {
  setModal(!modal_popup);
};

const spinner = () => {
  setVideoLoading(!videoLoading);
};

//random data
const shuffle = Mang_arr => [...Mang_arr].sort(() => Math.random() - 0.5);
const randomUser = shuffle(user);

return (
  	<div className="Section_media_padding">
      <div className="Section_media_padding_right">
        <p className="Section_media_padding_p">Tin vũ trụ</p>
        <div className="Section_media_height"></div>

        <div className="Section_media_padding_flex">
          <div className="Section_news_topic_container_abc_content">
              <div className="Section_news_topic_container_abc">
                {user.slice(user.length - 1).map((Readnews) => (
                  <img src={Readnews.link_images}  alt={Readnews.tilte} className="Section_news_topic_map_title_h4s_img Section_media_black2"/>
                ))}
              </div>
              <div className="Secsion_news_black"></div>
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

          <div className="Section_media_img_flex">
          {randomUser.slice(user.length - 1).reverse().map((Readnews) => (
            <div className="Section_media_img_div">
            <Link
                      to={{
                            pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                            state: { Readnews }
                          }}
                      className="Section_media_img_div_imgs"
              >
              <img src={Readnews.link_images} alt="Nasa" className="Section_media_img"/>
              </Link>
              <span className="Section_media_img_span">
                <Link
                      to={{
                            pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                            state: { Readnews }
                          }}

                >
                  <h4 className="Section_media_img_h4">{Readnews.title}</h4>
                </Link>

                <p className="Section_news_topic_map_time"><BiTimeFive/>{Readnews.Date}</p>
              </span>
            </div>
            ))}
            <div className="Section_media_border_flex_collumn">
              {user.slice(user.length - 1).reverse().map((Readnews) => (
                <span className="Section_media_img_span2">
                  <Link
                          to={{
                                pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                                state: { Readnews }
                              }}
                  >
                  <h4 className="Section_media_margin1">{Readnews.title}</h4>
                  </Link>
                  <p className="Section_media_margin">27 phút trước</p>
                </span>
              ))}
                {randomUser.slice(user.length - 4).map((Readnews) => (
                <div className="Section_media_img_div">
                  <Link
                          to={{
                                pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                                state: { Readnews }
                              }}
                          className="Section_media_img_div_imgs"
                  >
                  <img src={Readnews.link_images} alt={Readnews.title} className="Section_media_img"/>
                  </Link>
                  <span className="Section_media_img_span">
                    <Link
                          to={{
                                pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                                state: { Readnews }
                              }}
                  >
                  <h4 className="Section_media_img_h4">{Readnews.title}</h4>
                  </Link>
                    <p className="Section_news_topic_map_time"><BiTimeFive/>{Readnews.Date}</p>
                  </span>
                </div>
                ))}
              </div>
          </div>
        </div>
      </div>

      <div className="Section_media_border_media">
        <div className="Section_media_border"></div>

        <div className="Section_media_with">

            <Tabs>
              <Tab onClick={handleClick} active={active === 0} id={0}>
                <p onClick={handleClick} active={active === 0} id={0}  className="the_p_size">Video</p>
              </Tab>
              <Tab onClick={handleClick} active={active === 1} id={1}>
                <p onClick={handleClick} active={active === 1} id={1}  className="the_p_size">Ảnh</p>
              </Tab>
              <Tab onClick={handleClick} active={active === 2} id={2}>
                <p onClick={handleClick} active={active === 2} id={2}  className="the_p_size">Khác</p>
              </Tab>
            </Tabs>

            <Content active={active === 0}>
              <div className="Section_media_all">
                <div className="ui1_section_media">
                {Video_iframe.map((Videosindex) => (
                <div className="Section_news_topic_map_klls" onClick={openModal}>
                  <div className="Section_media_topic_map_klls">
                    <div className="Section_media_img_div_s">
                      <img src={Videosindex.image_video} alt={Videosindex.title_video} className="Section_media_topic_map_data"/>
                    </div>
                    <p className="title_media"><BsFillPlayFill className="Section_media_img_div_s_icon_soze Section_media_img-aij"/></p>
                    <div className="overlay_media"></div>
                  </div>

                  <div className="Section_news_topic_map_sajn">
                    <h4 className="Section_news_topic_map_title">{Videosindex.title_video}</h4>
                    <div className="Video_news_img_div_p">
                     <span className="Video_news_img_div_p_sopl_s"><AiOutlineEye/><span className="Video_news_img_div_p_soplss">99 Views</span></span>
                     <p className="Hot_topics_news_images_date"><BiTimeFive/> {Videosindex.Date_video}</p>
                    </div>
                  </div>

                  {modal_popup ? (
                  <section className="modal__bg">
                    <div className="modal__align">
                      <div className="modal__content" modal={modal_popup}>
                        <MdClose
                          className="modal__close"
                          arial-label="Close modal"
                          onClick={setModal}
                        />
                        <div className="modal__video-align">
                          {videoLoading ? (
                            <div className="modal__spinner">
                              <BiLoaderAlt
                                className="modal__spinner-style"
                                fadeIn="none"
                              />
                            </div>
                          ) : null}
                          <iframe
                            className="modal__video-style"
                            onLoad={spinner}
                            loading="lazy"
                            width="800"
                            height="500"
                            src={Videosindex.Video_video}
                            title={Videosindex.title_video}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </section>
                ) : null}
                </div>
                ))}
                </div>
              </div>
            </Content>

            <Content active={active === 1}>
              <TabImage/>
            </Content>

            <Content active={active === 2}>
              <p>Tab khác</p>
            </Content>

          </div>
        </div>

  	</div>
  );
}

export default Section_media;
