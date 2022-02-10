import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Data_icon } from '../Data/Data_planet';

import './Element_planet.css'; 

const Element_planet = function(props) {
const { t } = useTranslation()

var cucusss = document.getElementsByClassName("chon_hanh_tinh");
for (var i = 0; i < cucusss.length; i++) {
  cucusss[i].addEventListener("click", function (event) {
    changeBackground(this.id);
  });
}
function changeBackground(id) {
  const cls = [
    "background-image-saohoa",
    "background-image-saotho",
    "background-image-saothuy",
    "background-image-traidat",
    "background-image-saokim",
    "background-image-saomoc",
    "background-image-saothienvuong",
    "background-image-saohaivuong"
  ];
  document.querySelector(".ppyhis").classList.remove(...cls);

  switch (id) {
    case "saohoa":
      document.querySelector(".ppyhis").classList.add("background-image-saohoa");
      break;
    case "saotho":
      document.querySelector(".ppyhis").classList.add("background-image-saotho");
      break;
    case "saothuy":
      document.querySelector(".ppyhis").classList.add("background-image-saothuy");
      break;
    case "traidat":
      document.querySelector(".ppyhis").classList.add("background-image-traidat");
      break;
    case "saokim":
      document.querySelector(".ppyhis").classList.add("background-image-saokim");
      break;
    case "saomoc":
      document.querySelector(".ppyhis").classList.add("background-image-saomoc");
      break;
    case "saothienvuong":
      document.querySelector(".ppyhis").classList.add("background-image-saothienvuong");
      break;
    case "saohaivuong":
      document.querySelector(".ppyhis").classList.add("background-image-saohaivuong");
      break;
    default:
      console.log("abc");
      break;
  }
}

  return (
    <div className="chiamdko">

    {Data_icon.map(({ id, name, images, link, cai_dat, id_click, cai_dat_two, content, icons }) => (
    <div key={id}>
      <div className="chiahtall">
          <div className="dsdsakfm">
              
            <div className="sndoasjds">
              <a href={link} id={id_click}>
                <img src={require(`../../../../../Image/Planet/${images}`).default} id={id_click} className={cai_dat_two}  alt={t('alt_img') + "'" + t(name) + "'"}/>
              </a>
            </div>

            <div>
              <a href={link} className={cai_dat} id={id_click}>
                <span className="sdndksfnv">
                  <div>{icons}</div>
                  {t(name)}
                </span>

                <span className="rieng_lanj">{content}...</span>
             </a>
           </div>

          </div>
      </div>
          <div className="sadojdaosdjsc"></div>
      </div>
    ))}

    </div>
  )
}

export default Element_planet;
