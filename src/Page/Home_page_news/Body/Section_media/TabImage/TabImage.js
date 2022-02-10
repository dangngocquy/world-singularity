import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./TabImage.css"
import { user} from '../../../../DataBase/Admin.json';

export const Modal = ({ src, alt, caption, onClose }) => {
  return (
    <div className="TabImagemodal">
      <span className="TabImageclose" onClick={onClose}>
        &times;
      </span>
      <img className="TabImagemodal-content" src={src} alt={alt} />
      {caption.length > 0 && <div className="TabImagecaption">{caption}</div>}
    </div>
  )
}

const TabImage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = (TabIMGTAB) => setIsOpen(true);

  return (
    <div>
   {/* {user.map((TabIMGTAB, id) => {
      return(
      <span key={id}>
        <img
          className="TabImageIMG"
          onClick={showModal}
          src={TabIMGTAB.link_images}
          alt="Snow"
        />
        {isOpen && (
          <Modal
            src={TabIMGTAB.link_images}
            alt="snow"
            caption="caption"
            onClose={() => setIsOpen(false)}
          />
        )}
        </span>
        )
     })}*/}
     Dang Phat Trien
    </div>
  )
}

export default TabImage;
