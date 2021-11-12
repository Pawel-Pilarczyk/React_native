import React, {useState, useCallback, useMemo} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import normalize from '../../utils/normalize';
import {subscreensData} from './subscreensData';
import * as colors from '../../constants/colors';

import {Button} from '../../components';
import Subscreen from './subscreens/Subscreen';

export const Onboarding = () => {
  const [onboardingScreen, SetOnboardingScreen] = useState(1);

  const handleScroll = useCallback((e: any) => {
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
  }, []);

  const Subscreens = useMemo(
    () =>
      subscreensData.map((item, id) => (
        <Subscreen
          header={item.header}
          paragraph={item.paragraph}
          picture={item.picture}
          key={id}
        />
      )),
    [],
  );

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          contentContainerStyle={styles.swappableScreensWrapper}>
          {Subscreens}
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
