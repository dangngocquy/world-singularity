import { Video_iframe } from '../../../../DataBase/Admin';

import React, { Component, useState } from "react";
import axios from "axios";
import { BsPlayCircle } from 'react-icons/bs';
import { AiFillDelete, AiFillEye, AiOutlineEdit } from 'react-icons/ai';

export default class BaiDang extends Component {

  state = {
    id: 0
  };

  handleChange = (e) => {
    this.setState({ id: e.target.value });
  };

  hanldeSubmit = (e) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:3001/Video_iframe/${this.state.id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  
  render() {
  return (

    <div>
    {Video_iframe.map(({image_video, title_video, Date_video, video_video, id}) => (
     <div className="VideoIframe_div">
      <div className="VideoIframe_div_all_vd BaiDang_img_fl">
        <div className="VideoIframe_div_a">
          <img src={image_video} alt={title_video} className="VideoIframe_div_img"/>
          <p className="title_media"><BsPlayCircle className="Section_media_img_div_s_icon_soze"/></p>
          <div className="overlay_media VideoIframe_div_all_vd_ov"></div>
        </div>
        
        <div className="VideoIframe_div_a_span8_o">
          <div className="VideoIframe_div_a_span8">
            <h3>{title_video}</h3>
            <p>Ngày đăng: {Date_video}</p>
          </div>
          
          <div className="VideoIframe_div_a_span8_oposm">
            <div className="VideoIframe_div_a_span8_opo">
               <AiFillEye/>
               Xem
            </div>

            <div className="VideoIframe_div_a_span8_opo">
               <AiOutlineEdit/>
               Chỉnh sửa
            </div>
      <form className="VideoIframe_div_a_span8_opo" onSubmit={this.hanldeSubmit}>
          <AiFillDelete/>
          <button type="submit" name={id} value={id} onClick={this.handleChange}>Xóa bài đăng</button>
      </form>
       </div>
        </div>
      </div>
     </div>
    ))}
    </div>
    );
  }
}
