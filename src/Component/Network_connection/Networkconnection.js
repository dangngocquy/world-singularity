import React from 'react';
import wifi from '../../Image/icon/wifi.svg';
import wifi_off from '../../Image/icon/wifi-off.svg';
import close from '../../Image/icon/x.svg';
import Network_connection_css from './Network_connection.css';
// import { Javascript } from './Javascript';
import { useTranslation } from 'react-i18next';


const Networkconnection = function(props) {
  
const { t } = useTranslation();

const Data = [{
  id:1,
  css_graphic: 'thongbaoketnoi success-thongbaoketnoi',
  image: wifi,
  animation: 'online',
  title: 'online',
  link: '',
  fix: 'dongkets',
  load: ''
},
{
  id:2,
  css_graphic: 'thongbaoketnoi danger-thongbaoketnoi',
  image: wifi_off,
  animation: 'offline',
  title: 'offline',
  link: '/',
  fix: 'dongkets',
  load: 'load',
}];

const Data_Network = Data.map(Network_connection => 
  <div className={Network_connection.css_graphic} id={Network_connection.animation} key={Network_connection.id}>
    <h4 className="chuketnoi">
      <div className="chiaketnoi">
        <span>
          <img className="vuicungbackground" src={Network_connection.image} alt={t('alt_img') + "'" + t('connect') + "'"} />
        </span>

        <span>
          <p className="Network_connection_p">{t(Network_connection.title)}</p>
        </span>

        <span>
          <a href={Network_connection.link} className="tailait traiphai">{t(Network_connection.load)}</a>
        </span>

        <span className={Network_connection.fix}>
          <img className="mausacg" src={close}/>
        </span>
      </div>
    </h4>
  </div>
  )
  return (
    <div>
      <div className="thongbaoketnoi-container Font_text">
        {Data_Network}
      </div>
    </div>
  )
}

export default Networkconnection;

window.addEventListener("offline", (event) => {
  const online = document.getElementById("online");
  const offline = document.getElementById("offline");
  online.style.display = "none";
  offline.style.display = "block";
});

window.addEventListener("online", (event) => {
  const online = document.getElementById("online");
  const offline = document.getElementById("offline");
  online.style.display = "block";
  offline.style.display = "none";
  setInterval(async () => {
    online.style.display = "none";
  }, 4000);
});

var closebtns = document.getElementsByClassName("dongkets");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}