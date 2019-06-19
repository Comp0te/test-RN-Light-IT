import realmService from "../services/realm.service";

export const populateReviewsWithUsers = reviews => {

  return reviews.map(review => {
    const user = realmService.realm
      .objects(realmService.SchemaName.USER)
      .find(user => user.id === review.userId);

    return {
      ...review,
      user,
    }
  })
};