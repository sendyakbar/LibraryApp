import React, {forwardRef} from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
  Text,
} from 'react-native';

import {color} from '../themes/colors';

type TextInputRef = TextInput;

interface MyInputProps extends TextInputProps {
  style?: ViewStyle;
  label: string;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: color.LIGHT_GREY,
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  input: {
    fontSize: 11,
    color: color.BLACK,
    padding: 0,
  },
  label: {
    fontSize: 10,
    color: color.BLACK,
  },
});

const MyInput = forwardRef<TextInputRef, MyInputProps>((props, ref) => {
  const {style, label, ...rest} = props;

  return (
    <>
      <Text style={styles.label}>{label}: </Text>
      <View style={[styles.container, style]}>
        <TextInput style={styles.input} ref={ref} {...rest} />
      </View>
    </>
  );
});

MyInput.defaultProps = {
  style: undefined,
};

export default MyInput;
