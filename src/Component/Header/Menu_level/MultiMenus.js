import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 10px;
`;

const LI = styled.li`
  padding: 12px 15px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px; 
  color: rgb(146, 171, 207);
`;

const Label = styled.span`
  width: 100%;
  display: block;
  cursor: pointer;
  text-decoration: none;
  grid-gap: 9px;
  transition: all 0.15s;
  border-radius: 3px;
  white-space: nowrap;
`;

const Arrow = styled.span`
  display: flex;
  height: 25px;
  width: 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "\f105";
    font-size: 15px;
    font-family: "Font Awesome 5 Free";
    display: inline-block;
    padding-right: 3px;
    vertical-align: middle;
    font-weight: 900;
    transition: all 0.15s;
    animation: ${props => (props.toggle ? "xoay_icon_profile 1000ms linear both" : "")};
    transform: ${props => (props.toggle ? "rotate(90deg)" : "rotate(0deg)")};
  }
`;

const MultiMenus = ({ menus }) => {
  const [activeMenus, setActiveMenus] = useState([]);

  const handleMenuClick = data => {
    console.log(data);
  };

  const handleArrowClick = menuName => {
    let newActiveMenus = [...activeMenus];

    if (newActiveMenus.includes(menuName)) {
      var index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }

    setActiveMenus(newActiveMenus);
  };

const { t } = useTranslation();
  
  const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }) => (
    <LI>
      <Item dept={dept}>
        <Label onClick={() => handleArrowClick(menuName)}>
          <a href={data.link} className="MultiMenus_A">{data.icon}<span className="chia_mnlv">{t(data.name)}{data.add}</span>{data.new}</a>
        </Label>
        {hasSubMenu && (
          <Arrow
            onClick={() => handleArrowClick(menuName)}
            toggle={activeMenus.includes(menuName)}
          />
        )}
      </Item>
      {hasSubMenu && (
        <SubMenu
          dept={dept}
          data={data.Drop1}
          toggle={activeMenus.includes(menuName)}
          menuIndex={menuIndex}
        />
      )}
    </LI>
  );

  const SubMenu = ({ dept, data, toggle, menuIndex }) => {
    if (!toggle) {
      return null;
    }

    dept = dept + 1;

    return (
      <UL>
        {data.map((menu, index) => {
          const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

          return (
            <ListMenu
              dept={dept}
              data={menu}
              hasSubMenu={menu.Drop1}
              menuName={menuName}
              key={menuName}
              menuIndex={index}
            />
          );
        })}
      </UL>
    );
  };

  return (
    <UL>
      {menus.map((menu, index) => {
        const dept = 1;
        const menuName = `sidebar-menu-${dept}-${index}`;

        return (
          <ListMenu
            dept={dept}
            data={menu}
            hasSubMenu={menu.Drop1}
            menuName={menuName}
            key={menuName}
            menuIndex={index}
          />
        );
      })}
    </UL>
  );
};

export default MultiMenus;
