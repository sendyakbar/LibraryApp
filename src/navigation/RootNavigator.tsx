import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainBottomTabNavigator from './MainBottomTabNavigator';

type RootNavigatorParamList = {
  MainBottomTabNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const RootNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="MainBottomTabNavigator"
        component={MainBottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
