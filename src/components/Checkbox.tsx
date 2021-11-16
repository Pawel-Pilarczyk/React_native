import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  ViewStyle,
  PressableProps,
  Image,
} from 'react-native';
import {normalize} from '@utils/index';
import * as colors from '@constants/colors';

import {checkMark} from '@assets/images';

type TCheckboxProps = {
  style?: ViewStyle;
  handleCheck?: () => void;
};

const Checkbox = ({style, handleCheck}: TCheckboxProps & PressableProps) => {
  const [checked, setChecked] = useState(true);

  const toggleCheckCheckbox = () => {
    setChecked(!checked);
    handleCheck && handleCheck();
  };
  return (
    <Pressable
      style={[styles.wrapper, checked ? styles.checked : {}, style]}
      onPress={toggleCheckCheckbox}>
      {checked && <Image source={checkMark} style={styles.checkMark} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: normalize(24, 'width'),
    height: normalize(24, 'width'),
    borderColor: colors.VIOLET,
    borderWidth: normalize(4, 'width'),
    borderStyle: 'solid',
    borderRadius: normalize(8, 'width'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: colors.VIOLET,
  },
  checkMark: {
    width: normalize(14, 'width'),
    height: normalize(14, 'width'),
  },
});

export default Checkbox;
