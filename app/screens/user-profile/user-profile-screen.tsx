import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../App';

import {Api} from '../../services/api';
import * as Types from '../../services/api/api.types';

import {IndicatorItem} from '../../components';
import * as styles from './styles';

export const UserProfileScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'UserProfile'>) => {
  const [user, setUser] = useState<Types.User>();
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const api = new Api();
    api.setup();
    const result = await api.getUserDetail(route.params.username);
    if (result?.kind === 'ok') {
      setUser(result.user);
    } else {
      setUser(undefined);
    }
  };

  return (
    <View style={styles.CONTAINER}>
      <View style={styles.TOP_WRAPPER}>
        <View style={styles.AVATAR_NAME_WRAPPER}>
          <Image source={{uri: user?.avatar_url}} style={styles.AVATAR} />
          <View style={styles.NAME_WRAPPER}>
            <Text style={styles.NAME}>{user?.name ?? ''}</Text>
            <Text style={styles.USER_NAME}>{user?.login}</Text>
          </View>
        </View>
        <Text style={styles.DESCRIPTION} ellipsizeMode="tail">
          {user?.bio ?? ''}
        </Text>
      </View>
      <View style={styles.BOTTOME_WRAPPER}>
        <IndicatorItem label="Locatoin" value={user?.location ?? ''} />
        <IndicatorItem label="Email" value={user?.email ?? ''} />
        <IndicatorItem label="Website" value={user?.blog ?? ''} />
        <IndicatorItem label="Company" value={user?.company ?? ''} />
        <IndicatorItem label="Repositories" value={user?.public_repos ?? ''} />
      </View>
    </View>
  );
};
