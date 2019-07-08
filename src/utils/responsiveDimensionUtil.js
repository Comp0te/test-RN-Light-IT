import { Dimensions } from 'react-native';
import { DesignDimensions } from './constants';

export const { height, width } = Dimensions.get('window');
export const scaleWidth = designWidth => designWidth * (width / DesignDimensions.WIDTH);
export const scaleHeight = designHeight => designHeight * (height / DesignDimensions.HEIGHT);

export const scaleFontSize = fontSize => Math.round(fontSize * width * (1.8 - 0.002 * width) / 400);
