export class ProductModel {
  id = 0;
  img = '';
  text = '';
  title = '';

  constructor(productModel) {
    for (const field in productModel) {
      if (productModel.hasOwnProperty(field) && typeof this[field] !== 'undefined') {
        this[field] = productModel[field];
      }
    }
  }
}
