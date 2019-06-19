import React from 'react';
import { connect } from 'react-redux';

import ReviewItem from './ReviewItem';

import { getReviewByIdFromProps } from '../../redux/reviews/selectors';
import { getUserByReviewIdFromProps } from '../../redux/users/selectors';

const mapStateToProps = (state, props) => ({
  review: getReviewByIdFromProps(state, props),
  user: getUserByReviewIdFromProps(state, props),
});


const ReviewItemContainer = ({review, user}) => {

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

export default connect(mapStateToProps)(React.memo(ReviewItemContainer));
