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
      <div className="boxas">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}

        <text>{props.time}</text>

        <video
          src={props.video}
          style={{ margin: 20 }}
          width="800"
          height="400"
          controls
        />
        <div
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
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
