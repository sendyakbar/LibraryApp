import React, {FC, useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';

import MyInput from '../components/MyInput';
import MyPicker from '../components/MyPicker';
import MyButton from '../components/MyButton';
import {formatDate, formatTime} from '../utils/helpers';

type RentFormProps = {};

const RentForm: FC<RentFormProps> = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<Date>(date);
  const [showDate, setShowDate] = useState<boolean>(false);
  const [showTime, setShowTime] = useState<boolean>(false);

  const showDatePicker = () => {
    setShowDate(true);
  };

  const showTimePicker = () => {
    setShowTime(true);
  };

  const onChangeName = (input: string): void => {
    setName(input);
  };

  const onChangeDate = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ): void => {
    const currentDate = selectedDate;
    setShowDate(false);
    setDate(currentDate || new Date());
  };

  const onChangeTime = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ): void => {
    const currentTime = selectedDate;
    setShowTime(false);
    setTime(currentTime || new Date());
  };

  const onPressSubmit = () => {
    let isValid: boolean = true;
    if (!name) {
      isValid = false;
      Alert.alert('Oops...', 'Name is required');
    }

    if (isValid) {
      Alert.alert('Success!', 'Schedule Submitted', [
        {
          text: 'OK',
          onPress: navigation.goBack,
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <MyInput
          label="Name"
          placeholder="John Doe"
          onChangeText={onChangeName}
        />
        <View style={styles.separator} />
        <MyPicker
          placeholder="10 December 2023"
          label="Date"
          onPress={showDatePicker}
          title={formatDate(date)}
        />
        <View style={styles.separator} />
        <MyPicker
          placeholder="14:00"
          label="Time"
          onPress={showTimePicker}
          title={formatTime(time)}
        />
      </View>
      <MyButton title="Submit" onPress={onPressSubmit} />
      {showDate ? (
        <DateTimePicker
          value={date}
          mode="date"
          onChange={onChangeDate}
          minimumDate={new Date()}
        />
      ) : null}
      {showTime ? (
        <DateTimePicker
          value={time}
          mode="time"
          is24Hour={true}
          onChange={onChangeTime}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formWrapper: {
    flex: 1,
  },
  separator: {
    height: 10,
  },
});

export default RentForm;
