import './Offer_news.css';
import Readnews from '../../Container/Readnews';
import { user } from '../../../../DataBase/Admin';
import { Link } from "react-router-dom";
import { BiTimeFive } from 'react-icons/bi';

function Offer_news() {

  return (
  	<div className="Offer_news_h2_flex_all">
      <h2 className="Offer_news_h2">Tin đề xuất</h2>
        {user.slice(user.length - 3).map((Readnews) => (
        <div className="Offer_news_img_div_flex">
          <Link
              to={{
                    pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}/`,
                    state: { Readnews }
                  }}
          >
            <div className="Offer_news_img_div">
              <img src={Readnews.link_images} alt={Readnews.title} className="Offer_news_img"/>
            </div>
          </Link>

          <div className="Offer_news_img_div_p">
            <Link
              to={{
                    pathname: `/News/${Readnews.danh_muc_link}/`,
                    state: { Readnews }
                  }}
            >
           <p className="Offer_news_color2">{Readnews.danh_muc}</p>
           </Link>
          <p className="Hot_topics_news_images_date"><BiTimeFive/> {Readnews.Date}</p>
          </div>

          <Link
              to={{
                    pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}/`,
                    state: { Readnews }
                  }}
          >
          <h4 className="Offer_news_color1_h4">{Readnews.title}</h4>
          </Link>

        </div>
        ))}
  	</div>
  );
}

export default Offer_news;
