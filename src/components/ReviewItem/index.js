import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ReviewItem from './ReviewItem';

import { getReviewByIdFromProps } from '../../redux/reviews/selectors';
import { getUserByReviewIdFromProps } from '../../redux/users/selectors';

const mapStateToProps = (state, props) => ({
  review: getReviewByIdFromProps(state, props),
  user: getUserByReviewIdFromProps(state, props),
});

const ReviewItemContainer = ({ review, user }) => {
  if (!review || !user) {
    return null;
  }

  return (
    <ReviewItem
      username={user.username}
      text={review.text}
      rate={review.rate}
    />
  );
};

ReviewItemContainer.propTypes = {
  review: PropTypes.shape({
    text: PropTypes.string,
    rate: PropTypes.number,
  }).isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
};

ReviewItemContainer.defaultProps = {
  user: undefined,
};

export default connect(mapStateToProps)(React.memo(ReviewItemContainer));
