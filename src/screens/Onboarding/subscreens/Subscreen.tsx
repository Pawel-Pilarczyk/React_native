import {normalize} from '../../../utils';
import {SCREEN_WIDTH} from '../../../utils/normalize';

import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Typography} from '../../../components';

import * as colors from '../../../constants/colors';

export interface SubscreenProps {
  header: string;
  paragraph: string;
  picture: any;
}

const Subscreen: React.FC<SubscreenProps> = ({header, paragraph, picture}) => {
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
    marginBottom: normalize(35, 'height'),
    textAlign: 'center',
  },
});

export default Subscreen;
