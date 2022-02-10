import React, { useState, useRef, useEffect } from 'react';
import { searchFilter } from './Filter';
import { AiOutlineSearch } from "react-icons/ai";
import { BiTrendingUp } from 'react-icons/bi';
import { user } from '../../../DataBase/Admin';
import { Link } from 'react-router-dom';
import Readnews from '../../Read_news/Container/Readnews';

const DropdownItems = () => {
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  // click away listener
  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => document.removeEventListener('mousedown', handleClick, false);
  }, []);

  const handleClick = e => {
    if (dropdownRef.current.contains(e.target)) {
      return;
    }
    setVisible(false);
  };

  const handleChange = e => {
    setSearchValue(e.target.value);
    if (!visible) {
      setVisible(true);
    }
  };

  const selectItem = item => {
    setSearchValue(item.De_xuat);
    setSelectedItem(item.id);
    setVisible(false);
  };

  const selectChange = e => {
    console.log(e.target.value);
  };
  return (
    <div className="Font_text">
      <div tabIndex="0" className="search-box_news">
        <input
          className="search-input_news"
          type="text"
          placeholder="Tìm kiếm tin tức..."
          value={searchValue}
          onChange={handleChange}
          onFocus={() => {
            // if (searchValue) {
            setVisible(true);
            // };
          }}
        />
        <button className="search-btn_news"><AiOutlineSearch /></button>
      </div>

      <div ref={dropdownRef} className={`dropdown_search ${visible ? 'v' : ''}`}>
          {visible && (
            <div className="SearchInput_btn_bground">
            <ul className="SearchInput_btn">
              <div className="SearchInput_btn_bground_scoll">
              <b className="SearchInput_b">Đề xuất cho bạn</b>
              {!user && (
                <li key="zxc" className="dropdown_item SearchInput_btn_li">
                  Không tìm thấy kết quả tìm kiếm
                </li>
              )}
              {/* you can remove the searchFilter if you get results from Filtered API like Google search */}
              {user &&
                searchFilter(searchValue, user).map((Readnews) => (
                  <li
                    key={Readnews.id}
                    onClick={() => selectItem(Readnews)}
                    className="dropdown_item SearchInput_btn_li"
                  >
                      <div className="SearchInput_btn_bground_img">
                        <Link
                          to={{
                                pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}`,
                                state: { Readnews }
                              }}
                        >
                          <img src={Readnews.link_images} width="100%" />                    
                        </Link>
                        <span>
                          <div className="item_text1">
                            <BiTrendingUp className="SearchInput_b_icon"/>
                            {Readnews.De_xuat}
                          </div>
                          <div className="item_text2">{Readnews.title}</div>
                        </span>
                      </div>
                  </li>
                ))}
              </div>
            </ul>
            </div>
          )}
      </div>
    {/*  <select onChange={selectChange}>
        <option value="seb">sebouh</option>
        <option value="arm">arman</option>
      </select>*/}
    </div>
  );
};

export default DropdownItems;
