import { create } from 'apisauce'
import { apiEndpoint } from '../utils/constants';

class ApiService {
  constructor() {
    this.apisauce = create({
      baseURL: apiEndpoint,
      timeout: 2000,
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
  }

  login(input) {
    return this.apisauce
      .post(
        'login/',
        JSON.stringify(input)
      );
  }

  register(input) {
    return this.apisauce.post(
      'register/',
      JSON.stringify(input)
    );
  }

  getAllProducts() {
    return this.apisauce.get(
      'products/',
    );
  }

  getAllReviews(productId) {
    return this.apisauce.get(
      `reviews/${productId}`,
    );
  }
}

export default new ApiService();
