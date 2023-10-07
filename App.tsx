/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Game from './Board';



const App = () => {

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
      />
      <Game/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
