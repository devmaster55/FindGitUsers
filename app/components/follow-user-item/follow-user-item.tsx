import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import * as styles from './styles';

export interface FollowUserItemProps {
  item?: any;
  onPressItem?: (url: string) => void;
}

export const FollowUserItem = (props: FollowUserItemProps) => {
  const {item, onPressItem} = props;
  return (
    <TouchableOpacity
      style={styles.ITEM_WRAPPER}
      onPress={() => onPressItem(item.url)}>
      <Image source={{uri: item.avatar_url}} style={styles.AVATAR} />
      <Text style={styles.USER_NAME}>{item.login ?? ''}</Text>
    </TouchableOpacity>
  );
};
