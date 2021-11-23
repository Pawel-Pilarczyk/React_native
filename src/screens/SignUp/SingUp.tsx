import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import {normalize} from '@utils/index';
import * as colors from '@constants/colors';
import {SCREEN_WIDTH} from '@constants/index';
import {emailPattern} from '@constants/validators';
import {Input, Button, Typography, Checkbox} from '@components/index';
import {googleIcon} from '@assets/images';

type TFormFields = {
  name: string;
  email: string;
  password: string;
  terms: boolean;
  gender: string;
};

export type TSignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp = ({navigation}: TSignUpProps) => {
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ]);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<TFormFields>();

  const navigateToLoginHandler = () => {
    navigation.navigate('Login');
  };

  const handleOnSubmit = handleSubmit(({email, name, password, gender}) => {
    console.log(gender, email, name, password);
    return {email, name, password};
  });

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
            pattern: {value: emailPattern, message: 'Incorrect email pattern'},
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
            <DropDownPicker
              dropDownContainerStyle={{width: SCREEN_WIDTH / 3, zIndex: 99}}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={onChange}
              setItems={setItems}
              placeholder="Gender"
              style={styles.dropdownsGender}
            />
          )}
          name="gender"
        />

        <Button
          onPress={() => setOpenDate(true)}
          textColor={colors.BLACK}
          type="ghost"
          style={styles.datePicker}>
          {date ? date.toLocaleDateString() : 'Date of birth'}
        </Button>
      </View>
      <DatePicker
        modal
        open={openDate}
        date={date}
        onConfirm={date => {
          setOpenDate(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpenDate(false);
        }}
        mode="date"
      />

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
          <Typography color={colors.RED} style={styles.termsError} type="bold">
            Accepting Terms and conditions required
          </Typography>
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
          style={{textAlign: 'center', padding: 12}}>
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
    position: 'relative',
    marginTop: normalize(17, 'height'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(20, 'width'),
  },
  termsError: {
    position: 'absolute',
    left: normalize(16, 'width'),
    bottom: normalize(-20, 'height'),
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
  },
  dropdownWrapper: {
    width: '63%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dropdownsGender: {
    width: SCREEN_WIDTH / 3,
    height: normalize(56, 'height'),
  },
  datePicker: {
    width: SCREEN_WIDTH / 3,
    height: normalize(56, 'height'),
  },
});

export default SignUp;
