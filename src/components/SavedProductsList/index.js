import React from 'react';
import style from './style';

import { View, FlatList, Text } from 'react-native';
import SavedProductItem from '../../components/SavedProductItem';

const SavedProductsList = ({products, onRefresh, isFetchingProducts}) => {

  const keyExtractor = product => `${product.id}`;

  const renderItem = ({item}) => {
    return (
      <SavedProductItem product={item}/>
    );
  };

  const getItemLayout = (data, index) => ({length: 78, offset: 0.3, index});

  const ListEmptyComponent = isVisible => {
    return (
      !isVisible &&
      <Text>You have not saved any products.</Text>
    )
  };

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

export default React.memo(SavedProductsList);
