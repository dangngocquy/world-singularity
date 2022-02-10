import React from "react";
import { user } from '../../../../DataBase/Admin';

function Search(props) {

  return (
    <select onChange={(e) => props.onSearch(e.target.value)} value={props.value} className="Search_sellect">
       {user.map(({ Date }) => (
        <option>
          {Date}
        </option>
      ))}
    </select>
  );
}

export default Search;