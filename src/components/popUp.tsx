import { dividerClasses } from "@mui/material";
import React, { HtmlHTMLAttributes } from "react";
import { MouseEventHandler } from "react";
interface PopUpProp {
  handleClose: MouseEventHandler<HTMLSpanElement>;
  content: React.ReactNode;
  video: string;
  dependencies: string[];
  time: string;
}

function Popup(props: PopUpProp) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <div>
          <text>{props.content}</text>
          <text className="centre">{props.time}</text>
        </div>
        <div className="centre">
          <video
            style={{ border: "2px solid black" }}
            src={props.video}
            width="800"
            height="400"
            controls
          />
        </div>

        <div
          className="centre"
          style={{
            justifyContent: "center",
          }}
        >
          {props.dependencies.map((dependency) => (
            <div className="dependency">
              <text>{dependency}</text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popup;
