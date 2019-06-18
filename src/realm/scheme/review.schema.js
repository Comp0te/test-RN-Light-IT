export const ReviewSchema = {
    name: 'Review',
    primaryKey: 'id',
    properties: {
        id: 'int',
        product: 'int',
        userId: 'int',
        rate: 'int',
        text: 'string',
    }
};