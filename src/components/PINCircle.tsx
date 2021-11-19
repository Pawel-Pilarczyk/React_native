import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '@constants/index';
import {normalize} from '@utils/index';

type TPINCircle = {
  active: boolean;
};

const PINCircle = ({active}: TPINCircle) => {
  return (
    <View
      style={[
        styles.circle,
        active ? styles.circleActive : styles.circleUnactive,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  circle: {
    width: normalize(32, 'width'),
    height: normalize(32, 'width'),
    borderRadius: normalize(16, 'width'),
  },
  circleActive: {
    backgroundColor: colors.WHITE,
  },
  circleUnactive: {
    borderColor: colors.VIOLET_LIGHT,
    borderWidth: normalize(5, 'width'),
    borderStyle: 'solid',
  },
});

export default PINCircle;
