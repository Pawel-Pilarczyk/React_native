import React from 'react';
import {View, ScrollView, Image, StyleSheet} from 'react-native';
import normalize from '../utils/normalize';

import * as colors from '../constants/colors';

import {Typography, Button} from '../components/';
import {onboarding1} from '../assets/images/index';

export const Onboarding = () => {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.indicatorWrapper}>
          <Image source={onboarding1} style={styles.image} />
          <Typography
            type="bold"
            size={32}
            color={colors.BLACK}
            style={styles.header}>
            Gain total control of your money
          </Typography>
          <Typography
            type="medium"
            size={16}
            color={colors.GREY}
            style={styles.paragraph}>
            Become your own money manager and make every cent count
          </Typography>
        </View>
        <View style={styles.indicatorButtonsWrapper}>
          <View style={styles.indicatorActive}></View>
          <View style={styles.indicatorInactive}></View>
          <View style={styles.indicatorInactive}></View>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => {}}
            textColor={colors.WHITE}
            type="primary"
            style={styles.button}>
            Sign Up
          </Button>
          <Button onPress={() => {}} textColor={colors.VIOLET} type="secondary">
            Login
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: normalize(20, 'width'),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorWrapper: {
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
  indicatorButtonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: normalize(37, 'height'),
  },
  indicatorInactive: {
    width: normalize(8, 'width'),
    height: normalize(8, 'width'),
    borderRadius: normalize(8, 'width'),
    marginHorizontal: normalize(8, 'width'),
    backgroundColor: colors.VIOLET_LIGHT,
  },
  indicatorActive: {
    width: normalize(16, 'width'),
    height: normalize(16, 'width'),
    borderRadius: normalize(8, 'width'),
    marginHorizontal: normalize(8, 'width'),
    backgroundColor: colors.VIOLET,
  },
  buttonWrapper: {
    width: '100%',
  },
  button: {
    marginBottom: normalize(16, 'height'),
  },
});
