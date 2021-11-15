import {normalize} from '../utils';
import {SCREEN_WIDTH} from '../constants/dimensions';

import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Typography} from './';

import * as colors from '../constants/colors';

export interface SlideProps {
  id: number;
  header: string;
  paragraph: string;
  picture: any;
}

const Slide = ({header, paragraph, picture}: SlideProps): JSX.Element => (
  <View style={styles.wrapper}>
    <Image source={picture} style={styles.image} />
    <Typography
      type="bold"
      size={32}
      color={colors.BLACK}
      style={styles.header}>
      {header}
    </Typography>
    <Typography
      type="medium"
      size={16}
      color={colors.GREY}
      style={styles.paragraph}>
      {paragraph}
    </Typography>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    width: SCREEN_WIDTH,
    paddingHorizontal: normalize(20, 'width'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: normalize(312, 'height'),
    height: normalize(312, 'height'),
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: normalize(40, 'height'),
    marginTop: normalize(32, 'height'),
  },
  header: {
    marginBottom: normalize(17, 'height'),
    textAlign: 'center',
  },
  paragraph: {
    textAlign: 'center',
  },
});

export default Slide;
