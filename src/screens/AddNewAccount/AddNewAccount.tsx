import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import {colors} from '@constants';
import {normalize} from '@utils';
import {Typography, DropDown, Input, Button} from '@components';

export type TLoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
type TItems = {label: string; value: string};

const accountTypes: TItems[] = [
  {
    label: 'Bank',
    value: 'bank',
  },
  {
    label: 'Wallet',
    value: 'wallet',
  },
];

export type TFormFields = {
  name: string;
  accountType: string;
};

const AddNewAccount = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<TFormFields>();

  const handleAddAccount = handleSubmit(() => {
    return;
  });
  return (
    <View style={styles.wrapper}>
      <View style={styles.topSectionWrapper}>
        <Typography type="semiBold" size={18} color={colors.VIOLET_LIGHT}>
          Balance
        </Typography>
        <Typography type="semiBold" size={64}>
          $00.0
        </Typography>
      </View>
      <View style={styles.bottomSectionWrapper}>
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Field required'},
          }}
          render={({field: {onChange, value, onBlur}}) => (
            <Input
              type="text"
              placeholder="Name"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.name?.message}
            />
          )}
          name="name"
        />

        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Field Required'},
          }}
          render={({field: {onChange, value}}) => (
            <DropDown
              items={accountTypes}
              onChange={onChange}
              value={value}
              placeholder="Account type"
              style={styles.dropdown}
              error={errors.accountType?.message}
            />
          )}
          name="accountType"
        />
        <Button
          onPress={handleAddAccount}
          type="primary"
          textColor={colors.WHITE}>
          Continue
        </Button>
      </View>
    </View>
  );
};

export default AddNewAccount;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.VIOLET,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  topSectionWrapper: {
    paddingHorizontal: normalize(16, 'width'),
  },
  bottomSectionWrapper: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: normalize(16, 'width'),
    paddingTop: normalize(24, 'height'),
    paddingBottom: normalize(50, 'height'),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  dropdown: {
    marginBottom: normalize(40, 'height'),
  },
});
