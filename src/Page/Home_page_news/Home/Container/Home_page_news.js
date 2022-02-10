import { useTranslation } from 'react-i18next';
import './Home_page_news.css';
// import { Data_news } from '../Data_news/Data_news';
import { user } from '../../../DataBase/Admin.json';
import { Link, useRouteMatch } from "react-router-dom";
import Readnews from '../../Read_news/Container/Readnews';
import Hashtag from '../../Hashtag/Hashtag';

import { FiChevronRight } from "react-icons/fi";
import { GoPrimitiveDot } from 'react-icons/go';
import { BsArrowRight } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';

const Home_page_news = function(props) {
const { t } = useTranslation()

const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
const randomUser = shuffle(user);
  return (
    <div id="news_background">
      <div className="Home_page_news_padding">

        <div className="Home_page_news_column">
          <div className="Home_page_news_row">
            <GoPrimitiveDot className="Home_page_news_icon"/>
            <p>Hot topic</p>
          </div>
          {user.slice(user.length - 1).map((Readnews) => (
          <div key={Readnews.id}>
           <Link
                      to={{
                            pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                            state: { Readnews } 
                          }}
              >
            <h1 className="Home_page_news_color">{Readnews.title}</h1>
            </Link>
            <div className="Home_page_news_row1">
              <p className="Home_page_news_row2_pos">27 phút trước</p>
               <Link
                      to={{
                            pathname: `/News/${Readnews.danh_muc_link}`,
                            state: { Readnews }
                          }}
              >
              <p className="Home_page_news_row2">{Readnews.danh_muc}</p>
              </Link>
            </div>
          </div>
          ))}
        </div>

        <div className="Home_page_news_scroll">
         {user.map((Readnews) => (
          <div className="Home_page_news_map_flex" key={Readnews.id}>
            <Link
                      to={{
                            pathname: `/News/${Readnews.danh_muc_link}`,
                            state: { Readnews } 
                          }}
            >
            <p className="Home_page_news_row_2_2">{Readnews.danh_muc}</p>
            </Link>
              <Link
                      to={{
                            pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                            state: { Readnews }
                          }}
              >
              <h4 className="Home_page_news_title">{Readnews.title}</h4>
              </Link>

              <div className="Home_page_news_map_row_2">
                <p className="Home_page_news_row_2"><BiTimeFive/>{Readnews.Date}</p>
                <Link className="Home_page_news_row_color"
                      to={{
                            pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                            state: { Readnews }
                          }}
                >Xem<BsArrowRight />
                </Link>
              </div>
            </div>
            ))}
        </div>
        
      </div>

    </div>
    )
}

export default Home_page_news;
