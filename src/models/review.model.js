class ReviewModel {
  id = 0;

  product = 0;

  userId = 0;

  rate = 0;

  text = '';

  constructor(reviewResponse) {
    Object.keys(reviewResponse).forEach((field) => {
      if (typeof this[field] !== 'undefined') {
        this[field] = reviewResponse[field];
      }
    });

    if (reviewResponse.created_by && reviewResponse.created_by.id) {
      this.userId = reviewResponse.created_by.id;
    }
  }
}

export default ReviewModel;
