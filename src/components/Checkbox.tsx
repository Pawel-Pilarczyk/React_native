import React from 'react';
import {
  Pressable,
  StyleSheet,
  ViewStyle,
  PressableProps,
  Image,
} from 'react-native';
import {normalize} from '@utils';
import {colors} from '@constants';

import {checkMark} from '@assets/images';

type TCheckboxProps = {
  style?: ViewStyle;
  value: boolean;
};

const Checkbox = ({style, value, ...rest}: TCheckboxProps & PressableProps) => {
  return (
    <Pressable
      style={[styles.wrapper, value ? styles.checked : {}, style]}
      {...rest}>
      {value && <Image source={checkMark} style={styles.checkMark} />}
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
