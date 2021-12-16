import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';
import {colors} from '@constants';
import {normalize} from '@utils';

type TRadioProps = {
  style?: ViewStyle;
  value: string | number;
};

const Radio = ({
  style,
  value,
  ...rest
}: TRadioProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.wrapper} {...rest}>
      {value && <View style={styles.innerCircle} />}
    </TouchableOpacity>
  );
};

export default Radio;

const styles = StyleSheet.create({
  wrapper: {
    width: normalize(35, 'width'),
    height: normalize(35, 'width'),
    borderRadius: 19,
    borderColor: colors.VIOLET,
    borderWidth: normalize(5, 'width'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: normalize(24, 'width'),
    height: normalize(24, 'width'),
    borderRadius: 13,
    backgroundColor: colors.VIOLET,
  },
});
