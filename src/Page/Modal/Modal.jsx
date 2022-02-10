import React from 'react';
import ReactDOM from 'react-dom';


const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(

  <React.Fragment>
    <div className="Modals-overlay"/>
    <div className="Modals-wrapper" aria-Modals aria-hidden tabIndex={-1} role="dialog">
      <div className="Modals">
        <div className="Modals-header">
          <button type="button" className="Modals-close-button" data-dismiss="Modals" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          Hello, I'm a Modals.
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;