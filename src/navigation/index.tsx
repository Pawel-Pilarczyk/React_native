import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {useAppSelector} from '../hooks';
import UserProfile from './UserProfile/UserProfile';

import {
  Onboarding,
  SignUp,
  Login,
  PINsetup,
  ForgotPasswordInitial,
  ForgorPasswordConfirmed,
} from '@screens/index';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const isLoggedIn = useAppSelector(state => state.app.isLoggedIn);
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {!isLoggedIn ? (
          <>
            <RootStack.Screen
              name="Onboarding"
              component={ForgorPasswordConfirmed}
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
            <RootStack.Screen
              name="ForgotPasswordInitial"
              component={ForgotPasswordInitial}
              options={{headerTitleAlign: 'center', title: 'Forgot Password'}}
            />
          </>
        ) : (
          <RootStack.Screen
            name="UserProfile"
            component={UserProfile}
            options={{headerShown: false}}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
