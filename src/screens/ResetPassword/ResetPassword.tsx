import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Controller, useForm} from 'react-hook-form';
import {RootStackParamList} from 'navigation/types';
import {normalize} from '@utils';
import {colors} from '@constants';
import {Button, Input} from '@components';

export type TPostsProps = NativeStackScreenProps<
  RootStackParamList,
  'ResetPassword'
>;

type TFormFields = {
  password: string;
  confirmPassword: string;
};

const ResetPassword = ({navigation}: TPostsProps) => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm<TFormFields>();

  const handleChaningPassword = handleSubmit(({confirmPassword, password}) => {
    navigation.navigate('Onboarding');
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.password}>
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Field Required'},
            validate: value =>
              value === getValues('confirmPassword') ||
              'Passwords are not the same',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="New Password"
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
      <View>
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Field Required'},
            validate: value =>
              value === getValues('password') || 'Passwords are not the same',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Retype new Password"
              type="password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.confirmPassword?.message}
            />
          )}
          name="confirmPassword"
        />
      </View>
      <Button
        onPress={handleChaningPassword}
        textColor={colors.WHITE}
        type="primary">
        Continue
      </Button>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: normalize(16, 'width'),
  },
  password: {
    marginTop: normalize(120, 'height'),
  },
});
