import React from 'react';
import {Text, TextStyle, StyleProp, TextProps} from 'react-native';
import {firstCharToUpperCase, normalize} from '@utils';

type TFontType = 'regular' | 'medium' | 'semiBold' | 'bold';
type TSize = 14 | 16 | 18 | 24 | 32 | 36 | 48 | 64;

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
  ...defaultProps
}: TTypograpthyProps & TextProps) => {
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
      ]}
      {...defaultProps}>
      {children}
    </Text>
  );
};
