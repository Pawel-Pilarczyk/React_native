import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Animated,
} from 'react-native';
import {colors} from '@constants';
import {normalize} from '@utils';

const Switch = ({style}: TouchableOpacityProps) => {
  const [active, setActive] = useState(false);

  const slideAnimation = useRef(
    new Animated.Value(normalize(4, 'height')),
  ).current;

  const animationActivate = () => {
    Animated.timing(slideAnimation, {
      toValue: normalize(30, 'height'),
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const animationDisactivate = () => {
    Animated.timing(slideAnimation, {
      toValue: normalize(4, 'height'),
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const toggleActive = () => {
    setActive(active => !active);
    active ? animationDisactivate() : animationActivate();
  };
  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        {
          backgroundColor: active ? colors.VIOLET : colors.VIOLET_LIGHT,
        },
        style,
      ]}
      onPress={toggleActive}>
      <Animated.View style={[styles.circle, {left: slideAnimation}]} />
    </TouchableOpacity>
  );
};

export default Switch;

const styles = StyleSheet.create({
  wrapper: {
    height: normalize(24, 'height'),
    width: normalize(42, 'width'),
    borderRadius: 20,
    backgroundColor: colors.VIOLET_LIGHT,
  },
  circle: {
    width: normalize(19, 'height'),
    height: normalize(19, 'height'),
    borderRadius: normalize(10, 'height'),
    backgroundColor: colors.WHITE,
    position: 'absolute',
    top: normalize(4, 'height'),
  },
});
