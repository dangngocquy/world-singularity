import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { withRouter } from 'react-router-dom';

function LogoutButton({ logout, history }) {
  const handleClick = () => {
    logout();
    history.push('/Administrator/Authenticial/login');
  }
  return <p className="Header_img_p_p_p" onClick={handleClick}><AiOutlineLogout/>Đăng xuất</p>;
}

export default withRouter(LogoutButton);