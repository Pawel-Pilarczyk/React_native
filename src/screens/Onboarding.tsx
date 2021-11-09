import React from 'react';
import {View} from 'react-native';

import {Typography, Button} from '../components/index';

export const Onboarding = () => {
  return (
    <View>
      <Typography type="Bold" size={32} color="black">
        Gain total control of your money
      </Typography>
      <Typography type="Medium" size={16} color="grey">
        Become your own money manager and make every cent count
      </Typography>
      <Button onPress={() => {}} size="large" type="primary">
        <Typography color="white" size={18} type={'Medium'}>
          Sign Up
        </Typography>
      </Button>
      <Button onPress={() => {}} size="large" type="secondary">
        <Typography color="violet" size={18} type={'Medium'}>
          Login
        </Typography>
      </Button>
      <Button onPress={() => {}} size="large" type="ghost">
        <Typography color="black" size={18} type={'Medium'}>
          Sign Up with Google
        </Typography>
      </Button>
    </View>
  );
};
