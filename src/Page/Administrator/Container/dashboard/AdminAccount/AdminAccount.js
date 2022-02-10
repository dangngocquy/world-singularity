import './AdminAccount.css';
import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Dashboard from '../container/Dashboard';
import Header from '../../../Header/Header';
import {render} from 'react-dom';
import { user, Dashboards } from '../../../../DataBase/Admin';
import { BiDotsHorizontalRounded, BiArrowToLeft } from 'react-icons/bi';
import { AiFillHome, AiOutlinePlus, AiFillSetting } from 'react-icons/ai';
import { MdDelete, MdAdminPanelSettings, MdSecurity } from 'react-icons/md';
import { FiSearch, FiFilter } from 'react-icons/fi';
import { BsPencilSquare } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import useModal from '../../../..//Modal/useModal';
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react';
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs';
import AdminList from './AdminList';
import AddModal from './AddModal';

import './AdminAccount.css';
import Search from './Search';
function AdminAccount({ NguoiDung, props }) {

//search
const [searchValue, setSearchValue] = useState("");

const filterNames = ({ Date }) => {
  return Date.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
};
//random char 
 const random = () => Math.round(Math.random() * 100)

//toggle
const [toggleMenu, setToggleMenu] = useState(false);

//Modal
const [menuCollapse, setMenuCollapse] = useState(false)

const menuIconClick = () => {

menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
};

const {isShowing, toggle} = useModal();

//Đếm dữ liệu
const DemData = JSON.parse(JSON.stringify(Dashboards)).length;

  return (
    <>
      <div className="BaiDang_max_w_all_fl HomeDashboard_all_gridss">
        <title>Quản lý tài khoản Administrator | WORLD SINGULARITY</title>
         
      <span className="DB1">
        <Dashboard/>
      </span>

         
      <div className="TEsthgb">      
          <span className="DB2">
            <Header/>
          </span>

      
      <span className="DB3">
          <div className="AdminAccount_css_fl">

              <div className="AdminAccount_css_fl_ax AD1">
                <div className="AdminAccount_css">
                  <h1 className="AdminAccount_css_h1">Quản lý tài khoản Admin</h1>

                 {/* <span className="AdminAccount_css_h1_beta">
                    Show Weather
                  </span>*/}
                </div>
                
                <div className="AdminAccount_css_sk">
                  <u>
                    Lịch sử đăng bài
                  </u>

                  <span>
                    <Search onSearch={setSearchValue} value={searchValue} />
                  </span>
                </div>
                
                <div className="AdminAccount_css_sk_all_flex">
                  <div className="AdminAccount_css_sk_all_flexdds_scrolling">
                    {user.filter(filterNames).map((search, title) => {
                      return  (
                        <span className="AdminAccountSreacrh">
                          <span className="AdminAccountSreacrhpos2">
                            <AiFillHome className="AdminAccountSreacrh_icon"/>
                            <span className="AdminAccountSreacrhpos2Flexbi">
                              <b>Mảnh tên lửa Nga có thể rơi mất kiểm soát xuống Trái Đất</b>
                              <p>{search.Date} - 4:00PM</p>
                            </span>
                          </span>
                          <img src={require(`../../../../../Image/User/none.png`).default}/>
                        </span>
                        )
                    })}
                  </div>
                </div>
              </div>


              <div className="AdminAccount_css_char_char_padd AD2">
                <span className="AdminAccount_css_char_char_padd_span">
                  <b className="AdminAccount_css_char_b">Lượt tương tác</b>
                  <BiDotsHorizontalRounded/>
                </span>
                <div className="AdminAccount_css_char">
                  <span className="AdminAccount_css_char_char_padd_spansscsk">
                    <div className="Char-fontsize">Lượt tương tác quản trị</div>
                    <BsPencilSquare/>
                  </span>
                   <div className="AdminAccount_css_char1">
                     <CCol xs={6}>
                        <CCard>
                          <CCardHeader className="Char-fontsizes">Lượt tương tác quản trị</CCardHeader>
                          <CCardBody>
                            <CChartDoughnut
                              className="Char_admin"
                              data={{
                                display: false,
                                position: 'left',
                                // labels: ['Hồng Đệ Thất', 'Đặng Ngọc Quý', 'Thầy Ông Nội'],
                                datasets: [
                                  {
                                    backgroundColor: ['rgb(65, 184, 131)', 'rgb(228, 102, 81)', 'rgb(0, 216, 255)'],
                                    hoverBackgroundColor: ['rgb(65, 184, 131, 0.6)', 'rgb(228, 102, 81, 0.6)', 'rgb(0, 216, 255, 0.6)'],
                                    data: [random(), random(), random()],
                                  },
                                ],
                              }}
                            />
                          </CCardBody>
                        </CCard>
                      </CCol>
                      <div>
                        <div className="AdminAccount_css3">
                          <span className="AdminAccount_css_char_char_padd_spanss"><div className="AdminAccount_css3color1"></div>
                            <div className="AdminAccount_css_sk_all_flexdds">
                              <b>Đặng Ngọc Quý</b>
                              <i>Quản trị viên</i>
                            </div>
                          </span>
                        </div>
                        <div className="AdminAccount_css3">
                          <span className="AdminAccount_css_char_char_padd_spanss"><div className="AdminAccount_css3color2"></div>
                            <div className="AdminAccount_css_sk_all_flexdds">
                              <b>Hồng Đệ Thất</b>
                              <i>Biên tập viên</i>
                            </div>
                          </span>
                        </div>
                        <div className="AdminAccount_css3">
                          <span className="AdminAccount_css_char_char_padd_spanss"><div className="AdminAccount_css3color3"></div>
                            <div className="AdminAccount_css_sk_all_flexdds">
                              <b>Thầy Ông Nội</b>
                              <i>Phóng dịch viên</i>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                </div>
              </div>


               <div className="AD3">
                  <span className="AdminAccount_css_char_char_padd_spanss_input">
                    <FiSearch className="AdminAccount_css_sk_all_flexdds_SEARCG"/><input type="text" placeholder="Nhập họ tên"/>
                  </span>
                  <span className="AdminAccount_css_sk_all_flexddspagination_flex">
                   {toggleMenu
                    ? <span onClick={() => setToggleMenu(false)} className="AdminAccountSreacrh_soFL"> 
                        <h3 className="AdminAccount_css_sk_all_flexdds_list">Danh sách quản trị <i className="AdminAccountSreacrhpos2_i_nghieng">(Tổng {DemData})</i></h3>
                        <MdDelete className="AdminAccount_css_char_char_padd_spanss_iconss"/>
                      </span>
                       : <span onClick={() => setToggleMenu(true)} className="AdminAccountSreacrh_soFL">
                        <h3 className="AdminAccount_css_sk_all_flexdds_list">Danh sách quản trị <i className="AdminAccountSreacrhpos2_i_nghieng">(Tổng {DemData})</i></h3>
                        <BiArrowToLeft className="AdminAccount_css_char_char_padd_spanss_iconss"/>
                      </span>
                    }
                  <span className="AdminAccount_css_char_char_padd_spanss_icons">
                    <FiFilter className="AdminAccount_css_char_char_padd_spanss_iconss"/>
                    <IoIosOptions className="AdminAccount_css_char_char_padd_spanss_iconss"/>
                  </span>
                  </span>
                  <div>
                      <AdminList/>
                  </div>
               </div>

              
               <div className="AD4">
                   <h3 className="AdminAccount_css_char_char_padd_spanss_iconss_tuycon">Tùy chọn quản trị</h3>
                    
                    <div className="AdminAccount_css_sk_all_flexdds_brandfle_fl_all_acount">
                     <div className="AdminAccount_css_sk_all_flexdds_brandfle">
                        <div className="AdminAccount_css_sk_all_flexdds_osias">
                          <span className="AdminAccount_css_char_char_padd_spanss_pskmsajk">
                            <MdAdminPanelSettings className="AdminAccount_css_sk_all_flexdds_brandfleInsocn"  onClick={toggle}/>
                            <span className="AdminAccount_css_char_char_padd_spanss_pso" onClick={toggle}>
                             <b>Tạo một tài khoản quản trị</b>
                             <i>Thêm mới quản trị viên để phối hợp và điều hành một cách dễ dàng hơn</i>
                            </span>
                          </span>
                        <AiOutlinePlus className="AdminAccount_css_sk_all_flexdds_icon2" onClick={toggle}/>
                        </div>
                        <AddModal
                          isShowing={isShowing}
                          hides={toggle}
                        />
                     </div>

                     <div className="AdminAccount_css_sk_all_flexdds_brandfle">
                        <div className="AdminAccount_css_sk_all_flexdds_osias">
                          <span className="AdminAccount_css_char_char_padd_spanss_pskmsajk">
                            <MdSecurity  className="AdminAccount_css_sk_all_flexdds_brandfleInsocn"/>
                            <span className="AdminAccount_css_char_char_padd_spanss_pso">
                             <b>Phân quyền kiểm soát</b>
                             <i>Bảo mật ngăn chặn vị trí nôi dung</i>
                            </span>
                          </span>
                        <AiOutlinePlus className="AdminAccount_css_sk_all_flexdds_icon2"/>
                        </div>
                     </div>

                     <div className="AdminAccount_css_sk_all_flexdds_brandfle">
                        <div className="AdminAccount_css_sk_all_flexdds_osias">
                          <span className="AdminAccount_css_char_char_padd_spanss_pskmsajk">
                            <AiFillSetting  className="AdminAccount_css_sk_all_flexdds_brandfleInsocn"/>
                            <span className="AdminAccount_css_char_char_padd_spanss_pso">
                             <b>Cài đặt</b>
                             <i>Cài đặt dành cho quản trị viên</i>
                            </span>
                          </span>
                        <AiOutlinePlus className="AdminAccount_css_sk_all_flexdds_icon2"/>
                        </div>
                     </div>

                     <div>
                     </div>

                    </div>
                 </div>

            </div>
        </span>
        </div>
      </div>
    </>
  );
}

export default AdminAccount;
