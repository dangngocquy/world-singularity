import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section_description.css';
import { Dola, lich, note } from '../../Images';
const Section_description = function(props) {
const { t } = useTranslation()
const Data = [{
  id: 1,
  image: Dola,
  title: 'Chi phí',
  content: 'Chỉ cần 200$ trở lên bạn đã sở hữu 1 trợ lý ảo nhỏ gọn có thể mang theo và hỗ trợ bạn trong bất cứ hoàn cảnh nào'
},
{
  id: 2,
  image: lich,
  title: 'Thời gian giao hàng',
  content: 'Miễn phí giao hàng nhanh chóng, tiện lợi có mặt trong vòng 2 tiếng với khu vực tại TP.HCM'
},
{
  id: 3,
  image: note,
  title: 'Bảo hành',
  content: 'Bảo hành 1 năm đối với các sản phẩm từ 200$ và 2 năm đối với sản phẩm trên 500$, Hoàn phí đổi trả nếu sản phẩm bị lỗi'
}]
  return (
      <div className="Section_description_padding">
        <div className="gpt3__possibility section__padding Section_description_row">
            {Data.map(({image, title, content, id}) => (
            <div className="Section_description_column" key={id}>
              <div className="Section_description_flex">
                <img src={image} alt="icon" className="Section_description_img"/>
                <p className="Section_description_color">{t(title)}</p>
              </div>

              <div>
               <p className="Section_description_color_two">{t(content)}.</p>
              </div>
            </div>
            ))}
        </div>
      </div>
  )
}
export default Section_description;