import React from 'react';
import { CanhTayRobot } from '../../Images';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Download_button from '../Download_button/Download_button';
import './Section_home.css';
import Scroll_button from '../Scroll_button/Scroll_button';
import { useTranslation } from 'react-i18next';

import { BsPlayFill } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';


function Section_home(props) {
const { t } = useTranslation()

return (
  <div className="gradient__bg " id="Section_home">
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">{t("Tải xuống và bắt đầu")} <span className="Section_home_flex_color">{t("huấn luyện AI")}</span> {t("cho riêng bạn")}</h1>
        <p className="Font_text">{t('pbtx')}.</p>

       {/* <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>*/}

          <div className="sectionamenn">
            <div className="mskcknnvnnv Font_text">
              <Download_button />
            </div>
    
            <AnchorLink href="#Page_intro" className="djdsopo">
              <div className="ctdl_one">
                <BsPlayFill className="ljsdjo"/>
              </div>

              <div>
                {t('Xem video')}
              </div>
            </AnchorLink>
          </div>

        <div className="gpt3__header-content__people">
          <span className="Section_home_flex">
            <a href="#/"><FaFacebookSquare className="Section_home_icon"/></a>
            <a href="#/"><FaTwitterSquare className="Section_home_icon"/></a>
            <a href="#/"><AiFillGithub className="Section_home_icon"/></a>
          </span>
          <p className="Font_text">{t('Theo dõi chúng tôi để cập nhật thông tin mới nhất')}</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={CanhTayRobot} className="Section_home_img"/>
      </div>
    </div>
    <Scroll_button/>
  </div>
  );
}

export default Section_home;
