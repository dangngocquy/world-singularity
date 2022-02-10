import { MenuLevelDropDown } from "./Data/Datamenulevel";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlinePlus } from "react-icons/hi";
import { GiSolarSystem } from 'react-icons/gi'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MultiMenus from "./MultiMenus";

import'./Menu_level.css';
import "./Menu.css";

function Menulevel(){

const { t } = useTranslation();

 return (
    <div>
      
      <li className="the_li_menu_level">
        <MultiMenus menus={MenuLevelDropDown} />
      </li>

    </div>
  )
}

export default Menulevel;

