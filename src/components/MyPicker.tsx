import React, {forwardRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacityProps,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

import {color} from '../themes/colors';

type TouchableOpacityRef = TouchableOpacity;

interface MyPickerProps extends TouchableOpacityProps {
  style?: ViewStyle;
  title?: string;
  label: string;
  placeholder: string;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: color.LIGHT_GREY,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  placeholder: {
    fontSize: 11,
    fontStyle: 'italic',
    color: color.GREY,
  },
  title: {
    fontSize: 11,
    color: color.BLACK,
  },
  label: {
    fontSize: 10,
    color: color.BLACK,
  },
});

const MyPicker = forwardRef<TouchableOpacityRef, MyPickerProps>(
  (props, ref) => {
    const {style, placeholder, title, label, ...rest} = props;

    return (
      <>
        <Text style={styles.label}>{label}: </Text>
        <TouchableOpacity
          {...rest}
          activeOpacity={0.8}
          ref={ref}
          style={[styles.container, style]}>
          {title ? (
            <Text style={styles.title}>{title}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
        </TouchableOpacity>
      </>
    );
  },
);

MyPicker.defaultProps = {
  style: undefined,
  title: undefined,
};

export default MyPicker;
