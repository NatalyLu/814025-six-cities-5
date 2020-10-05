import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import IndexPage from "../index-page/index-page";
import PropTypes from "prop-types";

const App = (props) => {
  const {offersCount} = props;
  return (
    <React.Fragment>
      <IndexPage offersCount={offersCount} />
    </React.Fragment>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
