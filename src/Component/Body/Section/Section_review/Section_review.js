import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section_review.css';
import { Feature } from '../Section_introduce/index';

const Section_review = function(props) {
const { t } = useTranslation()

const Data = [
  {
    id:1,
    title: 'Hiểu về quá trình hoạt động',
    text: 'content_one',
  },
  {
    id:2,
    title: 'Cách thức tiếp cận',
    text: 'content_two',
  },
  {
    id:3,
    title: 'Kỹ thuật ứng dụng',
    text: 'content_three',
  },
  {
    id:4,
    title: 'Giao tiếp với AI',
    text: 'content_for',
  },
];

  return (
    <div className="sndsnjsncb" id="Section_review">
      <div className="gpt3__features section__padding" id="features">

        <div className="gpt3__features-heading">
          <h1 className="gradient__text">
            <font className="sandkcnncvv">
              <font className="sandkcnncvv">{t('truy cập ngay')}, </font>
              <font className="sandkcnncvv">{t('solarst')}.</font>
            </font>
          </h1>

          <p>
            <font className="sandkcnncvv">
              <font className="sandkcnncvv dskdksc">{t('truycapsom')}</font>
            </font>
          </p>
        </div>

        <div className="gpt3__features-container">
          {Data.map(({ title, text, id }) => (
          <div className="gpt3__features-container__feature" key={id}>
            <div className="gpt3__features-container__feature-title">
              <div></div>

              <h1 className="dsndnncnnmxsp">
                <font className="sandkcnncvv">
                  <font className="sandkcnncvv">{t(title)}</font>
                </font>
              </h1>
            </div>

            <div className="gpt3__features-container_feature-text">
              <p>
                <font className="sandkcnncvv">
                  <font className="sandkcnncvv">{t(text)}.</font>
                </font>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
export default Section_review;