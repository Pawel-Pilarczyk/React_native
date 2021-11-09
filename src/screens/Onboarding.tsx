import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import * as colors from '../utils/colors';

import {Typography, Button} from '../components/index';

export const Onboarding = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require('../../assets/images/Ilustration.png')}
        style={styles.image}
      />
      <Typography type="bold" size={32} color="black" style={styles.header}>
        Gain total control of your money
      </Typography>
      <Typography type="medium" size={16} color="grey">
        Become your own money manager and make every cent count
      </Typography>
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
  buttonWrapper: {
    width: '100%',
  },
  button: {
    marginBottom: 16,
  },
});
