import './Header.css';
import Logo from '../../../Image/logo-2.png';
import { Logo_main } from '../../../Component';
import { MdMailOutline } from 'react-icons/md';
import { useDetectOutsideClick } from "../../../Component/Dropdown/Dropdown";
import { BsBell } from 'react-icons/bs';
import Love from '../../../Image/User/none.png';
import { FiUser, FiSettings } from 'react-icons/fi';
import { useState } from 'react'
import { signIn } from '../../Authenticial/auth';
import LogoutButton from '../../Administrator/Container/Account/Admin_account/LogoutButton';
import { Link } from 'react-router-dom';
import LG from '../../../Image/logo-2.png';

function Header() {

const [toggleMenu_reponsive, setToggleMenu_reponsive] = useState(false);

const [user, setUser] = useState(null);
const authenticated = user != null;

const logout = () => setUser(null);

  return (
  	<div className="Header_admin_img_Background Font_text">
      <div className="Header_admin_img_Background_flex_okadsk">
        <span className="Header_admin_img_Background_fl_icon_skjm">
          <Logo_main/>
        </span>
        <a href="/" className="Header_admin_img_Background_fl_icon_skjmsn" target="_blank">
          <img src={LG} alt="logo" className="Header_admin_img_Backgroundsnkanaks"/>
        </a>
        <div className="Header_admin_img_Background_gach"></div>
        <Link to="/Administrator/Dashboard"><p className="Header_admin_img_Background_fl_icon_sijska">Bảng điều khiển Dashboard</p></Link>
      </div>
      <div className="Header_admin_img_Background_fl">
        <MdMailOutline className="Header_admin_img_Background_fl_icon"/>
        <BsBell className="Header_admin_img_Background_fl_icon"/>
          {toggleMenu_reponsive
          ? <img src={Love} alt="Avatar" className="Header_img" onClick={() => setToggleMenu_reponsive(false)}/>
          : <img src={Love} alt="Avatar" className="Header_img" onClick={() => setToggleMenu_reponsive(true)}/>
          }
          {toggleMenu_reponsive && (
           <div className="Mobile_extra_header_menu_user animation_extra">
              <div className="Header_img_p_p_menu">
                <p className="Header_img_p">Tài khoản</p>
                <p className="Header_img_p_p"><BsBell/>Thông báo</p>
                <p className="Header_img_p_p"><MdMailOutline/>Tin nhắn</p>
                <p className="Header_img_p1">Cài đặt</p>
                <Link to="/Administrator/Account/Profile">
                  <p className="Header_img_p_p"><FiUser/>Hồ sơ</p>
                </Link>
                <p className="Header_img_p_p"><FiSettings/>Cài đặt</p>
                <LogoutButton/>
               {/* {authenticated ? (
                  <LogoutButton logout={logout} />
                ) : (
                  <Link to="/Administrator/Authenticial/login">
                    <button>Login</button>
                  </Link>
                )}*/}
              </div>
           </div>
          )}

      </div>
  	</div>
  );
}

export default Header;
