import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";

class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: ``,
      review: ``
    };

    this.newComment = this.newComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onFieldsClear = this.onFieldsClear.bind(this);
  }

  newComment(stars, com) {
    let review = {
      comment: com,
      date: `2019-04-24`,
      id: 1,
      rating: Number(stars),
      user: {
        avatarUrl: `img/avatar-max.jpg`,
        id: 4,
        isPro: false,
        name: `Max`,
      }
    };
    return (review);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onNewReview(this.newComment(this.state.rating, this.state.review));
    this.onFieldsClear();
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  onFieldsClear() {
    this.setState({
      review: ``,
      rating: ``
    });
  }

  render() {
    let titles = [`perfect`, `good`, `not bad`, `badly`, `terribly`];
    let titlesLength = titles.length;

    return (
      <form onSubmit={this.handleSubmit} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {(titles.map((title, i) => (
            <Fragment key={`stars-${titlesLength - i}`}>
              <input onChange={this.handleFieldChange} className="form__rating-input visually-hidden" name="rating" value={titlesLength - i} id={`${titlesLength - i}-stars`} type="radio" />
              <label htmlFor={`${titlesLength - i}-stars`} className="reviews__rating-label form__rating-label" title={title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          )))}
        </div>
        <textarea onChange={this.handleFieldChange} value={this.state.review} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  onNewReview: PropTypes.func.isRequired,
};

export default ReviewForm;
