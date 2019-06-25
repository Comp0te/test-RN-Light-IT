import realmService from '../services/realm.service';

const populateReviewsWithUsers = reviews => reviews.map((review) => {
  const user = realmService.realm
    .objects(realmService.SchemaName.USER)
    .find(userObj => userObj.id === review.userId);

  return {
    ...review,
    user,
  };
});

export default populateReviewsWithUsers;
