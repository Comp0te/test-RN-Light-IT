import { AuthSchema, AUTH_SCHEMA_NAME } from './auth.schema'
import { ProductSchema, PRODUCT_SCHEMA_NAME } from './product.schema'
import { ReviewSchema, REVIEW_SCHEMA_NAME } from './review.schema'
import { UserSchema, USER_SCHEMA_NAME } from './user.schema'

export const Scheme = [
  AuthSchema,
  ProductSchema,
  ReviewSchema,
  UserSchema,
];

export const SchemaName = {
  AUTH: AUTH_SCHEMA_NAME,
  PRODUCT: PRODUCT_SCHEMA_NAME,
  REVIEW: REVIEW_SCHEMA_NAME,
  USER: USER_SCHEMA_NAME,
};