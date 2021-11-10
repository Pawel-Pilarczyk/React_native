import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import * as colors from '../constants/colors';

import {Typography, Button} from '../components/index';

export const Onboarding = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.indicatorWrapper}>
        <Image
          source={require('../../assets/images/onboarding_1.png')}
          style={styles.image}
        />
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
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 251,
    height: 251,
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 62,
  },
  header: {
    marginBottom: 17,
    textAlign: 'center',
  },
  paragraph: {
    marginBottom: 35,
    textAlign: 'center',
  },
  indicatorButtonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 37,
  },
  indicatorInactive: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: colors.VIOLET_LIGHT,
  },
  indicatorActive: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: colors.VIOLET,
  },
  buttonWrapper: {
    width: '100%',
  },
  button: {
    marginBottom: 16,
  },
});
