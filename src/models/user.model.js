class UserModel {
  id = 0;

  username = '';

  constructor(reviewResponse) {
    Object.keys(reviewResponse.created_by).forEach((field) => {
      if (typeof this[field] !== 'undefined') {
        this[field] = reviewResponse.created_by[field];
      }
    });
  }
}

export default UserModel;
