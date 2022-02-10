import React from 'react';
import { useTranslation } from 'react-i18next';
import './Loading_page.css';
import Logo_main from '../Logo_main/Logo_main';

function Loadingpage() {

const { t } = useTranslation();

  return (
    <div className="ipl-progress-indicator" id="ipl-progress-indicator">
      <div className="ipl-progress-indicator-head">
        <div className="first-indicator"></div>
        <div className="second-indicator"></div>
      </div>

      <div className="insp-logo-frame">
        <div className="chiatt_ld">
          <div className="chiaall_ld">
            <div className="chia_loading">

              <div className="loader_ld">
                <div className="inner_ld one_ld"></div>
                <div className="inner_ld two_ld"></div>
                <div className="inner_ld three_ld"></div>
              </div>

              <div className="logorb_ld">
                <div className="chiauhsuhd">
                  <Logo_main />
                </div>
              </div>
            </div>

            <div className="chia_loadings">
              <center className="mau_ld">{t('LOADING')}</center>

              <div className="LoaderBalls">
                <div className="LoaderBalls__item LoadingpageBG"></div>
                <div className="LoaderBalls__item LoadingpageBG"></div>
                <div className="LoaderBalls__item LoadingpageBG"></div>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
  );
}

export default Loadingpage;
