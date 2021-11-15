import React, {useState} from 'react';
import {
  TextInput,
  View,
  Image,
  StyleSheet,
  Pressable,
  TextInputProps,
} from 'react-native';

import * as colors from '../constants/colors';
import {normalize} from '../utils';

import {eye, eyeClosed} from '../assets/images/index';

type ButtonType = 'password' | 'email' | 'text';

type TIntupTypes = {
  type: ButtonType;
  placeholder: string;
};

const Input = ({
  type,
  placeholder,
  ...defaultProps
}: TIntupTypes & TextInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const togglePassowordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={type === 'password' && passwordVisible}
        style={styles.input}
        {...defaultProps}
      />
      {type === 'password' && (
        <Pressable style={styles.icon} onPress={togglePassowordVisibility}>
          <Image source={passwordVisible ? eyeClosed : eye} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: normalize(56, 'height'),
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    borderColor: '#F1F1FA',
    borderRadius: normalize(16, 'height'),
    borderWidth: 1,
  },
  input: {
    width: '100%',
    paddingHorizontal: normalize(15, 'width'),
  },
  icon: {
    position: 'absolute',
    right: normalize(20, 'width'),
    width: normalize(22, 'width'),
    height: normalize(15, 'height'),
  },
});

export default Input;
