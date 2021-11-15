import React from 'react';
import {ScrollView, View, Pressable, StyleSheet} from 'react-native';

import {normalize} from '@utils/index';
import * as colors from '@constants/colors';

import {Input, Button, Typography} from '@components/index';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
  Login: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const SignUp = ({navigation}: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={styles.inputsWrapper}>
        <Input placeholder="Name" type="text" style={styles.input} />
        <Input placeholder="Email" type="email" style={styles.input} />
        <Input placeholder="Password" type="password" style={styles.input} />
      </View>
      <View style={styles.termsWrapper}>
        <Typography
          color={colors.BLACK}
          size={14}
          type={'semiBold'}
          style={{flexShrink: 1}}>
          By signing up, you agree to the Terms of Service and Privacy Policy
        </Typography>
        {/* <Pressable>
          <Typography
            color={colors.VIOLET}
            size={14}
            type={'semiBold'}
            style={styles.linkStyle}>
            Terms of Service and Privacy Policy
          </Typography>
        </Pressable> */}
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
        <Pressable onPress={() => navigation.navigate('Login')}>
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
  input: {
    marginTop: normalize(24, 'height'),
  },
  termsWrapper: {
    marginTop: normalize(17, 'height'),
    flexDirection: 'row',
    textAlign: 'center',
  },
  buttonsWrapper: {
    width: '100%',
    marginVertical: normalize(27, 'height'),
  },
  loginLinkWrapper: {
    flexDirection: 'row',
  },
  linkStyle: {
    paddingLeft: 2,
    textDecorationLine: 'underline',
    textDecorationColor: colors.VIOLET,
    flexShrink: 1,
  },
});

export default SignUp;
