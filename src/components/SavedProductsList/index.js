import React from 'react';
import { useTranslation } from 'react-i18next';
import * as PropTypes from 'prop-types';

import { View, FlatList, Text } from 'react-native';
import style from './style';
import SavedProductItem from '../SavedProductItem';

const SavedProductsList = ({ products, onRefresh, isFetchingProducts }) => {
  const { t } = useTranslation();

  const keyExtractor = product => `${product.id}`;

  const renderItem = ({ item }) => (
    <SavedProductItem product={item} />
  );

  const getItemLayout = (data, index) => ({ length: 78, offset: 0.3, index });

  const ListEmptyComponent = isVisible => (
    !isVisible
      && <Text style={style.noProductsText}>{t('No products')}</Text>
  );

  return (
    <View style={style.root}>
      <FlatList
        data={products}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onRefresh={onRefresh}
        refreshing={isFetchingProducts}
        initialNumToRender={10}
        maxToRenderPerBatch={2}
        getItemLayout={getItemLayout}
        ListEmptyComponent={ListEmptyComponent(products && products.length)}
      />
    </View>
  );
};

SavedProductsList.propTypes = {
  products: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  onRefresh: PropTypes.func.isRequired,
  isFetchingProducts: PropTypes.bool.isRequired,
};

export default React.memo(SavedProductsList);
