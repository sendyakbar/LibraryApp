import React, {forwardRef} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {color} from '../themes/colors';

type TouchableOpacityRef = TouchableOpacity;

interface MyButtonProps extends TouchableOpacityProps {
  style?: ViewStyle;
  title: string;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.BLUE,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: color.WHITE,
  },
});

const MyButton = forwardRef<TouchableOpacityRef, MyButtonProps>(
  (props, ref) => {
    const {style, title, ...rest} = props;

    return (
      <TouchableOpacity
        {...rest}
        activeOpacity={0.8}
        ref={ref}
        style={[styles.container, style]}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  },
);

MyButton.defaultProps = {
  style: undefined,
};

export default MyButton;
