import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {Onboarding, SignUp, Login, PINsetup} from '@screens/index';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerTitleAlign: 'center',
            title: 'Sign up',
          }}
        />
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitleAlign: 'center',
            title: 'Login',
          }}
        />
        <RootStack.Screen
          name="SetUpPIN"
          component={PINsetup}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
