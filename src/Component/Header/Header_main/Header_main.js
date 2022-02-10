import Logo_main from '../../Logo_main/Logo_main';
import $ from 'jquery';
import React from 'react';
import ReactDOM from "react-dom";
import Menu_dropdown from '../Menu_dropdown/Menu_dropdown';
import Menulevel from '../Menu_level/Menulevel';
import Mobile_header from '../Mobile/Mobile_header';
import './Header_main.css';
import Language_option from '../Language_option/Language_option';
import Login_google_auth from '../Login_google_auth/Login_google_auth';
import { CgMenuRightAlt } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { BiCategoryAlt } from 'react-icons/bi';
import { viet_nam, tieng_anh, tieng_nhat, RB } from '../image';
import { useRef } from 'react';
import { Close, Time_out } from '../Menu_level/Data/Datamenulevel';
import { useDetectOutsideClick } from "../../Dropdown/Dropdown";
import SearchMenuLevel from '../Menu_level/SearchMenuLevel';

function Header_main(props)  {

$(window).scroll(function(){
    if ($(window).scrollTop() > 0) {
        $('.abcg').addClass('hdfl');
        $('.abcg').addClass('vitieude');
        $('.abcg').addClass("activemenu");
    }
    else {
        $('.abcg').removeClass('hdfl');
        $('.abcg').removeClass('vitieude');
        $('.abcg').removeClass("activemenu");
    }
});

const dropdownRef = useRef(null);
const [sidebar, setSidebar] = useDetectOutsideClick(dropdownRef, false);
const onClick = () => setSidebar(!sidebar);


const showSidebar = () => setSidebar(!sidebar);
const { t } = useTranslation();

const releaseDate = new Date('2021-09-03')
const timeDifference = new Date() - releaseDate
const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))


//date
var now = new Date();
const days = ['day_1','day_2','day_3','day_4','day_5','day_6','day_7'];
const dayName = days[now.getDay()];
const Date_show = new Date().toLocaleDateString();
const Time_show = new Date().toLocaleTimeString();

  return (
    <div className="Font_text">
      <Mobile_header />
        <nav className="abcg rc_nav">
            <span className="Header_main_right_flex">

              <div className="ghv">
                 
                <span className="Header_main_right">
                  <Logo_main />
                </span>

                <Menu_dropdown/>

              </div>
                
                <div className="chiup">

                  <Language_option />
                  
                  <Login_google_auth />            

                  <CgMenuRightAlt className="Header_main_NAVbar" onClick={showSidebar}/>      
                
                </div>
            </span>
        </nav>

          <div className={sidebar ? 'OverlayMNLV' : null} onClick={showSidebar}></div>
          <aside className={sidebar ? 'Menulevelio activeMNLVE' : 'Menulevelio'} id="levelmenu_web">

                <ul style={{paddingLeft: '20px'}}>
                {Close.map((Datas) =>
                  <li className="the_li_menu_level js-menu-hide_Menu_level_Maga " key={Datas.id} onClick={showSidebar}>
                    <a href={Datas.link} className="MultiMenus_A">
                      {Datas.icon}{Datas.name}</a>
                  </li>
                )}
                </ul>
                  <div className="sadjasdhsis"></div>     
                  <div className="Header_main_NAVbar_bgrextras">
                  <span>
                  {/*tìm kiếm*/}
                      
                      <SearchMenuLevel/>

                  {/*kết thúc tìm kiếm*/}
                <Menulevel/>

              <span className="xuongdong">
                {Time_out.map((Datas) =>
                    <div key={Datas.id}>
                      {Datas.icon}
                    </div>
                )}
                <i style={{fontSize: '13px'}}>{t('days_since_release', { number_of_days })}</i>
              </span>

              <div className="sadjasdhsis"></div>
              </span>

              <span>
                <span className="Header_main_rightsk">
                  <div className="dju">
                    <span className="datejk">
                      <span>{t(dayName)}</span>
                      <span>{Date_show}</span>
                      <span>{Time_show}</span>
                    </span>
                  </div>
                    {/*<i className="phien_ban">V.1.0.1</i>*/}
                    <img src={RB} className="manjdsbj"/>
                </span>
              </span>
              </div>

          </aside>
        
    </div>
    )
}

export default Header_main;
