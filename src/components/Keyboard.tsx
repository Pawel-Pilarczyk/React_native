import React from 'react';
import {StyleSheet, View} from 'react-native';
import {normalize} from '@utils';
import {KeyboardKey} from '@components';

type TKeyboardProps = {
  handleAddDigit?: (value: string) => void;
  handleRemoveDigit?: () => void;
  handleContinue?: () => void;
};

const Keyboard = ({
  handleAddDigit,
  handleContinue,
  handleRemoveDigit,
}: TKeyboardProps) => {
  const rows = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['X', '0', 'continue'],
  ];

  const handlePressDigit = (char: string) => {
    if (char === 'continue' && handleContinue) return handleContinue();
    return isNaN(+char)
      ? handleRemoveDigit && handleRemoveDigit()
      : handleAddDigit && handleAddDigit(char);
  };

  return (
    <View style={styles.buttonsSectionWrapper}>
      {rows.map((row, id) => (
        <View style={styles.buttonsWrapper} key={id}>
          {row.map(item => (
            <KeyboardKey
              char={item}
              handlePress={handlePressDigit}
              key={item}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Keyboard;

const styles = StyleSheet.create({
  buttonsSectionWrapper: {
    marginTop: 'auto',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: normalize(90, 'height'),
    width: '100%',
  },
});
