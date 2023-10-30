import React, {FC, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';

import {MainBottomTabParamList} from '../navigation/MainBottomTabNavigator';
import {getBooksByGenre, Work} from '../service';
import {color} from '../themes/colors';
import BookCard from '../groups/BookCard';
import {UseFetch} from '../hooks/useFetch';
import {RootNavigatorParamList} from '../navigation/RootNavigator';

type Props = CompositeScreenProps<
  BottomTabScreenProps<
    MainBottomTabParamList,
    'Economics' | 'Fictions' | 'Science' | 'Technology'
  >,
  NativeStackScreenProps<RootNavigatorParamList>
>;

const BookListScreen: FC<Props> = ({route, navigation}) => {
  const {name} = route.params;
  // const navigation = useNavigation();
  const {loading, data} = UseFetch(getBooksByGenre(name.toLowerCase(), 0));
  const [bookList, setBookList] = useState<Work[]>([]);
  const [nextDataLoading, setNextDataLoading] = useState<boolean>(false);
  const [nextDataOffset, setNextDataOffset] = useState<number>(0);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    setBookList(data.works);
  }, [data]);

  const onPressBook = (book: Work) => () => {
    navigation.navigate('BookRentFormScreen', {book});
  };

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

  const onRefresh = async () => {
    try {
      setRefreshing(true);
      const newData = await getBooksByGenre(name.toLocaleLowerCase(), 0);
      setBookList(newData.works);
      setNextDataOffset(0);
    } catch (err) {
      // error
    } finally {
      setRefreshing(false);
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
        onPress={onPressBook(item)}
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
      onRefresh={onRefresh}
      refreshing={refreshing}
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
