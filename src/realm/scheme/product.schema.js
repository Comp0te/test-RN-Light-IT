export const PRODUCT_SCHEMA_NAME = 'Product';

export const ProductSchema = {
    name: PRODUCT_SCHEMA_NAME,
    primaryKey: 'id',
    properties: {
        id: 'int',
        img: 'string',
        text: 'string',
        title: 'string',
    }
};