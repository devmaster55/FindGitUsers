import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import * as styles from './styles';

export interface FollowUserItemProps {
  item?: any;
  onPressItem: (login: string) => void;
}

export const FollowUserItem = (props: FollowUserItemProps) => {
  const {item, onPressItem} = props;
  return (
    <TouchableOpacity
      style={styles.ITEM_WRAPPER}
      onPress={() => onPressItem(item.login)}>
      <Image source={{uri: item.avatar_url}} style={styles.AVATAR} />
      <Text style={styles.USER_NAME}>{item.login ?? ''}</Text>
    </TouchableOpacity>
  );
};
