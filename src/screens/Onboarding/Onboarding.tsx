import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import {slidesData} from './slidesData';
import {normalize} from '@utils';
import {colors} from '@constants';
import {Button, Slide} from '@components/index';

export type TOnboardingProps = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding'
>;

export const Onboarding = ({navigation}: TOnboardingProps) => {
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

  const navigateToSignUpHandler = () => navigation.navigate('SignUp');

  const navigateToLoginHandler = () => navigation.navigate('Login');

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
      <View style={styles.indicatorButtonsWrapper}>
        {slidesData.map(item => {
          return (
            <View
              style={
                activeSlide === item.id
                  ? styles.indicatorActive
                  : styles.indicatorInactive
              }
              key={item.id}
            />
          );
        })}
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          onPress={navigateToSignUpHandler}
          textColor={colors.WHITE}
          type="primary"
          style={styles.button}>
          Sign Up
        </Button>
        <Button
          onPress={navigateToLoginHandler}
          textColor={colors.VIOLET}
          type="secondary">
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
