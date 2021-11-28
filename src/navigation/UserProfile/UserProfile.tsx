import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '@constants/index';
import {Home, Posts} from '@screens/';

const Tab = createBottomTabNavigator();

const UserProfile = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Posts') {
            iconName = focused ? 'book' : 'book-outline';
          }

          // You can return any component that you like here!
          return (
            <Ionicons name={iconName as string} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: colors.VIOLET,
        tabBarInactiveTintColor: colors.GREY,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Posts" component={Posts} />
    </Tab.Navigator>
  );
};

export default UserProfile;
