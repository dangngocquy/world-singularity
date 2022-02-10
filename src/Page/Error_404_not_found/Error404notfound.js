import React from 'react';
import { useTranslation } from 'react-i18next';

import { Footers, Logo_main } from '../../Component/';
import Login_google_auth from '../../Component/Header/Login_google_auth/Login_google_auth';
import Language_option from '../../Component/Header/Language_option/Language_option';
import { Section_Footer } from '../../Component/Body/Section/';
import './Error.css';

const Error404notfound = function(props) {

const { t } = useTranslation();

  return (
    <div>
  <div className="err_background">
    <title>{t('Page not found')} | AI Singularity</title>
        <div className="err_background_header">
          <div className="Assistant_background_question_paddingdsmflecx">
            <Logo_main />
            <div className="Assistant_background_question_paddingnsja"></div>
            <p>Không tìm thấy trang</p>
          </div>
          <span className="Error404notfound_fl_span2dls">
          <div className="Error404notfound_fl_lang"><Language_option/></div>
          <Login_google_auth/>
          </span>
        </div>

        <div className="Error404notfound_fl">
          <span className="Error404notfound_fl_span1">
            <h1>Đừng khóc</h1>
            <a href="/"><button className="Error404notfound_fl_span1_button">{t('back')}</button></a>
          </span>
          <div className="Error404notfound"></div>
          <span className="Error404notfound_fl_span2">
            <b>{t('Page not found')}!</b>
            <p>{t('err_ct')}</p>
          </span>
        </div>

            <div className="err_background_padding">
                <img src={require('../../Image/404.png').default} alt={t('alt_img') + "'" + t('Page not found') + "'"} className="Error_404_not_found_img" />
         {/*       
                  <p className="err_text">{t('Page not found')}!</p>
                  <p className="err_text2">{t('err_ct')}</p>
                  <p className="err_text2"> {t('err_ct_1')} </p>

                <div className="err_flex">
                  <a href="/" className="err_button err_link">{t('back')}</a>
                  <a href="#/"className="err_button err_link">{t('err_report')}</a>
                </div>*/}
            </div>
        {/*<Section_Footer />*/}

  </div>
  <div className="Assistant_background_question_padding_back">
          <Footers />
        </div>
  </div>
  )
}

export default Error404notfound;
