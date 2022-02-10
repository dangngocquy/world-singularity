import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section_total.css';
import { easeOutCubic } from 'easing-utils';
import Chart from '../Chart/Chart';
import { BiTimeFive } from 'react-icons/bi';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { BsCalendarCheck, BsArrowRightShort } from 'react-icons/bs';

function Section_total() {
const { t } = useTranslation();

document.querySelectorAll('[num]').forEach(numberElem => {

  const finalValue = parseInt(numberElem.getAttribute('num'), 10);
  const animTime = parseInt(numberElem.getAttribute('Max_Tong'), 10);
  const initTime = performance.now();


  let interval = setInterval(function() {
    let t = (performance.now() - initTime) / animTime;

    let currentValue = Math.floor(easeOutCubic(t) * finalValue);
    numberElem.innerText = currentValue;

    if (t >= 1) {
      clearInterval(interval);
    }
  }, 50);
});

const Data = [{
  id:1,
  title: 'Số lần ra mắt',
  data: 371,
  data_speed: 9000
},
{
  id:2,
  title: 'Số lượt truy cập',
  data: 298,
  data_speed: 9000
}];
  return (
  <div className="Section_total_padding" id="Section_total">
      <div className="Section_total_flex" id="possibility">
        <div className="gpt3__possibility-image">
          <div className="Section_total_chart">
            <div className="Section_total_chart_background_us">
              <span className="ST1">
                {/*<Chart />*/}
                Coming soon
              </span>
              <span className="ST2">
                <p className="Section_total_sizesST">Tổng lượt tải</p>
                <p className="Section_total_sizesST_number Font_text">669</p>
              </span>
              <span className="ST3">
                <button>
                  <MdProductionQuantityLimits className="Section_total_chart_ioicon" color="rgba(248, 179, 0, 1)"/>
                    <div className="Section_total_chart_io"><span className="ST1goc">999+</span><span className="ST1phu">sản phẩm được bán ra</span></div>
                </button>
                <button>
                  <BiTimeFive className="Section_total_chart_ioicon" color="rgba(46, 138, 224, 1)"/>
                    <div className="Section_total_chart_io"><span className="ST1goc">24h</span><span className="ST1phu">Thời gian nhanh chóng</span></div>
                </button>
                <button>
                  <BsCalendarCheck className="Section_total_chart_ioicon" color="rgba(28, 255, 122, 1)"/>
                    <div className="Section_total_chart_io"><span className="ST1goc">999+</span><span className="ST1phu">Đánh giá sản phẩm</span></div>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="gpt3__possibility-content">
          <h1 className="gradient__text">{t('Tổng số lần truy cập và ra mắt sản phẩm trong tuần vừa qua')}</h1>
          <div className="Section_total_sizes Font_text">
          {Data.map(({ image, title, data, data_speed, id }) => (
          <div className="Section_total_text_flex" key={id}>
            <h2 className="Section_total_size" num={data} Max_Tong={data_speed} />
            <span className="Section_total_size_flex-2">
              <span className="Section_total_text">{t(title)}</span>
              <BsArrowRightShort className="Section_total_text_abc"/>
            </span>
          </div>
          ))}
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Section_total;
