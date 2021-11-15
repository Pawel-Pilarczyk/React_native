import React from 'react';
import {firstCharToUpperCase, normalize} from '../utils/';

import {Text, TextStyle, StyleProp} from 'react-native';

type TFontType = 'regular' | 'medium' | 'semiBold' | 'bold';
type TSize = 14 | 16 | 18 | 24 | 32 | 64;

type TTypograpthyProps = {
  children:
    | string
    | JSX.Element
    | string[]
    | JSX.Element[]
    | [string, JSX.Element];
  type?: TFontType;
  size?: TSize;
  color?: string;
  toUpperCase?: boolean;
  style?: StyleProp<TextStyle> | StyleProp<TextStyle>[];
};

export const Typography = ({
  children,
  type,
  size = 16,
  color = 'white',
  toUpperCase,
  style = {},
}: TTypograpthyProps) => {
  const fontFamily = `Inter-${type ? firstCharToUpperCase(type) : 'Regular'}`;

  return (
    <Text
      style={[
        {
          fontFamily: fontFamily,
          fontSize: normalize(size, 'width'),
          color: color,
          textTransform: toUpperCase ? 'uppercase' : 'none',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
