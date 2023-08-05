import React, { HtmlHTMLAttributes } from "react";
import { MouseEventHandler } from "react";
interface PopUpProp {
  handleClose: MouseEventHandler<HTMLSpanElement>;
  content: React.ReactNode;
}

function Popup(props: PopUpProp) {
  return (
    <div className="popup-box">
      <div className="boxas">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
}

export default Popup;
