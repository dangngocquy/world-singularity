import React from 'react';
import { qr_code, appstore_android, ggplay_android, load } from '../../../../Images';
import { useTranslation } from 'react-i18next';

import { FaGooglePlay } from "react-icons/fa";
import { GrApple } from "react-icons/gr";
import { DiWindows } from "react-icons/di";

import Download_A from '../Download_A/Download_A';

import './Qr_code.css';

const Qr_code = function(props) {
const { t } = useTranslation();

  return (

    <div className="Qr_code_flex">

        <span className="Qr_code_grid">
            <div className="chiaqr QRCODE1">
                <img src={qr_code} alt={t('alt_img') + "'" + "QR CODE" + "'"}/>
            </div>

            <div className="chiaamw QRCODE2">
                {/*<div className="vippro">or</div>*/}
            
                <div className="chiaamws">
                    <span className="background_icon">
                        < FaGooglePlay />
                           <div className="dfhshdf">
                                <span className="fontss">{t('Get it on')}</span>
                                <span className="fontsss">Google play</span>
                            </div>
                    </span>

                    <span className="background_icon">
                       < GrApple />
                        <div className="dfhshdf">
                            <span className="fontss">{t('Available on the')}</span>
                            <span className="fontsss">App store</span>
                        </div>
                    </span>

                    <span className="background_icon">

                        < DiWindows />

                        <div className="dfhshdf">
                            <span className="fontss">{t('Available on the')}</span>
                            <span className="fontsss">Window</span>
                        </div>

                    </span>
                    
                </div>
            </div>
        </span>

        <center> 
            <h3 className="c-connaks__title" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gridGap: '5px', color: ' rgb(15, 23, 36)'}}>{t('ct_dl')} 
                <div className="LoaderBalls">
                    <div className="LoaderBalls__item"></div>
                    <div className="LoaderBalls__item"></div>
                    <div className="LoaderBalls__item"></div>
                </div>
            </h3>

            <p className="c-connaks__description xcxvcbvbcv"><span className="xcxvcbvbcv">{t('ct_dl_1')}</span>, <a href="#/" className="traiphai gjoob"> {t('ct_dl_2')}</a></p>
        </center>
        
        <div className="cangiuadlss">
            <div className="gachdl"></div>
        </div>

        <div className="cangiuadls">
          <span className="Qr_code_flex_p">{t('Đăng ký và tải xuống giới hạn')}</span>
    {/*nút dload 1*/}
          <Download_A/>
    {/*kết thúc nút dload 1*/}
        </div>
        

    </div>
  )
}
export default Qr_code;