import React from 'react';
import {View, StyleSheet} from 'react-native';
import {normalize} from '@utils';
import {colors} from '@constants';
import {Button, Input} from '@components';

const ResetPassword = () => {
  return (
    <View style={styles.wrapper}>
      <Input placeholder="New Password" type="password" />
      <Input placeholder="Retype new Password" type="password" />
      <Button onPress={() => []} textColor={colors.WHITE} type="primary">
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
});
