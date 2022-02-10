import React from "react";
import ReactDOM from "react-dom";
import { useTranslation } from 'react-i18next';
import { nasa, neuralink, scope, spacex, Openai } from '../../Images';
import Slider from "react-slick";
import './Section_Partner.css';


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: true,
  arrows: false,
  responsive: [{
    breakpoint: 1024,
    settings: {
    slidesToShow: 3,
    slidesToScroll: 1,
    }
  },
  {
    breakpoint: 600,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
    slidesToShow: 4,
    slidesToScroll: 2
    }
  }]
};

const Data = [{
  id:1,
  img: nasa,
  title: 'Nasa',
  link: 'https://www.nasa.gov/'
},
{
  id:2,
  img: Openai,
  title: 'Openai',
  link: 'https://openai.com/'
},
{
  id:3,
  img: spacex,
  title: 'spacex',
  link: 'https://www.spacex.com/'
},
{
  id:4,
  img: scope,
  title: 'scope',
  link: 'https://www.solarsystemscope.com/'
},
{
  id:5,
  img: neuralink,
  title: 'neuralink',
  link: 'https://www.neuralink.com/'
}]

function Section_Partner() {

const { t } = useTranslation()

  return (
    <div className="nksdfksdbf">
   {/*    <span className="dfkjdhshk">
        {t("Đối tác hỗ trợ hàng đầu đến từ")}
      </span>*/}

      <Slider {...settings} className="client-d">

        {Data.map(({ img, title, link, id }) => (
        <a href={link} target="_blank" key={id} >
          <div className="dcxcxvvx" title={title}>
            <img src={img} className="kdmksdmksd"/>
          </div>
        </a>
        ))}

      </Slider>
    </div>
  );
}

export default Section_Partner;
