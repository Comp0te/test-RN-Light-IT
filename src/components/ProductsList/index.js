import React, { useState, useCallback } from 'react';
import * as PropTypes from 'prop-types';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import { View } from 'react-native';
import style from './style';

import ProductItem from '../ProductItem';

const ProductsList = ({ productsIds, productsEntities }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const productsList = productsIds.map((productId, index) => (
    <ProductItem
      productId={productId}
      isActive={activeTabIndex === index}
      tabLabel={productsEntities?.[productId]?.title ?? `Tab #${index + 1}`}
      key={productId}
    />
  ));

  const onChangeTab = useCallback(({ i }) => {
    setActiveTabIndex(i);
  }, []);

  return (
    <View style={style.root}>
      {
        !!productsIds.length
        && (
        <ScrollableTabView
          locked
          style={style.tabView}
          onChangeTab={onChangeTab}
        >
          {productsList}
        </ScrollableTabView>
        )
      }
    </View>
  );
};

ProductsList.propTypes = {
  productsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  productsEntities: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default React.memo(ProductsList);
