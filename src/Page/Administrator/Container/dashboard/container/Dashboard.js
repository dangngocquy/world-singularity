import React, { useState } from "react";
import Logoimg  from '../../../../../Image/logo-2.png';
import { Logo_main } from '../../../../../Component';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu
} from "react-pro-sidebar";

import { Link, Route } from 'react-router-dom';
import Function from "../Function/Function";
import useModal from '../../../../Modal/useModal';
import '../Function/Function.css';

import { FaList, FaRegHeart, FaHeart, FaUsersCog } from "react-icons/fa";
import { FiLogOut, FiArrowLeftCircle, FiArrowRightCircle, FiMail, FiExternalLink } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog, BiCommentDetail } from "react-icons/bi";
import { AiOutlineDashboard, AiOutlinePlus, AiOutlineBarChart } from 'react-icons/ai';
import { BsFillFileEarmarkPostFill, BsPen } from 'react-icons/bs';


import "react-pro-sidebar/dist/css/styles.css";
import "./Dashboard.css";

const Dashboard = () => {
  
  const [menuCollapse, setMenuCollapse] = useState(true)

  const menuIconClick = () => {

    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

const {isShowing, toggle} = useModal();
  
  return (
    <>
      <title> Dashboard | WORLD SINGULARITY </title>

      <div className="Dashboard_icon_flexbar">
        <span className="Dashboard_icon_span_height">
          <ProSidebar collapsed={menuCollapse}>
            <SidebarHeader className="Dashboard_icon">
              <div className="closemenu" onClick={menuIconClick}>
                {menuCollapse ? (
                  <FiArrowRightCircle className="Header_admin_img_ixon"/>
                ) : (
                  <FiArrowLeftCircle className="Header_admin_img_ixon5"/>
                )}
              </div>
            </SidebarHeader>

              {menuCollapse ? (
              null
              ) : (
              <SidebarHeader>
                <Link to="/Administrator/News/Post" className="Dashboard_icon_span_spa">
                  <button className="Dashboard_icon_span_btn"><AiOutlinePlus/> Bài đăng mới</button>
                </Link>
              </SidebarHeader>
              )}

            <SidebarContent>
              <Menu iconShape="square">
                <MenuItem active={false} icon={<AiOutlineDashboard />}>
                  <Link to="/Administrator/Dashboard">
                    <span className="Dashboard_icon_span">Bảng điều khiển</span>
                  </Link>
                </MenuItem>
                <SubMenu title="Bài đăng" active={false} icon={<BsFillFileEarmarkPostFill />}>
                  <MenuItem>Trang chủ</MenuItem>
                    <MenuItem onClick={toggle}>Trang tin tức</MenuItem>
                     <Function
                      isShowing={isShowing}
                      hide={toggle}
                    />
                  <MenuItem>Trang người dùng</MenuItem>
                </SubMenu>
                <MenuItem active={false} icon={<AiOutlineBarChart />}>Thống kê</MenuItem>
                <MenuItem active={false} icon={<BiCommentDetail />}>Bình luận</MenuItem>
                <SubMenu title="Quản lý người dùng" active={false} icon={<FaUsersCog />}>
                  <MenuItem>Tài khoản người dùng</MenuItem>
                  <MenuItem>
                    <Link to="/Administrator/Account/Management-account-admin">
                      Tài khoản Admin
                    </Link>
                  </MenuItem>
                </SubMenu>
                <MenuItem active={false} icon={<BsPen />}>Đăng ký mới</MenuItem>
                <MenuItem active={false} icon={<FiMail />}>Quản lý thư</MenuItem>
              </Menu>
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem active={false} icon={<FiExternalLink />}><a href="/" target="_blank" className="Dashboard_icon_span">Đi đến trang chủ</a></MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </span>
      </div>
    </>
  );
};

export default Dashboard;
