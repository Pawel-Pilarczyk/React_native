import React from 'react';
import {StyleSheet} from 'react-native';
import {normalize} from '@utils/index';
import {colors} from '@constants/index';
import {Typography} from '@components/index';

type TErrorMessageProps = {
  children: string;
};

const ErrorMessage = ({children}: TErrorMessageProps) => (
  <Typography color={colors.RED} style={styles.error} size={14} type="semiBold">
    {children}
  </Typography>
);

const styles = StyleSheet.create({
  error: {
    position: 'absolute',
    left: normalize(16, 'width'),
    bottom: normalize(-20, 'height'),
  },
});

export default ErrorMessage;
