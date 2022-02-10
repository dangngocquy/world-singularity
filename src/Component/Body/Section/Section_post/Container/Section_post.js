import { useTranslation } from 'react-i18next';
import './Section_post.css';
import { camxuc, Bon, troichay, chungkhoan } from '../../Images';
import { MdChevronRight } from 'react-icons/md';
import ReactDOM from "react-dom";
import React, { Suspense, lazy, useState } from 'react';

const Section_post = function(props) {

const { t } = useTranslation();

const [loadBlog, setloadBlog] = useState(4);
const [seeMe, setSeeMe] = useState(false);
const [Data, setData] = useState([{
  id:1,
  title: 'Truyền dữ liệu thống kê chứng khoán',
  css: 'Section_post_box Section_post_column',
  img: chungkhoan,
  data: 'Dữ lịệu chứng khoán',
  active: '200+',
  content: 'Dữ liệu giúp tăng khả năng dự đoán thông qua biểu đồ chứng khoán giúp người dùng đưa ra kết quả chính xác nhất'
},
{
  id:2,
  title: 'Tăng biểu cảm cho AI',
  css: 'Section_post_box Section_post_column',
  img: camxuc,
  data: 'Dữ lịệu cảm xúc',
  active: '50+',
  content: 'Huấn luyện AI thấu hiểu cảm xúc người dùng đó là mục tiêu mà chúng tôi xây dựng mô hình dữ liệu cảm xúc cho AI này nhằm kết nối AI và mọi người gần nhau hơn'
},
{
  id:3,
  title: 'Giao tiếp AI một cách trôi chảy',
  css: 'Section_post_box Section_post_column',
  img: troichay,
  data: 'Dữ lịệu giao tiếp',
  active: '500+',
  content: 'Dữ liệu nhằm bổ sung sự thiếu sót của AI tránh tình trạng người dùng đặt câu hỏi nhưng AI lại không biết trả lời'
},
{
  id:4,
  title: 'Dữ liệu được truyền vào giúp trả lời được tất cả các câu hỏi của người dùng',
  css: 'Section_post_box Section_post_column',
  img: Bon,
  data: 'Dữ lịệu chatbox',
  active: '1000+',
  content: 'Nguồn dữ liệu mạnh mẽ thúc đẩy quá trình giao tiếp với người dùng và khách hàng thông qua dịch vụ của chúng tôi xây dựng một mô hình chatbox hoàn chỉnh'
},
{
  id:5,
  title: 'Dữ liệu được truyền vào giúp trả lời được tất cả các câu hỏi của người dùng',
  css: 'Section_post_box Section_post_column',
  img: Bon,
  data: 'Dữ lịệu chatbox',
  active: '1000+',
  content: 'Nguồn dữ liệu mạnh mẽ thúc đẩy quá trình giao tiếp với người dùng và khách hàng thông qua dịch vụ của chúng tôi xây dựng một mô hình chatbox hoàn chỉnh'
},
{
  id:6,
  title: 'Dữ liệu được truyền vào giúp trả lời được tất cả các câu hỏi của người dùng',
  css: 'Section_post_box Section_post_column',
  img: Bon,
  data: 'Dữ lịệu chatbox',
  active: '1000+',
  content: 'Nguồn dữ liệu mạnh mẽ thúc đẩy quá trình giao tiếp với người dùng và khách hàng thông qua dịch vụ của chúng tôi xây dựng một mô hình chatbox hoàn chỉnh'
},
{
  id:7,
  title: 'Dữ liệu được truyền vào giúp trả lời được tất cả các câu hỏi của người dùng',
  css: 'Section_post_box Section_post_column',
  img: Bon,
  data: 'Dữ lịệu chatbox',
  active: '1000+',
  content: 'Nguồn dữ liệu mạnh mẽ thúc đẩy quá trình giao tiếp với người dùng và khách hàng thông qua dịch vụ của chúng tôi xây dựng một mô hình chatbox hoàn chỉnh'
},
{
  id:8,
  title: 'Dữ liệu được truyền vào giúp trả lời được tất cả các câu hỏi của người dùng',
  css: 'Section_post_box Section_post_column',
  img: Bon,
  data: 'Dữ lịệu chatbox',
  active: '1000+',
  content: 'Nguồn dữ liệu mạnh mẽ thúc đẩy quá trình giao tiếp với người dùng và khách hàng thông qua dịch vụ của chúng tôi xây dựng một mô hình chatbox hoàn chỉnh'
}]);

const Functionblogs = () => {
    setSeeMe(!seeMe);
  };


const BlogsDATA = Data.slice(0, loadBlog).map((blog, i) => {
    return (
        <div className={blog.css} key={i}>

          <img src={blog.img} alt="Data"/>
            <div className="Section_post_rowpaddings">
            <div className="Section_post_row">
              <p>{t(blog.data)}</p>
              <p>{blog.active}</p>
            </div>
            <span className="Section_post_content2iconspan_ju_op">
              <p className="Section_post_content">{t(blog.title)}</p>
              <p className="Section_post_content2">{t(blog.content)}</p>
            </span>
            </div>
            <span className="Section_post_content2iconspan_ju">
              <span className="Section_post_content2iconspan"><MdChevronRight className="Section_post_content2iconmd"/>Tìm hiểu thêm</span>
            </span>
        </div>     
    );
  });

  return (
  <div className="Section_post_padding" id="Section_post">
    <h4 className="Section_post_color">{t('Dữ liệu được sử dụng phổ biến nhất')}</h4>
    <div className="Section_post_margin_top Font_text">
      <div className="Section_post_flex">
        {BlogsDATA}
      </div>
    </div>
    <div className="Section_post_button_flex">
      <button disabled={Data.length === BlogsDATA.length}
              type="button"
              onClick={() => setloadBlog((LOAD) => LOAD + 4)}
              className="Section_post_button">
        Xem thêm
      </button>

     {/* <button type="button" onClick={Functionblogs}>
        xem tất cả
      </button>
      {seeMe && BlogsDATA}*/}
    </div>
  </div>
  )
}
export default Section_post;