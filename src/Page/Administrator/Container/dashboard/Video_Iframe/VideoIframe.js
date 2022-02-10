import './VideoIframe.css';
import Header from '../../../Header/Header';
import Dashboard from '../container/Dashboard';
import { Video_iframe } from '../../../../DataBase/Admin';
import { AiFillDelete, AiOutlinePlus, AiOutlineSend, AiFillEye } from 'react-icons/ai';
import Axios from 'axios';
import { useState } from 'react';
import Delete from './Delete';

const VideoIframe = () =>  {
  
const url = "http://localhost:3001/Video_iframe"

const [data, SetData] = useState({
  title_video: "",
  image_video: "",
  Date_video: "",
  Video_video: "",
})

function submit(e){
  e.preventDefault();
  Axios.post(url,{
    title_video: data.title_video,
    image_video: data.image_video,
    Date_video: data.Date_video + Date_show,
    Video_video: data.Video_video
  })
  .then(res=>{
    console.log(res.data)
  })
}

function handle(e){
  const newdata={...data}
  newdata[e.target.id] = e.target.value
  SetData(newdata)
  console.log(newdata)
}


// lấy thời gian mặc định
const showdate = new Date();

const Date_show = showdate.getDate() +'-'+ (showdate.getMonth() + 1)+'-'+showdate.getFullYear();
const Dem = JSON.parse(JSON.stringify(Video_iframe)).length;

const [Showhide, SetShowhide] = useState(false)

  return (
  <div className="BaiDang_max_w_all_fl Font_text HomeDashboard_all_grids">
    <title>Tin tức - Video | WORLD SINGULARITY</title>
     <span className="DB1">
        <Dashboard/>
      </span>

      <div className="TEsthgb">      
          <span className="DB2">
            <Header/>
          </span>

      <span className="BD3">
          <div className="Video_iframe_test_alla_ppSk_sclr">
            <div className="Video_fmls Video_iframe_test_alla">
            <div className="Video_iframe_test_alla_pp BaiDang_max_w_o2">
              <span className="Video_iframe_test_alla_spano_spanm">
                <select className="BaiDang_max_w_select">
                      <option>Tất cả bài đăng ({Dem})</option>
                </select>
                 {Showhide &&  
                  <div className="BaiDang_max_w_abc_sl">
                    <label className="switch_admin">
                      <input type="checkbox" className="input_admin" />
                      <div className="slider_admin round_admins"></div>
                    </label>
                      <AiFillDelete/>
                      <p>Xóa tất cả</p>
                  </div>}
                {Showhide ? 
                <button onClick={() => SetShowhide(!Showhide)} className="BaiDang_max_w_abc_sl_abc">Hủy</button>
                :
                <button onClick={() => SetShowhide(!Showhide)} className="BaiDang_max_w_abc_sl_abc">Quản lý</button>}
              </span>
              <div className="Video_iframe_test_alla_with">
                <Delete/>
              </div>
            </div>
          
          <div className="Video_iframe_test_alla_spano_oi">
          <h1><AiOutlinePlus/>Thêm video</h1>
            <form onSubmit={(e)=> submit(e)} className="Video_iframe_test_alla_2">
              <span className="Video_iframe_test_alla_spano">
                <p>Nhập tiêu đề</p>
                <input type="text" placeholder="Tiêu đề" onChange={(e)=> handle(e)} id="title_video" value={data.title_video} className="Header_input" maxLength={150} minLength={10} required="required"/>
              </span>

              <span className="Video_iframe_test_alla_spano">
                <p>Ngày đăng</p>
               <input onChange={(e)=> handle(e)} id="Date_video" value={data.Date_video + Date_show} placeholder="Ngày đăng" type="text" className="Header_input"/>
              </span>
              
              <span className="Video_iframe_test_alla_spano">
                <p>Liên kết hình ảnh</p>
                 <input type="text" placeholder="Nhập liên kết hình ảnh hiển thị" className="Header_input" onChange={(e)=> handle(e)} id="image_video" value={data.image_video} required="required" />
              </span>

              <span className="Video_iframe_test_alla_spano">
                <p>Liên kết nhúng</p>
                <input type="text" placeholder="Nhập liên kết hiển thị" className="Header_input" onChange={(e)=> handle(e)} id="Video_video" value={data.Video_video} required="required" />
              </span>
              <div className="Video_iframe_test_allateksl">
                <div className="Video_iframe_test_allateksl_btn_div"><AiFillEye/>Xem trước</div>
                <button className="Video_iframe_test_alla_spano_btn">< AiOutlineSend />Xuất bản</button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </span>
    </div>
  </div>
  );
}

export default VideoIframe;
