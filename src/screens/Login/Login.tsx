import React from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';

export type TLogin = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({navigation}: TLogin) => {
  return <View></View>;
};

export default Login;
