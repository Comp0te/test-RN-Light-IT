import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import * as PropTypes from 'prop-types';

import { ListItem, Icon } from 'react-native-material-ui';
import style from './style';

const ReviewsItem = ({ username, text, rate }) => {
  const getStars = useCallback(() => {
    const stars = [];

    for (let i = 0; i < rate; i += 1) {
      stars.push(<Icon name="star" key={i} />);
    }

    return (
      <View style={style.stars}>
        {stars}
      </View>
    );
  }, [rate]);

  const getContent = useCallback(() => (
    <>
      <Text style={style.title}>{username}</Text>
      <Text>{text}</Text>
    </>
  ), [username, text]);

  return (
    <ListItem
      numberOfLines={3}
      leftElement="comment"
      centerElement={getContent()}
      rightElement={getStars()}
      divider
    />
  );
};

ReviewsItem.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};

export default React.memo(ReviewsItem);
