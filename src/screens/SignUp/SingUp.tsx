import React, {useState} from 'react';
import {ScrollView, View, Pressable, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import {TSignUpProps} from 'navigation/navigation.types';
import {normalize} from '@utils/index';
import * as colors from '@constants/colors';
import {emailPattern} from '@constants/validators';
import {Input, Button, Typography, Checkbox} from '@components/index';

type TFormFields = {
  name: string;
  email: string;
  password: string;
};

const SignUp = ({navigation}: TSignUpProps) => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const navigateToLoginHandler = () => {
    navigation.navigate('Login');
  };

  const handleCheckbox = (value: boolean) => {
    setCheckboxChecked(value);
  };

  const handleOnSubmit = ({email, name, password}: TFormFields) =>
    checkboxChecked && {email, name, password};

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={styles.inputsWrapper}>
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Field Required'},
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Name"
              type="text"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors?.name?.message}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Field Required'},
            pattern: {value: emailPattern, message: 'Incorrect email'},
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="email"
              type="text"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors?.email?.message}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Field Required'},
            minLength: {value: 6, message: 'Password to short'},
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="password"
              type="password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors?.password?.message}
            />
          )}
          name="password"
        />
      </View>
      <View style={styles.termsWrapper}>
        <Checkbox
          style={{marginRight: normalize(14, 'width')}}
          handleCheck={handleCheckbox}
        />
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
        <Button
          onPress={handleSubmit(handleOnSubmit)}
          textColor={colors.WHITE}
          type="primary">
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
