import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import { BsArrowRightShort } from 'react-icons/bs';
import { BiHide, BiShow } from 'react-icons/bi';

function LoginForm({ authenticated, login, location }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //show hide password
  const [passView, setPassView] = useState(true);
  function ShowPassword(){
    if(passView) {
      setPassView(false);
    }
    else{
      setPassView(true);
    }
  }

  const handleClick = () => {
    try {
      login({ email, password });
    } catch (e) {
      alert('Đăng nhập thất bại vui lòng kiểm tra email và mật khẩu');
      setEmail('');
      setPassword('');
    }
  };

  const { from } = location.state || { from: { pathname: "/Administrator/Dashboard/" } };
  if (authenticated) return <Redirect to={from} />;


  return (
    <>
      <title>Đăng nhập vào dashboard | WORLD SINGULARITY</title>

      <div className="LoginForm_bground Font_text">
        <div className="from_loginfrom">
          <h5 className="LoginForm_lgh1">Chào mừng bạn trở lại</h5>
          <h1 className="LoginForm_lgh12">Đăng nhập vào Dashboard</h1>
          <div className="LoginForm_bground_kosp">
            <b>Địa chỉ email</b>
            <input
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
              type="email"
              placeholder="Nhập địa chỉ email"
              required="required"
            />
            <b>Mật khẩu</b>
            <span>
              <input
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
                type={passView?"Password":"Text"}
                placeholder="Nhập mật khẩu"
                required="required"
              />
              <button onClick={ShowPassword} className="LoginForm_btn_show_hide">{passView?  <BiShow/> : <BiHide/>} </button>
            </span>
          </div>
          <button onClick={handleClick} className="LoginForm_btn">Login</button>
          <span className="LoginForm_btn_mainp"><i>Bạn quên mật khẩu?</i><b><BsArrowRightShort/>Nhấn vào đây</b></span>
        </div>
      </div>
    </>
  );
}

export default LoginForm;