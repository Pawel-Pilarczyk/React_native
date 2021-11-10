import React from 'react';
import {firstCharToUpperCase} from '../utils/stringConversions';

import {Text, TextStyle, StyleProp} from 'react-native';

type TFontType = 'regular' | 'medium' | 'semiBold' | 'bold';
type TSize = 16 | 18 | 24 | 32 | 64;

type TTypograpthyProps = {
  children: string | JSX.Element;
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

  const textStyle = [
    {
      fontFamily: fontFamily,
      fontSize: size,
      color: color,
      textTransform: toUpperCase ? 'uppercase' : 'none',
    },
    style,
  ];
  return <Text style={textStyle as TextStyle}>{children}</Text>;
};
