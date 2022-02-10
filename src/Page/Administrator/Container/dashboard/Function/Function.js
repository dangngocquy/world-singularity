import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './Function.css';
import { MdClose } from 'react-icons/md';

const Function = ({ isShowing, hide, user }) => isShowing ? ReactDOM.createPortal(

  <React.Fragment>
    <div className="Modals-overlay_function"/>
    <div className="Modals-wrapper_function" aria-Modals aria-hidden tabIndex={-1} role="dialog">
      <div>
        <div className="Modals_function">
          <div className="Modals-header_function">
            <button type="button" className="Modals-close-button_function" data-dismiss="Modals" aria-label="Close" onClick={hide}>
              <span aria-hidden="true"><MdClose/></span>
            </button>
          </div>
          <h1>Tùy chọn</h1>
          <p className="Function_p">
            <Link to="/Administrator/News/News-post" className="Function_p_link">
            Quản lý Bài đăng
            </Link>
            <Link to="/Administrator/News/News-iframe-video-post" className="Function_p_link">
            Quản lý video nhúng
            </Link>
          </p>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Function;