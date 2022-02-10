import React from 'react';
import { useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

const createEl = id => {
  const el = document.createElement("div");
  el.setAttribute("id", id);
  document.body.appendChild(el);

  return el;
};

const portal = (id, isShow) => ({ children }) => {
  const [container_modal, setContainer] = useState(null);
  useEffect(() => {
    setContainer(document.getElementById(id) || createEl(id));

    return () => {
      if (!container_modal) return;

      const timer = setTimeout(() => {
        clearTimeout(timer);
        if (container_modal.innerHTML === "") container_modal.remove();
      }, 100);
    };
  }, [container_modal]);

  return isShow && container_modal && createPortal(children, container_modal);
};

const usePortal = ({
  containerId = "use-modal-react-portal",
  defaultShow = false,
  onShow,
  onHide
}) => {
  const [isShow, setIsShow] = useState(defaultShow);
  const handleIsShow = useCallback(value => setIsShow(value), [setIsShow]);
  const isShowRef = useRef(defaultShow);

  const show = useCallback(
    e => {
      handleIsShow(true);
      isShowRef.current = true;
      if (onShow instanceof Function) onShow(e);
    },
    [handleIsShow, onShow]
  );

  const hide = useCallback(
    e => {
      handleIsShow(false);
      isShowRef.current = false;
      if (onHide instanceof Function) onHide(e);
    },
    [handleIsShow, onHide]
  );

  const toggle = useCallback(
    e => {
      isShowRef.current ? hide(e) : show(e);
    },
    [hide, show]
  );

  const Portal = useCallback(portal(containerId, isShow), [isShow]);

  return { Portal, isShow, show, hide, toggle };
};

export default usePortal;
