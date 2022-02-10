import './Video_news.css';
import { Video_iframe } from '../../../../DataBase/Admin';
import { IoCloseOutline } from "react-icons/io5";
import { BsPlayCircle } from 'react-icons/bs';
import { BiLoaderAlt, BiTimeFive } from "react-icons/bi";
import { AiOutlineEye } from 'react-icons/ai';
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

function Video_news() {

// modal iframe youtube
const [modal_popup_video, setModal_video] = useState(false);
const [Loding_video, setLoding_video] = useState(true);

const openModal_video = () => {
  setModal_video(!modal_popup_video);
};

const spinner_video = () => {
  setLoding_video(!Loding_video);
};
  return (
  	<div className="Video_news_h2_flex_all">
      <h2 className="Video_news_h2">Video đề xuất</h2>
      {Video_iframe.slice(Video_iframe.length - 3).map((Videos) => (
        <div className="Video_news_img_div_flex" onClick={openModal_video}>
          <div className="Section_media_topic_map_klls section_media_im">
            <div className="Section_media_topic_map_klls_imgs">
              <img src={Videos.image_video} alt={Videos.title_video} className="Video_news_img"/>
            </div>
            <p className="title_media"><BsPlayCircle className="Section_media_img_div_s_icon_soze"/></p>
            <div className="overlay_media overlay_media_impotant"></div>
          </div>

          <span className="Video_news_img_div_p_sopl">
            <div className="Video_news_img_div_p">
             <span className="Video_news_img_div_p_sopl_s"><AiOutlineEye/><span className="Video_news_img_div_p_soplss">999 Views</span></span>
             <p className="Hot_topics_news_images_date"><BiTimeFive/> {Videos.Date_video}</p>
            </div>

            <h4 className="Video_news_color1_h4">{Videos.title_video}</h4>
          </span>

          {modal_popup_video ? (
                  <section className="modal__bg">
                    <div className="modal__align">
                      <div className="modal__content" modal={modal_popup_video}>
                        <IoCloseOutline
                          className="modal__close"
                          arial-label="Close modal"
                          onClick={setModal_video}
                        />
                        <div className="modal__video-align">

                          {Loding_video ? (
                            <div className="modal__spinner">
                              <BiLoaderAlt
                                className="modal__spinner-style"
                                fadeIn="none"
                              />
                            </div>
                          ) : null}

                          <iframe
                            className="modal__video-style"
                            onLoad={spinner_video}
                            loading="lazy"
                            width="800"
                            height="500"
                            src={Videos.Video_video}
                            title={Videos.title_video}
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
       <button className="Video_news_button">Xem tất cả</button>
  	</div>
  );
}

export default Video_news;
