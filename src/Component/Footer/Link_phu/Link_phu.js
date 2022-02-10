import React from 'react';
import { useTranslation } from 'react-i18next';

const Link_phu = function(props) {
const { t } = useTranslation()

  return (
    <div className="j">
    {/*<div className="sadjasdhsis"></div>*/}
    <div className="dgblllh">
      
    </div>
    
    {/*<div className="sadjasdhis"></div>*/}

    <div className="jj">
    <div className="uiux">
      <p className="dgblll ntyhb">All rights reserved © {new Date().getFullYear()}</p>
      <a href="/" className=" svbf loitaiai"> AI WORLD</a>
    </div>

    <div className="uxui">
      <a href="#/"className=" svbf loitaiai">{t('Chính sách bảo mật')}</a>
      <a href="#/" className=" svbf loitaiai">{t('Điều khoản')}</a>
      <a href="#/" className="vanbanst  svbf loitaiai">{t('Góp ý')}</a></div>
    </div>

    </div>
  )
}
export default Link_phu;