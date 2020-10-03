import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  OFEFRS_COUNT: 312
};

ReactDOM.render(
    <App
      offersCount= {Settings.OFEFRS_COUNT} />,
    document.querySelector(`#root`)
);
