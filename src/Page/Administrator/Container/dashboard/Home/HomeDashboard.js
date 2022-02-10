import './Home.css';
import Header from '../../../Header/Header';
import { user, Video_iframe } from '../../../../DataBase/Admin';
import Dashboard from '../container/Dashboard';
import { BsFillCaretRightFill, BsNewspaper, BsPencilSquare, BsArrowDown, BsArrowUp, BsChatLeftText, BsArrowReturnRight } from 'react-icons/bs';
import { AiFillHome, AiOutlineSwapRight, AiOutlinePlus, AiOutlineMail } from 'react-icons/ai';
import { FiUsers, FiAlertCircle } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { useState } from 'react';
import Function from "../Function/Function";
import useModal from '../../../..//Modal/useModal';
import Char from './Char';
import { FiMoreVertical } from 'react-icons/fi';
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react';
import { getStyle } from '@coreui/utils';
import { CChartBar, CChartLine } from '@coreui/react-chartjs';
import CIcon from '@coreui/icons-react';
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons';
import { Link } from 'react-router-dom';

function HomeDashboard({ NguoiDung }) {

const Dem = JSON.parse(JSON.stringify(user)).length;
const Dem2 = JSON.parse(JSON.stringify(Video_iframe)).length;

const {isShowing, toggle} = useModal();

const DATA = [{
  id:1,
  links: "/",
  name: "Trang chủ",
  icon: <AiFillHome className="HomeDashboard_color_icon"/>,
  link: "",
  plus: <b>0</b>,           
  button: <button className="HomeDashboard_color_div_btnu"><span className="HomeDashboard_color_opps_spank_psp">Xem tất cả <AiOutlineSwapRight/></span> <FiAlertCircle className="HomeDashboard_color_icon_icon_alert"/></button>,
  modal:  "",
  math: <span className="HomeDashboard_color_div_btnuspan_wl_span_char">
          <b>26K{' '}</b>(-12.4% <BsArrowDown/>)
        </span>,
  css: "HomeDashboard_color_div",
  Char: <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="HomeDashboard_color_icon_icon_char"
          color="primary"
          chart={
            <CChartLine
              className=""
              style={{ height: '100%', width: '100%' }}
              data={{
                labels: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
                datasets: [
                  {
                    label: 'Lượt xem',
                    backgroundColor: '#fff',
                    borderColor: 'rgba(151, 227, 255, 1)',
                    pointBorderColor: 'transparent',
                    pointHoverBackgroundColor: 'rgb(255, 87, 34)',
                    pointBackgroundColor: 'transparent',
                    data: [65, 59, 84, 84, 51, 55, 40],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 30,
                    max: 89,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 3,
                    hitRadius: 6,
                    hoverRadius: 3,
                  },
                },
              }}
            />
          }
        />
      </CCol>,
      Grid: "LDBone "
},
{
  id:2,
  links: "/News",
  name: "Tin tức",
  icon: <BsNewspaper className="HomeDashboard_color_icon"/>,
  link: "",
  plus: <b>{Dem + Dem2}</b>,
  button: <button className="HomeDashboard_color_div_btnu"><span className="HomeDashboard_color_opps_spank_psp" onClick={toggle}>Xem tất cả <AiOutlineSwapRight/></span> <FiAlertCircle className="HomeDashboard_color_icon_icon_alert"/></button>,
  modal: <Function isShowing={isShowing} hide={toggle} />,
  math:   <span className="HomeDashboard_color_div_btnuspan_wl_span_char">
            <b>2.49K{' '}</b>(84.7% <BsArrowUp />)
          </span>,
  css: "HomeDashboard_color_div1",
  Char:  <CCol sm={6} lg={3}>
          <CWidgetStatsA
            color="warning"
            chart={
              <CChartLine
                style={{ height: '100%', width: '100%' }}
                data={{
                  labels: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
                  datasets: [
                    {
                      label: 'Lượt xem',
                      backgroundColor: 'rgb(220, 53, 69, 0.2)',
                      borderColor: 'rgb(220, 53, 69, 0.9)',
                      pointBorderColor: 'transparent',
                      pointHoverBackgroundColor: 'rgb(255, 87, 34)',
                      pointBackgroundColor: 'transparent',
                      data: [78, 81, 80, 45, 34, 12, 40],
                      fill: true,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      display: false,
                    },
                    y: {
                      display: false,
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 2,
                      tension: 0.4,
                    },
                    point: {
                      radius: 0,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
        </CCol>,
        Grid: "LDBtwo "
},
,
{
  id:3,
  links: "#/",
  name: "Người dùng",
  icon: <FiUsers className="HomeDashboard_color_icon"/>,
  link: "",
  plus: <b>0</b>,
  button:  <button className="HomeDashboard_color_div_btnu"><span className="HomeDashboard_color_opps_spank_psp">Xem tất cả <AiOutlineSwapRight/></span> <FiAlertCircle className="HomeDashboard_color_icon_icon_alert"/></button>,
  modal: "",
  math: <span className="HomeDashboard_color_div_btnuspan_wl_span_char">
          <b>44K{' '}</b>(-23.6% <BsArrowDown />)
        </span>,
  css: "HomeDashboard_color_div2",
  Char:  <CCol sm={6} lg={3}>
          <CWidgetStatsA
            color="danger"
            chart={
              <CChartBar
                className="mt-3 mx-3"
                style={{ height: '100%', width: '100%' }}
                data={{
                  labels:  ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
                  datasets: [
                    {
                      backgroundColor: 'rgb(17, 236, 229)',
                      borderColor: 'rgb(17, 236, 229, 0.2)',
                      label: 'Lượt xem',
                      pointBorderColor: 'transparent',
                      pointHoverBackgroundColor: 'rgb(255, 87, 34)',
                      pointBackgroundColor: 'transparent',
                      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                      barPercentage: 0.6,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      grid: {
                        display: false,
                        drawBorder: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                }}
              />
            }
          />
        </CCol>,
        Grid: "LDBthree "
}]

const Button = [{
  id:1,
  name: "Thông báo",
  icon: <IoMdNotificationsOutline className="HomeDashboard_color_icon_icon" />,
  link: ""
},
{
  id:2,
  name: "Bài đăng trong ngày",
  icon: <BsPencilSquare className="HomeDashboard_color_icon_icon" />,
  link: ""
},
{
  id:3,
  name: "Quản lý người dùng",
  icon: <FiUsers className="HomeDashboard_color_icon_icon" />,
  link: ""
},
{
  id:4,
  name: "Quản lý bình luận",
  icon: <BsChatLeftText className="HomeDashboard_color_icon_icon" />,
  link: ""
},
{
  id:5,
  name: "Hộp thư đến",
  icon: <AiOutlineMail className="HomeDashboard_color_icon_icon" />,
  link: ""
},
{
  id:6,
  name: "Cài đặt quản trị",
  icon: <MdOutlineAdminPanelSettings className="HomeDashboard_color_icon_icon" />,
  link: ""
}]
  const random = () => Math.round(Math.random() * 100)

  return (
    <div className="Font_text">
      <title> Bảng điều khiển - Dashboard | WORLD SINGULARITY</title>
      <div className="HomeDashboard_all_grids">
          <span className="DB1">
            <Dashboard/>
          </span>
        
      <div className="TEsthgb">      
          <span className="DB2">
            <Header/>
          </span>

          <span className="DB3">
              <div className="HomeDashboard_color_opps2_margin HomeDashboard_scroll">

                  <div className="HomeDashboard_color_opps2 HDB1">
                    <span className="HomeDashboard_color_opps">
                      <h1>Thống kê bài đăng</h1>
                      <p>Tổng số bài bạn đã đăng là {Dem + Dem2}</p>
                    </span>
                    <span className="HomeDashboard_color_opps_sp">
                      <button className="HomeDashboard_color_div_btnu012">Xem tất cả<BsArrowReturnRight/></button>
                      <button className="HomeDashboard_color_div_btnu210"><AiOutlinePlus/>Tạo một bài viết</button>
                    </span>
                  </div>

                  <div className="HomeDashboard_color_admin HDB2">
                  {DATA.map(({id, name, icon, link, plus, button, modal, css, Char, math, Grid, links}) => (
                    <div className={'HomeDashboard_color_div_po ' + Grid + css}>
                        <div className="HomeDashboard_color_div_po_flexu_dot">
                          <div className="HomeDashboard_color_div_po_flexu ">

                              <Link to={links} target="_blank" className="HDBH1">{icon}</Link>
                              <h2 className="HDBH2">{name}</h2>
                              <p className="HDBH3">Tổng số bài đăng {plus}</p>


                              <CRow className="HomeDashboard_color_div_po_flexu_kkla_Crew HDBH4">
                                {Char}
                              </CRow>
                              <p className="HDBH5">{math}</p>


                        </div>
                          <FiMoreVertical className="HomeDashboard_color_div_po_flexu_kkla_chr_btn"/>
                      </div>
                      <span>{button}</span>
                      {modal}
                    </div>
                  ))}
                  </div>
                
                  <div className="HomeDashboard_color_page2 HDB3">
                    <div className="HomeDashboard_color_page2abc">
                      <h1>Lượt truy cập trong ngày</h1>
                      <div className="HomeDashboard_color_page2abc_flex-char">
                        <span className="HomeDashboard_color_opps_spank">
                          <p>Trong tháng</p>
                          <select>
                            <option>Tháng 1</option>
                            <option>Tháng 2</option>
                            <option>Tháng 3</option>
                            <option>Tháng 4</option>
                            <option>Tháng 5</option>
                            <option>Tháng 6</option>
                            <option>Tháng 7</option>
                            <option>Tháng 8</option>
                            <option>Tháng 9</option>
                            <option>Tháng 10</option>
                            <option>Tháng 11</option>
                            <option>Tháng 12</option>
                          </select>
                        </span>
                        <span className="HomeDashboard_color_opps_spank">
                         <p>Tăng hơn</p>
                         <h3>+12%</h3>
                        </span>
                      </div>
                    </div>
                    <Char />
                  </div>

                  <span className="HomeDashboard_color_opps_spank_span HDB4">
                    <div className="HomeDashboard_color_flex_op">
                      {Button.map(({id, name, icon, link}) => (
                      <div className="HomeDashboard_color_div_po_background">
                       <span className="HomeDashboard_color_div_btnuspan_wl">
                         {icon}
                         <p>{name}</p>
                       </span>
                      </div>
                      ))}
                    </div>
                    <span className="HomeDashboard_color_opps_spank_btn"><button>Xem thêm</button></span>
                  </span>
                </div>
            </span>
          </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
