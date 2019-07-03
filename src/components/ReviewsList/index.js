import React from 'react';
import { View, FlatList } from 'react-native';
import * as PropTypes from 'prop-types';
import style from './style';

import ReviewItem from '../ReviewItem';

const ReviewsList = ({ reviewsIds, isLoadingReviews, onRefresh }) => {
  const keyExtractor = id => `${id}`;

  const renderItem = ({ item }) => (
    <ReviewItem reviewId={item} />
  );

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
        style={style.flatlist}
      />
    </View>
  );
};

ReviewsList.propTypes = {
  reviewsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoadingReviews: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default React.memo(ReviewsList);
