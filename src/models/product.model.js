class ProductModel {
  id = 0;

  img = '';

  text = '';

  title = '';

  constructor(productModel) {
    Object.keys(productModel).forEach((field) => {
      if (typeof this[field] !== 'undefined') {
        this[field] = productModel[field];
      }
    });
  }
}

export default ProductModel;
