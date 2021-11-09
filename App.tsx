/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView >
      <StatusBar/>
      <Text style={styles.header}>Hello World!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize:32,
  }
});

export default App;
