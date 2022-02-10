import React from 'react';
import { GoHome } from "react-icons/go";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { FaBlog } from "react-icons/fa";

export const Home = [{
  id: 1,
  link: '/',
  name: 'Home',
  icon: <GoHome />,
  css: 'an_none'
}];
export const Tinh_nang_dac_diem = [
  {
    id: 1,
    link: '#/',
    name: 'Tính năng, đặc điểm',
    icon: <AiOutlineAppstoreAdd />,
    toggle_name_1: 'Tất cả',
    toggle_name_2: 'Điều khiển',
    toggle_name_3: 'Đa phương thức',
    toggle_name_4: 'Quản lý dữ liệu',
    toggle_name_5: 'Huấn luyện',
    toggle_name_6: 'Trải nghiệm ứng dụng'
  }
]
export const Blog = [
  { 
    id: 1,
    link: '#/',
    name: 'Blog',
    icon: <FaBlog />,
    toggle_name_1: 'Tin tức',
    toggle_link: '/News/',
    toggle_name_2: 'Bình luận',
    toggle_name_3: 'Diễn đàn',
    toggle_name_4: 'Thư viện'
  }
]

export const Ho_tro = [
  {
    id:1,
    link: '/Assistant/Support/',
    name: 'Hỗ trợ',
    icon: <BiSupport />,
  }
]