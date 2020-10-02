import React from "react";
import PropTypes from "prop-types";

const Article = (props) => {
  const {offersCount} = props;
  return (
    <div>
      Всего элементов: {offersCount}
    </div>
  );
};

Article.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default Article;
