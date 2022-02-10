import './Hot_topics_news.css';
import { GoPrimitiveDot } from 'react-icons/go';
import Readnews from '../../Container/Readnews';
import { user } from '../../../../DataBase/Admin';
import { Link } from "react-router-dom";
import { BsHeart } from 'react-icons/bs';
import { BiTimeFive, BiComment } from 'react-icons/bi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import parse from 'html-react-parser';
import React, { useState } from 'react';
import ReactPaginate from "react-paginate";
import dart_header_0 from '../../../../../Image/timeline/dart_header_0.jpg';
import steam_day_web_release from '../../../../../Image/timeline/steam_day_web_release.jpg';
import Crew from '../../../../../Image/timeline/Crew.jpg';

function Hot_topics_news() {

const [users, setUsers] = useState(user.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const DATATINTUC = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((Readnews) => {
      return (
        <div className="Hot_topics_news_images_flex">
            <div className="Hot_topics_news_images">
              <img src={Readnews.link_images} alt={Readnews.title} width="100%" height="200px" className="Hot_topics_news_images_img"/>
              <Link
              to={{
                    pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}/`,
                    state: { Readnews }
                  }}
                  className="Hot_topics_news_images_title_colors"
              >
              <p className="Hot_topics_news_images_title">{Readnews.title}</p>
              </Link>
                <span className="Hot_topics_news_images_titlesc">{parse(Readnews.content)}</span>
              <span className="Hashtag_padding_btnMms">
              <p className="Hot_topics_news_images_date"><BiTimeFive/> {Readnews.Date}</p>
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
              </span>
            </div>
          </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  return (
    <div className="Hot_topics_news_padidng">
      <h1 className="Hot_topics_news_h1"><GoPrimitiveDot className="Hot_topics_news_icon"/>TIN MỚI CẬP NHẬT</h1>
      <div className="Hot_topics_news_padidng_hottopis">
       {DATATINTUC}
      </div>
      
      <ReactPaginate
        previousLabel={<FiChevronLeft className="LRPRENEXT"/>}
        nextLabel={<FiChevronRight className="LRPRENEXT"/>}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"DesignALLPRENEXT"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeLinkClassName={"NumberP"}
        pageLinkClassName={"PageLinkNuber"}
      />
    </div>
  );
}

export default Hot_topics_news;
