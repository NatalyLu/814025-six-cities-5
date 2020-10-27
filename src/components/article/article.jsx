import React, {Fragment, PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class Article extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
    // this.updateHoverState = this.updateHoverState.bind(this);
  }

  // updateHoverState(hover) {
  //   this.setState({hover: hover});
  // }
  // <article updateHoverState={this.updateHoverState}

  render() {
    const {town, hotels} = this.props.offer;

    return (
      <Fragment>
        {hotels.map((hotel, i) => (
          <article key={`${town}-${i}`} className="cities__place-card place-card"
            onMouseOver={() =>{
              // const element = evt.target.onMouseOver;
              this.setState({hover: true});
            }}
            onMouseOut={() => {
              this.setState({hover: false});
            }}
          >
            {hotel.status === `Premium` &&
              <div className="place-card__mark">
                <span>{hotel.status}</span>
              </div>
            }
            <div className="cities__image-wrapper place-card__image-wrapper">
              {/* <a href="#"> */}
              <Link to='/offer'>
                <img className="place-card__image" src={hotel.src} width="260" height="200" alt="Place image"/>
              </Link>
              {/* </a> */}
            </div>
            <div className="place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">{hotel.price}</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{width: `80%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <a href="#">{hotel.name}</a>
              </h2>
              <p className="place-card__type">{hotel.type}</p>
            </div>
          </article>
        ))}
      </Fragment>
    );
  }
}

Article.propTypes = {
  offer: PropTypes.shape({
    town: PropTypes.string.isRequired,
    hotels: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      imgs: PropTypes.array.isRequired,
      rooms: PropTypes.number.isRequired,
      maxCountOfPeople: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      stars: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      inside: PropTypes.arrayOf(PropTypes.string),
      host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    })).isRequired
  })
};

export default Article;
