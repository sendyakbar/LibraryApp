import React, {FC} from 'react';
import {StyleSheet, View, Text, ViewStyle} from 'react-native';

import {color} from '../themes/colors';

export type Props = {
  title: string;
  authors: string[];
  editionNumber: number;
  containerStyle?: ViewStyle;
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: color.BLACK,
  },
  authorsText: {
    fontSize: 12,
    fontWeight: '300',
    color: color.GREY,
    fontStyle: 'italic',
    marginTop: 2,
  },
  editionNumberText: {
    fontSize: 10,
    fontWeight: '300',
    color: color.BLUE,
    marginTop: 8,
  },
});

const BookInfo: FC<Props> = props => {
  const {title, authors, editionNumber, containerStyle} = props;
  const joinAuthors = authors.join(', ');

  return (
    <View style={containerStyle}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.authorsText}>{joinAuthors}</Text>
      <Text style={styles.editionNumberText}>edition {editionNumber}</Text>
    </View>
  );
};

BookInfo.defaultProps = {
  containerStyle: undefined,
};

export default BookInfo;
