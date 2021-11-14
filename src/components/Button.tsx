import React from 'react';
import * as colors from '../constants/colors';
import {normalize} from '../utils';

import {Pressable, StyleSheet, StyleProp, ViewStyle} from 'react-native';

import {Typography} from './index';

type TButtonProps = {
  type: 'primary' | 'secondary' | 'ghost';
  textColor: string;
  children: string | JSX.Element;
  onPress: () => void;
  style?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
};

export const Button = ({
  type,
  children,
  textColor,
  onPress,
  style = {},
}: TButtonProps) => {
  const buttonStyles = [
    styles.button,
    type === 'primary' && styles.buttonPrimary,
    type === 'secondary' && styles.buttonSecondary,
    type === 'ghost' && styles.buttonGhost,
    style,
  ];

  return (
    <Pressable onPress={onPress} style={buttonStyles}>
      <Typography color={textColor} size={18} type="semiBold">
        {children}
      </Typography>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: normalize(56, 'height'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(16, 'width'),
  },
  buttonPrimary: {
    backgroundColor: colors.VIOLET,
  },
  buttonSecondary: {
    backgroundColor: colors.VIOLET_LIGHT,
  },
  buttonGhost: {
    borderColor: colors.VIOLET_LIGHT,
    borderWidth: 1,
  },
});
