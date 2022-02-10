import React from 'react';
import { BsChevronExpand } from 'react-icons/bs';
import { useState } from 'react';
import { VscAccount, VscClose } from 'react-icons/vsc';
import { Home, Tinh_nang_dac_diem, Blog, Ho_tro } from '../Data/Data';
import { Link } from 'react-router-dom';

function Mobile_header() {
// Mobile
const [toggleMenu_reponsive, setToggleMenu_reponsive] = useState(false);
  return (
  	<div>
      {/*Mobile*/}
      <div className="gpt3__navbar-menu">
        {toggleMenu_reponsive
          ? <VscClose color="rgb(146, 171, 207)" size={27} onClick={() => setToggleMenu_reponsive(false)} />
          : <BsChevronExpand color="rgb(146, 171, 207)" size={27} onClick={() => setToggleMenu_reponsive(true)} />}
        {toggleMenu_reponsive && (
        <div className="gpt3__navbar-menu_container scale-up-center Mobile_header_color_hover">
          <div className="Mobile_header_color">
            {Home.map(({ link, name, id}) => (
            <p key={id}><a href={link}>{name}</a></p>
            ))}
            {Tinh_nang_dac_diem.map(({ id, link, name, icon, toggle_name_1, toggle_name_2, toggle_name_3, toggle_name_4, toggle_name_5, toggle_name_6}) => (
            <div key={id}>
              <p><a href={link}>{name}</a></p>
              <p><a href={link} className="Mobile_header_dropdown">{toggle_name_1}</a></p>
              <p><a href={link} className="Mobile_header_dropdown">{toggle_name_2}</a></p>
              <p><a href={link} className="Mobile_header_dropdown">{toggle_name_3}</a></p>
              <p><a href={link} className="Mobile_header_dropdown">{toggle_name_4}</a></p>
              <p><a href={link} className="Mobile_header_dropdown">{toggle_name_5}</a></p>
              <p><a href={link} className="Mobile_header_dropdown">{toggle_name_6}</a></p>
            </div>
            ))}
            {Blog.map(({ id, link, name, icon, toggle_name_1, toggle_name_2, toggle_name_3, toggle_name_4, toggle_name_5, toggle_link}) => (
            <div key={id}>
              <p><a href={link}>{name}</a></p>
              <p><a href={toggle_link} className="Mobile_header_dropdown">{toggle_name_1}</a></p>
              <p><a href={link} className="Mobile_header_dropdown">{toggle_name_2}</a></p>
              <p><a href={link} className="Mobile_header_dropdown">{toggle_name_3}</a></p>
              <p><a href={link} className="Mobile_header_dropdown">{toggle_name_4}</a></p>
            </div>
            ))}
            {Ho_tro.map(({ id, link, name}) => (
            <p key={id}><a href={link}>{name}</a></p>
            ))}
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <div className="login_google">
              <button className="Mobile_header_color_login">
                <VscAccount />
                <Link to="/Login/" className="Mobile_header_dropdown_color">Đăng Nhập</Link>
              </button>
            </div>
          </div>
        </div>
        )}
      </div>
  	</div>
  );
}

export default Mobile_header;
