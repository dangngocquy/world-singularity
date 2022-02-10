import Avatar from '../../Image/Avatar.png';
import Chatbox from './Chatbox/Chatbox';
import { Tabs, Tab, Content} from "./Tab/Tab";
import { useTranslation } from 'react-i18next';
import './Assistant.css';
import React, { useState } from 'react';
import Extra_section from './Extra_section';
import NewsSupport from './NewsSupport';

import AI from '../../Image/Assistant/ai.png';
import assistant from '../../Image/Assistant/assistant.png';
import record from '../../Image/Assistant/record.png';
import Avatars from '../../Image/User/none.png';
import Video from '../../Video/background.mp4';
import useModal from '../Modal/useModal';
import Modal from './Chatbox/Modal';
import "./Chatbox/Modal.css";

import { FaStarHalfAlt } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { BsMic, BsArrowRightShort } from 'react-icons/bs';
import { Footers, Logo_main } from '../../Component';
import Login_google_auth from '../../Component/Header/Login_google_auth/Login_google_auth';
const Assistant = function(props) {
const { t } = useTranslation()

const Box_question = [{
  id:1,
  img: AI,
  title: 'World Singularity',
  content: 'Tìm hiểu tất cả về World Singularity'
},
{
  id:2,
  img: assistant,
  title: 'Assistant Emmy',
  content: 'Các tính năng huấn luyện dữ liệu của World Singularity'
},
{
  id:3,
  img: record,
  title: 'Assistant voice',
  content: 'Tìm hiểu về cách thức nhận dạng giọng nói'
}]

const Question = [{
  id:1,
  question: 'Làm thế nào để huấn luyện AI',
  icon: <FaStarHalfAlt style={{color: 'rgb(17, 236, 229)'}}/>
},
{
  id:2,
  question: 'Cách truyền tải dữ liệu qua website',
  icon: <FaStarHalfAlt style={{color: 'rgb(17, 236, 229)'}}/>
},
{
  id:3,
  question: 'World Singularity là gì?',
  icon: <FaStarHalfAlt style={{color: 'rgb(17, 236, 229)'}}/>
},
{
  id:4,
  question: 'Tôi gặp lỗi',
  icon: <FaStarHalfAlt style={{color: 'rgb(17, 236, 229)'}}/>
},
{
  id:5,
  question: 'Bạn tên gì?',
  icon: <FaStarHalfAlt style={{color: 'rgb(17, 236, 229)'}}/>
},
{
  id:6,
  question: 'Tôi muốn dữ liệu',
  icon: <FaStarHalfAlt style={{color: 'rgb(17, 236, 229)'}}/>
}] 

const ALL_Question = [{
  id:1,
  question: 'Cấu hình hệ thống yêu cầu cho Assistant',
  icon: <RiQuestionnaireLine style={{color: 'rgb(17, 236, 229)'}} />
 },
 {
  id:2,
  question: 'Ghi chú phát hành World Singularity',
  icon: <RiQuestionnaireLine style={{color: 'rgb(17, 236, 229)'}} />
 },
 {
  id:3,
  question: 'Cài đặt AI Singularity',
  icon: <RiQuestionnaireLine style={{color: 'rgb(17, 236, 229)'}} />
 },
 {
  id:4,
  question: 'Dữ liệu đề suất',
  icon: <RiQuestionnaireLine style={{color: 'rgb(17, 236, 229)'}} />
 },
 {
  id:5,
  question: 'Huấn luyện AI thế nào?',
  icon: <RiQuestionnaireLine style={{color: 'rgb(17, 236, 229)'}} />
 }]
const [active, setActive] = useState(0);
const handleClick = e => {
const index = parseInt(e.target.id, 0);
  if (index !== active) {
    setActive(index);
  }
};
// Modal
  const [menuCollapse, setMenuCollapse] = useState(false)

  const menuIconClick = () => {

    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

const {isShowing, toggle} = useModal();

return (
    <div className="Assistant_background">
      <title>Assistant Support | WORLD SINGULARITY</title>

      <div className="Assistant_background_logo">
        <div className="Assistant_background_question_paddingdsmflecx">
          <Logo_main />
          <div className="Assistant_background_question_paddingnsja"></div>
          <a href="/Assistant/Support/"><p>Trung tâm hỗ trợ</p></a>
        </div>

        <div className="Assistant_background_question_padding_btn">
          <span className="Assistant_span_bacckground"><Login_google_auth/></span>
          <button className="Header_news_color Header_news_background_mobile gg_mobile">
           Tải xuống Assistant
          </button>
          <button className="Header_news_color Header_news_background_mobile gg_mobile">
           Khám phá vũ trụ
          </button>
        </div>
      </div>

      <div className="Assistant_span_bacckground2">
        <video
        autobuffer 
        loop 
        autoPlay 
        muted
        src={Video}
      ></video>

      <div class="content_vdeo">
        <h1>Xin chào, tôi có thể giúp gì cho bạn?</h1>
        <div className="Assistant_background_question_padding_center">
          <div className="Assistant_background_question_paddingcsl">
          <span className="Assistant_span_span_soa">
            <FiSearch className="Assistant_background_question_paddingcsl_sc"/>
            <input type="text" placeholder="Bạn muốn hỏi gì?" />
          </span>
          </div>
          <i className="Assistant_background_question_paddingI">Tus: Tìm kiếm thủ công hoặc lướt xuống để nhận hỗ trợ từ Emmy.</i>
        </div>
      </div>
        <div className="Background_news_home_assistant"></div>
      </div>

      <div className="path_assistant">
        <div className="Assistant_background_div">
          {Box_question.map(({img, title, content, id}) => (
          <div className="Assistant_div" key={id}>
            <img src={img} alt={title} className="Assistant_div_img"/>
            <h4>{title}</h4>
            <p>{content}</p>
          </div>
          ))}
        </div>
           
        <div className="Assistant_flex_pd">

          <span className="Assistant_span_bacckground_sp_fl_so">
            <h1 className="Assistant_h1">Chào mừng bạn đến với bộ phận hỗ trợ của World Singularity</h1>
            <i className="Assistant_flex_pd_po_i">Nhận hỗ trợ từ Emmy <BsArrowRightShort/></i>
          </span>
          <span className="Assistant_span_bacckground_sp_fl_spangk">
          <span className="Assistant_span_bacckground_sp_fl">
           <div className="Assistant_flex_pd_po">
             <p className="AI_color_1">Làm thế nào để tải dữ liệu về thiết bị?</p>
             <img src={Avatars} width="100%" className="Assistant_flex_pd_Assistant_imgk AI_img_1"/>
           </div>
           <div className="Assistant_flex_pd_po">
             <p className="AI_color_2">Tạo sao tôi không thể huấn luyện?</p>
             <img src={Avatars} width="100%" className="Assistant_flex_pd_Assistant_imgk AI_img_2"/>
           </div>
          </span>
          <span className="Assistant_span_bacckground_sp_flopa">
            <BsMic className="Assistant_flex_pd_Assistant" onClick={toggle}/>
            <Modal
              isShowing={isShowing}
              hide={toggle}
            />
          </span>
          <span className="Assistant_span_bacckground_sp_fl">
            <div className="Assistant_flex_pd_po">
             <img src={Avatars} width="100%" className="Assistant_flex_pd_Assistant_imgk AI_img_3"/>
             <p className="AI_color_3">Tính năng khám phá vũ trụ AI là gì?</p>
           </div>
           <div className="Assistant_flex_pd_po">
             <img src={Avatars} width="100%" className="Assistant_flex_pd_Assistant_imgk AI_img_4"/>
             <p className="AI_color_4">Tôi không biết sử dụng</p>
           </div>
          </span>
          </span>
        </div>
      </div>

      <NewsSupport/>
      <Extra_section/>
      <div className="Assistant_background_question_padding_back">
        <Footers/>
      </div>
    </div>
  )
}
export default Assistant;