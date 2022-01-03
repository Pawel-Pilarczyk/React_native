import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {normalize} from '@utils';
import {colors} from '@constants';

type PlateProps = {
  icon: JSX.Element | any;
  active?: boolean;
};

const Plate = ({icon, active, ...rest}: PlateProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      style={[styles.wrapper, active && styles.wrapperActive]}
      {...rest}>
      <Image source={icon} style={styles.image} />
    </TouchableOpacity>
  );
};

export default React.memo(Plate);

const styles = StyleSheet.create({
  wrapper: {
    width: normalize(80, 'width'),
    height: normalize(40, 'height'),
    paddingVertical: normalize(5, 'height'),
    borderRadius: normalize(8, 'width'),
    backgroundColor: colors.VIOLET_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  wrapperActive: {
    borderColor: colors.VIOLET,
    borderWidth: 2,
  },
  image: {
    height: normalize(24, 'height'),
    resizeMode: 'center',
  },
});
