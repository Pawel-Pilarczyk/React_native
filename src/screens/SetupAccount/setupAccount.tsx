import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import {colors} from '@constants';
import {normalize} from '@utils';
import {Typography, Button} from '@components';

export type TSetupAccount = NativeStackScreenProps<
  RootStackParamList,
  'SetUpAccount'
>;

const SetupAccount = ({navigation}: TSetupAccount) => {
  const handleNavigate = () => navigation.navigate('Onboarding');
  return (
    <View style={styles.wrapper}>
      <Typography
        color={colors.BLACK}
        size={36}
        type="semiBold"
        style={styles.header}>
        Let’s setup your account!
      </Typography>
      <Typography
        color={colors.BLACK}
        size={18}
        type="semiBold"
        style={styles.paragraph}>
        Account can be your bank, credit card or your wallet.
      </Typography>
      <Button
        type="primary"
        onPress={handleNavigate}
        textColor={colors.WHITE}
        style={styles.button}>
        Let's go
      </Button>
    </View>
  );
};

export default SetupAccount;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: normalize(16, 'width'),
    backgroundColor: colors.WHITE,
  },
  header: {
    marginTop: normalize(67, 'height'),
  },
  paragraph: {
    marginTop: normalize(37, 'height'),
  },
  button: {
    marginBottom: normalize(50, 'height'),
    marginTop: 'auto',
  },
});
