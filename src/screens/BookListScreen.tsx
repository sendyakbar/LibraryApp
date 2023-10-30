import React, {FC, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {MainBottomTabParamList} from '../navigation/MainBottomTabNavigator';
import {getBooksByGenre, Work} from '../service';
import {color} from '../themes/colors';
import BookCard from '../groups/BookCard';
import {UseFetch} from '../hooks/useFetch';

type Props = NativeStackScreenProps<
  MainBottomTabParamList,
  'Economics' | 'Fictions' | 'Science' | 'Technology'
>;

const BookListScreen: FC<Props> = ({route}) => {
  const {name} = route.params;
  const {loading, data} = UseFetch(getBooksByGenre(name.toLowerCase(), 0));
  const [bookList, setBookList] = useState<Work[]>([]);
  const [nextDataLoading, setNextDataLoading] = useState<boolean>(false);
  const [nextDataOffset, setNextDataOffset] = useState<number>(0);

  useEffect(() => {
    setBookList(data.works);
  }, [data]);

  const onPressBook = () => () => {};

  const onEndReached = async () => {
    try {
      setNextDataLoading(true);
      const nextData = await getBooksByGenre(
        name.toLocaleLowerCase(),
        nextDataOffset + 4,
      );
      setBookList(prev => [...prev, ...nextData.works]);
      setNextDataOffset(prev => prev + 4);
    } catch (err) {
      // error
    } finally {
      setNextDataLoading(false);
    }
  };

  const renderItem = ({item}: {item: Work}) => {
    const authors = item.authors.map(d => d.name);
    return (
      <BookCard
        bookInfo={{
          title: item.title,
          authors,
          editionNumber: item.edition_count,
        }}
        onPress={onPressBook()}
      />
    );
  };

  const separator = () => <View style={styles.separator} />;

  const footer = () => {
    if (nextDataLoading) {
      return (
        <View style={styles.footerContainer}>
          <ActivityIndicator size={32} color={color.BLUE} />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      );
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={32} color={color.BLUE} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={bookList}
      renderItem={renderItem}
      keyExtractor={(_, i) => String(i)}
      ItemSeparatorComponent={separator}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.3}
      ListFooterComponent={footer}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: color.WHITE,
  },
  separator: {
    height: 4,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 11,
    color: color.GREY,
    fontStyle: 'italic',
  },
  footerContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookListScreen;
