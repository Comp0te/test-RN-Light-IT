import React, { useState, useCallback } from 'react';
import style from './style';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import { View } from 'react-native';

import ProductItem from '../ProductItem';

const ProductsList = ({productsIds, productsEntities}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const productsList = productsIds.map((productId, index) => (
    <ProductItem
      productId={productId}
      isActive={activeTabIndex === index}
      tabLabel={productsEntities?.[productId]?.title ?? `Tab #${index + 1}`}
      key={productId}
    />
  ));

  const onChangeTab = useCallback(({i}) => {
    setActiveTabIndex(i)
  }, []);

  return (
    <View style={style.root}>
      {
        !!productsIds.length &&
        <ScrollableTabView
          locked={true}
          style={style.tabView}
          onChangeTab={onChangeTab}
        >
          {productsList}
        </ScrollableTabView>
      }
    </View>
  );
};

export default React.memo(ProductsList);
