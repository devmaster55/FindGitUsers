import React from 'react';
import {View, Text, Image} from 'react-native';

import {IndicatorItem} from '../../components';

const DUMMY_USER = {
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
  gists_url: 'https://api.github.com/users/speer-technologies/gists{/gist_id}',
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
};

import * as styles from './styles';

export const UserProfileScreen = () => {
  return (
    <View style={styles.CONTAINER}>
      <View style={styles.TOP_WRAPPER}>
        <Image source={{uri: DUMMY_USER.avatar_url}} style={styles.AVATAR} />
        <View style={styles.NAME_WRAPPER}>
          <Text style={styles.USER_NAME}>{DUMMY_USER.login}</Text>
          <Text style={styles.NAME}>{DUMMY_USER.name ?? ''}</Text>
          <Text style={styles.DESCRIPTION} ellipsizeMode="tail">
            {DUMMY_USER.bio ?? ''}
          </Text>
        </View>
      </View>
      <View style={styles.BOTTOME_WRAPPER}>
        <IndicatorItem label="Locatoin" value={DUMMY_USER.location ?? ''} />
        <IndicatorItem label="Email" value={DUMMY_USER.email ?? ''} />
        <IndicatorItem label="Website" value={DUMMY_USER.blog ?? ''} />
        <IndicatorItem label="Company" value={DUMMY_USER.company ?? ''} />
        <IndicatorItem
          label="Repositories"
          value={DUMMY_USER.public_repos ?? ''}
        />
      </View>
    </View>
  );
};
