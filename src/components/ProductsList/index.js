import React from 'react';
import style from './style';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import { View } from 'react-native';

import ProductItem from '../ProductItem';

const ProductsList = ({productsIds, productsEntities}) => {
  const productsList = productsIds.map((productId, index) => (
      <ProductItem
        productId={productId}
        tabLabel={productsEntities?.[productId]?.title ?? `Tab #${index + 1}`}
        key={productId}
      />
    ));

  return (
    <View style={style.root}>
      {
        !!productsIds.length &&
        <ScrollableTabView style={style.tabView}>
          {productsList}
        </ScrollableTabView>
      }
    </View>
  );
};

export default React.memo(ProductsList);
