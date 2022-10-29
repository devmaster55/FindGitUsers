import React, {useEffect, useRef, useState} from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {SearchBar} from '@rneui/themed';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../App';

import {Api} from '../../services/api';
import * as Types from '../../services/api/api.types';

import {SearchUserItem} from '../../components';

import * as styles from './styles';
import {color} from '../../theme';

export const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Home'>) => {
  const searchOn = useRef(false);
  const globalSearch = useRef('');

  const [users, setUsers] = useState<Types.User[]>([]);
  const [searchKey, setSearchKey] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    setIsSearching(false);
    setNotFound(false);
    setUsers([]);
  }, []);

  const handleOnRefresh = () => {
    setIsRefreshing(true);
    searchUsers(globalSearch.current).finally(() => {
      setIsRefreshing(false);
    });
  };

  const searchUsers = async (key: string) => {
    setIsSearching(true);
    const api = new Api();
    api.setup();

    const results = await api.searchUsers(key);
    if (results?.kind === 'ok') {
      setUsers(results.users);
      if (results.users.length === 0) {
        setNotFound(true);
      }
    } else {
      setUsers([]);
    }
    setIsSearching(false);
    searchOn.current = false;
  };

  const updateSearch = (search: string) => {
    setSearchKey(search);
    globalSearch.current = search;
    if (searchOn.current) {
      return;
    }

    if (search !== '') {
      searchOn.current = true;
      setTimeout(() => {
        searchUsers(globalSearch.current);
      }, 1000);
    }
  };
  const handleOnClearSearchBar = () => {
    setUsers([]);
    setIsSearching(false);
    setNotFound(false);
  };

  const handleGoUsersList = (kind: string, username: string) => {
    navigation.navigate('UsersList', {kind, username});
  };
  const renderSearchUserItem = ({item}: any) => (
    <SearchUserItem item={item} onPressNumber={handleGoUsersList} />
  );

  return (
    <View style={styles.CONTAINER}>
      <SearchBar
        placeholder="Search users..."
        onChangeText={updateSearch}
        value={searchKey}
        onClear={handleOnClearSearchBar}
      />
      {notFound ? (
        <View style={styles.WARNING_WRAPPER}>
          <Text style={styles.NOT_FOUND}>{'Not found'}</Text>
        </View>
      ) : (
        <FlatList
          data={users}
          renderItem={renderSearchUserItem}
          keyExtractor={(item, index) => String(item?.id ?? index)}
          refreshing={isRefreshing}
          onRefresh={handleOnRefresh}
        />
      )}
      {/* {isSearching && (
          <View style={styles.SPINNER_WRAPPER}>
            <ActivityIndicator
              size={'large'}
              color={color.palette.deepPurple}
            />
          </View>
        )} */}
    </View>
  );
};
