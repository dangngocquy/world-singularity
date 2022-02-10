import React from 'react';
const Register_popup_thu = function(props) {
  return (
<div className="popupdangkybantin">
        <div className="popupdangkybantin-overlay popupdangkybantin-toggle" >
        <div className="popupdangkybantin-wrapper popupdangkybantin-transition">
          <div className="popupdangkybantin-body">
            <div className="popupdangkybantin-content">
              <div className="xuongdongfta">
                <div className="registration-form vvvx">
                  <div className="cui">Đăng ký nhận bản tin
                    <p>Sign up for the newsletter</p></div>
                  <div className="abcfs">
                    <div className="input-section password-section folded">
                      <input className="password" type="text" placeholder="Nhập Họ tên của bạn" />
                      <div className="animated-button">
                        <span className="icon-lock"><i className="fa fa-user" /></span>
                        <span className="next-button password"><i className="fa fa-arrow-up" /></span>
                      </div>
                    </div>
                    <div className="input-section email-section">
                      <input className="email" type="email" placeholder="Nhập email của bạn" autoComplete="off" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required="required" />
                      <div className="animated-button"><span className="icon-paper-plane"><i className="fa fa-envelope-o" /></span><span className="next-button email"><i className="fa fa-arrow-up" /></span></div>
                    </div>
                    <div className="input-section repeat-password-section folded">
                      <input className="repeat-password" placeholder="Nhập nội dung" />
                      <div className="animated-button"><span className="icon-repeat-lock"><i className="fa fa-book" /></span><span className="next-button repeat-password"><i className="fa fa-paper-plane" /></span></div>
                    </div>
                    <p className="thanhconga vanbansq">Bạn sẽ sớm nhận được thông tin phản hồi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Register_popup_thu;