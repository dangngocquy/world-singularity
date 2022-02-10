import React from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import { IoIosSend } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

const Register_news = function(props) {
const { t } = useTranslation();
  return (
        <div className="Resiter_news_ocolumn">
          <div className="Resiter_news_o">
            <RiMailSendLine className="Resiter_news_o_icon"/>
            <div className="Resiter_news_o_fl">
              <b>{t('Liên hệ Email')}</b>
              <span>Contact@world.singularity.com</span>
            </div>
          </div>
          <div className="Resiter_news_o">
            <IoIosSend className="Resiter_news_o_icon"/>
            <div className="Resiter_news_o_fl">
              <b>{t('Liên hệ hỗ trợ')}</b>
              <span>Support@world.singularity.com</span>
            </div>
          </div>
        </div>
  )
}
export default Register_news;