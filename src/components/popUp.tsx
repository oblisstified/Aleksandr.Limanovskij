import React, { HtmlHTMLAttributes } from "react";
import { MouseEventHandler } from "react";
interface PopUpProp {
  handleClose: MouseEventHandler<HTMLSpanElement>;
  content: React.ReactNode;
  video: string;
}

function Popup(props: PopUpProp) {
  return (
    <div className="popup-box">
      <div className="boxas">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
        <video src={props.video} width="800" height="400" controls />
      </div>
    </div>
  );
}

export default Popup;
