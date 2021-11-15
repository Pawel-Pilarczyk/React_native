import {normalize} from '../utils';
import {SCREEN_WIDTH} from '../constants/dimensions';

import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Typography} from '.';

import * as colors from '../constants/colors';

export interface SlideProps {
  id: number;
  header: string;
  paragraph: string;
  picture: any;
}

const Slide = ({header, paragraph, picture}: SlideProps) => {
  return (
    <View style={styles.indicatorWrapper}>
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
};

const styles = StyleSheet.create({
  indicatorWrapper: {
    width: SCREEN_WIDTH,
    paddingHorizontal: normalize(20, 'width'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: normalize(251, 'height'),
    height: normalize(251, 'height'),
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: normalize(62, 'height'),
    marginTop: normalize(72, 'height'),
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
