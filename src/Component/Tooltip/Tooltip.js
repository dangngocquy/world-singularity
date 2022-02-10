import React from 'react';
import ReactTooltip from "react-tooltip";
import "./Tooltip.css";
import Element_Planet from '../Body/Section/Section_planet/Element_Planet/Element_Planet';

import { useTranslation } from 'react-i18next';
const Tooltip = function(props) {
const { t } = useTranslation()
  return (
      <div>
        <ReactTooltip className="test_tt" id="trainghiemao" place="bottom" effect="solid" backgroundColor="rgb(37, 54, 78, 0.6)" arrowColor="rgb(0, 0, 0, 0)" scrollHide="true" resizeHide="false" >
          <span className="mau_nen_tt">{t('Trải nghiệm ảo')}</span>
        </ReactTooltip>

        <ReactTooltip className="test_tt" id="Ngonngu" place="bottom" effect="solid" backgroundColor="rgb(37, 54, 78, 0.6)" arrowColor="rgb(0, 0, 0, 0)" scrollHide="true" resizeHide="false" >
          <span className="mau_nen_tt">{t('lg_change')}</span>
        </ReactTooltip>

        <ReactTooltip className="test_tt" id="Proflie_hoso" place="bottom" effect="solid" backgroundColor="rgb(37, 54, 78, 0.6)" arrowColor="rgb(0, 0, 0, 0)" scrollHide="true" resizeHide="false" >
          <span className="mau_nen_tt">Hồ sơ</span>
        </ReactTooltip>

        <ReactTooltip className="test_tt" id="login" place="bottom" effect="solid" backgroundColor="rgb(37, 54, 78, 0.6)" arrowColor="rgb(0, 0, 0, 0)" scrollHide="true" resizeHide="false" >
          <span className="mau_nen_tt">Đăng nhập</span>
        </ReactTooltip>

        <ReactTooltip className="test_tt" id="Facebook" place="bottom" effect="solid" backgroundColor="rgb(37, 54, 78, 0.6)" arrowColor="rgb(0, 0, 0, 0)" scrollHide="true" resizeHide="false" >
          <span className="mau_nen_tt">Facebook</span>
        </ReactTooltip>

        <ReactTooltip className="test_tt" id="Twitter" place="bottom" effect="solid" backgroundColor="rgb(37, 54, 78, 0.6)" arrowColor="rgb(0, 0, 0, 0)" scrollHide="true" resizeHide="false" >
          <span className="mau_nen_tt">Twitter</span>
        </ReactTooltip>

        <ReactTooltip className="test_tt" id="Instagram" place="bottom" effect="solid" backgroundColor="rgb(37, 54, 78, 0.6)" arrowColor="rgb(0, 0, 0, 0)" scrollHide="true" resizeHide="false" >
          <span className="mau_nen_tt">Instagram</span>
        </ReactTooltip>

        <ReactTooltip className="test_tt" id="Github" place="bottom" effect="solid" backgroundColor="rgb(37, 54, 78, 0.6)" arrowColor="rgb(0, 0, 0, 0)" scrollHide="true" resizeHide="false" >
          <span className="mau_nen_tt">Github</span>
        </ReactTooltip>

        <ReactTooltip className="test_tt" id="Mail" place="bottom" effect="solid" backgroundColor="rgb(37, 54, 78, 0.6)" arrowColor="rgb(0, 0, 0, 0)" scrollHide="true" resizeHide="false" >
          <span className="mau_nen_tt">{t('Hộp thư')}</span>
        </ReactTooltip>

        <ReactTooltip className="test_tt" id="Nhung" place="bottom" effect="solid" backgroundColor="rgb(37, 54, 78, 0.6)" arrowColor="rgb(0, 0, 0, 0)" scrollHide="true" resizeHide="false" >
          <span className="mau_nen_tt">{t('Nhúng')}</span>
        </ReactTooltip>

{/*3 điểm định vị*/}
        <ReactTooltip className="test_tt" id="locate_one" place="right" effect="solid" backgroundColor="rgb(37, 54, 78, 0.6)" clickable="false" scrollHide="true" resizeHide="false" data-offset="{'top': 10, 'left': 10}" for specific and offset={{right: 6}}>
          <span className="mau_nen_tt">Coming soon</span>
        </ReactTooltip>

        <ReactTooltip className="test_tt" id="locate_two" place="right" effect="solid" backgroundColor="rgb(37, 54, 78, 0.6)" clickable="false" scrollHide="true" resizeHide="false" data-offset="{'top': 10, 'left': 10}" for specific and offset={{right: 6}}>
          <span className="mau_nen_tt">Coming soon</span>
        </ReactTooltip>

        <ReactTooltip className="test_tt yesaa_Aa" id="locate_three" eventOff="String" place="left" effect="solid" clickable="false" scrollHide="true" resizeHide="false" arrowColor="rgb(0, 0, 0, 0)" data-offset="{'top': 10, 'left': 10}" for specific and offset={{right: 6}}>
          <div className="tooltiptext traia">

             <Element_Planet />

            <p className="amau">
              <i>{t('Click')}</i>
            </p>
          </div>
        </ReactTooltip>
{/*kết thúc 3 điểm định vị*/}
      </div>
  )
}
export default Tooltip;