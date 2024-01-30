import React from "react";

function Heading(props) {
  return (
    <h1 style={{ textAlign: 'center' }}>Hello welcome to {props.data} page</h1>
  )
}

export default Heading;