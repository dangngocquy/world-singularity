import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section_feature.css';
import Phone from '../Phone/Phone';
import { control, bluetooth } from '../../Images'

import { VscSourceControl } from 'react-icons/vsc';
import { RiBluetoothFill } from 'react-icons/ri';
import { BsHddNetwork } from 'react-icons/bs';
import { GiMeshNetwork } from 'react-icons/gi'

const Section_feature = function(props) {
const { t } = useTranslation()
const Data = [{
  id: 1,
  icon: control,
  title: 'Kiểm soát',
  content: 'kiemsoat'
},
{
  id: 2,
  icon: bluetooth,
  title: 'Điều khiển',
  content: 'dieukhien'
}]
  return (
    <div className="world_feature_flex" id="Section_feature">
      <h4 className="world_feature_text">{t('Hãy trang bị riêng cho mình một trợ lý')},<br/>{t('Tại sao không?')}?</h4>
        <div className="gpt3__possibilitys section__padding">
          <div className="approachThree-left">
            <span className="section__feature_margin">
              <div className="world_feature_height"></div>
              <h4 className="world_feature_backgrounds">{t('Ứng dụng World AI')}</h4>
              <span className="world_feature_background">{t('nhieunoidung')}.</span>
            </span>
            <div className="world_feature_chia">
              {Data.map(({ icon, title, content, id }) => (
                <div key={id}>
                  <img src={icon} alt="control" className="world_feature_img"/>
                  <h3>{t(title)}</h3>
                  <span className="world_feature_p">{t(content)}.</span>
                </div>
              ))}
            </div>
          </div>
          <Phone className="world_feature_phone"/>
        </div>

    </div>
    )
}

export default Section_feature;
