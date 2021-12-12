import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import {emailSent} from '@assets/images';
import {colors} from '@constants/index';
import {normalize} from '@utils/index';
import {Typography, Button} from '@components/index';

export type TForgotPasswordConfirmed = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordConfirmed'
>;

export default function ForgorPasswordConfirmed({
  navigation,
}: TForgotPasswordConfirmed) {
  const handleNavigate = () => navigation.navigate('Login');
  return (
    <View style={styles.wrapper}>
      <Image source={emailSent} style={styles.image} />
      <Typography
        color={colors.BLACK}
        size={24}
        type="bold"
        style={styles.header}>
        Your email is on the way
      </Typography>
      <Typography
        color={colors.BLACK}
        size={16}
        type="semiBold"
        style={styles.paragraph}>
        Check your email test@test.com and follow the instructions to reset your
        password
      </Typography>
      <Button
        onPress={handleNavigate}
        textColor={colors.WHITE}
        type="primary"
        style={styles.button}>
        Back to Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: normalize(12, 'width'),
  },
  image: {
    width: normalize(312, 'width'),
    height: normalize(312, 'width'),
    marginTop: normalize(76, 'height'),
    paddingHorizontal: normalize(12, 'width'),
  },
  header: {
    marginTop: normalize(16, 'height'),
    textAlign: 'center',
    paddingHorizontal: normalize(12, 'width'),
  },
  paragraph: {
    marginTop: normalize(24, 'height'),
    textAlign: 'center',
  },
  button: {
    marginTop: 'auto',
    marginBottom: normalize(50, 'height'),
  },
});
