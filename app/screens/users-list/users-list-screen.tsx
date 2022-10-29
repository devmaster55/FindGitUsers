import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../App';

import {Api} from '../../services/api';
import * as Types from '../../services/api/api.types';

import {FollowUserItem} from '../../components';

import * as styles from './styles';

export const UsersListScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'UsersList'>) => {
  const {kind, username} = route.params;

  const [users, setUsers] = useState<Types.User[]>([]);

  useEffect(() => {
    navigation.setOptions({title: `${username}' ${kind}`});
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const api = new Api();
    api.setup();
    const results =
      kind === 'FOLLOWER'
        ? await api.getFollowers(username)
        : await api.getFollowing(username);

    if (results?.kind === 'ok') {
      setUsers(results.users);
    } else {
      setUsers([]);
    }
  };

  const handleGoUserProfile = (_username: string) => {
    navigation.navigate('UserProfile', {username: _username});
  };
  const renderFollowUserItem = ({item}: any) => (
    <FollowUserItem item={item} onPressItem={handleGoUserProfile} />
  );
  return (
    <View style={styles.CONTAINER}>
      <FlatList
        data={users}
        renderItem={renderFollowUserItem}
        keyExtractor={(item, index) => String(item?.id ?? index)}
      />
    </View>
  );
};
