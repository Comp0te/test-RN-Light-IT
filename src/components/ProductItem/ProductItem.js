import React from 'react';
import style from './style';
import { staticEndpoint } from '../../utils/constants';

import {Text, View} from 'react-native'
import FastImage from 'react-native-fast-image';

const ProductsItem = ({product}) => {

  if (!product) {
    return null;
  }

  const imageUri = `${staticEndpoint}${product.img}`;

  return (
    <View style={style.root}>
      <FastImage
        style={style.image}
        source={{
          uri: imageUri,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={style.title}>{product.title}</Text>
      <Text>{product.text}</Text>
    </View>
  );
};

export default React.memo(ProductsItem);
