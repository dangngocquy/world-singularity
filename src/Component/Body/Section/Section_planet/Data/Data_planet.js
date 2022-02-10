import React from 'react';
import { FaVenus,
         FaMercury,
         FaMars
       } from "react-icons/fa";

import { BiPlanet } from "react-icons/bi";
import { RiEarthLine } from "react-icons/ri";
import { GiPlanetCore, GiJupiter } from "react-icons/gi";

export const Data_icon = [
    {
      "id":1,
      "name": "Planet_3",
      "images": "saothuy.png",
      "link": "#/",
      "cai_dat": "cmau chon_hanh_tinh",
      "id_click": "saothuy",
      "cai_dat_two": "chinhanhsao1 chon_hanh_tinh",
      "content": "Là hành tinh nhỏ nhất và gần Mặt Trời nhất",
      "icons": <FaMercury className="icon_planet"/>
    },
    {
      "id":2,
      "name": "Planet_5",
      "images": "saokim.png",
      "link": "#/",
      "cai_dat": "cmau chon_hanh_tinh",
      "id_click": "saokim",
      "cai_dat_two": "chinhanhsao2 chon_hanh_tinh",
      "content": "Là hành tinh thứ 2 trong hệ Mặt Trời",
      "icons": <FaVenus className="icon_planet"/>
    },
    {
      "id":3,
      "name": "Planet_4",
      "images": "traidat.png",
      "link": "#/",
      "cai_dat": "cmau chon_hanh_tinh",
      "id_click": "traidat",
      "cai_dat_two": "chinhanhsao3 chon_hanh_tinh",
      "content": "Là hành tinh lớn nhất trong bốn hành tinh đất đá",
      "icons": <RiEarthLine className="icon_planet"/>
    }
    ,{
      "id":4,
      "name": "Planet_1",
      "images": "saohoa.png",
      "link": "#/",
      "cai_dat": "cmau chon_hanh_tinh",
      "id_click": "saohoa",
      "cai_dat_two": "chinhanhsao4 chon_hanh_tinh",
      "content": "Là một hành tinh đất đá với một khí quyển mỏng",
      "icons": <FaMars className="icon_planet"/>
    },
    {
      "id":5,
      "name": "Planet_6",
      "images": "saomoc.png",
      "link": "#/",
      "cai_dat": "cmau chon_hanh_tinh",
      "id_click": "saomoc",
      "cai_dat_two": "chinhanhsao5 chon_hanh_tinh",
      "content": "Là hành tinh thứ năm tính từ Mặt Trời",
      "icons": <GiJupiter className="icon_planet"/>
    },
    {
      "id":6,
      "name": "Planet_2",
      "images": "saotho.png",
      "link": "#/",
      "cai_dat": "cmau chon_hanh_tinh",
      "id_click": "saotho",
      "cai_dat_two": "chinhanhsao6 chon_hanh_tinh",
      "content": "Là hành tinh khí khổng lồ",
      "icons": <BiPlanet className="icon_planet"/>
    },
    {
      "id":7,
      "name": "Planet_7",
      "images": "saothienvuong.png",
      "link": "#/",
      "cai_dat": "cmau chon_hanh_tinh",
      "id_click": "saothienvuong",
      "cai_dat_two": "chinhanhsao7 chon_hanh_tinh",
      "content": "Là hành tinh thứ bảy tính từ Mặt Trời",
      "icons": <GiPlanetCore className="icon_planet"/>
    },
    {
      "id":8,
      "name": "Planet_8",
      "images": "saohaivuong.png",
      "link": "#/",
      "cai_dat": "cmau chon_hanh_tinh",
      "id_click": "saohaivuong",
      "cai_dat_two": "chinhanhsao8 chon_hanh_tinh",
      "content": "Là hành tinh thứ tám và xa nhất tính từ Mặt Trời",
      "icons": <GiPlanetCore className="icon_planet"/>
    }
  ]