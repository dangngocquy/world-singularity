import React from 'react';
import { trainghiem } from '../../Images';
import { useTranslation } from 'react-i18next';
import './Section_experience.css';

const Section_experience = function(props) {
const { t } = useTranslation()

  return (
    <div className="dsmkcmmcmcv" id="Section_experience">
      <div className="gpt3__possibility section__padding" id="possibility">
        <div className="gpt3__possibility-image">

          <img src={trainghiem} alt="Robot" />

        </div>
        <div className="gpt3__possibility-content">
          <h4>{t('Chức năng mô phỏng hiện chưa có sẵn')}</h4>
          <h1 className="gradient__text">{t('Khả năng')}</h1>
          <p>{t('Nội dung section D')}.</p>
          <h4>{t('Trải nghiệm thử tính năng')}</h4>
          <button className="dsmkmcmmc">{t('trải nghiệm')}</button>
        </div>
      </div>
    </div>
  )
}

export default Section_experience;
