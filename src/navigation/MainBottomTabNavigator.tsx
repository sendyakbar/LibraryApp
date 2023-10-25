import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ImageProps} from 'react-native';

import BookListScreen from '../screens/BookListScreen';
import {icon} from '../themes/icons';
import TabBarIcon from '../components/TabBarIcon';

export type MainBottomTabParamList = {
  Technology: {name: string};
  Economics: {name: string};
  Fictions: {name: string};
  Science: {name: string};
};

type Subjects = {
  id: number;
  name: string;
  iconActive: ImageProps;
  iconInactive: ImageProps;
};

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

const subjects = [
  {
    id: 1,
    name: 'Technology',
    iconActive: icon.technology,
    iconInactive: icon.technologyInactive,
  },
  {
    id: 2,
    name: 'Economics',
    iconActive: icon.economics,
    iconInactive: icon.economicsInactive,
  },
  {
    id: 3,
    name: 'Fictions',
    iconActive: icon.fictions,
    iconInactive: icon.fictionsInactive,
  },
  {
    id: 4,
    name: 'Science',
    iconActive: icon.science,
    iconInactive: icon.scienceInactive,
  },
];

const MainBottomTabNavigator: FC = () => {
  return (
    <Tab.Navigator>
      {subjects.map((d: Subjects) => (
        <Tab.Screen
          key={d.id}
          // @ts-ignore
          name={d.name}
          component={BookListScreen}
          options={{
            title: d.name,
            headerShown: false,
            tabBarIcon: ({focused}) =>
              TabBarIcon({
                focused,
                source: {
                  iconActive: d.iconActive,
                  iconInactive: d.iconInactive,
                },
              }),
            tabBarLabelStyle: {
              fontSize: 11,
            },
          }}
          initialParams={{
            name: d.name,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainBottomTabNavigator;
