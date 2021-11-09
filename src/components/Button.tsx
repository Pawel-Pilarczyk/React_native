import React from 'react';
import {colorPicker} from '../utils/colorPicker';

import {Pressable, StyleSheet, StyleProp, TextStyle} from 'react-native';

type TButtonProps = {
  type: 'primary' | 'secondary' | 'ghost';
  size: 'small' | 'large';
  children: string | JSX.Element;
  onPress: () => void;
  style?: StyleProp<TextStyle> | StyleProp<TextStyle>[];
};

export const Button = ({
  type,
  size,
  children,
  onPress,
  style = {},
}: TButtonProps) => {
  const buttonStyles = [
    {...styles.button, ...(style as Record<string, unknown>)},
    size === 'large' ? styles.buttonLarge : styles.buttonSmall,
    type === 'primary' && styles.buttonPrimary,
    type === 'secondary' && styles.buttonSecondary,
    type === 'ghost' && styles.buttonGhost,
  ];

  return (
    <Pressable onPress={onPress} style={[buttonStyles]}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    display: 'flex',
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
    backgroundColor: 'transparent',
    borderColor: colorPicker.violetLight,
    borderWidth: 1,
  },
  buttonLarge: {
    maxWidth: 343,
  },
  buttonSmall: {
    maxWidth: 164,
  },
});
