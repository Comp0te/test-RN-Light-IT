export const REVIEW_SCHEMA_NAME = 'Review';

export const ReviewSchema = {
    name: REVIEW_SCHEMA_NAME,
    primaryKey: 'id',
    properties: {
        id: 'int',
        product: 'int',
        userId: 'int',
        rate: 'int',
        text: 'string',
    }
};