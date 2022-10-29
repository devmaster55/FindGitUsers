/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {HomeScreen, UsersListScreen, UserProfileScreen} from './screens';

export type RootStackParamList = {
  Home: undefined;
  UsersList: {kind: string; username: string};
  UserProfile: {username: string};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Find Users'}}
          />
          <Stack.Screen
            name="UsersList"
            component={UsersListScreen}
            options={{title: 'Followers/Following'}}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfileScreen}
            options={{title: 'Profile'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
