import React, {FC} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';

import BookInfo, {Props as BookInfoProps} from '../components/BookInfo';
import BookImage from '../components/BookImage';
import {color} from '../themes/colors';
import {shadow} from '../themes/shadows';

interface Props extends TouchableOpacityProps {
  style?: ViewStyle;
  onPress: () => void;
  bookInfo: BookInfoProps;
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: color.WHITE,
    borderRadius: 4,
    ...shadow.CARD,
    flexDirection: 'row',
  },
  infoRow: {
    paddingLeft: 12,
    flex: 1,
  },
});

const BookCard: FC<Props> = props => {
  const {style, onPress, bookInfo, ...rest} = props;

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.8}
      onPress={onPress}
      {...rest}>
      <BookImage />
      <BookInfo containerStyle={styles.infoRow} {...bookInfo} />
    </TouchableOpacity>
  );
};

BookCard.defaultProps = {
  style: undefined,
};

export default BookCard;
