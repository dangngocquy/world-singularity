import React, { useState, useEffect, useRef, Component } from "react";
import Axios from 'axios';
import ReactDOM from "react-dom";
import Data_Admin from '../../../DataBase/Admin';
import './Admin.css';
import Header from '../../Header/Header';

import { FaEye } from 'react-icons/fa';
import { AiOutlineSend, AiFillSetting } from 'react-icons/ai';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { BsFillCloudCheckFill } from 'react-icons/bs';
import { RiQuestionMark } from 'react-icons/ri';
import { VscCopy } from 'react-icons/vsc';

import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { VscAccount, VscClose } from 'react-icons/vsc';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';

const useToggle = (initialValue = true) => {
  const [value, setValue] = useState(initialValue);

  return [
    value,
    {
      set: setValue,
      toggle: () => setValue(flag => !flag)
    }
  ];
};

//ADD list danh_muc
const useKeyPress = function(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  return keyPressed;
};

const items = [
  { id: 1, danhmuc: "Khoa học" },
  { id: 2, danhmuc: "Vũ trụ" },
  { id: 3, danhmuc: "Công nghệ" },
  { id: 4, danhmuc: "Khám phá" },
  { id: 5, danhmuc: "Thế giới" }
];

const DANHMUC = ({ item, active, setSelected, setHovered }) => (
  <div>
  <input type="button"
        className={`item ${active ? "active" : ""}`}
        onClick={() => setSelected(item)}
        onMouseEnter={() => setHovered(item)}
        onMouseLeave={() => setHovered(undefined)}
        value={item.danhmuc}
  />
  </div>
);

//add Nhóm
const KeyNHOM = function(targetKeyNhom) {
  const [keyPressedNhom, setKeyPressedNhom] = useState(false);

  function downHandler_nhom({ keyNhom }) {
    if (keyNhom === targetKeyNhom) {
      setKeyPressedNhom(true);
    }
  }

  const upHandlerNhom = ({ keyNhom }) => {
    if (keyNhom === targetKeyNhom) {
      setKeyPressedNhom(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", downHandler_nhom);
    window.addEventListener("keyup", upHandlerNhom);

    return () => {
      window.removeEventListener("keydown", downHandler_nhom);
      window.removeEventListener("keyup", upHandlerNhom);
    };
  });

  return keyPressedNhom;
};

const nhoms = [
  { id: 1, teams: "Nhóm nội dung" },
  { id: 2, teams: "Nhóm kiểm duyệt" },
  { id: 3, teams: "Nhóm thông tin" },
  { id: 4, teams: "Nhóm ..." },
  { id: 5, teams: "Nhóm ..." }
];

const NHOM = ({ itemNhom, activeNhom, setSelectedNhom, setHoveredNhom }) => (
  <div>
  <input type="button"
         className={`itemNhom ${activeNhom ? "activeNhom" : ""}`}
         onClick={() => setSelectedNhom(itemNhom)}
         onMouseEnter={() => setHoveredNhom(itemNhom)}
         onMouseLeave={() => setHoveredNhom(undefined)}
         value={itemNhom.teams}
  />
  </div>
);
const Admin = () => {

const url = "http://localhost:3001/user"

const [data, SetData] = useState({
  title: "",
  content: "",
  Date: "",
  title_img: "",
  teams: "",
  danh_muc: "",
  images: "",
  link_page: "",
  Time: "",
  link_images: "",
  danh_muc_link: "",
  De_xuat: ""
})

function submit(e){
  e.preventDefault();
  Axios.post(url,{
    title: data.title,
    content: PostData,
    Date: data.Date + Date_show,
    title_img: data.title_img,
    teams: selectedNhom ? selectedNhom.teams : "Teams" + " World Singularity",
    danh_muc: selected.danhmuc,
    images: data.images,
    link_page: Date_show + "-" + parseStringDataLayer(data.title),
    Time: data.Time + Time_show,
    link_images: data.link_images,
    danh_muc_link: parseStringDataLayer(selected ? selected.danhmuc : "Chưa chọn danh mục"),
    De_xuat: data.De_xuat
    // title_img: parseInt(data.title_img)
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


//slug
const [value, setValue] = useState("Nhập tiêu đề");
const [msg, setMsg] = useState(false);
const refResult = useRef();

const parseStringDataLayer = (text) => {
    const textParsed = text
      .trim()
      .toString()
      .normalize("NFD")
      .replace(/([\u0300-\u036f]|[^a-zA-Z0-9\s])/g, "")
      .replace(/[\s]+/g, "-")
      .replace(/\-\-+/g, "-")
      .replace(/^-+|-+$/, "")
      .replace(/&/g, "-and-")
      .toLowerCase();

    return textParsed;
  };

  //Event

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleClick = (event) => {
    event.target.select();
  };

  const handleCopyText = () => {
    refResult.current.select();
    document.execCommand("copy");
    setMsg(true);
  };

  useEffect(() => {
    setMsg(false);
  }, [value]);

// lấy thời gian mặc định
const showdate = new Date();
const Time_show = new Date().toLocaleTimeString();

const Date_show = showdate.getDate()+'-'+(showdate.getMonth()+1)+'-'+showdate.getFullYear();

// show hide text
const [isOpen, isOpenActions] = useToggle(false);
const [isOpen1, isOpenActions1] = useToggle(false);
const [isOpen2, isOpenActions2] = useState(true);
const [isOpen3, isOpenActions3] = useState(false);
const [isOpen4, isOpenActions4] = useToggle(false);
const [isOpen5, isOpenActions5] = useToggle(false);
const [isOpen6, isOpenActions6] = useToggle(false);
const [isOpen7, isOpenActions7] = useState(true);
const [isOpen8, isOpenActions8] = useState(false);
const [isOpen9, isOpenActions9] = useToggle(false);
const [isOpen10, isOpenActions10] = useToggle(false);

//CK editor
const [ PostData, setPostData ] = useState("");
const [ ShowData, setShowData ] = useState(0);
const ClickChange = (e,editor) => {
  const datae = editor.getData();
  setPostData(datae);
}
// add danh_muc
  const [selected, setSelected] = useState(undefined);
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");
  const [cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  useEffect(() => {
    if (items.length && downPress) {
      setCursor(prevState =>
        prevState < items.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress]);
  useEffect(() => {
    if (items.length && upPress) {
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);
  useEffect(() => {
    if (items.length && enterPress) {
      setSelected(items[cursor]);
    }
  }, [cursor, enterPress]);
  useEffect(() => {
    if (items.length && hovered) {
      setCursor(items.indexOf(hovered));
    }
  }, [hovered]);

// add nhóm
const [selectedNhom, setSelectedNhom] = useState(undefined);
  const downPressNhom = KeyNHOM("ArrowDown");
  const upPressNhom = KeyNHOM("ArrowUp");
  const enterPressNhom = KeyNHOM("Enter");
  const [cursorNhom, setCursorNhom] = useState(0);
  const [hoveredNhom, setHoveredNhom] = useState(undefined);

  useEffect(() => {
    if (nhoms.lengthNhom && downPressNhom) {
      setCursorNhom(prevStateNhom =>
        prevStateNhom < nhoms.lengthNhom - 1 ? prevStateNhom + 1 : prevStateNhom
      );
    }
  }, [downPressNhom]);
  useEffect(() => {
    if (nhoms.lengthNhom && upPressNhom) {
      setCursorNhom(prevStateNhom => (prevStateNhom > 0 ? prevStateNhom - 1 : prevStateNhom));
    }
  }, [upPressNhom]);
  useEffect(() => {
    if (nhoms.lengthNhom && enterPressNhom) {
      setSelectedNhom(nhoms[cursorNhom]);
    }
  }, [cursorNhom, enterPressNhom]);
  useEffect(() => {
    if (nhoms.lengthNhom && hoveredNhom) {
      setCursorNhom(nhoms.indexOf(hoveredNhom));
    }
  }, [hoveredNhom]);


  const [toggleMenu_reponsive, setToggleMenu_reponsive] = useState(false);

  return (
    <>
      <title>Bài đăng: Chỉnh sửa | WORLD SINGULARITY</title>
      <span className="Administrator_admin_from_span_dash">
        <Link to="/Administrator/Dashboard">
          <FiChevronLeft className="Header_admin_img_Background_icon" />
        </Link>
        <Header />
      </span>

      <form onSubmit={(e)=> submit(e)} className="Administrator_admin_from_span_button1_Editor_a_grid">

        <div className="Administrator_admin_from ADP1">
          <input placeholder="Tiêu đề" type="text" value={data.title} onChange={(e)=> handle(e)} id="title" className="Header_input" maxLength={150} minLength={30} required="required"/>
          
          <BsFillCloudCheckFill className="Administrator_admin_from_span_size"/>

          <div>
            <span className="Administrator_admin_from_span">
              <div className="Administrator_admin_from_fl">
                <span className="Administrator_admin_from_span_button1">
                  <FaEye/>
                  <span className="Administrator_admin_from_span_button1_mb">Xem trước</span>
                </span>
                <BiChevronDown className="Administrator_admin_from_span_button_sicon"/>
              </div>

              <button className="Administrator_admin_from_span_button">
                 <AiOutlineSend/>
                 <span className="Administrator_admin_from_span_button1_mb">Xuất bản</span>
              </button>
            </span>
          </div>

        </div>

        <span className="Administrator_admin_from_span_button1_Editor ADP2">
              {/*<Something/>*/}
              {/*<a onClick={() => setShowData(!ShowData)}>{ShowData ? 'Ẩn dữ liệu': 'Hiện dữ liệu'}</a>*/}
                <CKEditor 
                          editor={ClassicEditor} 
                          data={PostData}
                          onChange={ClickChange} 
                          id="content"
                          required="required" 
                          config={{
                                    toolbar: [
                                      "heading", "|",
                                      "bold", "italic", "link", "bulletedList", "alignment", "numberedList", "|",
                                      "blockQuote", "|",
                                      "outdent",  "indent", "|",
                                      "imageTextAlternative", "imageUpload", "imageStyle:full", "imageStyle:side", "|",
                                      "mediaEmbed", "ckfinder", "insertTable", "|",
                                      "undo", "redo"
                                    ]
                                  },
                                  {
                                    placeholder: "Nhập ý tưởng của bạn...",
                                    language: 'vi'
                                  }} 
                />
              {/*{ShowData ? PostData : ''}*/}
            </span>

{/*Mobile menu*/}
    <div className="Administrator_oo">
      {toggleMenu_reponsive
        ? <VscClose color="rgb(146, 171, 207)" size={27} onClick={() => setToggleMenu_reponsive(false)} className="animation_extra"/>
        : <AiFillSetting color="rgb(146, 171, 207)" size={27} onClick={() => setToggleMenu_reponsive(true)} className="animation_extra"/>}
      {toggleMenu_reponsive && (
      <div className="ADmin_llnone animation_extra Mobile_header_color_hover">
        
        <div className="Administrator_admin_from_fl_flex_form">
              <div className="Administrator_admin_from_fl_flex_width">
                <p>Cài Đặt bài Đăng</p>
                <a onClick={isOpenActions9.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen9 ? 
                  <p className="Administrator_admin_hashtag">
                    <BiChevronUp style={{fontSize: '25px'}}/>Quản lý bài băng
                  </p> 
                  : 
                  <p className="Administrator_admin_hashtag">
                    <BiChevronDown style={{fontSize: '25px'}}/>Quản lý bài băng
                  </p>}
                </a>
                 {isOpen9 ? <div className="Admin_animation">
                              <input onChange={(e)=> handle(e)} id="teams" value={selectedNhom ? selectedNhom.teams : "Vui lòng chọn nhóm"} placeholder="Nhóm quản lý bài viết" type="text" className="Header_input" required="required"/>
                              <div className="Administrator_admin_hashtag_p">
                                {nhoms.map((itemNhom, inhom) => (
                                  <NHOM
                                    key={itemNhom.id}
                                    activeNhom={inhom === cursorNhom}
                                    itemNhom={itemNhom}
                                    setSelectedNhom={setSelectedNhom}
                                    setHoveredNhom={setHoveredNhom}
                                  />
                                ))}
                              </div>
                            </div>
                  : null}

                <a onClick={isOpenActions10.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen10 ? 
                  <p className="Administrator_admin_hashtag">
                    <BiChevronUp style={{fontSize: '25px'}}/>Danh mục
                  </p> 
                  : 
                  <p className="Administrator_admin_hashtag">
                    <BiChevronDown style={{fontSize: '25px'}}/>Danh mục
                  </p>}
                </a>
                 {isOpen10 ? <div className="Admin_animation">
                              <input onChange={(e)=> handle(e)} value={selected ? selected.danhmuc : "Chưa chọn danh mục"}  placeholder="Danh mục" type="text" className="Header_input" required="required" maxLength={20} minLength={5}/>
                              <div className="Administrator_admin_hashtag_p">
                                {items.map((item, i) => (
                                    <DANHMUC
                                      key={item.id}
                                      active={i === cursor}
                                      item={item}
                                      setSelected={setSelected}
                                      setHovered={setHovered}
                                    />
                                  ))}
                              </div>
                            </div>
                  : null} 

                <a onClick={isOpenActions.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen ? 
                  <p className="Administrator_admin_hashtag">
                    <BiChevronUp style={{fontSize: '25px'}}/>Gán nhãn (Tags)
                  </p> 
                  : 
                  <p className="Administrator_admin_hashtag">
                    <BiChevronDown style={{fontSize: '25px'}}/>Gán nhãn (Tags)
                  </p>}
                </a>
                 {isOpen ? <div className="Admin_animation">
                              <input placeholder="Phân tách các nhãn bằng dấu phẩy" type="text" className="Header_input"/>
                              <div className="Administrator_admin_hashtag_p">
                                <input type="button" value="Vũ trụ" />
                                <input type="button" value="Thiên văn học" />
                                <input type="button" value="World Singularity" />
                                <input type="button" value="Không gian" />
                                <input type="button" value="Hệ mặt trời" />
                                <input type="button" value="Trí tuệ nhân tạo" />
                              </div>
                            </div>
                   : null}

                <a onClick={isOpenActions1.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen1 ? 
                  <p className="Administrator_admin_hashtag">
                    <BiChevronUp style={{fontSize: '25px'}}/>
                      <div className="Administrator_admin_hashtag_p_output">Được xuất bản vào
                        <span className="Administrator_admin_hashtag_p_flex">{Date_show} <span>{Time_show}</span></span>
                      </div>
                  </p> 
                  : 
                  <p className="Administrator_admin_hashtag">
                    <BiChevronDown style={{fontSize: '25px'}}/>
                      <div className="Administrator_admin_hashtag_p_output">Được xuất bản vào
                        <span className="Administrator_admin_hashtag_p_flex">{Date_show} <span>{Time_show}</span></span>
                      </div>
                  </p>}
                </a>
                 {isOpen1 ? <div className="Administrator_admin_hashtag_checkbox Admin_animation">
                              <span className="Administrator_admin_hashtag_p_flex_date">
                                <label className="switch_admin" for="checkbox_six">
                                  <input
                                    type="checkbox"
                                    id="isOpen2"
                                    value={isOpen2}
                                    onChange={(e) => isOpenActions2(e.target.checked)}
                                    id="checkbox_six" 
                                    className="input_admin"
                                    checked="true"
                                  />
                                  <div className="slider_admin round_admins"></div>
                                </label>
                                <label htmlFor="isOpen2">
                                  Tự động
                                </label>
                              </span>

                              <span className="Administrator_admin_hashtag_p_flex_date">
                                <label className="switch_admin" for="checkbox_seven">
                                  <input
                                    type="checkbox"
                                    id="isOpen3"
                                    value={isOpen3}
                                    onChange={(e) => isOpenActions3(e.target.checked)}
                                    id="checkbox_seven" 
                                    className="input_admin" 
                                  />
                                  <div className="slider_admin round_admins"></div>
                                </label>
                                <label htmlFor="isOpen3">
                                  Đặt ngày và giờ
                                </label>
                              </span>

                              {isOpen2 || isOpen3 ? (
                                <div className="Administrator_admin_hashtag_p_output_test_div">
                                  {isOpen2 && <span className="Administrator_admin_hashtag_p_output_test">Ngày đăng</span>}
                                  {isOpen3 && 
                                    <span className="Administrator_admin_hashtag_p_flex_time">
                                      <input onChange={(e)=> handle(e)} id="Date" value={data.Date + Date_show} placeholder="Ngày đăng" type="text" readOnly="true"/>
                                      <input onChange={(e)=> handle(e)} id="Time" value={data.Time + Time_show} placeholder="Giờ đăng" type="time"/>
                                    </span>
                                  }
                                </div>
                              ) : (
                                <div className="Administrator_admin_hashtag_p_output_test">Vui lòng chọn thời gian</div>
                              )}
    
                            </div>
                   : null}

                    <a onClick={isOpenActions4.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen4 ? 
                      <p className="Administrator_admin_hashtag">
                        <BiChevronUp style={{fontSize: '25px'}}/>Liên kết
                      </p> 
                      : 
                      <p className="Administrator_admin_hashtag">
                        <BiChevronDown style={{fontSize: '25px'}}/>Liên kết
                      </p>}
                    </a>
                     {isOpen4 ? <div className="Administrator_admin_hashtag_checkbox_div Admin_animation">
                                  <p>Liên kết cố định <RiQuestionMark className="Administrator_admin_hashtag_icons"/></p>
                                  <textarea readOnly 
                                            placeholder="http://localhost:3000/News/..." 
                                            type="text" 
                                            ref={refResult} 
                                            onChange={(e)=> handle(e)} 
                                            value={"http://localhost:3000/News/" + parseStringDataLayer(selected ? selected.danhmuc : "Chưa chọn danh mục") + "/" + Date_show + "-" + parseStringDataLayer(data.title)} 
                                            id="link_page" 
                                            className="Administrator_admin_hashtag_link_active Auto_size_textarea"
                                  >
                                  </textarea>
                                  <a variant="primary" onClick={handleCopyText} className="Administrator_admin_hashtag_coppy">Sao chép liên kết<VscCopy/></a>
                                  <div className="Administrator_admin_hashtag_p_output_test_div">
                                    <span className="Administrator_admin_hashtag_p_flex_date">
                                    <label className="switch_admin" for="checkbox_for">
                                      <input
                                        type="checkbox"
                                        id="isOpen7"
                                        value={isOpen7}
                                        onChange={(e) => isOpenActions7(e.target.checked)}
                                        id="checkbox_for" 
                                        className="input_admin"
                                        checked="true" 
                                      />
                                      <div className="slider_admin round_admins"></div>
                                    </label>
                                    <label htmlFor="isOpen7">
                                        Liên kết cố định tự động
                                    </label>
                                  </span>

                                  <span className="Administrator_admin_hashtag_p_flex_date">
                                    <label className="switch_admin" for="checkbox_five">
                                      <input
                                        type="checkbox"
                                        id="isOpen8"
                                        value={isOpen8}
                                        onChange={(e) => isOpenActions8(e.target.checked)}
                                        id="checkbox_five" 
                                        className="input_admin" 
                                      />
                                      <div className="slider_admin round_admins"></div>
                                    </label>
                                    <label htmlFor="isOpen8">
                                      Liên kết cố định tùy chỉnh
                                    </label>
                                  </span>

                                  {isOpen7 || isOpen8 ? (
                                    <div className="Administrator_admin_hashtag_p_output_test_div">
                                      {isOpen7 && <span className="Administrator_admin_hashtag_p_output_test">Liên kết cố định tự động</span>}
                                      {isOpen8 && 
                                        <span>
                                          <input readOnly placeholder="http://localhost:3030/News/..." type="text" ref={refResult} onChange={(e)=> handle(e)} value={parseStringDataLayer(data.title)} id="link_page"/>
                                        </span>
                                      }
                                    </div>
                                  ) : (
                                    <div className="Administrator_admin_hashtag_p_output_test">Vui lòng chọn liên kết trang</div>
                                  )}
                                </div>
                                 <p className="Administrator_admin_hashtag_LK_TD">Liên kết tiêu đề <RiQuestionMark className="Administrator_admin_hashtag_icons"/></p>
                                 <input placeholder="Thêm liên kết tiêu đề" type="text" className="Header_input Header_input_2"/>

                                 <p className="Administrator_admin_hashtag_LK_TD">Liên kết Hình ảnh (Thủ công)<RiQuestionMark className="Administrator_admin_hashtag_icons"/></p>
                                 <input  onChange={(e)=> handle(e)} placeholder="Thêm liên kết hình ảnh" type="text" className="Header_input Header_input_2" id="link_images" value={data.link_images}/>

                                 <p className="Administrator_admin_hashtag_LK_TD">Tiêu đề ảnh <RiQuestionMark className="Administrator_admin_hashtag_icons"/></p>
                                 <input  onChange={(e)=> handle(e)} placeholder="Nhập tiêu đề ảnh" type="text" className="Header_input Header_input_2" id="title_img" value={data.title_img}/>
                                 <p className="Administrator_admin_hashtag_LK_TD Administrator_admin_hashtag_LK_TD_2">Thêm liên kết đính kèm khác</p>
                                </div>
                       : null}

                      <a onClick={isOpenActions5.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen5 ? 
                        <p className="Administrator_admin_hashtag">
                          <BiChevronUp style={{fontSize: '25px'}}/>Mô tả tìm kiếm
                        </p> 
                        : 
                        <p className="Administrator_admin_hashtag">
                          <BiChevronDown style={{fontSize: '25px'}}/>Mô tả tìm kiếm
                        </p>}
                      </a>
                       {isOpen5 ? <div className="Admin_animation">
                                    <input onChange={(e)=> handle(e)} id="De_xuat" value={data.De_xuat} placeholder="Nhập mô tả tìm kiếm" type="text" className="Header_input"/>
                                  </div>
                        : null}

                      <a onClick={isOpenActions6.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen6 ? 
                        <p className="Administrator_admin_hashtag">
                          <BiChevronUp style={{fontSize: '25px'}}/>Tùy chọn
                        </p> 
                        : 
                        <p className="Administrator_admin_hashtag">
                          <BiChevronDown style={{fontSize: '25px'}}/>Tùy chọn
                        </p>}
                      </a>

                       {isOpen6 ? <div className="Administrator_admin_hashtag_checkbox_all_div Admin_animation">
                                    <p className="Administrator_admin_hashtag_lineheight_2">Bình luận, nhận xét của người đọc</p>
                                    <span>
                                      <label className="switch_admin" for="checkbox_one">
                                        <input type="checkbox" id="checkbox_one" className="input_admin" />
                                        <div className="slider_admin round_admins"></div>
                                      </label>
                                      <p className="Administrator_admin_hashtag_lineheight">Cho phép</p>
                                    </span>
                                    <span>
                                      <label className="switch_admin" for="checkbox_two">
                                        <input type="checkbox" id="checkbox_two" className="input_admin" />
                                        <div className="slider_admin round_admins"></div>
                                      </label>
                                      <p className="Administrator_admin_hashtag_lineheight">Không cho phép, hiển thị bình luận hiện có</p>
                                    </span>
                                    <span>
                                      <label className="switch_admin" for="checkbox_three">
                                        <input type="checkbox" id="checkbox_three" className="input_admin" />
                                        <div className="slider_admin round_admins"></div>
                                      </label>
                                      <p className="Administrator_admin_hashtag_lineheight">Không cho phép, ẩn bình luận hiện có</p>
                                    </span>
                                  </div>
                        : null}

                </div>
              </div>

      </div>
      )}
    </div>
{/*kết thúc mobile menu*/}

            <div className="Administrator_admin_from_fl_flex_form ADP3">
              <div className="Administrator_admin_from_fl_flex_width">
                <p>Cài Đặt bài Đăng</p>
                <a onClick={isOpenActions9.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen9 ? 
                  <p className="Administrator_admin_hashtag">
                    <BiChevronUp style={{fontSize: '25px'}}/>Quản lý bài băng
                  </p> 
                  : 
                  <p className="Administrator_admin_hashtag">
                    <BiChevronDown style={{fontSize: '25px'}}/>Quản lý bài băng
                  </p>}
                </a>
                 {isOpen9 ? <div className="Admin_animation">
                              <input onChange={(e)=> handle(e)} id="teams" value={selectedNhom ? selectedNhom.teams : "Vui lòng chọn nhóm"} placeholder="Nhóm quản lý bài viết" type="text" className="Header_input" required="required"/>
                              <div className="Administrator_admin_hashtag_p">
                                {nhoms.map((itemNhom, inhom) => (
                                  <NHOM
                                    key={itemNhom.id}
                                    activeNhom={inhom === cursorNhom}
                                    itemNhom={itemNhom}
                                    setSelectedNhom={setSelectedNhom}
                                    setHoveredNhom={setHoveredNhom}
                                  />
                                ))}
                              </div>
                            </div>
                  : null}

                <a onClick={isOpenActions10.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen10 ? 
                  <p className="Administrator_admin_hashtag">
                    <BiChevronUp style={{fontSize: '25px'}}/>Danh mục
                  </p> 
                  : 
                  <p className="Administrator_admin_hashtag">
                    <BiChevronDown style={{fontSize: '25px'}}/>Danh mục
                  </p>}
                </a>
                 {isOpen10 ? <div className="Admin_animation">
                              <input onChange={(e)=> handle(e)} value={selected ? selected.danhmuc : "Chưa chọn danh mục"}  placeholder="Danh mục" type="text" className="Header_input" required="required" maxLength={20} minLength={5}/>
                              <div className="Administrator_admin_hashtag_p">
                                {items.map((item, i) => (
                                    <DANHMUC
                                      key={item.id}
                                      active={i === cursor}
                                      item={item}
                                      setSelected={setSelected}
                                      setHovered={setHovered}
                                    />
                                  ))}
                              </div>
                            </div>
                  : null} 

                <a onClick={isOpenActions.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen ? 
                  <p className="Administrator_admin_hashtag">
                    <BiChevronUp style={{fontSize: '25px'}}/>Gán nhãn (Tags)
                  </p> 
                  : 
                  <p className="Administrator_admin_hashtag">
                    <BiChevronDown style={{fontSize: '25px'}}/>Gán nhãn (Tags)
                  </p>}
                </a>
                 {isOpen ? <div className="Admin_animation">
                              <input placeholder="Phân tách các nhãn bằng dấu phẩy" type="text" className="Header_input"/>
                              <div className="Administrator_admin_hashtag_p">
                                <input type="button" value="Vũ trụ" />
                                <input type="button" value="Thiên văn học" />
                                <input type="button" value="World Singularity" />
                                <input type="button" value="Không gian" />
                                <input type="button" value="Hệ mặt trời" />
                                <input type="button" value="Trí tuệ nhân tạo" />
                              </div>
                            </div>
                   : null}

                <a onClick={isOpenActions1.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen1 ? 
                  <p className="Administrator_admin_hashtag">
                    <BiChevronUp style={{fontSize: '25px'}}/>
                      <div className="Administrator_admin_hashtag_p_output">Được xuất bản vào
                        <span className="Administrator_admin_hashtag_p_flex">{Date_show} <span>{Time_show}</span></span>
                      </div>
                  </p> 
                  : 
                  <p className="Administrator_admin_hashtag">
                    <BiChevronDown style={{fontSize: '25px'}}/>
                      <div className="Administrator_admin_hashtag_p_output">Được xuất bản vào
                        <span className="Administrator_admin_hashtag_p_flex">{Date_show} <span>{Time_show}</span></span>
                      </div>
                  </p>}
                </a>
                 {isOpen1 ? <div className="Administrator_admin_hashtag_checkbox Admin_animation">
                              <span className="Administrator_admin_hashtag_p_flex_date">
                                <label className="switch_admin" for="checkbox_six">
                                  <input
                                    type="checkbox"
                                    id="isOpen2"
                                    value={isOpen2}
                                    onChange={(e) => isOpenActions2(e.target.checked)}
                                    id="checkbox_six" 
                                    className="input_admin"
                                    checked="true"
                                  />
                                  <div className="slider_admin round_admins"></div>
                                </label>
                                <label htmlFor="isOpen2">
                                  Tự động
                                </label>
                              </span>

                              <span className="Administrator_admin_hashtag_p_flex_date">
                                <label className="switch_admin" for="checkbox_seven">
                                  <input
                                    type="checkbox"
                                    id="isOpen3"
                                    value={isOpen3}
                                    onChange={(e) => isOpenActions3(e.target.checked)}
                                    id="checkbox_seven" 
                                    className="input_admin" 
                                  />
                                  <div className="slider_admin round_admins"></div>
                                </label>
                                <label htmlFor="isOpen3">
                                  Đặt ngày và giờ
                                </label>
                              </span>

                              {isOpen2 || isOpen3 ? (
                                <div className="Administrator_admin_hashtag_p_output_test_div">
                                  {isOpen2 && <span className="Administrator_admin_hashtag_p_output_test">Ngày đăng</span>}
                                  {isOpen3 && 
                                    <span className="Administrator_admin_hashtag_p_flex_time">
                                      <input onChange={(e)=> handle(e)} id="Date" value={data.Date + Date_show} placeholder="Ngày đăng" type="text" readOnly="true"/>
                                      <input onChange={(e)=> handle(e)} id="Time" value={data.Time + Time_show} placeholder="Giờ đăng" type="time"/>
                                    </span>
                                  }
                                </div>
                              ) : (
                                <div className="Administrator_admin_hashtag_p_output_test">Vui lòng chọn thời gian</div>
                              )}
    
                            </div>
                   : null}

                    <a onClick={isOpenActions4.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen4 ? 
                      <p className="Administrator_admin_hashtag">
                        <BiChevronUp style={{fontSize: '25px'}}/>Liên kết
                      </p> 
                      : 
                      <p className="Administrator_admin_hashtag">
                        <BiChevronDown style={{fontSize: '25px'}}/>Liên kết
                      </p>}
                    </a>
                     {isOpen4 ? <div className="Administrator_admin_hashtag_checkbox_div Admin_animation">
                                  <p>Liên kết cố định <RiQuestionMark className="Administrator_admin_hashtag_icons"/></p>
                                  <textarea readOnly 
                                            placeholder="http://localhost:3000/News/..." 
                                            type="text" 
                                            ref={refResult} 
                                            onChange={(e)=> handle(e)} 
                                            value={"http://localhost:3000/News/" + parseStringDataLayer(selected ? selected.danhmuc : "Chưa chọn danh mục") + "/" + Date_show + "-" + parseStringDataLayer(data.title)} 
                                            id="link_page" 
                                            className="Administrator_admin_hashtag_link_active Auto_size_textarea"
                                  >
                                  </textarea>
                                  <a variant="primary" onClick={handleCopyText} className="Administrator_admin_hashtag_coppy">Sao chép liên kết<VscCopy/></a>
                                  <div className="Administrator_admin_hashtag_p_output_test_div">
                                    <span className="Administrator_admin_hashtag_p_flex_date">
                                    <label className="switch_admin" for="checkbox_for">
                                      <input
                                        type="checkbox"
                                        id="isOpen7"
                                        value={isOpen7}
                                        onChange={(e) => isOpenActions7(e.target.checked)}
                                        id="checkbox_for" 
                                        className="input_admin"
                                        checked="true" 
                                      />
                                      <div className="slider_admin round_admins"></div>
                                    </label>
                                    <label htmlFor="isOpen7">
                                        Liên kết cố định tự động
                                    </label>
                                  </span>

                                  <span className="Administrator_admin_hashtag_p_flex_date">
                                    <label className="switch_admin" for="checkbox_five">
                                      <input
                                        type="checkbox"
                                        id="isOpen8"
                                        value={isOpen8}
                                        onChange={(e) => isOpenActions8(e.target.checked)}
                                        id="checkbox_five" 
                                        className="input_admin" 
                                      />
                                      <div className="slider_admin round_admins"></div>
                                    </label>
                                    <label htmlFor="isOpen8">
                                      Liên kết cố định tùy chỉnh
                                    </label>
                                  </span>

                                  {isOpen7 || isOpen8 ? (
                                    <div className="Administrator_admin_hashtag_p_output_test_div">
                                      {isOpen7 && <span className="Administrator_admin_hashtag_p_output_test">Liên kết cố định tự động</span>}
                                      {isOpen8 && 
                                        <span>
                                          <input readOnly placeholder="http://localhost:3030/News/..." type="text" ref={refResult} onChange={(e)=> handle(e)} value={parseStringDataLayer(data.title)} id="link_page"/>
                                        </span>
                                      }
                                    </div>
                                  ) : (
                                    <div className="Administrator_admin_hashtag_p_output_test">Vui lòng chọn liên kết trang</div>
                                  )}
                                </div>
                                 <p className="Administrator_admin_hashtag_LK_TD">Liên kết tiêu đề <RiQuestionMark className="Administrator_admin_hashtag_icons"/></p>
                                 <input placeholder="Thêm liên kết tiêu đề" type="text" className="Header_input Header_input_2"/>

                                 <p className="Administrator_admin_hashtag_LK_TD">Liên kết Hình ảnh (Thủ công)<RiQuestionMark className="Administrator_admin_hashtag_icons"/></p>
                                 <input  onChange={(e)=> handle(e)} placeholder="Thêm liên kết hình ảnh" type="text" className="Header_input Header_input_2" id="link_images" value={data.link_images}/>

                                 <p className="Administrator_admin_hashtag_LK_TD">Tiêu đề ảnh <RiQuestionMark className="Administrator_admin_hashtag_icons"/></p>
                                 <input  onChange={(e)=> handle(e)} placeholder="Nhập tiêu đề ảnh" type="text" className="Header_input Header_input_2" id="title_img" value={data.title_img}/>
                                 <p className="Administrator_admin_hashtag_LK_TD Administrator_admin_hashtag_LK_TD_2">Thêm liên kết đính kèm khác</p>
                                </div>
                       : null}

                      <a onClick={isOpenActions5.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen5 ? 
                        <p className="Administrator_admin_hashtag">
                          <BiChevronUp style={{fontSize: '25px'}}/>Mô tả tìm kiếm
                        </p> 
                        : 
                        <p className="Administrator_admin_hashtag">
                          <BiChevronDown style={{fontSize: '25px'}}/>Mô tả tìm kiếm
                        </p>}
                      </a>
                       {isOpen5 ? <div className="Admin_animation">
                                    <input onChange={(e)=> handle(e)} id="De_xuat" value={data.De_xuat} placeholder="Nhập mô tả tìm kiếm" type="text" className="Header_input"/>
                                  </div>
                        : null}

                      <a onClick={isOpenActions6.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen6 ? 
                        <p className="Administrator_admin_hashtag">
                          <BiChevronUp style={{fontSize: '25px'}}/>Tùy chọn
                        </p> 
                        : 
                        <p className="Administrator_admin_hashtag">
                          <BiChevronDown style={{fontSize: '25px'}}/>Tùy chọn
                        </p>}
                      </a>

                       {isOpen6 ? <div className="Administrator_admin_hashtag_checkbox_all_div Admin_animation">
                                    <p className="Administrator_admin_hashtag_lineheight_2">Bình luận, nhận xét của người đọc</p>
                                    <span>
                                      <label className="switch_admin" for="checkbox_one">
                                        <input type="checkbox" id="checkbox_one" className="input_admin" />
                                        <div className="slider_admin round_admins"></div>
                                      </label>
                                      <p className="Administrator_admin_hashtag_lineheight">Cho phép</p>
                                    </span>
                                    <span>
                                      <label className="switch_admin" for="checkbox_two">
                                        <input type="checkbox" id="checkbox_two" className="input_admin" />
                                        <div className="slider_admin round_admins"></div>
                                      </label>
                                      <p className="Administrator_admin_hashtag_lineheight">Không cho phép, hiển thị bình luận hiện có</p>
                                    </span>
                                    <span>
                                      <label className="switch_admin" for="checkbox_three">
                                        <input type="checkbox" id="checkbox_three" className="input_admin" />
                                        <div className="slider_admin round_admins"></div>
                                      </label>
                                      <p className="Administrator_admin_hashtag_lineheight">Không cho phép, ẩn bình luận hiện có</p>
                                    </span>
                                  </div>
                        : null}

                </div>
              </div>

        {msg && <p>Đã sao chép</p>}

      </form>

    </>
  )
};

export default Admin;