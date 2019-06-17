import { createSelector } from 'reselect';
import { getReviewsEntities, getReviewIdFromProps } from '../reviews/selectors'

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