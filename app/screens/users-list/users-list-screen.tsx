import React from 'react';
import {View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {FollowUserItem} from '../../components';
const DUMMY_USERS = [
  {
    login: 'invacctvni',
    id: 78395974,
    node_id: 'MDQ6VXNlcjc4Mzk1OTc0',
    avatar_url: 'https://avatars.githubusercontent.com/u/78395974?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/invacctvni',
    html_url: 'https://github.com/invacctvni',
    followers_url: 'https://api.github.com/users/invacctvni/followers',
    following_url:
      'https://api.github.com/users/invacctvni/following{/other_user}',
    gists_url: 'https://api.github.com/users/invacctvni/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/invacctvni/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/invacctvni/subscriptions',
    organizations_url: 'https://api.github.com/users/invacctvni/orgs',
    repos_url: 'https://api.github.com/users/invacctvni/repos',
    events_url: 'https://api.github.com/users/invacctvni/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/invacctvni/received_events',
    type: 'User',
    site_admin: false,
  },
  {
    login: 'Shubham181920',
    id: 106335460,
    node_id: 'U_kgDOBlaM5A',
    avatar_url: 'https://avatars.githubusercontent.com/u/106335460?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Shubham181920',
    html_url: 'https://github.com/Shubham181920',
    followers_url: 'https://api.github.com/users/Shubham181920/followers',
    following_url:
      'https://api.github.com/users/Shubham181920/following{/other_user}',
    gists_url: 'https://api.github.com/users/Shubham181920/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/Shubham181920/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/Shubham181920/subscriptions',
    organizations_url: 'https://api.github.com/users/Shubham181920/orgs',
    repos_url: 'https://api.github.com/users/Shubham181920/repos',
    events_url: 'https://api.github.com/users/Shubham181920/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/Shubham181920/received_events',
    type: 'User',
    site_admin: false,
  },
];
export const UsersListScreen = () => {
  const navigation = useNavigation();
  const goToProfile = () => {
    navigation.navigate('UserProfile');
  };

  const handleGoUserProfile = (url: string) => {
    navigation.navigate('UserProfile', {url});
  };
  const renderFollowUserItem = ({item}: any) => (
    <FollowUserItem item={item} onPressItem={handleGoUserProfile} />
  );
  return (
    <View>
      <FlatList
        data={DUMMY_USERS}
        renderItem={renderFollowUserItem}
        keyExtractor={(item, index) => String(item?.id ?? index)}
      />
    </View>
  );
};
