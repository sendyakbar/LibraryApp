import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BookListScreen from '../screens/BookListScreen';

export type MainBottomTabParamList = {
  Technology: {name: string};
  Economics: {name: string};
  Fictions: {name: string};
  Science: {name: string};
};

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

type Subjects = {
  id: number;
  name: string;
};

const subjects = [
  {id: 1, name: 'Technology'},
  {id: 2, name: 'Economics'},
  {id: 3, name: 'Fictions'},
  {id: 4, name: 'Science'},
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
