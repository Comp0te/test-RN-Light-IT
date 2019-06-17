import React from 'react';
import style from './style';

import { View, FlatList } from 'react-native';
import ReviewItem from '../ReviewItem';

const ReviewsList = ({reviewsIds, isLoadingReviews, onRefresh}) => {
  const keyExtractor = id => `${id}`;

  const renderItem = ({item}) => {
    return (
      <ReviewItem reviewId={item}/>
    );
  };

  return (
    <View style={style.root}>
      <FlatList
        data={reviewsIds}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onRefresh={onRefresh}
        refreshing={isLoadingReviews}
        initialNumToRender={10}
        maxToRenderPerBatch={2}
      />
    </View>
  );
};

export default React.memo(ReviewsList);
