import { createSelector } from 'reselect';
import { getReviewsEntities, getReviewIdFromProps } from '../reviews/selectors';

export const getUsersEntities = state => state.users.entities;
export const getUsersAllIds = state => state.users.allIds;

export const getUserByReviewIdFromProps = createSelector(
  [
    getUsersEntities,
    getReviewsEntities,
    getReviewIdFromProps,
  ],
  (usersEntities, reviewsEntities, reviewId) => {
    const userId = reviewsEntities?.[reviewId]?.userId;

    return usersEntities?.[userId];
  },
);

export const getUsersByProductIdAndReviews = (state, productId, reviews) => {
  const usersIdsSet = new Set(reviews.map(review => review.userId));
  const userEntities = getUsersEntities(state);

  return Array.from(usersIdsSet.values(), userId => userEntities[userId]);
};
