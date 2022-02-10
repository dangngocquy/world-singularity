import React, { useRef, useCallback } from "react";
import usePortal from "./usePortal";
import styled from "./useModal.module.css";
import { IoMdClose } from 'react-icons/io';

const modal = (Portal, isShow, hide, showClose, clickOutsideToHide) => ({
  children
}) => {
  const wrapperRef = useRef();
  const handleClick = useCallback(e => {
    e.preventDefault();
    if (e.target === wrapperRef.current) {
      hide();
    }
  }, []);

  if (!isShow) return null;
  return (
    <Portal>
      <div
        onClick={(clickOutsideToHide && handleClick) || null}
        ref={wrapperRef}
        className={styled.wrapper_modal}
      >
        <div className={`${styled.container_modal} ${styled.slideIn_modal}`}>
          {showClose ? (
            <div className={styled.close_modal}>
              <span onClick={hide}><IoMdClose/></span>
            </div>
          ) : null}
          {children}
        </div>
      </div>
    </Portal>
  );
};

const useModal = ({
  containerId = "use-modal-react-portal",
  clickOutsideToHide = false,
  defaultShow = false,
  showClose = true,
  onShow,
  onHide
}) => {
  const { Portal, isShow, show, hide, toggle } = usePortal({
    containerId,
    defaultShow,
    onShow,
    onHide
  });

  const Modal = useCallback(
    modal(Portal, isShow, hide, showClose, clickOutsideToHide),
    [isShow]
  );

  return { Modal, isShow, show, hide, toggle };
};

export default useModal;
