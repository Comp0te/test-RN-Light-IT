import React, { useCallback } from 'react';
import style from './style'
import { View, Text } from 'react-native';

import { ListItem, Icon } from 'react-native-material-ui';

const ReviewsItem = ({username, text, rate}) => {

  const getStars = useCallback(() => {
    let stars = [];

    for (let i = 0; i < rate; i++) {
      stars.push(<Icon name='star' key={i}/>)
    }

    return (
      <View style={style.stars}>
        {stars}
      </View>
    )
  }, [rate]);

  const getContent = useCallback(() => {
    return (
      <>
        <Text style={style.title}>{username}</Text>
        <Text>{text}</Text>
      </>
    )
  }, [username, text]);

  return (
    <ListItem
      numberOfLines={3}
      leftElement='comment'
      centerElement={getContent()}
      rightElement={getStars()}
      divider={true}
    />
  );
};

export default React.memo(ReviewsItem);
