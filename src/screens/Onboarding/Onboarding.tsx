import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {slidesData} from './slidesData';
import {normalize} from '@utils/index';
import * as colors from '@constants/colors';

import {Button, Slide} from '@components/index';

export const Onboarding = ({navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = ({
    nativeEvent: {
      contentOffset: {x},
      contentSize: {width},
    },
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const interval = width / slidesData.length;
    const currentSlide = Math.round(x / interval);
    if (currentSlide !== activeSlide) {
      setActiveSlide(currentSlide);
    }
  };

  const indicatorDots = slidesData.map(item => {
    return (
      <View
        style={
          activeSlide === item.id
            ? styles.indicatorActive
            : styles.indicatorInactive
        }
        key={`dot${item.id}`}></View>
    );
  });
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}>
        {slidesData.map(item => (
          <Slide
            header={item.header}
            paragraph={item.paragraph}
            picture={item.picture}
            id={item.id}
            key={item.id}
          />
        ))}
      </ScrollView>
      <View style={styles.indicatorButtonsWrapper}>{indicatorDots}</View>
      <View style={styles.buttonWrapper}>
        <Button
          onPress={() => navigation.navigate('SingUp')}
          textColor={colors.WHITE}
          type="primary"
          style={styles.button}>
          Sign Up
        </Button>
        <Button onPress={() => {}} textColor={colors.VIOLET} type="secondary">
          Login
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: normalize(20, 'width'),
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
    marginTop: 'auto',
  },
  button: {
    marginBottom: normalize(16, 'height'),
  },
});
