import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import {useAppDispatch} from '@hooks/index';
import {logIn} from '../../store/app/app.slice';
import {colors, validators} from '@constants/index';
import {normalize} from '@utils/index';
import {Input, Button, Typography} from '@components/index';

export type TLoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

type TFormFields = {
  password: string;
  login: string;
};

const Login = ({navigation}: TLoginProps) => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<TFormFields>();

  const handleLogin = handleSubmit(({password, login}) => {
    dispatch(logIn());
    return {password, login};
  });

  const navigateToSignUpHandler = () => navigation.navigate('SignUp');
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputWrapper}>
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Field Required'},
            pattern: {
              value: validators.emailPattern,
              message: 'Wrong email format',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="email"
              type="text"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.login?.message}
            />
          )}
          name="login"
        />
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Field Required'},
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Password"
              type="password"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={errors.password?.message}
            />
          )}
          name="password"
        />
      </View>
      <Button
        onPress={handleLogin}
        textColor={colors.WHITE}
        type="primary"
        style={styles.button}>
        Login
      </Button>
      <Typography
        color={colors.VIOLET}
        size={18}
        type={'bold'}
        style={styles.forgotPass}>
        Forgot Password?
      </Typography>
      <Typography
        color={colors.GREY}
        size={16}
        type={'semiBold'}
        style={styles.paragraph}>
        Don’t have an account yet?
        <Typography
          color={colors.VIOLET}
          size={16}
          type={'semiBold'}
          style={styles.textUnderlinded}
          onPress={navigateToSignUpHandler}>
          Sign Up
        </Typography>
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: normalize(16, 'width'),
  },
  inputWrapper: {
    marginTop: normalize(56, 'height'),
  },
  button: {
    marginTop: normalize(40, 'height'),
  },
  forgotPass: {
    textAlign: 'center',
    marginTop: normalize(33, 'height'),
  },
  paragraph: {
    textAlign: 'center',
    marginTop: normalize(38, 'height'),
  },
  textUnderlinded: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: colors.VIOLET,
  },
});

export default Login;
