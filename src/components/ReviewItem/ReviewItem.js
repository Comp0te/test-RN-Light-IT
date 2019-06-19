import React, { useCallback } from 'react';
import style from './style'
import { View } from 'react-native';

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

  return (
    <ListItem
      numberOfLines={3}
      leftElement='comment'
      centerElement={{
        primaryText: username,
        secondaryText: text,
      }}
      rightElement={getStars()}
      divider={true}
    />
  );
};

export default React.memo(ReviewsItem);
