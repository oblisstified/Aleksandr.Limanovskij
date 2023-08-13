import { dividerClasses } from "@mui/material";
import React, { HtmlHTMLAttributes } from "react";
import { MouseEventHandler } from "react";
interface PopUpProp {
  handleClose: MouseEventHandler<HTMLSpanElement>;
  content: React.ReactNode;
  video: string;
  dependencies: string[];
}

function Popup(props: PopUpProp) {
  return (
    <div className="popup-box">
      <div className="boxas">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
        <video
          src={props.video}
          style={{ margin: 20 }}
          width="800"
          height="400"
          controls
        />
        <div
          style={{
            flexDirection: "row", // Arrange items horizontally
            justifyContent: "space-between", // Distribute items along the main axis with equal space
            alignItems: "center", // Alig
          }}
        >
          {props.dependencies.map((dependency) => (
            <text>{dependency}</text>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popup;
