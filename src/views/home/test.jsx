import React, { useState } from "react";

export default (props) => {
  const [list, setList] = useState([1, 2, 3, 4]);
  console.log(list);
  return (
    <>
      {list.map((v,i) => {
        return <div key={i} style={{fontSize: '50px'}} onClick={() => {props.fn(v)}}>{v}</div>;
      })}
    </>
  );
};
