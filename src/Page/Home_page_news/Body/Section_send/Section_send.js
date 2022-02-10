import React from "react";
import ReactDOM from "react-dom";
import './Section_send.css';
function Section_send() {
  return (
  	<div className="Section_send_background">
      <h4 className="Section_send_h4">Tin tức. Hướng dẫn. Xu hướng. Và nhiều hơn thế. Gửi thông tin về mail của bạn hàng tuần</h4>
      <div className="Section_send_flex">
        <div className="gpt3__header-content__input">
          <input type="email" 
          placeholder="Đăng ký nhận tin tức mới nhất" />
          <button type="button">Theo dõi</button>
        </div>
        <p className="Section_send_p">Bằng cách nhấp vào theo dõi, tôi đồng ý nhận thông tin cập nhật hàng tuần từ Blog World Singularity</p>
      </div>
  	</div>
  );
}

export default Section_send;
