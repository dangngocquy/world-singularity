import './Header_news.css';
import { Link } from "react-router-dom";
import Logo_main from '../../../../Component/Logo_main/Logo_main';
import Language_option from '../../../../Component/Header/Language_option/Language_option';
import Menu_dropdown from '../../../../Component/Header/Menu_dropdown/Menu_dropdown';
import Mobile_header from'../../../../Component/Header/Mobile/Mobile_header';

import { useTranslation } from 'react-i18next';

function Header_news() {

const { t } = useTranslation()


  return (

      <nav className="Header_news_background">
        <Mobile_header />

        <span className="chiaheadera">
          <div className="ghv">
            <div className="Header_main_right">
              
              <Logo_main />

            </div>

            <ul className="chiadoimenu">

              <Menu_dropdown />

            </ul>
          </div>
        
        <div className="chiup">
           <Language_option />
           <button className="Header_news_color Header_news_background_mobile gg_mobile">Tải xuống Assistant</button>
           <button className="Header_news_color Header_news_background_mobile">Khám phá vũ trụ</button>
        </div>
    </span>
  </nav>
  );
}

export default Header_news;
