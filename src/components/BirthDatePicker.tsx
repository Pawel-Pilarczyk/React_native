import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

import {normalize} from '@utils/index';
import {SCREEN_WIDTH, colors} from '@constants/index';
import {Typography, Button, ErrorMessage} from '@components/index';

type TBirthDatePickerProps = {
  children: string | JSX.Element;
  error?: string;
  value: Date;
  onChange: (date: Date) => void;
};

const BirthDatePicker = ({
  children,
  error,
  value,
  onChange,
}: TBirthDatePickerProps) => {
  const [openDate, setOpenDate] = useState(false);

  const handleConfirm = (date: Date) => {
    setOpenDate(false);
    onChange(date);
  };

  const handleCancel = () => {
    setOpenDate(false);
  };
  return (
    <View style={styles.dropdownContainer}>
      <Typography color={colors.BLACK} type={'bold'}>
        Date of Birth
      </Typography>
      <Button
        onPress={() => setOpenDate(true)}
        textColor={colors.BLACK}
        type="ghost"
        style={styles.dropdown}>
        {children}
      </Button>
      <DatePicker
        modal
        open={openDate}
        date={value}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        mode="date"
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </View>
  );
};

export default BirthDatePicker;

const styles = StyleSheet.create({
  dropdownContainer: {
    alignItems: 'center',
  },
  dropdown: {
    width: SCREEN_WIDTH / 3,
    height: normalize(56, 'height'),
  },
});
