import React from 'react';
import {ScrollView, View, Pressable, StyleSheet} from 'react-native';

import {TSignUpProps} from 'navigation/navigation.types';
import {normalize} from '@utils/index';
import * as colors from '@constants/colors';
import {Input, Button, Typography, Checkbox} from '@components/index';

const SignUp = ({navigation}: TSignUpProps) => {
  const navigateToLoginHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={styles.inputsWrapper}>
        <Input placeholder="Name" type="text" />
        <Input placeholder="Email" type="text" />
        <Input placeholder="Password" type="password" />
      </View>
      <View style={styles.termsWrapper}>
        <Checkbox style={{marginRight: normalize(14, 'width')}} />
        <Typography color={colors.BLACK} size={14} type={'semiBold'}>
          By signing up, you agree to the
          <Typography
            color={colors.VIOLET}
            size={14}
            type={'semiBold'}
            style={styles.linkStyle}>
            Terms of Service and Privacy Policy
          </Typography>
        </Typography>
      </View>
      <View style={styles.buttonsWrapper}>
        <Button onPress={() => {}} textColor={colors.WHITE} type="primary">
          Sign up
        </Button>
        <Typography
          color={colors.GREY}
          size={14}
          type="bold"
          style={{textAlign: 'center', padding: 12}}>
          Or with
        </Typography>
        <Button onPress={() => {}} textColor={colors.BLACK} type="ghost">
          Sign up with Google
        </Button>
      </View>
      <View style={styles.loginLinkWrapper}>
        <Typography color={colors.GREY} size={16} type="regular">
          Already have an account?
        </Typography>
        <Pressable onPress={navigateToLoginHandler}>
          <Typography
            color={colors.VIOLET}
            size={16}
            type="regular"
            style={styles.linkStyle}>
            Login
          </Typography>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    paddingHorizontal: normalize(16, 'width'),
  },
  inputsWrapper: {
    marginTop: normalize(56, 'height'),
    marginBottom: normalize(17, 'height'),
  },
  termsWrapper: {
    marginTop: normalize(17, 'height'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(20, 'width'),
  },
  buttonsWrapper: {
    width: '100%',
    marginVertical: normalize(27, 'height'),
  },
  loginLinkWrapper: {
    flexDirection: 'row',
  },
  linkStyle: {
    textDecorationLine: 'underline',
    textDecorationColor: colors.VIOLET,
    flexShrink: 1,
  },
});

export default SignUp;
