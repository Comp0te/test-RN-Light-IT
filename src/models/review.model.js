export class ReviewModel {
  id = 0;
  product = 0;
  userId = 0;
  rate = 0;
  text = '';

  // interface ReviewResponse {
  // id: number;
  // product: number;
  // rate: number;
  // text: string;
  // created_by: {
  //   id: number;
  //   username: string;
  // };
  constructor(reviewResponse) {
    for (const field in reviewResponse) {
      if (reviewResponse.hasOwnProperty(field) && typeof this[field] !== 'undefined') {
        this[field] = reviewResponse[field];
      }
    }

    if (reviewResponse.created_by && reviewResponse.created_by.id) {
      this.userId = reviewResponse.created_by.id;
    }
  }
}
