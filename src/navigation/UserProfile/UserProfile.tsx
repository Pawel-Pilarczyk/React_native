import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {normalize} from '@utils';
import {colors} from '@constants';
import {income, currencyExchange, expense} from '@assets/icons';
import {Home, Posts} from '@screens';

const Tab = createBottomTabNavigator();

const UserProfile = () => {
  const [buttonActive, setButtonActive] = useState(false);

  const handleToggleButtonActive = () => setButtonActive(value => !value);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Posts') {
            iconName = focused ? 'md-navigate-sharp' : 'md-navigate-outline';
          } else if (route.name === 'Budget') {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Add') {
            return (
              <>
                {buttonActive && (
                  <>
                    <TouchableOpacity
                      style={[styles.addIncomeButton, styles.navButton]}
                      onPress={handleToggleButtonActive}>
                      <Image source={income} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.addExpenseButton, styles.navButton]}
                      onPress={handleToggleButtonActive}>
                      <Image source={expense} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.addTransferButton, styles.navButton]}
                      onPress={handleToggleButtonActive}>
                      <Image source={currencyExchange} />
                    </TouchableOpacity>
                  </>
                )}
                <TouchableOpacity
                  style={[styles.addButton, styles.navButton]}
                  onPress={handleToggleButtonActive}>
                  <Ionicons
                    name="add-outline"
                    size={normalize(30, 'width')}
                    color={colors.WHITE}
                  />
                </TouchableOpacity>
              </>
            );
          }
          return (
            <Ionicons name={iconName as string} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: colors.VIOLET,
        tabBarInactiveTintColor: colors.GREY,
        tabBarShowLabel: false,
        tabBarStyle: styles.navigationWrapper,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Add" component={Posts} />
      <Tab.Screen name="Budget" component={Posts} />
      <Tab.Screen name="Profile" component={Posts} />
    </Tab.Navigator>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  navigationWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 10,
  },
  navButton: {
    position: 'absolute',
    borderRadius: normalize(40, 'height'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    top: normalize(-28, 'height'),
    width: normalize(56, 'width'),
    height: normalize(56, 'width'),
    backgroundColor: colors.VIOLET,
  },
  addIncomeButton: {
    top: normalize(-106, 'height'),
    left: normalize(-50, 'width'),
    width: normalize(56, 'width'),
    height: normalize(56, 'width'),
    backgroundColor: colors.GREEN,
  },
  addExpenseButton: {
    top: normalize(-106, 'height'),
    left: normalize(66, 'width'),
    width: normalize(56, 'width'),
    height: normalize(56, 'width'),
    backgroundColor: colors.RED,
  },
  addTransferButton: {
    top: normalize(-180, 'height'),
    width: normalize(56, 'width'),
    height: normalize(56, 'width'),
    backgroundColor: colors.BLUE,
  },
});
