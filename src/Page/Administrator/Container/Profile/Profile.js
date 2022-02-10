import './Profile.css';
import Dashboard from '../dashboard/container/Dashboard';
import Header from '../../Header/Header';
import { AiFillDelete } from 'react-icons/ai';
import hinhanh from '../../../../Image/User/none.png';
import { useState } from 'react';

function Profile({ NguoiDung }) {
  const { email, password, name, birthday, phone } = NguoiDung || {};

  //toggle
  const [toggleMenu, setToggleMenu] = useState(false);
  const onClick = () => {
    if (toggleMenu === false) setToggleMenu(true);
    else setToggleMenu(false);
  };
  return (
    <>
      <title>{name} - Hồ sơ cá nhân | WORLD SINGULARITY</title>
       <div className="BaiDang_max_w_all_fl Font_text ">

        <div className="HomeDashboard_all_grids">
         <span className="DB1">
            <Dashboard/>
          </span>

          <div className="TEsthgb">
          <span className="DB2">
            <Header/>
          </span>


              <span className="DB3">
                <div className="Profile_div">
                  <h1 className="Profile_h1">Hồ sơ cá nhân</h1>
                  <div className="Profile_div_column">
                    <span className="Profile_p_b_span_100">
                      <p className="Profile_p">Cập nhật và chỉnh sửa hồ sơ cá nhân</p>

                      <div className="Profile_div_b">
                        <b className="Profile_p_b">Cập nhật hình ảnh hồ sơ cá nhân</b>
                        <span className="Profile_p_b_span">
                          <img src={hinhanh} alt={"Avatar" + name} />
                          <div className="Profile_div_b_div_fl">
                            <button className="Profile_div_b_div_fl_btn1">Thay đổi ảnh đại diện</button>
                            <button className="Profile_div_b_div_fl_btn2"><AiFillDelete style={{color: 'rgb(17, 236, 229)'}}/>Xóa ảnh đại diện</button>
                          </div>
                        </span>
                        <i className="Profile_div_b_div_fl_btn2_i">Vui lòng tải hình ảnh có kích thước 140px x 140px.</i>
                      </div>

                  </span>
                    <div className="Profile_div_dlex_flprofile">
                        <b>Họ và tên</b>
                        <input type="text" value={name}/>
                        <b>Ngày sinh</b>
                        <input type="text" value={birthday}/>
                        <b>Địa chỉ email</b>
                        <span className="Profile_p_b_span_100btn">
                          <input type="text" value={email} disabled/>
                          <span className="Profile_p_b_span_100btn2"><button>Cập nhật</button></span>
                        </span>
                        <b>Số điện thoại</b>
                        <span className="Profile_p_b_span_100btn">
                          <input type="text" value={phone} disabled/>
                          <span className="Profile_p_b_span_100btn2"><button>Cập nhật</button></span>
                        </span>
                        <p onClick={onClick} className="Profile_change">
                          <label className="switch_admin" for="checkbox_seven">
                          <input
                              type="checkbox"
                              className="input_admin" 
                            />
                            <div className="slider_admin round_admins"></div>
                          </label>
                          Thay đổi mật khẩu hiện tại
                        </p>
                        {toggleMenu ? <span className="Admin_animation"> 
                            <b className="Profile_div_bui">Mật khẩu cũ</b>
                            <input type="text" value={password}/>
                            <b className="Profile_div_bui">Mật khẩu mới</b>
                            <input type="text" placeholder="Nhập mật khẩu mới"/>
                          </span> : null}
                        <span className="Profile_p_b_span_100btn_btn">
                          <button className="Profile_div_b_div_fl_btn1_change1">Lưu</button>
                          <button className="Profile_div_b_div_fl_btn1_change2">Hủy</button>
                        </span>
                    </div>
                  <span>
                  </span>
                </div>
              </div>
          </span>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
