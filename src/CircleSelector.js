import "./CircleSelector.css";
import React, { Component } from "react";

export default function CircleSelector(props) {
  return (
    <div className="CircleSelector">
      <button
        className={props.selected == 1 ? "selected" : ""}
        value={1}
        onClick={props.changeStateHandler}
      >
        {props.selected == 1 ? "circle 1 slected" : "select circl 1"}
      </button>

      <button
        className={props.selected == 2 ? "selected" : ""}
        value={2}
        onClick={props.changeStateHandler}
      >
        {props.selected == 2 ? "circle 2 slected" : "select circle 2"}
      </button>

      <button
        className={props.selected == 3 ? "selected" : ""}
        value={3}
        onClick={props.changeStateHandler}
      >
        {props.selected == 3 ? "circle 3 slected" : "select circle 3"}
      </button>

      <button
        className={props.selected == 4 ? "selected" : ""}
        value={4}
        onClick={props.changeStateHandler}
      >
        {props.selected == 4 ? "circle 4 slected" : "select circle 4"}
      </button>
    </div>
  );
}
