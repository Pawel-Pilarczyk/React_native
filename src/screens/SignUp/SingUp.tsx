import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import {normalize} from '@utils';
import {colors, validators} from '@constants';
import {
  Input,
  Button,
  Typography,
  Checkbox,
  ErrorMessage,
  BirthDatePicker,
  DropDown,
} from '@components/index';
import {googleIcon} from '@assets/images';

type TFormFields = {
  name: string;
  email: string;
  password: string;
  terms: boolean;
  gender: string;
  dateOfBirth: Date;
};

export type TSignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp = ({navigation}: TSignUpProps) => {
  const items = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ];

  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<TFormFields>();

  const navigateToLoginHandler = () => {
    navigation.navigate('Login');
  };

  const handleOnSubmit = handleSubmit(
    ({email, name, password, gender, dateOfBirth}) => {
      console.log(gender, email, name, password, dateOfBirth);
      return {email, name, password, dateOfBirth};
    },
  );
  const dateOfBirthPlaceholder = watch('dateOfBirth')
    ? watch('dateOfBirth').toLocaleDateString()
    : 'Select Date';
  return (
    <View style={styles.wrapper}>
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
              error={errors.name?.message}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Field Required'},
            pattern: {
              value: validators.emailPattern,
              message: 'Incorrect email pattern',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="email"
              type="text"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.email?.message}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Field Required'},
            minLength: {
              value: 6,
              message: 'Password to short - min 6 charaters',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="password"
              type="password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.password?.message}
            />
          )}
          name="password"
        />
      </View>
      <View style={styles.dropdownWrapper}>
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Field Required'},
          }}
          render={({field: {onChange, value}}) => (
            <DropDown
              items={items}
              onChange={onChange}
              value={value}
              placeholder="Gender"
              error={errors.gender?.message}
              style={styles.genderDropdown}
            />
          )}
          name="gender"
        />
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Field Required'},
          }}
          render={({field: {onChange, value = new Date()}}) => (
            <BirthDatePicker
              onChange={onChange}
              value={value}
              error={errors.dateOfBirth?.message}>
              {dateOfBirthPlaceholder}
            </BirthDatePicker>
          )}
          name="dateOfBirth"
        />
      </View>
      <View style={styles.termsWrapper}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <Checkbox
              style={{marginRight: normalize(14, 'width')}}
              onPress={() => onChange(!value)}
              value={value}
            />
          )}
          name="terms"
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
        {errors.terms && (
          <ErrorMessage>Accepting Terms and conditions required</ErrorMessage>
        )}
      </View>
      <View style={styles.buttonsWrapper}>
        <Button
          onPress={handleOnSubmit}
          textColor={colors.WHITE}
          type="primary">
          Sign up
        </Button>
        <Typography
          color={colors.GREY}
          size={14}
          type="bold"
          style={styles.buttonsText}>
          Or with
        </Typography>
        <Button
          onPress={() => {}}
          textColor={colors.BLACK}
          type="ghost"
          icon={googleIcon}>
          Sign up with Google
        </Button>
      </View>
      <View style={styles.loginLinkWrapper}>
        <Typography color={colors.GREY} size={16} type="regular">
          Already have an account?
        </Typography>
        <Typography
          onPress={navigateToLoginHandler}
          color={colors.VIOLET}
          size={16}
          type="regular"
          style={styles.linkStyle}>
          Login
        </Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    paddingHorizontal: normalize(16, 'width'),
    paddingBottom: normalize(15, 'height'),
  },
  inputsWrapper: {
    marginTop: normalize(56, 'height'),
    marginBottom: normalize(17, 'height'),
  },
  termsWrapper: {
    position: 'relative',
    marginTop: normalize(17, 'height'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(20, 'width'),
  },
  buttonsWrapper: {
    width: '100%',
    marginVertical: normalize(30, 'height'),
  },
  loginLinkWrapper: {
    flexDirection: 'row',
  },
  linkStyle: {
    textDecorationLine: 'underline',
    textDecorationColor: colors.VIOLET,
  },
  dropdownWrapper: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: normalize(15, 'height'),
  },
  genderDropdown: {
    marginRight: 20,
  },
  buttonsText: {
    textAlign: 'center',
    padding: 12,
  },
});

export default SignUp;
