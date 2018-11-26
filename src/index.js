import React, { ConcurrentMode } from "react";
import ReactDOM from "react-dom";
import Main from './containers/index';

ReactDOM.createRoot(document.getElementById("app")).render(
  <ConcurrentMode>
    <Main />
  </ConcurrentMode>
);
