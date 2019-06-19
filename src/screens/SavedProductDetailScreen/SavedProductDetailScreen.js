import React from 'react';
import style from './style';

import { SafeAreaView, View, Text, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';
import { staticEndpoint } from "../../utils/constants";
import ReviewItem from "../../components/ReviewItem/ReviewItem";

const SavedProductDetailScreen = (
  {
    product,
    reviewsWithUsers,
    isFetchingFromRealm,
    fetchReviewsFromRealm,
  },
) => {

  const keyExtractor = review => `${review.id}`;

  const renderItem = ({item}) => {
    return (
      <ReviewItem
        username={item.user.username}
        text={item.text}
        rate={item.rate}
      />
    );
  };

  const imageUri = `${staticEndpoint}${product.img}`;

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.root}>
        <View style={style.wrapper}>
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
        <FlatList
          data={reviewsWithUsers}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          onRefresh={fetchReviewsFromRealm}
          refreshing={isFetchingFromRealm}
          initialNumToRender={10}
          maxToRenderPerBatch={2}
          style={style.wrapper}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SavedProductDetailScreen);
