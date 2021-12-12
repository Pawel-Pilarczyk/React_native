import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import {colors} from '@constants/index';
import {emailPattern} from '@constants/validators';
import {Typography, Input, Button} from '@components/index';
import {normalize} from '@utils/index';

export type TForgotPasswordInitialProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordInitial'
>;

type TFormFields = {
  email: string;
};

const ForgotPasswordInitial = ({navigation}: TForgotPasswordInitialProps) => {
  const initialAnimaton = useRef(new Animated.Value(0)).current;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<TFormFields>();

  const handleRecoverPassword = handleSubmit(({email}) => {
    navigation.navigate('ForgotPasswordConfirmed', {
      email,
    });
    return email;
  });

  useEffect(() => {
    Animated.timing(initialAnimaton, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000,
    }).start();
  }, [initialAnimaton]);

  return (
    <View style={styles.wrapper}>
      <Animated.View style={{opacity: initialAnimaton}}>
        <Typography
          color={colors.BLACK}
          size={24}
          type={'bold'}
          style={styles.header}>
          Don’t worry.
        </Typography>
      </Animated.View>

      <Typography color={colors.BLACK} size={24} type={'bold'}>
        Enter your email and we’ll send you a link to reset your password.
      </Typography>

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
            style={styles.input}
            error={errors.email?.message}
          />
        )}
        name="email"
      />
      <Button
        onPress={handleRecoverPassword}
        type="primary"
        textColor={colors.WHITE}
        style={styles.button}>
        Continue
      </Button>
    </View>
  );
};

export default ForgotPasswordInitial;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: normalize(16, 'width'),
    backgroundColor: colors.WHITE,
  },
  header: {
    marginTop: normalize(85, 'height'),
  },
  input: {
    marginTop: normalize(46, 'height'),
  },
  button: {
    marginTop: normalize(55, 'height'),
  },
});
