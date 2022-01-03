import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '@constants';
import {normalize} from '@utils';

type TPINCircle = {
  active: boolean;
  isFirst: boolean;
};

const PINCircle = ({active, isFirst}: TPINCircle) => {
  return (
    <View
      style={[
        styles.circle,
        active ? styles.circleActive : styles.circleUnactive,
        !isFirst && styles.cirlceMargin,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  circle: {
    width: normalize(32, 'width'),
    height: normalize(32, 'width'),
    borderRadius: normalize(17, 'width'),
  },
  circleActive: {
    backgroundColor: colors.WHITE,
  },
  circleUnactive: {
    borderColor: colors.VIOLET_LIGHT,
    borderWidth: normalize(5, 'width'),
    borderStyle: 'solid',
  },
  cirlceMargin: {
    marginLeft: normalize(16, 'width'),
  },
});

export default React.memo(PINCircle);
