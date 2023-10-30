import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainBottomTabNavigator from './MainBottomTabNavigator';
import BookRentFormScreen from '../screens/BookRentFormScreen';
import {Work} from '../service';

export type RootNavigatorParamList = {
  MainBottomTabNavigator: undefined;
  BookRentFormScreen: {
    book: Work;
  };
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const RootNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainBottomTabNavigator"
        component={MainBottomTabNavigator}
        options={{headerShown: false, title: ''}}
      />
      <Stack.Screen
        name="BookRentFormScreen"
        component={BookRentFormScreen}
        options={{title: 'Book Details'}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
