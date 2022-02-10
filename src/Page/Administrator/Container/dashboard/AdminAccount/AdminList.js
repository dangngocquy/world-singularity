import React from "react";
import { useState, useEffect } from "react";
import { MdDelete } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { Dashboards } from '../../../../DataBase/Admin';
import Pagination from "./Pagination";
import axios from "axios";
import { GoPrimitiveDot } from 'react-icons/go';

const AdminList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {

    fetch("http://localhost:3001/Dashboards")
      .then(resp => resp.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  const getPaginationData = (arr, currentPage = 1, postPerPage = 3) => {
    const start = currentPage * postPerPage - postPerPage;
    const data = [...arr].splice(start, postPerPage);
    return data;
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };
  const filteredusers = getPaginationData(users, currentPage, 3);

  return (
    <div> 
      <table className="AdminList_table">
        <thead>
          <tr>
            <th>Họ và tên</th>
            <th>Địa chỉ email</th>
            <th>Chức danh</th>
            <th>Tình trạng</th>
            <th>Ngày gia nhập</th>
            <th>Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {filteredusers.map(user => {
            //xóa id account
            const handleClick = async () => {
                    const DashboadID = await axios
                        .delete(`http://localhost:3001/Dashboards/${user.id}`)
                        .catch((error) => console.log('Error: ', error));
                    if (DashboadID) {
                        console.log(DashboadID);
                    }
                };
            return (
                <tr key={user.id} className="AdminList_table2">
                  <td content_table="Họ và tên"><span className="AdminList_table2_fl3_flex_img"><img src={require(`../../../../../Image/User/none.png`).default} className="AdminList_table2_img"/>{user.name}</span></td>
                  <td content_table="Địa chỉ email">{user.email}</td>
                  <td content_table="Chức danh">{user.office}</td>
                  <td content_table="Tình trạng"><span className="AdminList_table2_fl3_icongo"><GoPrimitiveDot/>Online</span></td>
                  <td content_table="Ngày gia nhập">{user.input}</td>
                  <td content_table="Tùy chọn">
                    <BiEdit className="AdminList_table2_fl3"/>
                    <MdDelete className="AdminList_table2_fl3" onClick={handleClick}/>
                  </td>
                </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        onPageChange={handlePageChange}
        currentPage={currentPage}
        postPerPage={3}
        users={users}
      />
    </div>
  );
};

export default AdminList;
