import React from "react";
import ReactDOM from "react-dom";
import './Section_columnist.css';
import { camxuc, Bon, troichay, chungkhoan } from '../../../../Component/Body/Section/Images';
import { user } from '../../../DataBase/Admin.json';
import { GoPrimitiveDot } from 'react-icons/go';
import parse from 'html-react-parser';
import { BsArrowRight, BsArrowReturnRight, BsHeart } from 'react-icons/bs';
import { BiComment } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Section_columnist() {

  return (
  	<div className="Section_columnist_background">
      <h4 className="Section_columnist_h4">
        Nổi bật trong tuần
        <p className="Section_columnist_p">Xem tất cả <BsArrowRight style={{color: 'red'}}/></p>
      </h4>
      <div className="Section_post_flex_div"></div>
        <div className="Section_post_flex2">
        {user.slice(user.length - 3).map((Readnews) => (
        <div className="Section_column_img_bhj">
          <Link 
              to={{
                  pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                  state: { Readnews }
                }}
          >
            <img src={Readnews.link_images} alt={Readnews.title} className="Section_column_img" />
          </Link>
          <div className="Section_column_img_bhj_all_oo">
           <div className="Section_column_img_bhj_all">
              <div className="Section_column_img_bhj_all_fl_icon">
                <GoPrimitiveDot className="Section_column_img_bhj_all_icongo"/>
                <p>Tin {Readnews.danh_muc}</p>
              </div>
              <Link 
              to={{
                  pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                  state: { Readnews }
                }}
              >
              <h3>{Readnews.title}</h3>
              </Link>
              <span className="Section_column_img_bhj_all_icongo_content">
                <p>{parse(Readnews.content)}</p>
              </span>
              <Link 
              to={{
                  pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                  state: { Readnews }
                }}
              >
              <div className="Section_column_img_bhj_all_fl_icon_icon2">
               Đọc toàn bộ
               <BsArrowReturnRight className="Section_column_img_bhj_all_icongo_content_sk"/>
              </div>
              </Link>
           </div>

            <div className="Section_column_img_bhj_flex8">
                <span className="Section_column_img_bhj_all_icongo_content_span">
                 <BsHeart className="Section_column_img_bhj_flex8s"/>
                 <p>1k</p>
                </span>
                <span className="Section_column_img_bhj_all_icongo_content_span">
                  <BiComment className="Section_column_img_bhj_flex8s"/>
                  <p>1k</p>
                </span>
            </div>
          </div>
        </div>
        ))}
      </div>
  	</div>
  );
}

export default Section_columnist;
