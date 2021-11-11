import React, {useState} from 'react';
import {View, ScrollView, Image, StyleSheet} from 'react-native';
import normalize, {SCREEN_WIDTH} from '../utils/normalize';

import * as colors from '../constants/colors';

import {Typography, Button} from '../components';
import {onboarding1, onboarding2, onboarding3} from '../assets/images/index';

export const Onboarding = () => {
  const [onboardingScreen, SetOnboardingScreen] = useState(1);

  const handleScroll = (e: any) => {
    if (
      e.nativeEvent.contentOffset.x >= 0 &&
      e.nativeEvent.contentOffset.x < normalize(290, 'width')
    )
      SetOnboardingScreen(1);
    if (
      e.nativeEvent.contentOffset.x >= normalize(290, 'width') &&
      e.nativeEvent.contentOffset.x < normalize(580, 'width')
    )
      SetOnboardingScreen(2);
    if (e.nativeEvent.contentOffset.x >= normalize(580, 'width'))
      SetOnboardingScreen(3);
  };

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          contentContainerStyle={styles.swappableScreensWrapper}>
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

          <View style={styles.indicatorWrapper}>
            <Image source={onboarding2} style={styles.image} />
            <Typography
              type="bold"
              size={32}
              color={colors.BLACK}
              style={styles.header}>
              Know where your money goes
            </Typography>
            <Typography
              type="medium"
              size={16}
              color={colors.GREY}
              style={styles.paragraph}>
              Track your transaction easily, with categories and financial
              report
            </Typography>
          </View>

          <View style={styles.indicatorWrapper}>
            <Image source={onboarding3} style={styles.image} />
            <Typography
              type="bold"
              size={32}
              color={colors.BLACK}
              style={styles.header}>
              Planning ahead
            </Typography>
            <Typography
              type="medium"
              size={16}
              color={colors.GREY}
              style={styles.paragraph}>
              Setup your budget for each category so you in control
            </Typography>
          </View>
        </ScrollView>
        <View style={styles.indicatorButtonsWrapper}>
          <View
            style={
              onboardingScreen === 1
                ? styles.indicatorActive
                : styles.indicatorInactive
            }></View>
          <View
            style={
              onboardingScreen === 2
                ? styles.indicatorActive
                : styles.indicatorInactive
            }></View>
          <View
            style={
              onboardingScreen === 3
                ? styles.indicatorActive
                : styles.indicatorInactive
            }></View>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swappableScreensWrapper: {
    justifyContent: 'space-around',
  },
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
    paddingHorizontal: normalize(20, 'width'),
    width: '100%',
  },
  button: {
    marginBottom: normalize(16, 'height'),
  },
});
