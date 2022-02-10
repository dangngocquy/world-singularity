import React from 'react';
import { useTranslation } from 'react-i18next';
import './Text_link.css';

const Text_link = function(props) {
const { t } = useTranslation()

  return (
<div className="Text_link_ALl">
    <span className="chiatoanbo">

      <span className="Text_link_footer">
        <div className="phongchutetx">{t('Sản phẩm')}</div>
          <span className="flchit">
           <a href="#/" className="amuamau"> <div className="phongchutety">WS-A1</div> </a>
           <a href="#/" className="amuamau"> <div className="phongchutety">WS-A2</div> </a>
           <a href="#/" className="amuamau"> <div className="phongchutety">AI-MD1</div> </a>
           <a href="#/" className="amuamau"> <div className="phongchutety">MD-AI1</div> </a>
           <a href="#/" className="amuamau"> <div className="phongchutety">{t('Hệ thống dữ liệu')}</div> </a>
          </span>
       </span>

       <span className="Text_link_footer">
        <div className="phongchutetx">{t('Thư viện')}</div>
         <span className="flchit">
           <a href="#/" className="amuamau"> <div className="phongchutety">{t('Vũ trụ')}</div> </a>
           <a href="#/" className="amuamau"> <div className="phongchutety">{t('Không gian')}</div> </a>
           <a href="#/" className="amuamau"> <div className="phongchutety">{t('Trí tuệ nhân tạo')}</div> </a>
           <a href="#/" className="amuamau"> <div className="phongchutety">{t('Ứng dụng')}</div> </a>
           <a href="#/" className="amuamau"> <div className="phongchutety">{t('Thực tế ảo tăng cường')}</div> </a>
          </span>
       </span>

      <span className="Text_link_footer">
         <div className="phongchutetx">{t('Chi nhánh')}</div>
         <span className="flchit">
           <a href="/" className="amuamau"> <div className="phongchutety">Home</div> </a>
           <a href="#/" className="amuamau"> <div className="phongchutety">{t('Danh mục')}</div> </a>
           <a href="/News/" className="amuamau"> <div className="phongchutety">{t('Tin tức')}</div> </a>
           <a href="#/" className="amuamau"> <div className="phongchutety">{t('Giới thiệu')}</div> </a>
           <a href="#/" className="amuamau"> <div className="phongchutety">{t('Liên hệ chúng tôi')}</div> </a>
          </span>
      </span>

      <span className="Text_link_footer">
         <div className="phongchutetx">{t('Về chúng tôi')}</div>
         <span className="flchit">
           <a href="#/" className="amuamau"> <div className="phongchutety">{t('Tuyển dụng')}</div> </a>
           <a href="#/" className="amuamau"> <div className="phongchutety">{t('Contact')}</div> </a>
           <a href="#/" className="amuamau"> <div className="phongchutety">Email</div> </a>
           <a href="#/" className="amuamau"> <div className="phongchutety">{t('Bản quyền')}</div> </a>
         </span>
       </span>

    </span>
    </div>
  )
}
export default Text_link;