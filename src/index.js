import React, { ConcurrentMode } from "react";
import ReactDOM from "react-dom";
import App from './containers/App/App';

ReactDOM.createRoot(document.getElementById("app")).render(
  <ConcurrentMode>
    <App />
  </ConcurrentMode>
);
