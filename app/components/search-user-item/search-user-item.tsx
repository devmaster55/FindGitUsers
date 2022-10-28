import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';

import * as styles from './styles';

export interface SearchUserItemProps {
  // id: number;
  // login: string;
  // name: string;
  // avatar_url: string;
  // bio: string;
  // followers: number;
  // following: number;
  // followers_url: string;
  // following_url: string;
  item?: any;
  onPressNumber?: (type: string, url: string) => void;
}

export const SearchUserItem = (props: SearchUserItemProps) => {
  const {item, onPressNumber} = props;

  return (
    <View style={styles.ITEM_WRAPPER}>
      <View style={styles.TOP_WRAPPER}>
        <Image source={{uri: item.avatar_url}} style={styles.AVATAR} />
        <View style={styles.INFO_WRAPPER}>
          <View style={styles.NAME_WRAPPER}>
            <Text style={styles.USER_NAME}>{item.login} </Text>
            <Text style={styles.ORIGINAL_NAME}> {item.name ?? ''}</Text>
          </View>
          <Text style={styles.DESCRIPTION} ellipsizeMode="tail">
            {item.bio ?? ''}
          </Text>
        </View>
      </View>

      <View style={styles.BOTTOM_WRAPPER}>
        <TouchableOpacity
          style={styles.FOLLOWERS_BTN}
          onPress={() => {
            onPressNumber('FOLLOWER', item?.followers_url ?? '');
          }}>
          <Text style={styles.NUMBER}>
            {item.followers} <Text style={styles.LABEL}>followers</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.FOLLOWING_BTN}
          onPress={() => {
            onPressNumber('FOLLOWING', item.following_url ?? '');
          }}>
          <Text style={styles.NUMBER}>
            {item.following} <Text style={styles.LABEL}>following</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
