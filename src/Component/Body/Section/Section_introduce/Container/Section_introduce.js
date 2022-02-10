import { useTranslation } from 'react-i18next';
import React from "react";
import ReactDOM from "react-dom";
import './Section_introduce.css';

import { BiCloudLightRain, BiChevronRight } from "react-icons/bi";
import { FiChevronRight } from "react-icons/fi";
import { GiSolarSystem } from 'react-icons/gi';
import { CgDatabase } from 'react-icons/cg';
import { BsArrowRightShort } from 'react-icons/bs';

function Section_introduce() {
const { t } = useTranslation()

const Data = [{
  id:1,
  name: 'Huấn luyện',
  icon: <BiCloudLightRain className="size_btkpvt SIR"/>,
  beta: '(beta)',
  title: 'Huấn luyện ứng xử',
  content: 'Huấn luyện ngay',
  css: '',
  New: '(New)'
},
{
  id:2,
  name: 'Chuyển hóa dữ liệu',
  icon: <CgDatabase className="size_btkpvt SIB"/>,
  beta: '(beta)',
  title: 'Chuyển hóa bằng phương thức',
  content: 'Chuyển hóa dữ liệu',
  css: '',
  New: '(New)'
},
{
  id:3,
  name: 'universe',
  icon: <GiSolarSystem className="size_btkpvt SIG"/>,
  beta: '(beta)',
  title: 'Solar system',
  content: 'universe',
  css: '',
  New: '(New)'
}]

  return (
      <div className="ldpsdmfdfdv background_color_section_introduce" id="Section_introduce">
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
          <div className="gpt3__whatgpt3-feature">
            <Feature  title=<span className="dksnndnnc">
                              <span>{t('World-Singularity là gì?')}</span>
                              <span className="smncccsa">{t('noidung_mot')}.</span>
                            </span>
                      text= <div className="mdsmdlsdkmc">
                              <div className="mnsjnfjs">
                                <span className="mausacmuctieu">{t('Mục tiêu của chúng tôi')}</span>
                                <FiChevronRight className="FAcolor"/>
                              </div>

                              <span className="mausacssi">{t('noidung_hai')}.</span>
                            </div>
            />
          </div>

          <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">{t('Khả năng')}</h1>
            <p className="dknsaddsad Font_text">{t('Khám phá Thư viện')} <BiChevronRight /></p>
          </div>

          <div className="gpt3__whatgpt3-container">
           {Data.map(({ title, name, icon, beta, css, content, New, id }) => (
            <Feature title={t(name)} key={id}
                     text=<span className="mmmmmmccsssxa">
                          <span>{t(title)} {New}</span>
                            <div className="nenkpvtt">
                              <span></span>
                              <button className="mausaccuanut">
                              <div className="cangiuavt">
                                {icon}
                                <strong style={{textTransform: 'capitalize', whiteSpace: 'nowrap'}} >{t(content)} {beta}</strong>
                                <BsArrowRightShort size={18}/>
                              </div>
                              </button>
                              
                            </div>                            
                          </span>
            />
          ))}
          </div>
        </div>
      </div>
    );
  }

const Feature = props => {
const { t } = useTranslation()
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title"><div />
        <h1>{props.title}</h1>
    </div>

    <div className="gpt3__features-container_feature-text">
      <p>{props.text}</p>
    </div>

  </div>
  );
};

export default Section_introduce;

