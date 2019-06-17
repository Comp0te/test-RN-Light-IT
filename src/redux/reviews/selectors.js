import { createSelector } from 'reselect';
import { getProductIdFromProps } from '../products/selectors'

export const getReviewsEntities = state => state.reviews.entities;
export const getReviewsAllIds = state => state.reviews.allIds;

export const getReviewIdFromProps = (state, reviewItemProps) => reviewItemProps.reviewId;

export const getReviewByIdFromProps = createSelector(
  [
    getReviewsEntities,
    getReviewIdFromProps,
  ],
  (reviewsEntities, reviewId) => {
    return reviewsEntities?.[reviewId];
  },
);

export const getReviewsIdsByProductIdFromProps = createSelector(
  [
    getReviewsEntities,
    getReviewsAllIds,
    getProductIdFromProps,
  ],
  (reviewsEntities, reviewIds, productId) => {
    return reviewIds.reduce((acc, cur) => {
      if (reviewsEntities[cur].product === +productId) {
        return acc.concat(cur);
      }

      return acc;
    }, []);
  },
);