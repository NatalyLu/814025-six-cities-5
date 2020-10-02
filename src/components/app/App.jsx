import React from "react";
import Index from "../index/index";
import PropTypes from "prop-types";

const App = (props) => {
  const {offersCount} = props;
  return (
    <React.Fragment>
      <Index offersCount={offersCount} />
    </React.Fragment>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
