import React from 'react';
import Logo from '../../Image/logo-2.png';
import logo_main from './logo_main.css';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
const Logo_main = function(props) {
const { t } = useTranslation()
  return (
      <div className="logo">
        <Link to="/">
        <div className="logo_flex">

            <span className="text-test">
              <img src={Logo} height={35} width={40} alt={t('alt_img') + "'" + "Logo" + "'"} className="text" />
            </span>

            <span className="text abcdef">WORLD <strong className="font-weight">SINGULARITY</strong>
            </span>

           </div>
          </Link>
      </div>
  )
}
export default Logo_main;