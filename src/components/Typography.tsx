import React from 'react';
import {capitalizeString} from '../utils/stringConversions';
import {colorPicker} from '../utils/colorPicker';

import {Text, TextStyle, StyleProp} from 'react-native';

type TFontType = 'Regular' | 'Medium' | 'Bold';
type TSize = 16 | 18 | 24 | 32 | 64;
type TColor = 'black' | 'violet' | 'white' | 'grey';

type TTypograpthyProps = {
  children: string | JSX.Element;
  type?: TFontType;
  size?: TSize;
  color?: TColor;
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
  const fontFamily = `Inter-${type ? type : 'Regular'}`;

  const innerContent =
    typeof children === 'string' && capitalize
      ? capitalizeString(children)
      : children;

  const textStyles = {
    fontFamily: fontFamily,
    fontSize: size,
    color: colorPicker[color],
    ...(style as Record<string, unknown>),
  };
  return <Text style={textStyles}>{innerContent}</Text>;
};
