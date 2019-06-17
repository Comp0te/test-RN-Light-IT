import React from 'react';
import style from './style';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import { View } from 'react-native';

import ProductItem from '../ProductItem';

const ProductsList = ({productsIds}) => {
  const productsList = productsIds.map(productId => (
      <ProductItem
        productId={productId}
        tabLabel={productId}
        key={productId}
      />
    ));

  return (
    <View style={style.root}>
      {
        !!productsIds.length &&
        <ScrollableTabView>
          {productsList}
        </ScrollableTabView>
      }
    </View>
  );
};

export default React.memo(ProductsList);
