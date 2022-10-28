import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const UsersListScreen = () => {
  const navigation = useNavigation();
  const goToProfile = () => {
    navigation.navigate('UserProfile');
  };
  return (
    <View>
      <Text>Users List Screen</Text>
      <Button title={'Go to profile'} onPress={goToProfile} />
    </View>
  );
};
