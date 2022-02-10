import  './Menu_dropdown.css';
import { Link } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { MdOutlinePhotoLibrary } from 'react-icons/md';
import { useDetectOutsideClick } from "../../Dropdown/Dropdown";
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import React from 'react';
import ReactDOM from "react-dom";
import { Home, Tinh_nang_dac_diem, Blog, Ho_tro } from '../Data/Data';

const Menu_dropdown = function(props) {

const { t } = useTranslation();

const dropdownRefsa = useRef(null);
const [isActive, setIsActive] = useDetectOutsideClick(dropdownRefsa, false);
const onClicksa = () => setIsActive(!isActive);

const dropdownRefsas = useRef(null);
const [isActives, setIsActives] = useDetectOutsideClick(dropdownRefsas, false);
const onClicksas = () => setIsActives(!isActives);

const [toggleMenu, setToggleMenu] = useDetectOutsideClick(dropdownRefsas, false);
const [toggleMenu2, setToggleMenu2] = useDetectOutsideClick(dropdownRefsas, false);

const [activemenu, setactivemenu] = useDetectOutsideClick(dropdownRefsas, false);
const [activemenu2, setactivemenu2] = useDetectOutsideClick(dropdownRefsas, false);

  return (
    <div>
     <div className="mb7 mnb vbr">
        <ul className="chiadoimenu">
        {Home.map(({ link, name, icon, css, id}) => (
          <span className="kkhai" key={id}>
            <a className="mausacmenu chiadoimenuhai" href={link}>
              <span style={{fontSize: '13px'}}>{icon}</span>
              <span>{t(name)}</span>
            </a>
          </span>
        ))}
        {Tinh_nang_dac_diem.map(({ link, name, icon, toggle_name_1, toggle_name_2, toggle_name_3, toggle_name_4, toggle_name_5, toggle_name_6, id}) => (
        <div className="kamkmdkmmc" onClick={onClicksa} key={id}>
          {toggleMenu
              ? <span onClick={() => setToggleMenu(false)} className="kkhai"> 
                    <Link to={link} onClick={() => setactivemenu(!activemenu)} className={activemenu ? "chiadoimenuhai mausacmenuactive" : "chiadoimenuhai mausacmenu"}>
                      <span className="Menudropdown_sk">
                        <span style={{fontSize: '13px'}}>{icon}</span>
                        <span>{t(name)}</span>
                      </span>
                      <IoIosArrowUp size={13} className="cusorksnd"/>
                    </Link>
                </span>
              : <span onClick={() => setToggleMenu(true)} className="kkhai">
                    <Link to={link} onClick={() => setactivemenu(!activemenu)} className={activemenu ? "chiadoimenuhai mausacmenuactive" : "chiadoimenuhai mausacmenu"}>
                     <span className="Menudropdown_sk">
                        <span style={{fontSize: '13px'}}>{icon}</span>
                        <span>{t(name)}</span>
                      </span>
                      <IoIosArrowDown size={13} className="cusorksnd"/>
                    </Link>
      
                </span>
            }
           
            <span ref={dropdownRefsa}
                  className={`menuls ${isActive ? "activels" : "inactive"}`}>
              <span className="lingsh">{t(toggle_name_1)}</span>
              <span className="lingsh">{t(toggle_name_2)}</span>
              <span className="lingsh">{t(toggle_name_3)}</span>
              <span className="lingsh">{t(toggle_name_4)}</span>
              <span className="lingsh">{t(toggle_name_5)}</span>
              <span className="lingsh">{t(toggle_name_6)}</span>
            </span>
    
          </div>
        ))}

        {Blog.map(({ link, name, icon, toggle_name_1, toggle_name_2, toggle_name_3, toggle_name_4, toggle_name_5, toggle_link, id}) => (
          <div className="kamkmdkmmc"  onClick={onClicksas} key={id}>
            {toggleMenu2
              ? <span onClick={() => setToggleMenu2(false)} className="kkhai"> 
                    <Link to={link} onClick={() => setactivemenu2(!activemenu2)} className={activemenu2 ? "chiadoimenuhai mausacmenuactive" : "chiadoimenuhai mausacmenu"}>
                      <span className="Menudropdown_sk">
                        <span style={{fontSize: '13px'}}>{icon}</span>
                        <span>{t(name)}</span>
                      </span>
                      <IoIosArrowUp size={13} className="cusorksnd"/>
                    </Link>
                </span>
              : <span onClick={() => setToggleMenu2(true)} className="kkhai">
                    <Link to={link} onClick={() => setactivemenu2(!activemenu2)} className={activemenu2 ? "chiadoimenuhai mausacmenuactive" : "chiadoimenuhai mausacmenu"}>
                      <span className="Menudropdown_sk">
                        <span style={{fontSize: '13px'}}>{icon}</span>
                        <span>{t(name)}</span>
                      </span>
                      <IoIosArrowDown size={13} className="cusorksnd"/>
                    </Link>
                </span>
            }

            <span ref={dropdownRefsas}
                className={`menulsu ${isActives ? "activelsu" : "inactive"}`}>
              <a href={toggle_link} className="lingsh">
              <span>{t(toggle_name_1)}</span></a>
              <span className="lingsh">{t(toggle_name_2)}</span>
              <span className="lingsh">{t(toggle_name_3)}</span>
              <span className="lingsh">{t(toggle_name_4)}</span>
            </span>

          </div>
        ))}

        {Ho_tro.map(({ link, name, icon, id}) => (
          <span className="kkhai" key={id}>
            <a className="mausacmenu chiadoimenuhai" href={link}>
              <span style={{fontSize: '13px'}}>{icon}</span>
              <span>{t(name)}</span>
            </a>
          </span>
        ))}

        </ul>
      </div>
    </div>
  )
}

export default Menu_dropdown;
