import React, {useState} from 'react';
import {
  TextInput,
  View,
  Image,
  StyleSheet,
  Pressable,
  TextInputProps,
  ViewStyle,
} from 'react-native';

import * as colors from '@constants/colors';
import {normalize} from '@utils/index';

import {eye, eyeClosed} from '@assets/images/index';
import {Typography} from './';

type ButtonType = 'password' | 'text';

type TIntupTypes = {
  type: ButtonType;
  placeholder: string;
  error?: string;
  style?: ViewStyle;
};

const Input = ({
  type,
  placeholder,
  error,
  style,
  ...defaultProps
}: TIntupTypes & TextInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const togglePassowordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.internalWrapper,
          error ? styles.internalWrapperError : {},
          style,
        ]}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={type === 'password' && passwordVisible}
          style={styles.input}
          {...defaultProps}
        />
        {type === 'password' && (
          <Pressable style={styles.icon} onPress={togglePassowordVisibility}>
            <Image source={passwordVisible ? eye : eyeClosed} />
          </Pressable>
        )}
      </View>
      {error && (
        <Typography
          type="bold"
          size={16}
          color={colors.RED}
          style={styles.errorText}>
          {error}
        </Typography>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: normalize(80, 'height'),
  },
  internalWrapper: {
    flexDirection: 'row',
    height: normalize(56, 'height'),
    borderColor: '#F1F1FA',
    borderRadius: normalize(16, 'height'),
    borderWidth: 1,
    fontSize: normalize(16, 'height'),
  },
  internalWrapperError: {
    borderColor: colors.RED,
  },
  input: {
    width: '100%',
    height: normalize(56, 'height'),
    paddingHorizontal: normalize(15, 'width'),
  },
  icon: {
    position: 'absolute',
    right: normalize(20, 'width'),
    top: '50%',
    transform: [{translateY: -normalize(15, 'height')}],
    width: normalize(22, 'width'),
    height: normalize(15, 'height'),
  },
  errorText: {
    textAlign: 'right',
    paddingRight: normalize(10, 'width'),
  },
});

export default Input;
