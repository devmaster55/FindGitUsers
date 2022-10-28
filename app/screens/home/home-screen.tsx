import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const goToList = () => {
    navigation.navigate('UsersList');
  };
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title={'Go to list'} onPress={goToList} />
    </View>
  );
};
