import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineSearch } from 'react-icons/ai';
import { MenuLevelDropDown } from "./Data/Datamenulevel";

function SearchMenuLevel() {

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(MenuLevelDropDown);

  // exclude column list from filter
  const excludeColumns = ["id", "color"];

  // handle change event of search input
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(MenuLevelDropDown);
    else {
      const filteredData = MenuLevelDropDown.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }
  
  const { t } = useTranslation();

  return (
    <div>
      <div className="sdccxcxcm">
        <div className="sadsa_Search">
          <AiOutlineSearch className="cimccccccb"/>
          <input className="search-txt_search" type="text" value={searchText} placeholder={t("Search")} className="dmkansrsta" onChange={e => handleChange(e.target.value)}/>
        </div>
      </div>

     {/* <div className="box-container">
        {data.map((d, i) => {
          return (
          <div key={i} className="box">
            <b>Name: </b>{d.name}<br />
          </div>
          )
        })}
        <div className="clearboth"></div>
        {data.length === 0 && <span>No records found to display!</span>}
      </div>*/}
    </div>
  );
}

export default SearchMenuLevel;
