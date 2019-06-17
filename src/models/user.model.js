export class UserModel {
  id = 0;
  username = '';

  constructor(reviewResponse) {
    for (const field in reviewResponse.created_by) {
      if (reviewResponse.created_by.hasOwnProperty(field) && typeof this[field] !== 'undefined') {
        this[field] = reviewResponse.created_by[field];
      }
    }
  }
}