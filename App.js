import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Navigator from './src/screens/Navigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
