import React from 'react';
import {firstCharToUpperCase} from '../utils/stringConversions';

import {Text, TextStyle, StyleProp} from 'react-native';

type TFontType = 'regular' | 'medium' | 'bold'; //change to lowecase
type TSize = 16 | 18 | 24 | 32 | 64;

type TTypograpthyProps = {
  children: string | JSX.Element;
  type?: TFontType;
  size?: TSize;
  color?: string;
  capitalize?: boolean;
  style?: StyleProp<TextStyle> | StyleProp<TextStyle>[];
};

export const Typography = ({
  children,
  type,
  size = 16,
  color = 'white',
  capitalize,
  style = {},
}: TTypograpthyProps) => {
  const fontFamily = `Inter-${type ? firstCharToUpperCase(type) : 'Regular'}`;

  const styles = [
    {
      fontFamily: fontFamily,
      fontSize: size,
      color: color,
      marginBottom: 16,
    },
    style,
  ];
  return <Text style={styles}>{children}</Text>;
};
