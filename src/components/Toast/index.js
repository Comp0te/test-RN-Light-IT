import React, { useState, useEffect } from 'react';
import { Text, Animated } from 'react-native';
import style from './style';

const Toast = ({ type, message }) => {
  const [topPosition] = useState(new Animated.Value(-100));
  const [opacity] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.sequence([
      Animated.spring(
        topPosition,
        {
          toValue: 50,
          friction: 4,
        },
      ),
      Animated.timing(
        opacity,
        {
          toValue: 0,
          duration: 3000,
          delay: 500,
        },
      ),
    ]).start(() => {
      topPosition.setValue(-100);
      opacity.setValue(1);
    });
  }, [message, type]);

  return !!message && (
    <Animated.View
      style={[
        {
          top: topPosition,
          opacity,
          transform: [
            { translateY: topPosition },
            { perspective: 750 },
          ],
        },
        style.root,
      ]}
    >
      <Text
        style={[
          type === 'error'
            ? style.error
            : style.success,
          style.text,
        ]}
      >
        {message}
      </Text>
    </Animated.View>
  );
};

export default React.memo(Toast);
