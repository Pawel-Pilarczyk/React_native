import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigation.types';
import {Onboarding, SignUp, Login} from '@screens/index';

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
            headerTitle: 'Sign up',
          }}
        />
        <RootStack.Screen name="Login" component={Login} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
