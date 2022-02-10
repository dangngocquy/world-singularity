import './Comments_news.css';
import { RiGitRepositoryPrivateFill, RiChat3Line, RiBold, RiItalic, RiDoubleQuotesL } from 'react-icons/ri';
import { GoPrimitiveDot } from 'react-icons/go';
import { FiChevronDown } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { MdLocalOffer, MdFormatUnderlined } from 'react-icons/md';
import { BsQuestionCircle, BsCalendar2Date, BsImage, BsLink45Deg, BsCodeSlash } from 'react-icons/bs';
import React, { useState, useLocation } from "react";
import Axios from 'axios';
import { user, comments } from '../../../../DataBase/Admin.json';
import Readnews from '../../Container/Readnews';

import User from '../../../../../Image/User/none.png';
import Google from '../../../../../Image/icon/gg.svg';

function Comments_news() {

const url = "http://localhost:3001/comments"

const [data, SetData] = useState({
 "CM":"",
 "time": ""
})

function submit(e){
  e.preventDefault();
  Axios.post(url,{
    "CM": data.CM,
    "time": data.time
  })
  .then(res=>{
    console.log(res.data)
  })
}

function handle(e){
  const newdata={...data}
  newdata[e.target.id] = e.target.value
  SetData(newdata)
  console.log(newdata)
}

const Dem = JSON.parse(JSON.stringify(comments)).length;

const Time_show = new Date().toLocaleTimeString();
  return (
  <div>
  	<div className="Comments_news_div_flex">
       <span className="Comments_news_flex">
         <p><b>{Dem} Bình luận</b></p>
         <p><b>Top comment</b></p>
         <p><b className="Comments_news_flex_b"><RiGitRepositoryPrivateFill />Chính sách bảo mật</b></p>
       </span>

       <span className="Comments_news_flex_login">
         <p><b className="Comments_news_flex_b">Đăng nhập<FiChevronDown /></b></p>
       </span>
  	</div>

    <div>
      <p className="Comments_news_flex_b_p"><b className="Comments_news_flex_bs">Sắp xếp theo bình luận hay nhất<FiChevronDown /></b></p>
    </div>


        <div className="Comments_news_div_flex_border_neswscm">
          {comments.map((Readnews, id) => (
          <div className="Comments_news_div_flex_img_commetnt_flex" key={id}>
            <div className="Comments_news_div_flex_img_commetnt"></div>
              <div className="Comments_news_div_flex_img_commetnt_flex_user">
                <div className="Comments_news_div_flex_img">
                  <img src={User} alt="Avatar" className="Comments_news_avatar"/>
                </div>
              <span className="Comments_news_flex_login_span">
                <font className="Comments_news_flex_login_span_font">
                  <b>Đặng Ngọc Quý</b>
                  <GoPrimitiveDot className="Comments_news_flex_login_span_icon"/>
                  <p>vừa xong</p>
                </font>
                  <p className="Comments_news_flex_b_p_chat">{Readnews.CM}</p>
                <b className="Comments_news_flex_b_share">
                  <p>Sửa</p>
                  <p>Trả lời</p>
                  <p>Chia sẻ</p>
                </b>
              </span>
              </div>
          </div>
          ))}
    </div>

    <span className="Comments_news_flex_login_offer">
      <MdLocalOffer className="Comments_news_icon2" />
      <font className="Comments_news_flex_login_span_font_a">
        <p><p>Dưới đây là các câu trả lời được đề xuất.</p>
        <a href="#/">Xem tất cả câu trả lời được đề xuất</a></p>

        <div className="Comments_news_div_flex_flex-wrap">
          <button><RiChat3Line className="Comments_news_flex_b_icons"/>Ok nha</button>
          <button><BsQuestionCircle className="Comments_news_flex_b_icons"/>Là sao?</button>
          <button><BsCalendar2Date className="Comments_news_flex_b_icons"/>Hài hước ghê</button>
        </div>
      </font>
    </span>

    <div className="Comments_news_div_flex_border_user">
      <div className="Comments_news_div_flex_border_user_img">
        <img src={User} alt="User" className="Comments_news_avatar"/>
      </div>
      
      <div className="Comments_news_div_flex_border_user_flexbox">
        <form onSubmit={(e)=> submit(e)} className="Comments_news_div_flex_border_margin_top">
          <textarea maxLength={150} value={data.CM} onChange={(e)=> handle(e)} id="CM" placeholder="Nhập bình luận..." rows="7" cols="40" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true" className="Comments_news_flex_b_icons_textarea" required="required"></textarea>

          <div className="Comments_news_div_flex_border_flex_row">
            <span className="Comments_news_flex_login_tien_ich">
              <BsImage className="Comments_news_flex_login_tien_ich_icon"/>
              <div className="Comments_news_div_flex_border"></div>
              <RiBold className="Comments_news_flex_login_tien_ich_icon"/>
              <RiItalic className="Comments_news_flex_login_tien_ich_icon"/>
              <MdFormatUnderlined className="Comments_news_flex_login_tien_ich_icon"/>
              <div className="Comments_news_div_flex_border"></div>
              <BsLink45Deg className="Comments_news_flex_login_tien_ich_icon"/>
              <BsCodeSlash className="Comments_news_flex_login_tien_ich_icon"/>
              <RiDoubleQuotesL className="Comments_news_flex_login_tien_ich_icon"/>
            </span>

            <button>Bình luận</button>
          </div>

        </form>

        <div className="Comments_news_flex_login_tien_ich_icon_comments">
          <span>Vui lòng đăng nhập để bình luận</span>
          <div className="Comments_news_div_flex_border_button">
            <button className="Comments_news_flex_login_tien_ich_icon_login">
              <img src={Google} alt="Google" with="100%"/>
            </button>
            <button className="Comments_news_flex_login_tien_ich_icon_login ascooment">
              <FaFacebookF className="Comments_news_flex_login_tien_ich_icon_iconssc"/>
            </button>
          </div>
        </div>
      </div>

    </div>

  </div>
  );
}

export default Comments_news;
