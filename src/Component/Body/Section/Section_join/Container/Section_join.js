import React from 'react';
import Time_out from '../Time_out/Time_out';
import './Section_join.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
function Section_join() {
const { t } = useTranslation()

  return (
  	<div className="Section_join_padding">
      <div className="gpt3__cta" id="Section_join">
        <div className="gpt3__cta-content">
          <span className="kncnncnmxnx">
            <p>{t('Kết thúc sau')}</p>
            <Time_out />
          </span>
          <h3>{t('Tham gia ngay bây giờ để bắt đầu truy cập & khám phá những công nghệ tương lai')}.</h3>
        </div>
        <div className="gpt3__cta-btn">
          <Link to="/Login/"><button type="button">{t('Tham gia')}</button></Link>
        </div>
      </div>
  	</div>
  );
}

export default Section_join;
