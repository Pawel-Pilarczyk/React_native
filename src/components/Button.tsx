import React from 'react';
import {colorPicker} from '../utils/colorPicker';

import {Pressable, StyleSheet, StyleProp, ViewStyle} from 'react-native';

type TButtonProps = {
  type: 'primary' | 'secondary' | 'ghost';
  children: string | JSX.Element;
  onPress: () => void;
  style?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
};

export const Button = ({type, children, onPress, style = {}}: TButtonProps) => {
  const buttonStyles = [
    styles.button,
    type === 'primary' && styles.buttonPrimary,
    type === 'secondary' && styles.buttonSecondary,
    type === 'ghost' && styles.buttonGhost,
    style,
  ];

  return (
    <Pressable onPress={onPress} style={[buttonStyles]}>
      {children}
      {/* // put Typography inside */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  buttonPrimary: {
    backgroundColor: colorPicker.violet,
  },
  buttonSecondary: {
    backgroundColor: colorPicker.violetLight,
  },
  buttonGhost: {
    borderColor: colorPicker.violetLight,
    borderWidth: 1,
  },
});
