import React, {forwardRef, ReactNode} from 'react';
import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import {color} from '../themes/colors';

type ViewRef = View;

interface Props extends ViewProps {
  children?: ReactNode;
  style?: ViewStyle;
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    width: 48,
    backgroundColor: color.LIGHT_GREY,
    borderRadius: 2,
  },
});

const BookImage = forwardRef<ViewRef, Props>((props, ref) => {
  const {style, children, ...rest} = props;

  return (
    <View ref={ref} style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
});

BookImage.defaultProps = {
  children: undefined,
  style: undefined,
};

export default BookImage;
