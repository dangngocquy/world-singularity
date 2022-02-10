import React from 'react';
import Qr_code from './Qr_code/Qr_code';
import { useTranslation } from 'react-i18next';
import { arrow } from '../../../Images';
import './Popup.css';

const Popup = function(props) {

const { t } = useTranslation();
  return (
    <div className="ppdlbt">
      <div className="ppdlbt-overlay ppdlbt-toggle"></div>
        <div className="popup_felex">
        
          <div className="ppdlbt-wrapper ppdlbt-transition">

            <div>
            
            </div>

            <div className="ppdlbt-body">
              <div className="ppdlbt-content">
               
                <div className="ggback">
                  <div className="popup_felex_dif">
                    <h2 className="ppdlbt-heading mnjsdi">{t('Tải xuống hoặc quét mã')}</h2>
                    <div className="link_wrapper ppdlbt-toggle">
                      <a href="#/" className="iconclose">Close</a>
                        <div className="icon">
                          <img src={arrow} alt={t('alt_img') + "'" + "Close" + "'"} />
                        </div>
                    </div>
                  </div>
                  <Qr_code/>
                </div>

              </div>
            </div>

        </div>
      </div>
    </div>

  )
}
export default Popup;