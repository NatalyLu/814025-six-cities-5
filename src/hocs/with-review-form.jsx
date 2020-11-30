import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        review: ``
      };

      this.createNewComment = this.createNewComment.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.onFieldsClear = this.onFieldsClear.bind(this);
    }

    onFieldsClear() {
      this.setState({
        review: ``,
        rating: ``
      });
    }

    createNewComment(stars, com) {
      let review = {
        comment: com,
        date: `2019-04-24`,
        id: 1,
        rating: Number(stars),
        user: {
          avatarUrl: `/img/avatar-max.jpg`,
          id: 4,
          isPro: false,
          name: `Max`,
        }
      };
      return (review);
    }

    handleSubmit(evt) {
      evt.preventDefault();
      this.props.addNewReview(this.createNewComment(this.state.rating, this.state.review));
      this.onFieldsClear();
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          handleSubmit={this.handleSubmit}
          handleFieldChange={this.handleFieldChange}
          review={this.state.review} />
      );
    }
  }

  WithReviewForm.propTypes = {
    addNewReview: PropTypes.func.isRequired,
  };

  return (WithReviewForm);
};

export {withReviewForm};
