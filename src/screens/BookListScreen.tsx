import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainBottomTabParamList} from '../navigation/MainBottomTabNavigator';

type Props = NativeStackScreenProps<
  MainBottomTabParamList,
  'Economics' | 'Fictions' | 'Science' | 'Technology'
>;

const BookListScreen = ({route}: Props): JSX.Element => {
  const {name} = route.params;

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookListScreen;
