import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {color} from '../themes/colors';
import {RootNavigatorParamList} from '../navigation/RootNavigator';
import BookCard from '../groups/BookCard';
import RentForm from '../groups/RentForm';

type Props = NativeStackScreenProps<
  RootNavigatorParamList,
  'BookRentFormScreen'
>;

const BookRentFormScreen: FC<Props> = ({route}) => {
  const {book} = route.params;
  const authors = book.authors.map(d => d.name);

  return (
    <View style={styles.container}>
      <BookCard
        bookInfo={{
          title: book.title,
          authors,
          editionNumber: book.edition_count,
        }}
        onPress={() => {}}
      />
      <View style={styles.separator} />
      <RentForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.WHITE,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  separator: {
    height: 16,
  },
});

export default BookRentFormScreen;
