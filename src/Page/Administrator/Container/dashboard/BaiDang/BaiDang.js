import './BaiDang.css';
import { user } from '../../../../DataBase/Admin';
import { AiOutlineBarChart, AiOutlineEdit } from 'react-icons/ai';
import { BiCommentDetail } from "react-icons/bi";
import { MdDelete } from 'react-icons/md';
import { BsFillEyeFill } from 'react-icons/bs';
import Header from '../../../Header/Header';
import Dashboard from '../container/Dashboard';
import { Link } from 'react-router-dom';
import Readnews from '../../../../Home_page_news/Read_news/Container/Readnews';

import React, { Component, useState } from "react";
import axios from "axios";

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
      .delete(`http://localhost:3001/user/${this.state.id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  
// show hide function
  constructor(props) {
    super(props);
    this.state = { showDialog: false };
  }

  showhide_function = () => {
    this.setState((prevState) => {
      return { showDialog: !prevState.showDialog };
    });
  };

  render() {
  const Dem = JSON.parse(JSON.stringify(user)).length;

  return (

    <div className="BaiDang_max_w_all_fl Font_text HomeDashboard_all_grids">
    <title> Tin tức - Quản lý bài đăng | WORLD SINGULARITY</title>

      <span className="DB1">
        <Dashboard/>
      </span>

     <div className="TEsthgb">      
          <span className="DB2">
            <Header/>
          </span>
      
      <span className="BD3">
          <div className="BaiDang_max_w_o">
            <div className="BaiDang_max_w">
              <div className="BaiDang_max_w_abc">
                <select className="BaiDang_max_w_select">
                  <option>Tất cả bài đăng ({Dem})</option>
                </select>
                {this.state.showDialog ? 
                  <div hideMe={this.showhide_function}  className="BaiDang_max_w_abc_sl">
                    <label className="switch_admin">
                      <input type="checkbox" className="input_admin" />
                      <div className="slider_admin round_admins"></div>
                    </label>
                      <MdDelete/>
                      <p>Xóa tất cả</p>
                   
                  </div>
                :
                null} 

                {this.state.showDialog ? 
                  <button onClick={this.showhide_function} className="BaiDang_max_w_abc_sl_abc">Hủy</button>
                  : 
                  <button onClick={this.showhide_function} className="BaiDang_max_w_abc_sl_abc">Quản lý</button>
                }
              </div>


               {user.map((Readnews) => (
              <div className="BaiDang_img_fl">
                <img src={Readnews.link_images} alt={Readnews.title} className="BaiDang_img"/>
                <span>
                    <div className="BaiDang_img_fl_phu_sl_5">
                      <h3>{Readnews.title}</h3>
                      <p>Được đăng vào: {Readnews.Date}</p>
                    </div>
                    
                    <div className="BaiDang_img_fl_phu_sl_sk">
                      <div className="BaiDang_img_fl_1">
                        <div className="BaiDang_img_fl_phu_sl">
                          <BsFillEyeFill/>
                          <Link
                                to={{
                                      pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                                      state: { Readnews } 
                                    }}
                              >Xem bài đăng</Link>
                        </div>

                        <div className="BaiDang_img_fl_phu_sl">
                          <AiOutlineEdit/>
                          <a href="/#" target="_blank">Chỉnh sửa</a>
                        </div>

                        <form className="BaiDang_img_fl_phu_sl" onSubmit={this.hanldeSubmit}>
                            <MdDelete/>
                            <button type="submit" name={Readnews.id} value={Readnews.id} onClick={this.handleChange}>Xóa bài đăng</button>
                        </form>

                      </div>

                      <div className="BaiDang_img_fl_1l">
                        <div className="BaiDang_img_fl_phu_sl">
                          <AiOutlineBarChart/>
                          <p>Số lượt xem</p>
                        </div>
                        <div className="BaiDang_img_fl_phu_sl">
                          <BiCommentDetail/>
                          <p>Số bình luận</p>
                        </div>
                      </div>
                    </div>
                </span>
              </div>
              ))}
            </div>
          </div>
        </span>
        </div>
      </div>
    );
  }
}
