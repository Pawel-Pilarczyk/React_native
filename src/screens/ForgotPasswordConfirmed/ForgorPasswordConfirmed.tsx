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
  route,
}: TForgotPasswordConfirmed) {
  const handleNavigate = () => navigation.navigate('Login');
  const {email} = route.params;
  const paragraphText = `Check your email ${email} and follow the instructions to reset your password`;
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
        {paragraphText}
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
    paddingHorizontal: normalize(24, 'width'),
  },
  image: {
    width: normalize(312, 'width'),
    height: normalize(312, 'width'),
    marginTop: normalize(76, 'height'),
  },
  header: {
    marginTop: normalize(16, 'height'),
    textAlign: 'center',
  },
  paragraph: {
    marginTop: normalize(24, 'height'),
    paddingHorizontal: normalize(36, 'width'),
    textAlign: 'center',
  },
  button: {
    marginTop: 'auto',
    marginBottom: normalize(50, 'height'),
  },
});
