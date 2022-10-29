import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';

import * as styles from './styles';

export interface SearchUserItemProps {
  item: any;
  onPressNumber?: (kind: string, login: string) => void;
}

export const SearchUserItem = (props: SearchUserItemProps) => {
  const {item, onPressNumber} = props;

  return (
    <View style={styles.ITEM_WRAPPER}>
      <View style={styles.TOP_WRAPPER}>
        {item && (
          <Image source={{uri: item?.avatar_url}} style={styles.AVATAR} />
        )}
        <View style={styles.INFO_WRAPPER}>
          <View style={styles.NAME_WRAPPER}>
            <Text style={styles.USER_NAME}>{item?.login} </Text>
            <Text style={styles.ORIGINAL_NAME}> {item?.name ?? ''}</Text>
          </View>
          <Text
            style={styles.DESCRIPTION}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item?.bio ?? ''}
          </Text>
        </View>
      </View>

      <View style={styles.BOTTOM_WRAPPER}>
        <TouchableOpacity
          style={styles.FOLLOWERS_BTN}
          onPress={() => {
            item?.followers > 0
              ? onPressNumber?.('FOLLOWER', item?.login ?? '')
              : null;
          }}>
          <Text style={styles.NUMBER}>
            {item?.followers ?? 0} <Text style={styles.LABEL}>followers</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.FOLLOWING_BTN}
          onPress={() => {
            item?.following > 0
              ? onPressNumber?.('FOLLOWING', item?.login ?? '')
              : null;
          }}>
          <Text style={styles.NUMBER}>
            {item?.following ?? 0} <Text style={styles.LABEL}>following</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
