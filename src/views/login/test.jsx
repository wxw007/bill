import React from "react";
const a = (props) => {
  return (
    <div>
      <div> {props.aa}</div>
      <button
        onClick={() => {
          props.fn(1);
        }}
      >
        点击+1
      </button>
      <button
        onClick={() => {
          props.fn(-1);
        }}
      >
        点击-1
      </button>
    </div>
  );
};
export default a;
