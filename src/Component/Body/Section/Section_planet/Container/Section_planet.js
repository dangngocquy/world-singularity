import { useTranslation } from 'react-i18next';
import './Section_planet.css';
import { Vanh_dai, Anhsang, timeline, Solar, saotho, metaverse } from '../../Images';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Tabs, Tab, Content} from "../Tab_content/Container/Tab_content";

import { FiChevronRight } from "react-icons/fi";

const Section_planet = function(props) {
const { t } = useTranslation()

const [active, setActive] = useState(0);
const handleClick = e => {
  const index = parseInt(e.target.id, 0);
  if (index !== active) {
    setActive(index);
  }
};
  return (
    <div className="Section_planet_padding" id="Section_planet">
      {/*<img  src={Anhsang} alt="" className="imganhsang" />*/}
        <h4 className="Section_planet_title">{t('Khám phá hệ mặt trời')}</h4>
      <div className="gpt3__possibility section__padding Section_description_row_grid" id="possibility">
        <div className="Section_planet_planet PLN1">
          <div className="ppyhis Section_planet_right">

            <div className="cloud1 cl1"></div>
            <div className="cloud2 cl2"></div>
            <div className="cloud3 cl3"></div>
              
          </div>
        </div>

        <div className="gpt3__possibility-content Section_planet_right PLN2">
          
          <div className="gpt3__possibility-content">
            <div className="Section_planet_test">
              <Tabs>
                <Tab onClick={handleClick} active={active === 0} id={0}>
                  <img src={Solar} alt="" className="Section_planet_img" onClick={handleClick} active={active === 0} id={0}/>
                  <p className="Section_planet_p" onClick={handleClick} active={active === 0} id={0}>{t('Phòng thí nghiệm năng lượng mặt trời')}</p>
                </Tab>

                <Tab onClick={handleClick} active={active === 1} id={1}>
                  <img src={metaverse} alt="" className="Section_planet_img" onClick={handleClick} active={active === 1} id={1}/>
                  <p className="Section_planet_p" onClick={handleClick} active={active === 1} id={1}>{t('Vũ trụ ảo 5D')}</p>
                </Tab>

                <Tab onClick={handleClick} active={active === 3} id={3}>
                  <img src={saotho} alt="" className="Section_planet_img" onClick={handleClick} active={active === 3} id={3}/>
                  <p className="Section_planet_p" onClick={handleClick} active={active === 3} id={3}>{t('Khám phá hành tinh')}</p>
                </Tab>
              </Tabs>
            </div>
              <h4 className="Section_planet_content">{t('Truy cập vào trạm vũ trụ ngay hôm nay')}<FiChevronRight className="FAcolor"/></h4>
          </div>

        </div>

          <div className="gpt3__possibility-content PLN3">
            <Content active={active === 0}>
              <h1 className="Section_planet_color">
                <div className="gpt3__features-container__feature-title">
                  <div></div>
                  <h4 className="Section_planet_h4">{t('Phòng thí nghiệm năng lượng mặt trời')}</h4>
                  <p className="Section_planet_pp">{t('Phòng thí nghiệm môi trường năng lượng mặt trời trên mặt đất. Bạn có thể tải về các tập tin hình ảnh để in hoặc gửi cho bạn bè của bạn qua email, Facebook, Twitter, hoặc TikTok.')}</p>
                  <div></div>
                  <h4 className="Section_planet_h4">{t('Xem kết quả')} <FiChevronRight className="FAcolor" data-tip data-for="locate_one"/></h4>
                </div>
              </h1>
            </Content>
            <Content active={active === 1}>
              <h1 className="Section_planet_color">
                <div className="gpt3__features-container__feature-title">
                  <div></div>
                  <h4 className="Section_planet_h4">{t('Vũ trụ ảo 5D')}</h4>
                  <p className="Section_planet_pp">{t('Được tạo ra ra bởi sự hội tụ của Machine learning và Deep learning, mục tiêu giúp mọi người có thể đặt chân và khám phá vũ trụ ở bất kì nơi đâu một cách chân thật và sống động nhất.')}</p>
                  <div></div>
                  <h4 className="Section_planet_h4">{t('Đặt chân lên vũ trụ')}<FiChevronRight className="FAcolor" data-tip data-for="locate_two"/></h4>
                </div>
              </h1>
            </Content>
            <Content active={active === 3}>
              <h1 className="Section_planet_color">
                <div className="gpt3__features-container__feature-title">
                  <div></div>
                  <h4 className="Section_planet_h4">{t('Khám phá hành tinh')}</h4>
                  <p className="Section_planet_pp">{t('Hệ Mặt Trời có tám hành tinh, xếp theo thứ tự khoảng cách từ gần nhất cho đến xa nhất so với mặt trời là Sao Thủy, Sao Kim, Trái Đất, Sao Hỏa, Sao Mộc, Sao Thổ, Sao Thiên Vương, Sao Hải Vương (Sao Diêm Vương từng được xếp vào nhóm này nhưng hiện tại bị loại ra do không đáp ứng được tiêu chí ba trong định nghĩa của IAU 2006)')}</p>
                  <div></div>
                  <h4 className="Section_planet_h4">{t('Bắt đầu khám phá các hành tinh')}<FiChevronRight className="FAcolor" data-tip data-for="locate_three"/></h4>
                </div>
              </h1>
            </Content>
          </div>
      </div>
    </div>
  )
}
export default Section_planet;