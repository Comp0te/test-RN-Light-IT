import React from 'react';
import style from './style'

import { ListItem } from 'react-native-material-ui';
import FastImage from "react-native-fast-image";
import { staticEndpoint } from "../../utils/constants";

const SavedProductItem = ({title, img}) => {

  const imageUri = `${staticEndpoint}${img}`;

  const LeftElement = () => (
    <FastImage
      style={style.image}
      source={{
        uri: imageUri,
        priority: FastImage.priority.high,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );

  return (
    <ListItem
      leftElement={<LeftElement/>}
      centerElement={{
        primaryText: title,
      }}
      rightElement='chevron-right'
      divider={true}
    />
  );
};

export default React.memo(SavedProductItem);
