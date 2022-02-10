import React from 'react';
import { RiCloseLine, RiGroup2Line, RiExchangeBoxFill } from "react-icons/ri";
import { BiHome, BiCategoryAlt } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { VscSaveAll, VscHistory } from "react-icons/vsc";
import { AiOutlineContacts, AiOutlineStar } from "react-icons/ai";
import { MdTimelapse, MdUpdate, MdLanguage } from "react-icons/md";
import { GiSolarSystem } from 'react-icons/gi';
import { HiOutlinePlus } from 'react-icons/hi';

export const Close = [{
  id:1,
  icon: <RiCloseLine className="dnsknncksksc"/>,
  link: '#/',
  name: 'Close'
}];

export const Time_out = [{
  id:1,
  icon: <MdTimelapse className="dnsknncksksc"/>
}];

export const MenuLevelDropDown = [
  { 
    id: 1,
    name: "update",
    icon: <MdUpdate className="dnsknncksksc"/>,
    link: '#/',
    Drop1: [
      {
        id:1,
        name: "Coming soon"
      },
      {
        id:2,
        name: "Coming soon",
        Drop1: [
          {
            id: 1,
            name: "Coming soon"
          },
          {
            id: 2,
            name: "Coming soon"
          },
          {
            id: 3,
            name: "Coming soon",
            Drop1: [
              {
                id: 1,
                name: "Coming soon"
              },
              {
                id: 2,
                name: "Coming soon",
                Drop1: [
                  {
                    id: 1,
                    name: "Coming soon"
                  },
                  {
                    id: 2,
                    name: "Coming soon"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "event",
    icon: <RiGroup2Line className="dnsknncksksc"/>,
    link: "#/",
    add: <span className="vien_mnlv"><HiOutlinePlus /></span>,
    Drop1: [
      {
        id: 1,
        name: "Coming soon"
      },
      {
        id: 2,
        name: "Coming soon"
      }
    ]
  },
  {
    id: 3,
    name: "Danh mục",
    icon: <BiCategoryAlt className="dnsknncksksc"/>,
    link: "#/",
    Drop1: [
      {
        id:1,
        link: '#Section_home',
        name: 'Home'
      },
      { 
        id:2,
        link: '#Section_introduce',
        name: 'Giới thiệu'
      },{
        id:3,
        link: '#Section_review',
        name: 'Cách thức'
      },
      {
        id: 4,
        link: '#Section_experience',
        name: 'Tiếp cận'
      },
      {
        id: 5,
        link: '#Section_join',
        name: 'Tham gia'
      },
      { 
        id: 6,
        link: '#Section_feature',
        name: 'Trải nghiệm'
      },
      { 
        id: 7,
        link: '#Section_planet',
        name: 'khám phá hành tinh'
      },
      { 
        id: 8,
        link: '#Section_post',
        name: 'Kho dữ liệu'
      }
    ]
  },
  {
    id: 4,
    name: "universe",
    icon: <GiSolarSystem className="dnsknncksksc"/>,
    link: "#/",
    new: <span className="Menulevel_icon"><AiOutlineStar/>New</span>
  }
];
