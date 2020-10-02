import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";

const Settings = {
  OFEFRS_COUNT: 5
};

ReactDOM.render(
    <App
      offersCount= {Settings.OFEFRS_COUNT} />,
    document.querySelector(`#root`)
);
