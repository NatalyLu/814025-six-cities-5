import PropTypes from "prop-types";

export const offerPropTypes = PropTypes.shape({
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired,
  }).isRequired,
  bedrooms: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  inside: PropTypes.array.isRequired,
  host: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  imgs: PropTypes.array.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }).isRequired,
  maxAdults: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
});

export const offersPropTypes = PropTypes.arrayOf(offerPropTypes.isRequired).isRequired;

export const reviewPropTypes = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  })
}).isRequired;

export const reviewsPropTypes = PropTypes.arrayOf(reviewPropTypes).isRequired;

export const uniqueCitiesPropTypes = PropTypes.arrayOf(PropTypes.string);

export const mapClassesPropTypes = PropTypes.string;
export const cityLocationPropTypes = PropTypes.shape({
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number,
});


export const headerInfoPropTypes = PropTypes.shape({
  headerClasses: PropTypes.shape(),
  userName: PropTypes.string,
  logoLink: PropTypes.string
});
