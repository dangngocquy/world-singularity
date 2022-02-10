import './Time_out.css';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Time_out = function(props) {

const [days, setDays] = useState(0);
const [hours, setHours] = useState(0);
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(0);
const [showSemicolon, setShowSemicolon] = useState(false);

useEffect(() => {
  setInterval(() => {
    const now = moment();
    const then = moment('2020-10-15 12:12:12', 'YYYY-MM-DD hh:mm:ss');
    const countdown = moment(then - now);
    setDays(countdown.format('D'));
    setHours(countdown.format('HH'));
    setMinutes(countdown.format('mm'));
    setSeconds(countdown.format('ss'));
  }, 1000);
}, []);

const { t } = useTranslation();

  return (
    <div>
      <span className="xxxxxxp">
        {days}
        <span> {t('Ngày')} </span>
      </span>

      <span className="xxxxxxp">
        {hours}
        <span> {t('Giờ')} </span>
      </span>  
      <span className="xxxxxxp">
        {minutes}
        <span> {t('phút')} </span> 
      </span> 
      <span className="xxxxxxp">
        {seconds}
        <span> {t('Giây')}</span>
      </span>
    </div>
  )
}
export default Time_out;