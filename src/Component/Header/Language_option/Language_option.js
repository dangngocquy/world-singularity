import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import i18n from "i18next";
import cookies from 'js-cookie';
import { useDetectOutsideClick } from "../../Dropdown/Dropdown";
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Language_option.css';

import { viet_nam, tieng_anh, tieng_nhat } from '../image';
import { FaLanguage } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const languages = [
  { 
    id: 1,
    code: 'en',
    name: 'English',
    country_code: 'gb',
    image: tieng_anh
  },
  { 
    id: 2,
    code: 'vn',
    name: 'Tiếng Việt',
    country_code: 'vi',
    image: viet_nam
  },
  { 
    id: 3,
    code: 'jp',
    name: '日本語',
    country_code: 'jp',
    image: tieng_nhat
  }
]

const Language_option = function(props) {
const { t } = useTranslation()
const currentLanguageCode = cookies.get('i18next') || 'vn'


//onclick modal language
const dropdownRefsa = useRef(null);
const [isActive, setIsActive] = useDetectOutsideClick(dropdownRefsa, false);
const onClicksa = () => setIsActive(!isActive);
//kết thúc onclick modal language

const [toggleMenu2, setToggleMenu2] = useDetectOutsideClick(dropdownRefsa, false);

const [activemenu, setactivemenu] = useDetectOutsideClick(dropdownRefsa, false);

  return (
      <div className="trinh_tha_xuong tt_language">
          {toggleMenu2
          ? <div onClick={() => setToggleMenu2(false)} className="kkhai">
              <button className="btn_lg" onClick={onClicksa} data-tip data-for="Ngonngu">
              <label onClick={() => setactivemenu(!activemenu)} className={activemenu ? "lgcoloractive" : "lgcolor"} htmlFor="bien_toggle_menu" style={{display: 'flex', alignItems: 'center', gridGap: '5px',cursor: 'pointer',justifyContent: 'center',fontSize: '21px'}}>
                <span className="khsd">{t('Ngôn ngữ')}</span>
                 <IoIosArrowUp size={13} className="cusorksnd"/>
              </label>
              </button>
            </div>

          : <div onClick={() => setToggleMenu2(true)} className="kkhai">
              <button className="btn_lg" onClick={onClicksa} data-tip data-for="Ngonngu">
                <label onClick={() => setactivemenu(!activemenu)} className={activemenu ? "lgcoloractive" : "lgcolor"} htmlFor="bien_toggle_menu" style={{display: 'flex', alignItems: 'center', gridGap: '5px',cursor: 'pointer',justifyContent: 'center',fontSize: '21px'}}>
                  <span className="khsd">{t('Ngôn ngữ')}</span>
                   <IoIosArrowDown size={13} className="cusorksnd"/>
                </label>
              </button>
            </div>}

          <div className="menu-containerl">
              <nav
                ref={dropdownRefsa}
                className={`menulst ${isActive ? "activelst" : "inactive"}`}
              >
                <div className="the_profilesxsc">
                  
                  {/*<h1 className="chu_dich">{t('Lựa chọn ngôn ngữ')}</h1>*/}
                   
                    {languages.map(({ id, code, name, country_code, image }) => (
                     <span key={id}>
                      <label className="sdksmmvvv Language_option_flex" key={country_code} onClick={() => {
                      i18next.changeLanguage(code)
                    }}>

                      <img src={image} className="anh_img" alt={t('alt_img') + "'" + t('lg_change') + "'"}/>
                      <p className="hover_language">{name}</p>
                        
                      </label>
                    </span>
                    ))}

                </div>
              </nav>
          </div>

        </div>
              
  )
}
export default Language_option;