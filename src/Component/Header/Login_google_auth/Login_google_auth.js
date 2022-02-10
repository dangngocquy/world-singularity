import { GoogleLogin, GoogleLogout } from "react-google-login";
import React, { useState, useRef, useEffect } from "react";
import './Login_google_auth.css';
import '../Profile/Profile.css';
import '../Modal_login/Modal_login.css';
import { useDetectOutsideClick } from "../../Dropdown/Dropdown";
import useModal from "../../Modals/useModal";
import { useTranslation } from 'react-i18next';
import $ from 'jquery';

import { GrFacebookOption, GrInstagram, GrTwitter } from "react-icons/gr";
import { MdContentCopy, MdHelpOutline } from "react-icons/md";
import { FiPhone, FiEdit, FiMail, FiLogOut } from "react-icons/fi";
import { FaMapMarkedAlt, FaRegCommentAlt } from "react-icons/fa";
import { CgArrowTopRightO, RiHeartAddLine } from "react-icons/cg";
import { GiCardExchange } from "react-icons/gi";
import { BiChevronRight } from 'react-icons/bi'
import { AiOutlineSetting } from "react-icons/ai";
import { ImAccessibility } from "react-icons/im";
import { IoIosArrowDropright, IoMdNotificationsOutline } from "react-icons/io";
import { BsHeart } from "react-icons/bs";
import { VscActivateBreakpoints, VscAccount } from "react-icons/vsc";
import { API } from './API';
import { arrow } from '../image';

const Login_google_auth = () => {

const { t } = useTranslation();

const [CLIEN_LOGIN_GOOGLE] = API();

//login logout with google
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [url, setUrl] = useState("");
const [familyName, setfamilyName] = useState("");
const [givenName, setgivenName] = useState("");

const [loginStatus, setLoginStatus] = useState(false);
const [token, setoken] = useState("");

const responseGoogle = response => {
console.log(response);
setName(response.profileObj.name);
setEmail(response.profileObj.email);
setUrl(response.profileObj.imageUrl);
setfamilyName(response.profileObj.familyName);
setgivenName(response.profileObj.givenName);
setLoginStatus(true);
};

const logout = () => {
alert("Đăng xuất thành công");
console.log("logout");
setLoginStatus(false);
};
//kết thúc login google

//profile
const buttons_profile = document.querySelectorAll(".the_profile-buttons button");
const sections = document.querySelectorAll(".the_profile-section");
const the_profile = document.querySelector(".the_profile");

const handleButtonClick = e_profile => {
const targetSection = e_profile.target.getAttribute("data-section");
const section_profile = document.querySelector(targetSection);
targetSection !== "#about" ?
the_profile.classList.add("gjim_profile") :
the_profile.classList.remove("gjim_profile");
the_profile.setAttribute("data-state", targetSection);
sections.forEach(s => s.classList.remove("gjim_profile"));
buttons_profile.forEach(b => b.classList.remove("gjim_profile"));
e_profile.target.classList.add("gjim_profile");
section_profile.classList.add("gjim_profile");
};

buttons_profile.forEach(btn_profile => {
  btn_profile.addEventListener("click", handleButtonClick);
});
//kết thúc profile

//onclick modal profile
const dropdownRef = useRef(null);
const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
const onClick = () => setIsActive(!isActive);

const [activemenu, setactivemenu] = useDetectOutsideClick(dropdownRef, false);

//kết thúc onclick modal profile

const ImagesGoogle = <img className="the_profile-avatar" src={url} alt={t('alt_img') + "'" + "Avatar" + "'"} />
const ImagesGoogletwo = <img src={url} alt={t('alt_img') + "'" + "Avatar" + "'"} className="botronpr" /> 

//Modal
const { Modal, isShow, toggle } = useModal({
    // showClose: false,
    // clickOutsideToHide: true,
    onShow: () => {
      console.log("Show");
    },
    onHide: () => {
      console.log("Hide");
    }
  });

// check checkbox
const [boxes, setBoxes] = useState([]);
  function handleChange(e) {

    const { parentNode: { children } } = e.target;

    const index = [...children].indexOf(e.target);

    const newState = [...boxes];

    newState[index] = !newState[index];

    setBoxes(newState);
  }

  function isDisabled() {
    const len = boxes.filter(box => box).length;
    return len === 0 || len > 1;
  }

  return (
    <div className="Font_text">

      {!loginStatus && (
      <GoogleLogin
        render={renderProps => (
      <div className="Assistant_icon_divo">
{/*Sign_up_log_in_phu*/}
      <div className="Login_google_auth_mobile">
        <button className="text_h dangnhapnhanh-toggle" data-tip data-for="login" onClick={toggle}>
          <span className="khsd">Login</span>
          <VscAccount />
        </button>
      </div>

      <Modal>
          <main className="vbt">
            <section className="dkcs">
              <div className="dkcs__heading ggt">
                <h2>{t('extra')}</h2>
              </div>

              <div className="dkcs__content">
                <center>
                  <h2 className="mauchu">{t('Term')}</h2>
                </center>
                <p className="cansangtrai">{t('Term_content')}</p>
              </div>

              <div className="dkcs__nav">

              <small>
                <i  className="Login_google_color">{t('OK')}</i>
              </small>

              <form>
                <div className="klg-group">
                  <input type="checkbox" id="ok" onChange={handleChange}/>
                  <label for="ok">{t('Accept')}</label>
                </div>
              </form>
              
              </div>
            </section>
          </main>

          <div className="cachnhutlg chia_lgt">
            <button type="button" className="login-with-google-btn" onClick={renderProps.onClick} disabled={isDisabled()} >{t('gg')}</button>

            <button type="button" className="login-with-facebook-btn" disabled>{t('fb')} (Look)</button>
          </div>
      </Modal>
{/*kết thúc Sign_up_log_in_phu*/}
</div>               
        )}
              clientId={CLIEN_LOGIN_GOOGLE}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
              responseType='code,token'
            />
          )}
                

                      {loginStatus && (
                      <div className="loginStatus_button">
  {/*Profile_login*/}
  
                     <div className="login_profile containeru" data-tip data-for="Proflie_hoso" onClick={onClick}>
                          <button className="btnu" onClick={() => setactivemenu(!activemenu)} className={activemenu ? "btnuactive" : "btnu"}>

                            {ImagesGoogletwo}

                            <span className="btnui">{familyName} {givenName}</span>
                            
                          </button>
                      </div>
  {/*Profile*/}
              <div className="menu-containerl">
                <nav
                  ref={dropdownRef}
                  className={`menul ${isActive ? "activel" : "inactive"}`}
                >

               {/*runprofile*/}
                <div className="the_profile" data-state="#about">

                      <div className="donkihotel">
                          <IoMdNotificationsOutline />
                      </div>

                    <div className="the_profile-header">
                      <div className="the_profile-cover"></div>
                      
                        {ImagesGoogle}

                      <h1 className="the_profile-fullname">{familyName} {givenName}</h1>

                      <h2 className="the_profile-jobtitle">
                          <span className="Login_google_color_btn Font_text">
                            {t('Trang huấn luyện')}
                            <CgArrowTopRightO className="linkhj"/>
                          </span>
                      </h2>
                    </div>

                    <div className="the_profile-main">
                      <div className="the_profile-section gjim_profile" id="about">

                    <div className="the_profile-content">
                      <div className="the_profile-subtitle">{t('GIỚI THIỆU')}</div>
                      <p className="the_profile-desc">
                        <span>{t('up')}</span>
                        <FiEdit className="ggyusaae"/>
                      </p>
                    </div>

                    <div className="the_profile-social">
                      <a href="#/" className="Facebook_profile">
                        <GrFacebookOption />
                      </a>

                      <a href="#/" className="Twitter_profile">
                        <GrTwitter />
                      </a>
                      <a href="#/" className="Instagram_profile">
                        <GrInstagram />
                      </a>
                      <a href="#/" className="MdContentCopy_profile">
                        <MdContentCopy />
                      </a>
                    </div>
                    
                </div>

                <div className="the_profile-section" id="experience">
                  {/*<div className="Login_google_auth_mobile_bgr"></div>*/}
                  <div className="the_profile-content">
                    <button className="chiaallmenu">
                      < GiCardExchange className="ggprlid"/>
                      <span className="Login_google_color_btn_Op">
                        <font>{t('Chuyển đổi tài khoản')}</font>
                        <BiChevronRight className="Login_google_color_btn_Op_icon"/>
                      </span>
                    </button>

                    <button className="chiaallmenu">
                      < AiOutlineSetting className="ggprlid"/>
                      <span className="Login_google_color_btn_Op">
                        <font style={{textAlign: 'left'}}>{t('Cài đặt trang cá nhân')}</font>
                        <BiChevronRight className="Login_google_color_btn_Op_icon"/>
                      </span>
                    </button>

                    <button className="chiaallmenu">
                      < MdHelpOutline className="ggprlid"/>
                      <span className="Login_google_color_btn_Op">
                        <font style={{textAlign: 'left'}}>{t('help')}</font>
                        <BiChevronRight className="Login_google_color_btn_Op_icon"/>
                      </span>
                    </button>

                    <button className="chiaallmenu">
                      < ImAccessibility className="ggprlid"/>
                      <span className="Login_google_color_btn_Op">
                        <font style={{textAlign: 'left'}} >{t('Tiện ích & trợ năng')}</font>
                        <BiChevronRight className="Login_google_color_btn_Op_icon"/>
                      </span>
                    </button>

                    <div className="Login_google_auth_mobile_bgr1"></div>

                    <div className="the_profile-subtitle tt_profile">{t('Lịch sử huấn luyện bằng dữ liệu')}</div>
                    <div className="the_profile-timeline">
                      <div className="the_profile-item" data-year="2:32">
                        <div className="the_profile-item-title">{t('Bạn đã huấn luyện')} {t('tính cách')}</div>
                        <div className="the_profile-item-desc">{t('Xem toàn bộ lịch sử')}<IoIosArrowDropright className="nguyenprofile"/></div>
                      </div>
                      <div className="the_profile-item" data-year="14:32">
                        <div className="the_profile-item-title">{t('Bạn đã huấn luyện')} {t('bộ não')}</div>
                        <div className="the_profile-item-desc">{t('Xem toàn bộ lịch sử')}<IoIosArrowDropright className="nguyenprofile"/></div>
                      </div>
                      <div className="the_profile-item" data-year="11:26">
                        <div className="the_profile-item-title">{t('Bạn đã truyền dữ liệu')}</div>
                        <div className="the_profile-item-desc">{t('Xem toàn bộ lịch sử')}<IoIosArrowDropright className="nguyenprofile"/></div>
                      </div>
                      <div className="the_profile-item" data-year="13:30">
                        <div className="the_profile-item-title">{t('Bạn đã huấn luyện')} {t('sở thích')}</div>
                        <div className="the_profile-item-desc">{t('Xem toàn bộ lịch sử')}<IoIosArrowDropright className="nguyenprofile"/></div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="the_profile-section" id="lh_profile">
                  <div className="the_profile-content">
                    <div className="the_profile-subtitle">{t('Thông tin liên hệ')}</div>
                    <div className="the_profile-lh_profile-wrapper">
                      <div className="the_profile-lh_profile">
                        <FaMapMarkedAlt />
                          <span>123 abc, Quận Gò Vấp, TP.HCM</span>
                      </div>
                      <div className="the_profile-lh_profile">
                        <FiPhone /><span>(+84) 886xxxx</span></div>
                      <div className="the_profile-lh_profile">
                        <FiMail />
                        <span>{email}</span>
                      </div>

                      <button className="lh_profile-me">
                        <span>
                          <p className="Login_google_color_btn_Op_profile">{t('Chỉnh sửa thông tin cá nhân')}</p>
                        </span>

                        <span>
                          <FiEdit />
                        </span>
                      </button>

                    </div>
                  </div>
                </div>
                <div className="the_profile-buttons">
                  <button data-section="#about" className="gjim_profile" className="chu_profile">{t('CÁ NHÂN')}</button>
                  <button data-section="#experience" className="chu_profile">{t('Setting')}</button>
                  <button data-section="#lh_profile" className="chu_profile">{t('THÔNG TIN')}</button>

                  <GoogleLogout
                    render={renderProps => (
                      <a href="#" onClick={renderProps.onClick} disabled={renderProps.disabled} className="donkihote">
                          <FiLogOut />
                      </a>
                     )}
                    clientId={CLIEN_LOGIN_GOOGLE}
                    onLogoutSuccess={logout}
                    />
                </div>
              </div>
            </div>
            {/*runprofile*/}
                          
              </nav>

  {/*Profile*/}
          </div>
  {/*kết thúc profile_login*/}
        </div>
      )}
  {/*kết thúc Login_with_google*/}
    </div>
  );
};

export default Login_google_auth;
