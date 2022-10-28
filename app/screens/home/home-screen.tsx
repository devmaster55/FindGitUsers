import React from 'react';
import {View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {SearchUserItem} from '../../components';

const DUMMY_USERS = [
  {
    login: 'speer-technologies',
    id: 48194729,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjQ4MTk0NzI5',
    avatar_url: 'https://avatars.githubusercontent.com/u/48194729?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/speer-technologies',
    html_url: 'https://github.com/speer-technologies',
    followers_url: 'https://api.github.com/users/speer-technologies/followers',
    following_url:
      'https://api.github.com/users/speer-technologies/following{/other_user}',
    gists_url:
      'https://api.github.com/users/speer-technologies/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/speer-technologies/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/speer-technologies/subscriptions',
    organizations_url: 'https://api.github.com/users/speer-technologies/orgs',
    repos_url: 'https://api.github.com/users/speer-technologies/repos',
    events_url:
      'https://api.github.com/users/speer-technologies/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/speer-technologies/received_events',
    type: 'Organization',
    site_admin: false,
    name: 'Speer Technologies',
    company: null,
    blog: 'www.speer.io',
    location: 'Toronto, Ontario',
    email: 'create@speer.io',
    hireable: null,
    bio: 'Reframe the future.',
    twitter_username: null,
    public_repos: 7,
    public_gists: 0,
    followers: 2,
    following: 0,
    created_at: '2019-03-04T03:19:49Z',
    updated_at: '2021-07-23T07:25:50Z',
  },
  {
    login: 'speer-technologies',
    id: 48194721,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjQ4MTk0NzI5',
    avatar_url: 'https://avatars.githubusercontent.com/u/48194729?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/speer-technologies',
    html_url: 'https://github.com/speer-technologies',
    followers_url: 'https://api.github.com/users/speer-technologies/followers',
    following_url:
      'https://api.github.com/users/speer-technologies/following{/other_user}',
    gists_url:
      'https://api.github.com/users/speer-technologies/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/speer-technologies/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/speer-technologies/subscriptions',
    organizations_url: 'https://api.github.com/users/speer-technologies/orgs',
    repos_url: 'https://api.github.com/users/speer-technologies/repos',
    events_url:
      'https://api.github.com/users/speer-technologies/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/speer-technologies/received_events',
    type: 'Organization',
    site_admin: false,
    name: 'Speer Technologies',
    company: null,
    blog: 'www.speer.io',
    location: 'Toronto, Ontario',
    email: 'create@speer.io',
    hireable: null,
    bio: 'Reframe the future.',
    twitter_username: null,
    public_repos: 7,
    public_gists: 0,
    followers: 2,
    following: 0,
    created_at: '2019-03-04T03:19:49Z',
    updated_at: '2021-07-23T07:25:50Z',
  },
];
export const HomeScreen = () => {
  const navigation = useNavigation();

  const handleGoUsersList = (type: string, url: string) => {
    navigation.navigate('UsersList', {type, url});
  };
  const renderSearchUserItem = ({item}: any) => (
    <SearchUserItem item={item} onPressNumber={handleGoUsersList} />
  );

  return (
    <View>
      <FlatList
        data={DUMMY_USERS}
        renderItem={renderSearchUserItem}
        keyExtractor={(item, index) => String(item?.id ?? index)}
      />
    </View>
  );
};
