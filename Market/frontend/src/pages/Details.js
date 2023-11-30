import React from "react";
import { withRouter } from "react-router-dom";
function Details(props) {
  console.warn(props);
  return (
    <div>
      <h1>Set{props.match.params.name}</h1>
    </div>
  );
}

export default Details;
